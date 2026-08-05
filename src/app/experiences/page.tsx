import ExperienceCard from "@/components/ExperienceCard";
import { Section } from "@/components/Section";
import { experiences } from "@/lib/data";

export const metadata = {
  title: "Experiences — MittiKonnect",
};

export default function ExperiencesPage() {
  return (
    <Section className="!pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
          Day experiences
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-soil-900 sm:text-5xl">
          Experiences
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-soil-600">
          A day in someone&apos;s real life — bookable in three taps. Farming,
          foraging, cooking and forest walks, hosted by the family, priced
          honestly, and ending with a full stomach.
        </p>
      </header>

      <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((e) => (
          <ExperienceCard key={e.slug} exp={e} />
        ))}
      </div>
    </Section>
  );
}
