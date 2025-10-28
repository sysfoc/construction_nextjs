import WhyChooseUs from "@/app/why-choose-us/whyChooseUs"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"
import type React from "react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "why-choose-us" })
    return (
      metadata || { title: "Why Choose Us | Construction Expertise", description: "Discover why clients trust our construction company for quality, reliability, and years of proven experience." }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { title: "Why Choose Us | Construction Expertise", description: "Discover why clients trust our construction company for quality, reliability, and years of proven experience." }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

const Page: React.FC = () => {
  return (
    <div className="w-full">
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">Why Choose Us</h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" /> <span>Why Choose Us</span>
          </p>
        </div>
      </section>
      <WhyChooseUs />
    </div>
  )
}

export default Page
