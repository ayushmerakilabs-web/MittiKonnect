import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BatteryCharging,
  Bath,
  BedDouble,
  CarFront,
  Check,
  Clock,
  Droplets,
  ExternalLink,
  Flame,
  Info,
  MapPin,
  Navigation,
  PawPrint,
  Sparkles,
  Star,
  Trophy,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import { homes, inr } from "@/lib/data";

const amenityIcons: Record<string, React.ElementType> = {
  "Wi-Fi": Wifi,
  "Home-cooked meals": UtensilsCrossed,
  "Hot water": Droplets,
  "Free parking": CarFront,
  "Bonfire pit": Flame,
  "Swimming pool": Waves,
  "Power backup": BatteryCharging,
  "Pet friendly": PawPrint,
};

/** Static class strings so Tailwind can see them — the gallery reshapes
 *  to fill completely whether there are 2, 3 or 4 photos beside the cover. */
const galleryLayout = {
  4: { grid: "md:grid-cols-4 md:grid-rows-2", hero: "md:col-span-2 md:row-span-2" },
  3: { grid: "md:grid-cols-3 md:grid-rows-3", hero: "md:col-span-2 md:row-span-3" },
  2: { grid: "md:grid-cols-2 md:grid-rows-2", hero: "md:col-span-1 md:row-span-2" },
  1: { grid: "md:grid-cols-2 md:grid-rows-1", hero: "md:col-span-1 md:row-span-1" },
} as const;

export function generateStaticParams() {
  return homes.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  if (!home) return {};
  return {
    title: `${home.name}, ${home.district} — MittiKonnect`,
    description: home.story[0],
  };
}

