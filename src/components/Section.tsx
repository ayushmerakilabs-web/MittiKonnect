import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  cta,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-soil-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[15px] leading-relaxed text-soil-600">
            {subtitle}
          </p>
        )}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="group inline-flex items-center gap-1.5 rounded-full border border-soil-200 bg-white px-4 py-2.5 text-sm font-medium text-soil-800 transition-colors hover:border-leaf-500 hover:text-leaf-700"
        >
          {cta.label}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}
