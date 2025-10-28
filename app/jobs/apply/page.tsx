import JobApply from "./JobApply"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "jobs" })
    return (
      metadata || { 
        title: "Job Apply | Construction Company", 
        description: "Apply for exciting career opportunities at our construction company and become part of a professional and innovative team." 
      }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { 
      title: "Job Apply | Construction Company", 
      description: "Apply for exciting career opportunities at our construction company and become part of a professional and innovative team." 
    }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default function JobApplyPage() {
  return (
    <>
      {" "}
      <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Job Apply
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Job Apply</span>
          </p>
        </div>
      </section>
      <JobApply />
    </>
  )
}
