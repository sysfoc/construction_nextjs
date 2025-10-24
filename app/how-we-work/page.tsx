"use client";

import { ChevronsRight } from "lucide-react";
import { StepRow } from "@/app/components/User/how-we-work/step-row";
import { WorkProcessSection } from "@/app/components/User/how-we-work/WorkProcessSection";
import type { HowWeWorkData } from "@/lib/models/HowWeWork";
import { useEffect, useState } from "react";

export default function HowWeWorkPage() {
  const [steps, setSteps] = useState<HowWeWorkData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSteps() {
      try {
        const response = await fetch("/api/how-we-work", {
          cache: "no-store",
        });
        const data = await response.json();
        setSteps(data.steps || []);
      } catch (error) {
        console.error("Failed to fetch steps:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSteps();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

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
              key={s._id}
              index={i}
              title={s.title}
              description={s.description}
              imageSrc={s.imgSrc}
            />
          ))}
        </div>
      </main>
      <WorkProcessSection />
    </>
  );
}