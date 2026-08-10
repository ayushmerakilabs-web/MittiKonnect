import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { inr, type Home } from "@/lib/data";

export default function HomeCard({ home }: { home: Home }) {
  return (
    <Link href={`/homes/${home.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-soil-200">
        <Image
          src={home.images[0]}
          alt={home.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-soil-800 backdrop-blur">
          {home.tags[0]}
        </span>
        {home.placeholder && (
          <span className="absolute right-3 top-3 rounded-full bg-soil-900/75 px-3 py-1 text-[11px] font-medium text-soil-100 backdrop-blur">
            Sample photo
          </span>
        )}
      </div>

      <div className="mt-3.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold leading-snug text-soil-900">
            {home.name}
          </h3>
          {home.rating ? (
            <span className="mt-0.5 flex shrink-0 items-center gap-1 text-sm text-soil-800">
              <Star className="size-3.5 fill-turmeric-500 text-turmeric-500" />
              {home.rating}
            </span>
          ) : (
            <span className="mt-0.5 shrink-0 text-sm font-medium text-leaf-700">
              New
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-soil-600">
          {home.village}, {home.district} · {home.state}
        </p>
        <p className="mt-0.5 text-sm text-soil-500">Hosted by {home.host}</p>
        <p className="mt-2.5 text-sm text-soil-900">
          {home.price === null ? (
            <span className="font-semibold">Rate on request</span>
          ) : (
            <>
              <span className="font-semibold">{inr(home.price)}</span>
              <span className="text-soil-500"> / night</span>
            </>
          )}
          {home.guests && (
            <span className="text-soil-400"> · sleeps {home.guests}</span>
          )}
        </p>
      </div>
    </Link>
  );
}
