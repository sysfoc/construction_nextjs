import HowWeWorkClient from "./HowWeWorkClient"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "how-we-work" })
    return (
      metadata || { title: "How We Work", description: "Discover our organized and efficient work process for every project." }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { title: "How We Work", description: "Discover our organized and efficient work process for every project." }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            How we work
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>How we work</span>
          </p>
        </div>
      </section>
      <HowWeWorkClient />
    </>
  )
}
