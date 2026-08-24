import { homes, type Home } from "@/lib/data";

/** Words every hand-picked home answers to, so a query like "hand picked
 *  homes" or "farmstay" lists them all instead of coming back empty. */
const GENERIC_TERMS = [
  "hand picked",
  "handpicked",
  "home",
  "homes",
  "homestay",
  "farm",
  "farmstay",
  "stay",
  "stays",
  "agritourism",
  "agro tourism",
  "real host",
  "real hosts",
];

/** Strip accents and punctuation so "Krushipandhari Agritourism &
 *  Farmstay" is reachable from "krushipandhari farmstay". */
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

type Indexed = {
  home: Home;
  name: string;
  host: string;
  place: string;
  rest: string;
};

/** Built once at module load — the dataset is static. */
const index: Indexed[] = homes.map((home) => ({
  home,
  name: normalize(home.name),
  host: normalize(home.host),
  place: normalize(`${home.village} ${home.district} ${home.state}`),
  rest: normalize(
    [...home.tags, ...GENERIC_TERMS, ...(home.stayTypes ?? []).map((s) => s.name)].join(" "),
  ),
}));

/** Per-term score. 0 means the term is absent, so the home is dropped. */
function scoreTerm(entry: Indexed, term: string): number {
  if (entry.name.startsWith(term)) return 100;
  if (new RegExp(`\\b${term}`).test(entry.name)) return 80;
  if (entry.name.includes(term)) return 60;
  if (entry.host.includes(term)) return 45;
  if (entry.place.includes(term)) return 35;
  if (entry.rest.includes(term)) return 15;
  return 0;
}

export type SearchResult = { home: Home; score: number };

/**
 * Every whitespace-separated term must match somewhere (AND), so results
 * narrow with each keystroke rather than widening.
 */
export function searchHomes(query: string, limit = 6): SearchResult[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return [];

  const hits: SearchResult[] = [];
  for (const entry of index) {
    let score = 0;
    for (const term of terms) {
      const s = scoreTerm(entry, term);
      if (s === 0) {
        score = 0;
        break;
      }
      score += s;
    }
    if (score > 0) hits.push({ home: entry.home, score });
  }

  return hits
    .sort((a, b) => b.score - a.score || a.home.name.localeCompare(b.home.name))
    .slice(0, limit);
}
