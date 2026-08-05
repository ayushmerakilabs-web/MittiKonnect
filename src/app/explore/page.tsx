"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import StayCard from "@/components/StayCard";
import { Section } from "@/components/Section";
import { stayFilters, stays } from "@/lib/data";

export default function ExplorePage() {
  const [property, setProperty] = useState("All");
  const [styles, setStyles] = useState<string[]>([]);

  const toggleStyle = (s: string) =>
    setStyles((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const results = useMemo(
    () =>
      stays.filter((stay) => {
        const matchesProperty =
          property === "All" || stay.tags.includes(property);
        const matchesStyle =
          styles.length === 0 || styles.every((s) => stay.tags.includes(s));
        return matchesProperty && matchesStyle;
      }),
    [property, styles],
  );

  return (
    <Section className="!pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
          Farm stays
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-soil-900 sm:text-5xl">
          Explore
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-soil-600">
          Verified hosts, honest reviews, and a bed within walking distance of
          the field.
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-18 z-30 -mx-5 mt-8 border-b border-soil-200 bg-soil-50/95 px-5 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {stayFilters.Property.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setProperty(f)}
              aria-pressed={property === f}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                property === f
                  ? "border-soil-900 bg-soil-900 text-soil-50"
                  : "border-soil-200 bg-white text-soil-700 hover:border-soil-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="flex shrink-0 items-center gap-1.5 pr-1 text-xs font-medium text-soil-500">
            <SlidersHorizontal className="size-3.5" />
            Style
          </span>
          {stayFilters.Style.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => toggleStyle(f)}
              aria-pressed={styles.includes(f)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                styles.includes(f)
                  ? "border-leaf-600 bg-leaf-100 text-leaf-700"
                  : "border-soil-200 bg-white text-soil-600 hover:border-soil-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-soil-500">
        {results.length} {results.length === 1 ? "stay" : "stays"}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-dashed border-soil-300 p-14 text-center">
          <p className="font-display text-lg text-soil-800">
            No stays match that combination yet.
          </p>
          <button
            type="button"
            onClick={() => {
              setProperty("All");
              setStyles([]);
            }}
            className="mt-4 rounded-full bg-soil-900 px-5 py-2.5 text-sm font-medium text-soil-50"
          >
            Clear filters
          </button>
        </div>
      )}
    </Section>
  );
}
