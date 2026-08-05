import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  HandCoins,
  Headphones,
  IndianRupee,
  ShieldCheck,
  Sprout,
  UserCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import EarningsCalculator from "@/components/EarningsCalculator";

export const metadata = {
  title: "Become a Host — MittiKonnect",
  description:
    "List your farm free, keep 80% of every booking, and let a field executive help you set it up.",
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const steps = [
  {
    icon: Sprout,
    title: "Tell us about your land",
    copy: "Ten minutes, a phone, and no paperwork. Rooms, meals, what grows there.",
  },
  {
    icon: UserCheck,
    title: "A field executive visits",
    copy: "Someone from your district walks the property with you and helps you price it.",
  },
  {
    icon: Camera,
    title: "We photograph it free",
    copy: "Good photographs are the single biggest lever on bookings. We cover the cost.",
  },
  {
    icon: HandCoins,
    title: "Go live and get paid",
    copy: "Your listing opens to travellers. Payouts land within 48 hours of checkout.",
  },
];

const benefits = [
  {
    icon: IndianRupee,
    title: "You keep 80%",
    copy: "The largest host share in Indian agro-tourism. No listing fee, ever.",
  },
  {
    icon: ShieldCheck,
    title: "You choose who stays",
    copy: "Every request comes with a verified profile. Decline without penalty.",
  },
  {
    icon: BadgeCheck,
    title: "Damage cover included",
    copy: "Up to ₹2 lakh per booking, handled by us rather than argued with guests.",
  },
  {
    icon: Headphones,
    title: "Support in your language",
    copy: "Phone support in eleven languages, from people who have visited farms.",
  },
];

const requirements = [
  "Land you farm, or a home on farming land",
  "At least one room a guest can sleep in",
  "A clean bathroom with running hot water",
  "Someone at home to receive guests",
  "Willingness to eat one meal with them",
];

const stories = [
  {
    quote:
      "The land fed us for forty years. Now it also pays for my daughter's college.",
    name: "Harjeet Singh",
    place: "Kapurthala, Punjab",
    stat: "₹48,000 a month",
    image: img("photo-1507003211169-0a1dd7228f2d", 200),
  },
  {
    quote:
      "I was sure nobody would drive four hours to watch us work. Ninety families did last year.",
    name: "Leela Mathew",
    place: "Kottayam, Kerala",
    stat: "4.97 rating",
    image: img("photo-1544005313-94ddf0286df2", 200),
  },
  {
    quote:
      "My son moved back from Pune. That is the part I did not expect from a website.",
    name: "Prakash Bisht",
    place: "Nainital, Uttarakhand",
    stat: "Hosting since 2021",
    image: img("photo-1500648767791-00dcc994a43e", 200),
  },
];

const faqs = [
  {
    q: "Does it cost anything to list?",
    a: "No. Listing, the field visit and the photography are free. We only earn when you get a booking, and even then you keep 80%.",
  },
  {
    q: "Do I have to host every weekend?",
    a: "No. You set your own calendar and can block any dates you need. Many hosts open only the months when the farm is quiet.",
  },
  {
    q: "What if I do not speak English?",
    a: "That is fine and fairly common. Your listing is written with you, guests are briefed before arrival, and support is available in eleven languages.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are released within 48 hours of checkout, directly to your bank account. There is no minimum balance to withdraw.",
  },
  {
    q: "What if a guest damages something?",
    a: "Report it within 72 hours with photographs. Cover of up to ₹2 lakh per booking applies, and we handle the claim rather than leaving you to argue with the guest.",
  },
  {
    q: "Do I need to build rooms or a pool first?",
    a: "Almost never. Guests are comparing your farm to their apartment, not to a resort. A clean bathroom, a dark quiet room and a place to sit outside cover most of what people ask for.",
  },
];

export default function HostPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={img("photo-1500382017468-9049fed747ef", 1900)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-soil-900/85 via-soil-900/65 to-soil-900/85" />

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
            Become a host
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Your land already has the story
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soil-100">
            Open your farm to travellers who want the real version of it. Listing
            is free, you keep 80% of every booking, and a field executive sets it
            up with you.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#start"
              className="rounded-full bg-turmeric-500 px-6 py-3.5 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
            >
              Start hosting
            </Link>
            <Link
              href="#earnings"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              See what you could earn
            </Link>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { v: "₹42,000", l: "average host earnings a month" },
              { v: "80%", l: "of every booking is yours" },
              { v: "₹0", l: "to list your farm" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-semibold text-white">
                  {s.v}
                </dt>
                <dd className="mt-1 max-w-[12rem] text-sm text-soil-200">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Calculator */}
      <Section>
        <div id="earnings" className="scroll-mt-28">
          <SectionHeader
            eyebrow="Earnings"
            title="What could your farm make?"
            subtitle="Move the sliders. The figure updates on your share, not the guest's bill."
          />
          <EarningsCalculator />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="Four steps, and we do most of them"
        />
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

      {/* Benefits */}
      <Section>
        <div className="rounded-card bg-soil-100 p-8 lg:p-14">
          <SectionHeader
            eyebrow="Why us"
            title="Built so the farmer wins first"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title}>
                <span className="grid size-11 place-items-center rounded-2xl bg-white text-leaf-600 shadow-sm">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-soil-900">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soil-600">
                  {b.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements */}
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
              What you need
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-soil-900 sm:text-4xl">
              Less than you think
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-soil-600">
              You do not need a resort, a pool or a renovation. You need a room,
              hot water and the willingness to sit down with people.
            </p>
            <ul className="mt-7 space-y-3.5">
              {requirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-[15px] text-soil-800"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-100 text-leaf-700">
                    <Check className="size-3" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Host stories */}
      <div className="bg-leaf-900 text-soil-50">
        <Section>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric-300">
              Host stories
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From the people already doing it
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <figure
                key={s.name}
                className="flex flex-col rounded-card bg-white/5 p-7 ring-1 ring-white/10"
              >
                <span className="self-start rounded-full bg-turmeric-500/15 px-3 py-1 text-xs font-semibold text-turmeric-300">
                  {s.stat}
                </span>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={s.image}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-semibold">
                      {s.name}
                    </span>
                    <span className="block text-xs text-soil-300">
                      {s.place}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="Questions" title="Before you ask" />
        <div className="mx-auto max-w-3xl divide-y divide-soil-200 border-y border-soil-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-display text-lg font-semibold text-soil-900">
                  {f.q}
                </span>
                <ChevronDown className="size-5 shrink-0 text-soil-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 pr-9 leading-relaxed text-soil-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Sign-up CTA */}
      <Section>
        <div
          id="start"
          className="scroll-mt-28 overflow-hidden rounded-card bg-soil-900"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 lg:p-14">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start with a phone number
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-soil-200">
                Leave your details and a field executive from your district
                calls within two working days. No commitment, no listing fee.
              </p>

              <form className="mt-8 max-w-md space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    aria-label="Your name"
                    placeholder="Your name"
                    className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-soil-300 focus:border-turmeric-300"
                  />
                  <input
                    aria-label="Phone number"
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-soil-300 focus:border-turmeric-300"
                  />
                </div>
                <input
                  aria-label="Village and district"
                  placeholder="Village and district"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-soil-300 focus:border-turmeric-300"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-turmeric-500 px-6 py-3.5 text-sm font-semibold text-soil-900 transition-colors hover:bg-turmeric-300"
                >
                  Request a call back
                </button>
              </form>

              <p className="mt-4 text-xs text-soil-400">
                By continuing you agree to our{" "}
                <Link href="/terms" className="underline hover:text-soil-200">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-soil-200">
                  privacy policy
                </Link>
                .
              </p>
            </div>

            <div className="relative min-h-64 lg:min-h-full">
              <Image
                src={img("photo-1470252649378-9c29740c9fa8")}
                alt="Farmland at sunrise"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
