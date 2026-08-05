import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { inr, type Stay } from "@/lib/data";

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link href={`/stays/${stay.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-soil-200">
        <Image
          src={stay.image}
          alt={stay.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-soil-800 backdrop-blur">
          {stay.tags[0]}
        </span>
      </div>

      <div className="mt-3.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold leading-snug text-soil-900">
            {stay.name}
          </h3>
          <span className="mt-0.5 flex shrink-0 items-center gap-1 text-sm text-soil-800">
            <Star className="size-3.5 fill-turmeric-500 text-turmeric-500" />
            {stay.rating}
          </span>
        </div>
        <p className="mt-1 text-sm text-soil-600">
          {stay.village}, {stay.district} · {stay.state}
        </p>
        <p className="mt-0.5 text-sm text-soil-500">Hosted by {stay.host}</p>
        <p className="mt-2.5 text-sm text-soil-900">
          <span className="font-semibold">{inr(stay.price)}</span>
          <span className="text-soil-500"> / night</span>
        </p>
      </div>
    </Link>
  );
}
