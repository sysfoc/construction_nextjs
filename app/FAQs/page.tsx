import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import { ChevronsRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | Construction Expertise",
  description:
    "Find answers to the most frequently asked questions about our construction services and offerings.",
};

export default function Page() {
  return (
    <>
      <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            FAQs
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>FAQs</span>
          </p>
        </div>
      </section>
      <FaqClient />
    </>
  );
}
