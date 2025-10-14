import type React from "react"
import { CertCard } from "../components/User/certifcates/cert-card"
import { Memberships } from "../components/User/certifcates/memberships"
import CEOProfile from "../components/User/Profile"

export const metadata = {
  title: "Certifications & Licensing | Rehan Construction",
  description: "Licensed and certified to ensure safety, compliance, and quality in every project.",
}

export default function CertificationsPage() {

  const certs = [
    {
      title: "General Contractor License",
      authority: "State Contractor Licensing Board",
      description: "Authorized for commercial and residential projects.",
      logoSrc: "/certifications/general-contractor-license-logo.jpg",
      logoAlt: "General Contractor License Logo",
    },
    {
      title: "ISO 9001: Quality Management",
      authority: "International Organization for Standardization",
      description: "Quality management systems certification.",
      logoSrc: "/certifications/iso-9001-logo.png",
      logoAlt: "ISO 9001 Logo",
    },
    {
      title: "OSHA Safety Compliance",
      authority: "Occupational Safety and Health Administration",
      description: "Meets workplace safety and compliance standards.",
      logoSrc: "/certifications/osha-compliance-logo.jpg",
      logoAlt: "OSHA Compliance Logo",
    },
    {
      title: "LEED Accredited Professional",
      authority: "U.S. Green Building Council",
      description: "Sustainable building expertise and accreditation.",
      logoSrc: "/certifications/leed-ap-logo.jpg",
      logoAlt: "LEED AP Logo",
    },
    {
      title: "Electrical Contractor License",
      authority: "State Electrical Licensing Board",
      description: "Licensed for electrical systems installation.",
      logoSrc: "/certifications/electrical-contractor-license-logo.jpg",
      logoAlt: "Electrical Contractor License Logo",
    },
    {
      title: "Bonded & Insured",
      authority: "Independent Surety & Insurance Providers",
      description: "Project protection and liability coverage verified.",
      logoSrc: "/certifications/bonded-and-insured-badge.jpg",
      logoAlt: "Bonded and Insured Badge",
    },
  ]

  const memberships = [
    { name: "Member", org: "ABC Construction Association" },
    { name: "Member", org: "National Association of Home Builders" },
  ]

  return (
    <>
   
    <main
      className="mx-auto max-w-5xl px-4 py-4 flex flex-col gap-5"
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-[var(--page-heading)] leading-tight">Certifications & Licensing</h1>
        <p className="text-sm text-[var(--paragraph-color)] leading-tight max-w-3xl">
          We operate under proper licenses and recognized certifications to ensure compliance, safety, and quality on
          every project.
        </p>
      </header>

      <section aria-label="Certifications and Licenses" className="flex flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <CertCard key={i} {...c} />
          ))}
        </div>
      </section>

      <Memberships items={memberships} />
    </main>
     <CEOProfile />
    </>
  )
}
