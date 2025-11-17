"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlantedButton from "../General/buttons/SlantedButton"
import Loader from "../General/Loader"
import { Layers } from "lucide-react"

interface Service {
  id: string
  type: "service" | "button"
  icon?: string
  title?: string
  subtitle?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
}

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([])
  const [button, setButton] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/services")
      const data = await res.json()

      const allServices = data.services || []
      const buttonService = allServices.find((s: Service) => s.type === "button")
      const regularServices = allServices.filter((s: Service) => s.type === "service")

      setServices(regularServices)
      setButton(buttonService || null)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" py-12 dark:bg-gray-900">
        <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-primary/10 rounded-full">
          <Layers className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary text-xs font-bold uppercase">
            Featured Services
          </span>
        </div>
        <h2 className="text-3xl font-bold text-foreground dark:text-white mb-2">
          Our Services
        </h2>
        <p className="text-paragraph dark:text-gray-400 text-xs max-w-xl mx-auto mb-4">
          From Concept to Completion — We Build It All.
        </p>
      </div>

      <div className="container mx-auto px-5 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div key={service.id} className="bg-background p-5 relative group">
              {/* Icon and Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title || "Service"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-paragraph font-bold text-lg leading-tight">
                    {service.title || "Service"}
                  </h3>
                  <h3 className="text-paragraph font-semibold text-sm leading-tight">
                    {service.subtitle || "Subtitle"}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-paragraph text-sm mb-4">
                {service.description || "No description available"}
              </p>

              {/* Diagonal Orange Line */}
              <div className="absolute bottom-0 right-0 w-24 h-4 bg-[var(--color-primary)] transform origin-left clip-bottom-side"></div>
            </div>
          ))}

          <div className=" p-6 flex items-center justify-center">
            {button && (
              <Link href={button.buttonUrl || "#"}>
                <SlantedButton text={button.buttonText || "GET STARTED"} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
