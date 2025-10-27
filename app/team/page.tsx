import { ChevronsRight } from "lucide-react";
import TeamClient from "./TeamClient";

export const metadata = {
  title: "Our Team | Construction Company",
  description:
    "Meet our professional team with extensive experience in delivering successful construction projects.",
};

export default function TeamPage() {
  return (
    <>
      {" "}
      <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Our Team
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Team</span>
          </p>
        </div>
      </section>
      <TeamClient />
    </>
  );
}
