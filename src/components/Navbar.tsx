"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/experiences", label: "Experiences" },
  { href: "/host", label: "Host" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-soil-200 bg-soil-50/90 backdrop-blur-md"
          : "border-b border-transparent bg-soil-50"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center gap-6 px-5 lg:px-8">
        <Link href="/" aria-label="MittiKonnect — home" className="shrink-0">
          {/* The lockup already contains the wordmark and tagline, so no text
              beside it. Its white plate is multiplied away over the cream bg. */}
          <Logo height={68} priority />
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-leaf-100 text-leaf-700"
                    : "text-soil-700 hover:bg-soil-100"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Search stays"
            className="hidden items-center gap-2 rounded-full border border-soil-200 bg-white px-4 py-2.5 text-sm text-soil-500 shadow-sm transition-shadow hover:shadow md:flex"
          >
            <Search className="size-4" />
            Search stays
          </button>
          <Link
            href="/login"
            className="hidden rounded-full px-3.5 py-2 text-sm text-soil-700 hover:bg-soil-100 sm:block"
          >
            Log in
          </Link>
          <Link
            href="/host"
            className="hidden rounded-full bg-soil-900 px-4 py-2.5 text-sm font-medium text-soil-50 transition-colors hover:bg-soil-800 sm:block"
          >
            Become a Host
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-soil-200 bg-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-soil-200 bg-soil-50 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-sm text-soil-800 hover:bg-soil-100"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/host"
              className="mt-2 rounded-full bg-soil-900 px-4 py-3 text-center text-sm font-medium text-soil-50"
            >
              Become a Host
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
