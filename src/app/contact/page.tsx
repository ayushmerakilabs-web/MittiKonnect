import Link from "next/link";
import { Clock, Mail, MapPin, MessageSquare, Phone, Sprout } from "lucide-react";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Contact — MittiKonnect",
  description:
    "Questions about a booking, hosting your farm, or working with us. We answer within one working day.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mittikonnect.in",
    href: "mailto:hello@mittikonnect.in",
    note: "Best for anything not urgent.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98200 00000",
    href: "tel:+919820000000",
    note: "Mon–Sat, 9 am to 7 pm IST.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Andheri East, Mumbai 400069",
    note: "Visits by appointment only.",
  },
];

const topics = [
  {
    icon: MessageSquare,
    title: "A booking",
    copy: "Dates, changes, refunds or something that went wrong on a stay.",
  },
  {
    icon: Sprout,
    title: "Hosting your farm",
    copy: "Listing, pricing and field visits.",
    cta: { label: "Or start here", href: "/host" },
  },
  {
    icon: Mail,
    title: "Press & partnerships",
    copy: "Media, brand collaborations and corporate retreats.",
  },
];

const fieldClass =
  "w-full rounded-2xl border border-soil-200 bg-soil-50 px-4 py-3 text-sm text-soil-900 outline-none transition-colors placeholder:text-soil-400 focus:border-leaf-500 focus:bg-white";

export default function ContactPage() {
  return (
    <Section className="!pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
          Contact
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-soil-900 sm:text-5xl">
          Talk to a person
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-soil-600">
          No ticket numbers, no bots. Tell us what you need and someone who
          knows the farms will write back — usually within one working day.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        {/* Form */}
        <div className="rounded-card border border-soil-200 bg-white p-7 shadow-sm lg:p-10">
          <h2 className="font-display text-2xl font-semibold text-soil-900">
            Send a message
          </h2>

          <form className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-soil-800">
                  Your name
                </span>
                <input
                  name="name"
                  required
                  placeholder="Ananya Rao"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-soil-800">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-soil-800">
                What is this about?
              </span>
              <select name="topic" defaultValue="booking" className={fieldClass}>
                <option value="booking">A booking</option>
                <option value="hosting">Hosting my farm</option>
                <option value="press">Press &amp; partnerships</option>
                <option value="corporate">Corporate retreat</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-soil-800">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us a little about what you need."
                className={`${fieldClass} resize-y`}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-leaf-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-700 sm:w-auto sm:px-9"
            >
              Send message
            </button>

            <p className="text-xs leading-relaxed text-soil-500">
              By sending this you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-soil-800">
                privacy policy
              </Link>
              . We never pass your details to a host until you book.
            </p>
          </form>
        </div>

        {/* Details */}
        <aside className="space-y-4">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-soil-500">
                    {c.label}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-soil-900">
                    {c.value}
                  </span>
                  <span className="mt-0.5 block text-sm text-soil-600">
                    {c.note}
                  </span>
                </span>
              </>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="flex gap-4 rounded-card border border-soil-200 bg-white p-6 transition-colors hover:border-leaf-500"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="flex gap-4 rounded-card border border-soil-200 bg-white p-6"
              >
                {inner}
              </div>
            );
          })}

          <div className="flex gap-4 rounded-card bg-soil-100 p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-leaf-600 shadow-sm">
              <Clock className="size-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-soil-900">
                One working day
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-soil-600">
                That is our answer time for email. If you are mid-stay and
                something is wrong, call — do not write.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Topics */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-soil-900">
          Who you&apos;ll reach
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-card border border-soil-200 bg-white p-7"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                <t.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-soil-900">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soil-600">
                {t.copy}
              </p>
              {t.cta && (
                <Link
                  href={t.cta.href}
                  className="mt-4 inline-block text-sm font-semibold text-leaf-700 hover:underline"
                >
                  {t.cta.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