export default async function HomeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  if (!home) notFound();

  const [cover, ...rest] = home.images;
  const thumbs = rest.slice(0, 4);
  const layout =
    galleryLayout[
      Math.min(Math.max(thumbs.length, 1), 4) as keyof typeof galleryLayout
    ];

  const nights = 2;
  const stayTotal = home.price === null ? null : home.price * nights;
  const experienceFee = 499;
  const community = 200;
  const total = stayTotal === null ? null : stayTotal + experienceFee + community;

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      {/* Title block */}
      <header>
        {home.logo && (
          // The mark ships on an opaque white plate — multiplied into the
          // cream page so it doesn't sit in a white box.
          <Image
            src={home.logo}
            alt={`${home.name} logo`}
            width={800}
            height={440}
            priority
            className="mb-5 h-16 w-auto object-contain object-left mix-blend-multiply sm:h-20"
          />
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-soil-900 sm:text-4xl">
          {home.name}
        </h1>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-soil-600">
          {home.rating ? (
            <span className="flex items-center gap-1.5 font-medium text-soil-800">
              <Star className="size-4 fill-turmeric-500 text-turmeric-500" />
              {home.rating}
              {home.reviews && (
                <span className="font-normal text-soil-500">
                  ({home.reviews} reviews)
                </span>
              )}
            </span>
          ) : (
            <span className="font-medium text-leaf-700">New listing</span>
          )}
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            {home.village}, {home.district} · {home.state}
          </span>
        </div>
      </header>

      {/* Gallery — cover plus the rest */}
      <div
        className={`mt-6 grid gap-2 overflow-hidden rounded-card md:h-[30rem] ${layout.grid}`}
      >
        <div className={`relative aspect-[4/3] md:aspect-auto ${layout.hero}`}>
          <Image
            src={cover}
            alt={home.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {thumbs.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={src}
              alt={`${home.name} — photo ${i + 2}`}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {home.placeholder && (
        <p className="mt-3 text-xs text-soil-500">
          Photography on this listing is a placeholder pending the host&apos;s
          own images.
        </p>
      )}

      {/* Body */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_24rem]">
        <div>
          {/* Host */}
          <div className="flex items-center gap-4 pb-8">
            <Image
              src={home.hostAvatar}
              alt=""
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-display text-xl font-semibold text-soil-900">
                Hosted by {home.host}
              </h2>
              {home.hostSince && (
                <p className="mt-0.5 text-sm text-soil-600">
                  Hosting since {home.hostSince}
                </p>
              )}
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-y border-soil-200 py-5 text-sm text-soil-700">
            {home.guests && (
              <li className="flex items-center gap-2">
                <Users className="size-4 text-leaf-600" />
                {home.guests} guests
              </li>
            )}
            {home.bedrooms && (
              <li className="flex items-center gap-2">
                <BedDouble className="size-4 text-leaf-600" />
                {home.bedrooms} bedrooms · {home.beds} beds
              </li>
            )}
            {home.baths && (
              <li className="flex items-center gap-2">
                <Bath className="size-4 text-leaf-600" />
                {home.baths} bathrooms
              </li>
            )}
            {home.checkIn && (
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-leaf-600" />
                Check-in {home.checkIn} · check-out {home.checkOut}
              </li>
            )}
          </ul>

          {/* Story */}
          <section className="py-8">
            <h2 className="font-display text-2xl font-semibold text-soil-900">
              The farm story
            </h2>
            {home.story.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-soil-700">
                {p}
              </p>
            ))}
            {home.website && (
              <a
                href={home.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-leaf-700 hover:underline"
              >
                Visit the farm&apos;s own site
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </section>

          {/* Where you'll sleep — each accommodation type kept separate */}
          {home.stayTypes && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                Where you&apos;ll sleep
              </h2>
              <p className="mt-2 text-sm text-soil-600">
                {home.stayTypes.length} kinds of stay on the same land. Pick one,
                or ask the host which suits your group.
              </p>
              <div className="mt-6 space-y-6">
                {home.stayTypes.map((s) => (
                  <article
                    key={s.name}
                    className="overflow-hidden rounded-card border border-soil-200 bg-white sm:flex"
                  >
                    <div className="shrink-0 sm:w-72">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={s.images[0]}
                          alt={`${s.name} at ${home.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 18rem"
                          className="object-cover"
                        />
                      </div>
                      {s.images.length > 1 && (
                        <div className="grid grid-cols-2 gap-1 bg-white pt-1">
                          {s.images.slice(1, 3).map((src, i) => (
                            <div key={src} className="relative aspect-[3/2]">
                              <Image
                                src={src}
                                alt={`${s.name} — photo ${i + 2}`}
                                fill
                                sizes="(max-width: 640px) 50vw, 9rem"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-lg font-semibold text-soil-900">
                        {s.name}
                      </h3>
                      {s.sleeps && (
                        <p className="mt-1.5 flex items-center gap-2 text-sm text-soil-600">
                          <BedDouble className="size-4 shrink-0 text-leaf-600" />
                          {s.sleeps}
                        </p>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-soil-700">
                        {s.blurb}
                      </p>
                      <ul className="mt-4 grid gap-2.5">
                        {s.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-soil-700"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-leaf-600" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Activities */}
          <section className="border-t border-soil-200 py-8">
            <h2 className="font-display text-2xl font-semibold text-soil-900">
              What you can do here
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {home.doHere.map((d) => (
                <div
                  key={d}
                  className="flex items-center gap-3 rounded-2xl border border-soil-200 bg-white p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-leaf-100 text-leaf-700">
                    <Sparkles className="size-4" />
                  </span>
                  <span className="text-sm text-soil-800">{d}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Meals */}
          {home.mealPlan && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                What&apos;s on the table
              </h2>
              <p className="mt-2 text-sm text-soil-600">
                All of it is inside the package rate.
              </p>
              <ul className="mt-5 space-y-3">
                {home.mealPlan.map((m) => (
                  <li
                    key={m.meal}
                    className="rounded-2xl border border-soil-200 bg-white p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-soil-900">
                        {m.meal}
                      </h3>
                      <span className="text-sm text-soil-500">{m.time}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-soil-700">
                      {m.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Amenities */}
          <section className="border-t border-soil-200 py-8">
            <h2 className="font-display text-2xl font-semibold text-soil-900">
              What&apos;s included
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {home.included.map((a) => {
                const Icon = amenityIcons[a] ?? Check;
                return (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-sm text-soil-800"
                  >
                    <Icon className="size-4 text-leaf-600" />
                    {a}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Facilities */}
          {home.facilities && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                Facilities
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {home.facilities.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-soil-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Nearby */}
          {home.nearby && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                Places to visit
              </h2>
              <p className="mt-2 text-sm text-soil-600">
                Distance from the gate.
              </p>
              <ul className="mt-5 divide-y divide-soil-200 overflow-hidden rounded-2xl border border-soil-200 bg-white">
                {home.nearby.map((n) => (
                  <li
                    key={n.name}
                    className="flex items-center justify-between gap-4 px-5 py-3.5"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-soil-800">
                      <Navigation className="size-4 shrink-0 text-leaf-600" />
                      {n.name}
                    </span>
                    <span className="shrink-0 text-sm font-medium text-soil-500">
                      {n.km} km
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Why us */}
          {home.whyUs && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                Why choose us
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {home.whyUs.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-2.5 text-sm text-soil-700"
                  >
                    <Trophy className="mt-0.5 size-4 shrink-0 text-turmeric-600" />
                    {w}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Good to know */}
          {home.notes && (
            <section className="border-t border-soil-200 py-8">
              <h2 className="font-display text-2xl font-semibold text-soil-900">
                Good to know
              </h2>
              <ul className="mt-5 space-y-3">
                {home.notes.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-soil-700"
                  >
                    <Info className="mt-0.5 size-4 shrink-0 text-soil-400" />
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Booking card */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-card border border-soil-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-3">
              <p>
                {home.price === null ? (
                  <span className="font-display text-2xl font-semibold text-soil-900">
                    Rate on request
                  </span>
                ) : (
                  <>
                    <span className="font-display text-3xl font-semibold text-soil-900">
                      {inr(home.price)}
                    </span>
                    <span className="text-sm text-soil-500"> / night</span>
                  </>
                )}
              </p>
              {home.rating && (
                <span className="flex items-center gap-1 text-sm text-soil-800">
                  <Star className="size-4 fill-turmeric-500 text-turmeric-500" />
                  {home.rating}
                </span>
              )}
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-soil-200">
              <div className="grid grid-cols-2">
                <div className="border-r border-soil-200 p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                    Check-in
                  </p>
                  <p className="mt-0.5 text-sm text-soil-900">Fri, 12 Feb</p>
                </div>
                <div className="p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                    Check-out
                  </p>
                  <p className="mt-0.5 text-sm text-soil-900">Sun, 14 Feb</p>
                </div>
              </div>
              <div className="border-t border-soil-200 p-3.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-soil-500">
                  Guests
                </p>
                <p className="mt-0.5 text-sm text-soil-900">2 adults, 1 child</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-full bg-leaf-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-700"
            >
              {home.price === null ? "Request a quote" : "Reserve"}
            </button>
            <p className="mt-2.5 text-center text-xs text-soil-500">
              You won&apos;t be charged yet
            </p>

            {stayTotal !== null && total !== null ? (
              <dl className="mt-6 space-y-2.5 text-sm">
                <div className="flex justify-between text-soil-700">
                  <dt>
                    {inr(home.price!)} × {nights} nights
                  </dt>
                  <dd>{inr(stayTotal)}</dd>
                </div>
                <div className="flex justify-between text-soil-700">
                  <dt>Farm experience fee</dt>
                  <dd>{inr(experienceFee)}</dd>
                </div>
                <div className="flex justify-between text-soil-700">
                  <dt>Community contribution</dt>
                  <dd>{inr(community)}</dd>
                </div>
                <div className="flex justify-between border-t border-soil-200 pt-3 font-semibold text-soil-900">
                  <dt>Total (INR)</dt>
                  <dd>{inr(total)}</dd>
                </div>
              </dl>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-soil-600">
                This host prices per package and per headcount. Send your dates
                and group size and they&apos;ll come back with a figure.
              </p>
            )}
          </div>

          {home.rareFind && (
            <div className="mt-4 rounded-card bg-soil-100 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-soil-900">
                <Sparkles className="size-4 text-turmeric-600" />
                Rare find
              </p>
              <p className="mt-1.5 text-sm text-soil-600">
                This stay is usually booked 3 weeks in advance. Grab it.
              </p>
            </div>
          )}
        </aside>
      </div>

      {/* Packages */}
      <section className="mt-6 border-t border-soil-200 pt-12">
        <h2 className="font-display text-2xl font-semibold text-soil-900">
          Packages
        </h2>
        <p className="mt-2 max-w-xl text-sm text-soil-600">
          Fixed bundles, priced upfront. Everything the host would have charged
          separately, already inside.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {home.packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-card border bg-white p-6 ${
                p.popular
                  ? "border-leaf-600 ring-1 ring-leaf-600"
                  : "border-soil-200"
              }`}
            >
              {p.popular && (
                <span className="mb-3 self-start rounded-full bg-leaf-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-leaf-700">
                  Most booked
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-soil-900">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm text-soil-600">{p.blurb}</p>
              <p className="mt-4">
                {p.price === null ? (
                  <span className="font-display text-xl font-semibold text-soil-900">
                    Rate on request
                  </span>
                ) : (
                  <>
                    <span className="font-display text-2xl font-semibold text-soil-900">
                      {inr(p.price)}
                    </span>
                    <span className="text-sm text-soil-500">
                      {" "}
                      · {p.nights} {p.nights === 1 ? "night" : "nights"}
                    </span>
                  </>
                )}
              </p>
              <ul className="mt-4 space-y-2.5">
                {p.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2.5 text-sm text-soil-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-600" />
                    {inc}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                  p.popular
                    ? "bg-leaf-600 text-white hover:bg-leaf-700"
                    : "border border-soil-300 text-soil-800 hover:border-soil-500"
                }`}
              >
                {p.price === null ? "Enquire" : "Choose package"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <Link
          href="/"
          className="text-sm font-medium text-leaf-700 hover:underline"
        >
          ← Back to all homes
        </Link>
      </div>
    </div>
  );
}
