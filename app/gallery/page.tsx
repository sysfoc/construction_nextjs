import type { Metadata } from "next"
import { GallerySection } from "../components/User/gallery-section"
import { ChevronsRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Work Gallery",
  description: "Explore our construction excellence across Residential, Commercial, and Infrastructure projects.",
}

type GalleryImage = {
  src: string
  alt: string
}
const residential: GalleryImage[] = [
  { src: "/gallery/residential-1.jpg", alt: "Residential build – modern exterior 1" },
  { src: "/gallery/residential-2.jpg", alt: "Residential build – modern exterior 2" },
  { src: "/gallery/residential-3.jpg", alt: "Residential build – interior staircase" },
  { src: "/gallery/residential-4.jpg", alt: "Residential build – living room finish" },
  { src: "/gallery/residential-5.jpg", alt: "Residential build – facade details" },
  { src: "/gallery/residential-6.jpg", alt: "Residential build – rooftop terrace" },
  { src: "/gallery/residential-7.jpg", alt: "Residential build – structural framing" },
  { src: "/gallery/residential-8.jpg", alt: "Residential build – concrete pour" },
  { src: "/gallery/residential-9.jpg", alt: "Residential build – site overview" },
]

const commercial: GalleryImage[] = [
  { src: "/gallery/commercial-1.jpg", alt: "Commercial project – office exterior 1" },
  { src: "/gallery/commercial-2.jpg", alt: "Commercial project – office exterior 2" },
  { src: "/gallery/commercial-3.jpg", alt: "Commercial project – lobby finish" },
  { src: "/gallery/commercial-4.jpg", alt: "Commercial project – atrium glass" },
  { src: "/gallery/commercial-5.jpg", alt: "Commercial project – steel framing" },
  { src: "/gallery/commercial-6.jpg", alt: "Commercial project – curtain wall install" },
  { src: "/gallery/commercial-7.jpg", alt: "Commercial project – site cranes" },
  { src: "/gallery/commercial-8.jpg", alt: "Commercial project – interior fit-out" },
  { src: "/gallery/commercial-9.jpg", alt: "Commercial project – mechanical systems" },
]

const infrastructure: GalleryImage[] = [
  { src: "/gallery/infrastructure-1.jpg", alt: "Infrastructure – highway overpass" },
  { src: "/gallery/infrastructure-2.jpg", alt: "Infrastructure – bridge construction" },
  { src: "/gallery/infrastructure-3.jpg", alt: "Infrastructure – tunnel works" },
  { src: "/gallery/infrastructure-4.jpg", alt: "Infrastructure – rail viaduct" },
  { src: "/gallery/infrastructure-5.jpg", alt: "Infrastructure – heavy equipment on site" },
  { src: "/gallery/infrastructure-6.jpg", alt: "Infrastructure – road paving" },
  { src: "/gallery/infrastructure-7.jpg", alt: "Infrastructure – retaining walls" },
  { src: "/gallery/infrastructure-8.jpg", alt: "Infrastructure – bridge deck pour" },
  { src: "/gallery/infrastructure-9.jpg", alt: "Infrastructure – elevated roadway" },
]

export default function GalleryPage() {
  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            Gallery
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>Gallery</span>
          </p>
        </div>
      </section>

    <main className="w-full">
      <header className="grid gap-2 px-4 md:px-6 py-4">
        <h1
          className="text-lg md:text-xl font-semibold tracking-tight text-balance"
          style={{ color: "var(--page-heading, var(--color-foreground))" }}
        >
          Our Work Gallery – Explore Our Construction Excellence
        </h1>
        <p className="text-sm leading-relaxed text-pretty" style={{ color: "var(--color-muted-foreground)" }}>
          A visual showcase of our projects across residential, commercial, and infrastructure—built with quality and
          trust.
        </p>
       <nav aria-label="Gallery categories" className="text-xs font-medium">
  <ul className="flex items-center gap-3" style={{ color: "var(--color-muted-foreground)" }}>
    <li>
      <a href="#residential" className="no-underline px-2 py-1 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)]">
        {"Residential"}
      </a>
    </li>
    <li>
      <a href="#commercial" className="no-underline px-2 py-1 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)]">
        {"Commercial"}
      </a>
    </li>
    <li>
      <a href="#infrastructure" className="no-underline px-2 py-1 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)]">
        {"Infrastructure"}
      </a>
    </li>
  </ul>
</nav>
      </header>

      <div className="grid gap-2 px-4 md:px-6 pb-6">
        <GallerySection
          id="residential"
          title="Residential"
          subtitle="Single-family, multi‑unit, interiors & exteriors"
          images={residential}
        />
        <GallerySection
          id="commercial"
          title="Commercial"
          subtitle="Offices, lobbies, glazing, mechanical"
          images={commercial}
        />
        <GallerySection
          id="infrastructure"
          title="Infrastructure"
          subtitle="Bridges, roads, rail, tunnels"
          images={infrastructure}
        />
      </div>
    </main>
    </>
  )
}
