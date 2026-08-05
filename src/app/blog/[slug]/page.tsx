import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { formatDate, posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — MittiKonnect`, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Header */}
      <div className="mx-auto max-w-3xl px-5 pt-12 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-soil-600 hover:text-leaf-700"
        >
          <ArrowLeft className="size-4" />
          All stories
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">
          {post.category}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-soil-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-soil-600">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center gap-3 border-y border-soil-200 py-5">
          <Image
            src={post.authorAvatar}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-medium text-soil-900">{post.author}</p>
            <p className="text-soil-500">{formatDate(post.date)}</p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 text-sm text-soil-500">
            <Clock className="size-4" />
            {post.readMins} min read
          </span>
        </div>
      </div>

      {/* Lead image */}
      <div className="mx-auto mt-10 max-w-5xl px-5 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-soil-200">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64rem"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        {post.body.map((section, i) => (
          <section key={section.heading ?? i}>
            {section.heading && (
              <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-soil-900">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p) => (
              <p
                key={p}
                className="mt-5 text-[17px] leading-[1.75] text-soil-700"
              >
                {p}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-14 flex items-center gap-4 rounded-card bg-soil-100 p-6">
          <Image
            src={post.authorAvatar}
            alt=""
            width={56}
            height={56}
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-soil-500">Written by</p>
            <p className="font-display text-lg font-semibold text-soil-900">
              {post.author}
            </p>
          </div>
        </div>
      </div>

      {/* More */}
      <div className="mx-auto max-w-7xl border-t border-soil-200 px-5 py-14 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-soil-900">
          Keep reading
        </h2>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-soil-200">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-leaf-600">
                {p.category}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-soil-900 group-hover:text-leaf-700">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-soil-500">
                {formatDate(p.date)} · {p.readMins} min read
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
