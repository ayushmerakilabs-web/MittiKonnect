"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { popularFilters } from "@/lib/data";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1900&q=80",
    caption: "Kerala · Backwaters",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1900&q=80",
    caption: "Himachal · Apple country",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1900&q=80",
    caption: "Sikkim · Cardamom hills",
  },
];

const stats = [
  { value: "2,400+", label: "verified stays" },
  { value: "18", label: "states" },
  { value: "4.92★", label: "average rating" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.caption}
          aria-hidden={i !== index}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-soil-900/70 via-soil-900/45 to-soil-900/80" />

      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 lg:px-8 lg:pb-20 lg:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-soil-50 backdrop-blur">
          <MapPin className="size-3.5" />
          {slides[index].caption}
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Discover the <em className="text-turmeric-300">Soul</em> of Bharat
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-soil-100">
          Stay on real working farms. Eat what was picked this morning. Leave
          with a family, not a receipt.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/experiences"
            className="rounded-full bg-turmeric-500 px-6 py-3.5 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
          >
            Explore experiences
          </Link>
          <Link
            href="/host"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Become a Host
          </Link>
        </div>

        {/* Search bar */}
        <div className="mt-12 rounded-card border border-white/20 bg-white/95 p-2 shadow-2xl backdrop-blur lg:rounded-full">
          <form className="grid gap-1 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-center">
            <label className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-soil-50 lg:rounded-full">
              <MapPin className="size-4 shrink-0 text-leaf-600" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                  Where
                </span>
                <input
                  placeholder="Kerala, Himachal, anywhere…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-soil-400"
                />
              </span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-soil-50 lg:rounded-full lg:border-l lg:border-soil-200">
              <CalendarDays className="size-4 shrink-0 text-leaf-600" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                  When
                </span>
                <input
                  placeholder="Add dates"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-soil-400"
                />
              </span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-soil-50 lg:rounded-full lg:border-l lg:border-soil-200">
              <Users className="size-4 shrink-0 text-leaf-600" />
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                  Who
                </span>
                <input
                  placeholder="2 guests"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-soil-400"
                />
              </span>
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-leaf-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-700 lg:rounded-full"
            >
              <Search className="size-4" />
              Search
            </button>
          </form>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {popularFilters.map((f) => (
            <Link
              key={f}
              href={`/explore?filter=${encodeURIComponent(f)}`}
              className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              {f}
            </Link>
          ))}
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-semibold text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-soil-200">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
