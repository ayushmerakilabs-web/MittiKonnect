import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ChefHat,
  Compass,
  Drama,
  HandHeart,
  Leaf,
  ShieldCheck,
  Sprout,
  Tractor,
} from "lucide-react";
import Hero from "@/components/Hero";
import StayCard from "@/components/StayCard";
import HomeCard from "@/components/HomeCard";
import ExperienceCard from "@/components/ExperienceCard";
import { Section, SectionHeader } from "@/components/Section";
import {
  destinations,
  experiences,
  homes,
  stays,
  testimonials,
} from "@/lib/data";

const trending = [
  {
    icon: Tractor,
    title: "Farming Experiences",
    copy: "Sow, harvest, milk, thresh — with the people who do it every day.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: ChefHat,
    title: "Food & Kitchen Trails",
    copy: "Clay stoves, banana leaves, and recipes older than the road outside.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Drama,
    title: "Culture & Festivals",
    copy: "Harvest drums, village fairs, and nights that run past midnight.",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  { icon: Compass, title: "Discover", copy: "Filter by crop, season, terrain or mood." },
  { icon: BadgeCheck, title: "Book", copy: "Instant confirmation, no hidden charges." },
  { icon: Sprout, title: "Experience", copy: "Live the farm day, not a staged version." },
  { icon: HandHeart, title: "Support Bharat", copy: "Your money stays in the village." },
];

const values = [
  { icon: BadgeCheck, title: "Verified Farmers", copy: "Every host visited in person by a field executive." },
  { icon: Leaf, title: "Organic & Local", copy: "Meals from the same soil you're sleeping on." },
  { icon: ShieldCheck, title: "Secure Payments", copy: "Protected bookings, transparent refunds." },
  { icon: HandHeart, title: "Community First", copy: "80% of every booking stays with the host." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeader
          eyebrow="Popular destinations"
          title="From Himalayan orchards to Kerala backwaters"
          cta={{ label: "Browse all", href: "/explore" }}
        />
        {/* One row. It scrolls on small screens and fits exactly on large. */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-1 no-scrollbar lg:mx-0 lg:px-0">
          {destinations.map((d) => (
            <Link
              key={d.state}
              href={`/explore?state=${encodeURIComponent(d.state)}`}
              className="group relative aspect-[3/4] w-52 shrink-0 snap-start overflow-hidden rounded-card sm:w-56 lg:w-auto lg:flex-1 lg:shrink"
            >
              <Image
                src={d.image}
                alt={d.state}
                fill
                sizes="(max-width: 1024px) 14rem, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soil-900/85 via-soil-900/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-turmeric-300">
                  {d.count} stays
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-white">
                  {d.state}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Stay with a family"
          title="Hand-picked homes with real hosts"
          subtitle="Whole houses on working land, visited by our field team and hosted by the people who farm it."
        />
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {homes.map((h) => (
            <HomeCard key={h.slug} home={h} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Handpicked"
          title="Featured farm stays"
          subtitle="Six places our field team keeps going back to."
          cta={{ label: "See all stays", href: "/explore" }}
        />
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stays.slice(0, 6).map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      </Section>

      <div className="bg-leaf-900 text-soil-50">
        <Section>
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
              Trending
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Experiences worth the drive
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trending.map((t) => (
              <Link
                key={t.title}
                href="/experiences"
                className="group relative overflow-hidden rounded-card"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-900 via-leaf-900/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <t.icon className="size-6 text-turmeric-300" />
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-soil-200">{t.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeader eyebrow="Simple" title="How it works" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-sm font-semibold text-soil-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-soil-900">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soil-600">
                {s.copy}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="rounded-card bg-soil-100 p-8 lg:p-14">
          <SectionHeader
            eyebrow="Why us"
            title="Why MittiKonnect"
            subtitle="Agro-tourism only works if the farmer wins first."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <span className="grid size-11 place-items-center rounded-2xl bg-white text-leaf-600 shadow-sm">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-soil-900">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soil-600">
                  {v.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Experiences"
          title="Book a day, not a package"
          subtitle="Short, honest, hosted by the family."
          cta={{ label: "All experiences", href: "/experiences" }}
        />
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 3).map((e) => (
            <ExperienceCard key={e.slug} exp={e} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Success stories" title="What people carry home" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-soil-200 bg-white p-7"
            >
              <blockquote className="font-display text-lg leading-relaxed text-soil-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold text-soil-900">
                    {t.name}
                  </span>
                  <span className="block text-xs text-soil-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 overflow-hidden rounded-card bg-soil-900 lg:grid-cols-2">
          <div className="p-8 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
              For farmers &amp; hosts
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your land already has the story. We bring the guests.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-soil-200">
              Hosts on MittiKonnect earn an average of{" "}
              <strong className="text-turmeric-300">₹42,000 / month</strong>{" "}
              without leaving the farm. Listing is free, and a field executive
              helps you set it up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/host"
                className="rounded-full bg-turmeric-500 px-6 py-3.5 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
              >
                Start hosting
              </Link>
              <Link
                href="/impact"
                className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read our impact report
              </Link>
            </div>
          </div>
          <div className="relative h-64 lg:h-full lg:min-h-[26rem]">
            <Image
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
              alt="A host on their farm"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
