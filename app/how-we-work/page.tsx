import { ChevronsRight } from "lucide-react";
import { StepRow } from "../components/User/how-we-work/step-row";
import { WorkProcessSection } from "../components/User/how-we-work/WorkProcessSection";


export const metadata = {
  title: "How We Work | Construction Process",
  description: "Learn about our step-by-step construction process from consultation to final handover.",
}


export default function HowWeWorkPage() {
  const steps = [
    {
      step: 1,
      title: "Consultation & Site Review",
      description:
        "We clarify objectives, budget, and constraints, then conduct a focused site assessment to inform early decisions.",
      imgSrc: "/how-we-work/construction-site-meeting.jpg",
      imgAlt: "Team conducting site consultation",
    },
    {
      step: 2,
      title: "Design & Planning",
      description:
        "Our team finalizes drawings, materials, and milestones with a precise schedule for efficient execution.",
      imgSrc: "/how-we-work/blueprints-and-planning.jpg",
      imgAlt: "Blueprints and planning documents",
    },
    {
      step: 3,
      title: "Permits & Procurement",
      description:
        "We handle approvals and source materials on time, minimizing delays and ensuring compliance.",
      imgSrc: "/how-we-work/permits-and-materials.jpg",
      imgAlt: "Permits and materials procurement",
    },
    {
      step: 4,
      title: "Construction",
      description:
        "Strict site coordination and quality control keep the build on schedule with consistent progress updates.",
      imgSrc: "/how-we-work/on-site-construction.jpg",
      imgAlt: "Active construction site",
    },
    {
      step: 5,
      title: "Inspection & Handover",
      description:
        "We complete inspections, address punch lists, and hand over a finished build ready for operation.",
      imgSrc: "/how-we-work/final-inspection-handover.jpg",
      imgAlt: "Final inspection and handover",
    },
  ];

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

      <main className="mx-auto w-full max-w-4xl px-3 py-5">
        {/* Compact header */}
        <header className="m-3">
          <h1 className="mt-1 font-semibold leading-tight text-xl text-[var(--page-heading,_var(--foreground))]">
            How We Work
          </h1>
          <p className="mt-1 text-sm leading-tight text-[var(--paragraph-color,_var(--foreground))]">
            A direct, efficient, and accountable process for reliable project
            delivery.
          </p>
        </header>

        {/* Steps: alternating number/content layout with compact spacing */}
        <div className="mt-3 flex flex-col gap-2">
          {steps.map((s, i) => (
            <StepRow
              key={s.step}
              index={i}
              title={s.title}
              description={s.description}
              imageSrc={s.imgSrc}
              imageAlt={s.imgAlt}
            />
          ))}
        </div>
      </main>
      <WorkProcessSection />
    </>
  );
}
