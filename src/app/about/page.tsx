import Image from "next/image";
import Link from "next/link";
import { HandHeart, Leaf, MapPinned, Users } from "lucide-react";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Our Story — MittiKonnect",
  description:
    "MittiKonnect wasn't born in a boardroom. It was felt across two decades of travelling India's farmlands.",
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const impact = [
  { icon: MapPinned, value: "18", label: "states on the map" },
  { icon: Users, value: "2,400+", label: "verified farm hosts" },
  { icon: HandHeart, value: "80%", label: "of every booking stays with the host" },
  { icon: Leaf, value: "20+ yrs", label: "of travelling rural India" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={img("photo-1500937386664-56d1dfef3854", 1900)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-soil-900/75 via-soil-900/60 to-soil-900/85" />

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
            About MittiKonnect
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed text-soil-100 sm:text-2xl">
            MittiKonnect wasn&apos;t born in a boardroom. It was felt during
            innumerable travels across the farmlands of rural India.
          </p>
        </div>
      </section>

      {/* Lead */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-display text-2xl leading-relaxed text-soil-900">
              For more than two decades, I have been travelling across
              India&apos;s villages, small towns and farming communities.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-soil-700">
              At the same time, I noticed that when the holidays come around,
              the hills and the mountains are overflowing with tourists. We city
              people end up witnessing the exact same things we wanted to escape
              — only now they are in the places we escaped to.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src={img("photo-1533900298318-6b8da08a523e")}
              alt="A village road in rural India"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* The question */}
      <div className="bg-leaf-900">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="font-display text-3xl leading-snug text-soil-50 sm:text-4xl">
            Does it mean that there aren&apos;t places in India for urban people
            to visit?
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-turmeric-300">
            We didn&apos;t think so
          </p>
        </div>
      </div>

      {/* Urban India forgot Rural */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:order-last">
            <Image
              src={img("photo-1500382017468-9049fed747ef")}
              alt="Farmland at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
              What we found
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-soil-900 sm:text-4xl">
              Urban India forgot Rural
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-soil-700">
              Those journeys revealed something that many urban Indians have
              forgotten — that the country&apos;s greatest luxury isn&apos;t
              found in famous tourist spots and exotic resorts, but in its
              farms, its people, its traditions and its simple way of life.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-soil-700">
              The name MittiKonnect was spontaneous. It just rhymed, the day it
              came up in conversation with a friend.
            </p>
          </div>
        </div>
      </Section>

      {/* Helping rural communities */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src={img("photo-1465146344425-f00d5f5c8f07")}
              alt="A field in bloom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
              What we do
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-soil-900 sm:text-4xl">
              Helping rural communities
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-soil-700">
              Today, MittiKonnect exists to connect people with the land that
              feeds them — through authentic farm stays, meaningful
              conversations with farming families, fresh local food, open skies
              and experiences that leave lasting memories.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-soil-700">
              At the same time, we are contributing to the rural economy,
              helping people support their livelihoods.
            </p>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <div className="rounded-card bg-soil-100 p-8 lg:p-14">
          <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((s) => (
              <div key={s.label}>
                <span className="grid size-11 place-items-center rounded-2xl bg-white text-leaf-600 shadow-sm">
                  <s.icon className="size-5" />
                </span>
                <dt className="mt-4 font-display text-3xl font-semibold text-soil-900">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-soil-600">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-card bg-soil-900 px-8 py-14 text-center lg:px-14">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Come see what the city forgot
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-soil-200">
            Two thousand four hundred farms, eighteen states, and a host waiting
            at every gate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/explore"
              className="rounded-full bg-turmeric-500 px-6 py-3.5 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
            >
              Explore farm stays
            </Link>
            <Link
              href="/host"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
