"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronsDown, ChevronsUp } from "lucide-react";
import type { NewsArticle } from "../../../data/news";

export default function NewsSearchList({ items }: { items: NewsArticle[] }) {
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((a) => {
      return (
        a.title.toLowerCase().includes(needle) ||
        a.excerpt.toLowerCase().includes(needle) ||
        a.author.toLowerCase().includes(needle)
      );
    });
  }, [items, q]);

  useEffect(() => {
    setVisible(6);
  }, [q]);

  const shown = useMemo(() => filtered.slice(0, visible), [filtered, visible]);

  return (
    <div className="w-full">
      <div className="relative">
        <label htmlFor="news-search" className="sr-only">
          Search news
        </label>
        <input
          id="news-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search construction news..."
          className="w-full rounded-md border border-border bg-background text-foreground text-sm px-8 py-2 outline-none"
          role="searchbox"
          aria-label="Search news"
        />
        <Search
          size={16}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((a) => (
          <article
            key={a.id}
            className="border border-border rounded-md overflow-hidden bg-background"
          >
            <Link href={`/news/${a.slug}`} className="block">
              <div className="relative h-40 w-full">
                <Image
                  src={
                    a.image ||
                    "/placeholder.svg?height=160&width=320&query=construction%20thumbnail"
                  }
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-3">
                <h2 className="text-base font-medium text-foreground">
                  {a.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {a.excerpt}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {a.date} •{" "}
                  <span
                   className="inline-flex items-center rounded-sm px-2 py-0.5 bg-[var(--primary)] text-[var(--primary-foreground)]"
                  >
                    {a.author}
                  </span>
                </p>
              </div>
            </Link>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">No results found.</p>
        )}
      </div>

      {filtered.length > 6 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {visible < filtered.length && (
            <button
              type="button"
              onClick={() =>
                setVisible((v) => Math.min(v + 6, filtered.length))
              }
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background text-foreground text-sm px-3 py-2"
              aria-label="Show more articles"
            >
              <ChevronsDown size={16} aria-hidden="true" />
              <span>Show more</span>
            </button>
          )}
          {visible > 6 && (
            <button
              type="button"
              onClick={() => setVisible((v) => Math.max(6, v - 6))}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background text-foreground text-sm px-3 py-2"
              aria-label="Show fewer articles"
            >
              <ChevronsUp size={16} aria-hidden="true" />
              <span>Show less</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
