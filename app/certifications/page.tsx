import CertificationsClient from "./CertificationsClient"
import { connectDB } from "@/lib/mongodb"
import SEOMetadata from "@/lib/models/SEOMetadata"
import { ChevronsRight } from "lucide-react"

async function getSEOMetadata() {
  try {
    await connectDB()
    const metadata = await SEOMetadata.findOne({ page: "certifications" })
    return (
      metadata || { title: "Certifications", description: "Explore the certifications and licenses we have achieved." }
    )
  } catch (error) {
    console.error("Error fetching SEO metadata:", error)
    return { title: "Certifications", description: "Explore the certifications and licenses we have achieved." }
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default function CertificationsPage() {
  return (<>
   <section className="relative -mt-20 sm:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
         <div className="absolute inset-0 bg-[#161D39]/80"></div>
         <div className="relative z-10 text-center text-white px-4">
           <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
             Certifications
           </h1>
           <p className="text-lg font-light text-gray-200">
             Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
          <span>Certifications</span>
          </p>
        </div>
      </section>
      <CertificationsClient />
  </>)
}
