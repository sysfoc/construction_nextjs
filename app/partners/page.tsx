import PartnersClient from "./PartnersClient"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "partners" })
    return (
      metadata || { title: "Partners", description: "Our collaborations with trusted organizations help us deliver lasting value through joint expertise and sustainable project delivery." }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { title: "Partners", description: "Our collaborations with trusted organizations help us deliver lasting value through joint expertise and sustainable project delivery." }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default function PartnersPage() {
  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Partners
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Partners</span>
          </p>
        </div>
      </section>
      <PartnersClient />
    </>
  )
}
