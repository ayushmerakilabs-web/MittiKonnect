"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/Section";
import { formatDate, postCategories, posts } from "@/lib/data";

export default function BlogPage() {
  const [category, setCategory] = useState("All");

  const featured = posts.find((p) => p.featured) ?? posts[0];

  const list = useMemo(() => {
    const withoutFeatured = posts.filter((p) => p.slug !== featured.slug);
    return category === "All"
      ? withoutFeatured
      : withoutFeatured.filter((p) => p.category === category);
  }, [category, featured.slug]);

  return (
    <Section className="!pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
          The journal
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-soil-900 sm:text-5xl">
          Stories from rural India
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-soil-600">
          Field notes, kitchen tables and the occasional argument about what
          counts as a holiday.
        </p>
      </header>

      {/* Featured */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-10 grid overflow-hidden rounded-card border border-soil-200 bg-white lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[24rem]">
          <Image
            src={featured.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-soil-800 backdrop-blur">
            {featured.category}
          </span>
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-600">
            Latest
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-soil-900">
            {featured.title}
          </h2>
          <p className="mt-4 leading-relaxed text-soil-600">
            {featured.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src={featured.authorAvatar}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-medium text-soil-900">{featured.author}</p>
              <p className="text-soil-500">
                {formatDate(featured.date)} · {featured.readMins} min read
              </p>
            </div>
          </div>
          <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700">
            Read the story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      {/* Categories */}
      <div className="sticky top-24 z-30 -mx-5 mt-12 border-y border-soil-200 bg-soil-50/95 px-5 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {postCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c
                  ? "border-soil-900 bg-soil-900 text-soil-50"
                  : "border-soil-200 bg-white text-soil-700 hover:border-soil-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {list.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-soil-200">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-soil-800 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-soil-900 group-hover:text-leaf-700">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-soil-600">
                  {p.excerpt}
                </p>
              </Link>
              <div className="mt-4 flex items-center gap-3 text-xs text-soil-500">
                <Image
                  src={p.authorAvatar}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full object-cover"
                />
                <span className="font-medium text-soil-700">{p.author}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(p.date)}</span>
                <span className="ml-auto flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {p.readMins} min
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-dashed border-soil-300 p-14 text-center">
          <p className="font-display text-lg text-soil-800">
            Nothing filed under {category} yet.
          </p>
          <button
            type="button"
            onClick={() => setCategory("All")}
            className="mt-4 rounded-full bg-soil-900 px-5 py-2.5 text-sm font-medium text-soil-50"
          >
            Show everything
          </button>
        </div>
      )}

      {/* Newsletter */}
      <div className="mt-20 rounded-card bg-soil-900 px-8 py-14 text-center lg:px-14">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight text-white">
          Stories from rural India, once a month
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-soil-200">
          No offers, no countdown timers. One letter, when there is something
          worth sending.
        </p>
        <form className="mx-auto mt-8 flex max-w-md gap-2">
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            className="w-full min-w-0 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-soil-300 focus:border-turmeric-300"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-turmeric-500 px-6 py-3 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Section>
  );
}
