import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "@/components/SocialIcons";
import Logo from "@/components/Logo";

const columns = [
  {
    title: "Explore",
    links: [
      ["Farm stays", "/explore"],
      ["Experiences", "/experiences"],
      ["Weekend escapes", "/explore?filter=Weekend"],
      ["Corporate retreats", "/explore?filter=Corporate"],
    ],
  },
  {
    title: "Hosting",
    links: [
      ["Become a host", "/host"],
      ["Host dashboard", "/host/dashboard"],
      ["Field executives", "/host/field-executives"],
      ["Trust & safety", "/trust"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
      ["Privacy · Terms", "/privacy"],
    ],
  },
] as const;

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-soil-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              {/* On this dark plate the roundel sits on its own light chip —
                  the full lockup's white background can't be blended away. */}
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-soil-50">
                <Logo variant="emblem" height={34} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold tracking-tight text-white">
                  MittiKonnect
                </span>
                <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-turmeric-500">
                  Discover · Stay · Connect
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-soil-300">
              India&apos;s premium agro-tourism marketplace. We connect urban
              travellers with rural Bharat — celebrating farmers, food and the
              soul of the land.
            </p>

            <ul className="mt-7 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-turmeric-500 hover:text-turmeric-500"
                  >
                    <s.icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-500">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[15px] text-white transition-colors hover:text-turmeric-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-card bg-white/[0.04] p-8 ring-1 ring-white/10 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                Stories from rural India, once a month.
              </h3>
              <p className="mt-2 text-[15px] text-soil-300">
                Farm-to-inbox recipes, festivals &amp; new farm stays. No spam
                ever.
              </p>
            </div>
            <form className="flex w-full shrink-0 gap-3 sm:w-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-soil-400 focus:border-turmeric-500 sm:w-72"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-turmeric-500 px-7 py-3.5 text-sm font-semibold text-soil-950 transition-colors hover:bg-turmeric-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-soil-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MittiKonnect Technologies Pvt. Ltd. ·
            Made with mitti in India.
          </p>
          <div className="flex gap-7">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/refunds" className="transition-colors hover:text-white">
              Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
