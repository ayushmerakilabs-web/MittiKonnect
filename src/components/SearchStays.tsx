"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Loader2, Search, X } from "lucide-react";
import { inr } from "@/lib/data";
import { searchHomes } from "@/lib/search";

/** Long enough to skip the intermediate states of a fast typist, short
 *  enough that the list still feels like it reacts to the keystroke. */
const DEBOUNCE_MS = 180;

function useDebounced<T>(value: T, ms: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);

  return debounced;
}

export default function SearchStays() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  /* The highlight is stored with the query it belongs to, so a narrowed
     list resets to its first row during render rather than in an effect. */
  const [highlight, setHighlight] = useState({ query: "", index: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounced(query, DEBOUNCE_MS);
  /* The dataset is bundled, so matching is synchronous. If this ever moves
     behind an API, fetch on `debouncedQuery` and keep the rest as-is. */
  const results = useMemo(() => searchHomes(debouncedQuery), [debouncedQuery]);

  const trimmed = query.trim();
  const settling = trimmed !== debouncedQuery.trim();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setHighlight({ query: "", index: 0 });
  }, []);

  /* Adjusting state during render (rather than in an effect) is the
     supported way to derive it from a change in another value. */
  if (highlight.query !== debouncedQuery) {
    setHighlight({ query: debouncedQuery, index: 0 });
  }
  const active = highlight.query === debouncedQuery ? highlight.index : 0;
  const setActive = (next: (i: number) => number) =>
    setHighlight((h) => ({ query: debouncedQuery, index: next(h.index) }));

  /* Cmd/Ctrl+K from anywhere, Escape to dismiss. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const go = (slug: string) => {
    close();
    router.push(`/homes/${slug}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length === 0) return;
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((i) => (i + step + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = results[active];
      if (hit) go(hit.home.slug);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search stays"
        className="hidden items-center gap-2 rounded-full border border-soil-200 bg-white px-4 py-2.5 text-sm text-soil-500 shadow-sm transition-shadow hover:shadow md:flex"
      >
        <Search className="size-4" />
        Search stays
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search stays"
        className="grid size-10 place-items-center rounded-full border border-soil-200 bg-white md:hidden"
      >
        <Search className="size-4 text-soil-600" />
      </button>

      {/* Portalled to <body>: once scrolled, the header applies
          `backdrop-blur`, which makes it the containing block for fixed
          descendants and would clip this overlay to the header's height. */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-60 flex justify-center px-4 pt-20 sm:pt-28">
            <button
              type="button"
              aria-label="Close search"
              onClick={close}
              className="absolute inset-0 cursor-default bg-soil-900/50 backdrop-blur-sm"
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Search stays"
              className="relative flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-card border border-soil-200 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-soil-200 px-4 py-3.5">
                <Search className="size-4 shrink-0 text-leaf-600" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Try “The Mango Woods”, “Ratnagiri” or “hand picked homes”"
                  autoComplete="off"
                  spellCheck={false}
                  role="combobox"
                  aria-expanded={results.length > 0}
                  aria-controls="search-stays-results"
                  aria-activedescendant={
                    results[active] ? `search-stays-${results[active].home.slug}` : undefined
                  }
                  className="w-full bg-transparent text-[15px] text-soil-900 outline-none placeholder:text-soil-400"
                />
                {settling && trimmed.length > 0 && (
                  <Loader2 className="size-4 shrink-0 animate-spin text-soil-400" />
                )}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close search"
                  className="grid size-7 shrink-0 place-items-center rounded-full text-soil-500 hover:bg-soil-100"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div
                id="search-stays-results"
                role="listbox"
                aria-label="Matching stays"
                className="min-h-0 flex-1 overflow-y-auto p-2"
              >
                {trimmed.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-soil-500">
                    Search our hand-picked homes by name, host, village or district.
                  </p>
                ) : results.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-soil-500">
                    No homes match “{trimmed}” yet.
                  </p>
                ) : (
                  results.map(({ home }, i) => (
                    <button
                      key={home.slug}
                      id={`search-stays-${home.slug}`}
                      type="button"
                      role="option"
                      aria-selected={i === active}
                      onMouseEnter={() => setActive(() => i)}
                      onClick={() => go(home.slug)}
                      className={`flex w-full items-center gap-3 rounded-2xl p-2 text-left transition-colors ${
                        i === active ? "bg-soil-100" : "hover:bg-soil-50"
                      }`}
                    >
                      <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-soil-200">
                        <Image
                          src={home.images[0]}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-[15px] font-semibold text-soil-900">
                          {home.name}
                        </span>
                        <span className="block truncate text-xs text-soil-600">
                          {home.village}, {home.district} · Hosted by {home.host}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-medium text-soil-700">
                        {home.price === null ? "On request" : `${inr(home.price)}/night`}
                      </span>
                    </button>
                  ))
                )}
              </div>

              <div className="hidden items-center justify-between border-t border-soil-200 px-4 py-2.5 text-[11px] text-soil-500 sm:flex">
                <span>↑↓ to move · Enter to open · Esc to close</span>
                <span>
                  {results.length > 0 &&
                    `${results.length} ${results.length === 1 ? "home" : "homes"}`}
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
