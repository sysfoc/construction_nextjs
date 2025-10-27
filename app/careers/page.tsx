import { ChevronsRight } from "lucide-react"
import CareersClient from "./CareersClient"

export const metadata = {
  title: "Careers",
  description: "Explore current career opportunities and join our team.",
}

export default function CareersPage() {
  return(<>
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
      <CareersClient />
  </>)
}
