"use client"

import { useEffect, useState } from "react"
import { ChevronsRight } from "lucide-react"
import NewsSearchList from "../components/General/news-search-list"
import type { NewsArticle } from "@/lib/models/News"

export default function NewsClient() {
  const [items, setItems] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">News</h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" /> <span>News</span>
          </p>
        </div>
      </section>
      <main className="bg-background text-foreground">
        <section className="mx-auto max-w-5xl p-4">
          <h1 className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            News
          </h1>

          <div className="mt-3">
            {loading ? <p className="text-muted-foreground">Loading news...</p> : <NewsSearchList items={items} />}
          </div>
        </section>
      </main>
    </>
  )
}
