import TestimonialsClient from "./TestimonialsClient"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "testimonials" })
    return (
      metadata || { title: "Customer Testimonials | Your Company Name", description: "Hear from our satisfied clients worldwide. Read genuine testimonials about our services and successful projects." }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { title: "Customer Testimonials | Your Company Name", description: "Hear from our satisfied clients worldwide. Read genuine testimonials about our services and successful projects." }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default function TestimonialsPage() {
  return (
    <>
      {" "}
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Testimonials
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Testimonials</span>
          </p>
        </div>
      </section>
      <TestimonialsClient />
    </>
  )
}
