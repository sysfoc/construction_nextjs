"use client";

import { useEffect, useState } from "react";
import { ChevronsRight } from "lucide-react";
import NewsSearchList from "../components/General/news-search-list";
import type { NewsArticle } from "@/lib/models/News";
import { isPageVisible } from "@/lib/api/pageVisibility";
import { useRouter } from "next/navigation";

export default function NewsClient() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await isPageVisible("news");
      setIsVisible(visible);
      if (!visible) {
        router.push("/not-found");
      }
    };
    checkVisibility();
  }, [router]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <main className="bg-background text-foreground">
        <section className="mx-auto max-w-5xl p-4">
          <h1 className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            News
          </h1>

          <div className="mt-3">
            {loading ? (
              <p className="text-muted-foreground">Loading news...</p>
            ) : (
              <NewsSearchList items={items} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
