import { getNews } from "@/data/news"
import NewsSearchList from "../components/General/news-search-list"
import { ChevronsRight } from "lucide-react"


export const metadata = {
  title: "News | Construction Updates",
  description: "Stay updated with the latest news, insights, and project announcements from our construction team.",
}

export default function NewsPage() {
  const items = getNews()

  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            News
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>News</span>
          </p>
        </div>
      </section>
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-5xl p-4">
        <h1 className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">News</h1>

        <div className="mt-3">
          <NewsSearchList items={items} />
        </div>
      </section>
    </main>
    </>
  )
}
