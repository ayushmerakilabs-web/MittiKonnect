import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock, MapPin, Star } from "lucide-react";
import { inr, type Experience } from "@/lib/data";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <Link href={`/experiences/${exp.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-soil-200">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-soil-900/85 px-3 py-1 text-xs font-semibold text-soil-50 backdrop-blur">
          {inr(exp.price)}
        </span>
      </div>

      <div className="mt-3.5">
        <div className="flex items-center gap-3 text-xs text-soil-600">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {exp.state}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {exp.hours} hrs
          </span>
        </div>
        <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug text-soil-900">
          {exp.title}
        </h3>
        <div className="mt-2.5 flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 text-soil-800">
            <Star className="size-3.5 fill-turmeric-500 text-turmeric-500" />
            {exp.rating}
          </span>
          <span className="flex items-center gap-1 text-leaf-600">
            <BadgeCheck className="size-4" />
            Host verified
          </span>
        </div>
      </div>
    </Link>
  );
}
