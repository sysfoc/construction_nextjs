"use client";
import { useEffect, useState } from "react";
import { isPageVisible } from "@/lib/api/pageVisibility";
import { useRouter } from "next/navigation";
import { ChevronsRight } from "lucide-react";

export default function JobApply() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await isPageVisible("jobs");
      setIsVisible(visible);
      if (!visible) {
        router.push("/not-found");
      }
    };
    checkVisibility();
  }, [router]);

  if (!isVisible) {
    return null;
  }
  return (
    <>
      <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Job Apply
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Job Apply</span>
          </p>
        </div>
      </section>
      <section className="my-20 flex items-center justify-center">
        <div className="px-4 w-full md:max-w-5xl">
          <div className="text-center">
            <span className="text-primary">Job Apply Now</span>
            <h2 className="text-3xl font-bold my-2">Apply for this Job</h2>
            <p className="mb-4">
              Integer iaculis ultrices velit nec tempor. Pellentesque aliquet
              est massa, sit amet tempor mi auctor nec.
            </p>
          </div>
          <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  autoComplete="on"
                  placeholder="First name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required
                  autoComplete="on"
                  placeholder="Last name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="on"
                  placeholder="Email address"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location">Location (city)</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  autoComplete="on"
                  placeholder="location"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="on"
                  placeholder="Phone"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  required
                  autoComplete="on"
                  placeholder="Position"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col md:col-span-2 gap-2">
                <label htmlFor="cv">Upload Cv</label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                />
              </div>
              <div className="flex flex-col md:col-span-2 gap-2">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={6}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder:dark:text-white outline-none"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg uppercase cursor-pointer"
              >
                submit now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
