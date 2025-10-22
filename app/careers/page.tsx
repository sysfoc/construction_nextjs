"use client"
import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, DollarSign, ChevronsRight } from "lucide-react"

interface Job {
  id: string
  image: string | null
  title: string
  location: string
  deadline: string
  payRange: string
  description: string
  jobType: string
}

const CareerCard: React.FC<Job> = ({ image, title, location, deadline, payRange, description, jobType }) => {
  return (
    <div className="bg-[var(--background)] dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm max-w-lg border border-[var(--border-color)] dark:border-gray-700 transition-colors duration-300">
      <div className="flex justify-between px-6">
        <div className="flex gap-4">
          <div className="relative w-14 h-14">
            {image ? (
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain rounded-b-full" />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">No Image</span>
              </div>
            )}
          </div>
          <p className="text-md font-semibold mt-4 text-[var(--foreground)] dark:text-gray-100">{title}</p>
        </div>

        <div className="mt-4">
          <span className="px-2 py-0.5 text-xs font-medium text-[var(--primary)] dark:text-blue-400 border border-[var(--primary)] dark:border-blue-400 rounded">
            {jobType}
          </span>
        </div>
      </div>

      <div className="p-3">
        <div className="flex flex-wrap items-center gap-10 mb-2 text-xs text-[var(--paragraph-color)] dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[var(--primary)] dark:text-blue-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[var(--primary)] dark:text-blue-400" />
            <span>{deadline}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-[var(--primary)] dark:text-blue-400" />
            <span>{payRange}</span>
          </div>
        </div>

        <p className="text-xs text-[var(--paragraph-color)] dark:text-gray-400 mb-3 leading-snug">{description}</p>

        <button className="bg-[var(--primary)] dark:bg-blue-500 hover:bg-opacity-90 dark:hover:bg-blue-600 text-[var(--primary-foreground)] dark:text-white font-medium py-2 px-4 rounded text-sm transition-colors duration-300">
          APPLY NOW
        </button>
      </div>
    </div>
  )
}

const CareerCards: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/careers")
      const data = await response.json()
      setJobs(data.jobs || [])
    } catch (error) {
      console.error("Error fetching jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center dark:bg-[url('/Team/team-dark.png')]">
        <div className="absolute inset-0 bg-[#161D39]/80 dark:bg-black/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">Careers</h1>
          <p className="text-lg font-light text-gray-200 dark:text-gray-400">
            Home <ChevronsRight className="inline-block w-4 h-4 text-[var(--primary)] dark:text-blue-400" />{" "}
            <span>Careers</span>
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-[var(--background)] dark:bg-gray-950 p-4 py-10 lg:px-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Loading jobs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5">
              {jobs.map((job) => (
                <CareerCard key={job.id} {...job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CareerCards
