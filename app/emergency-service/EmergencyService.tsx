"use client";
import { useEffect, useState } from "react";
import { isPageVisible } from "@/lib/api/pageVisibility";
import { useRouter } from "next/navigation";

export default function EmergencyService() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await isPageVisible("emergency-service");
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
    <main className="min-h-screen text-gray-900 dark:text-gray-100 px-6 py-16 flex items-center justify-center">
      <section className="max-w-3xl w-full border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#ff6600] mb-3 uppercase tracking-tight">
            Emergency Service Call
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base max-w-xl mx-auto">
            Need urgent help? Our emergency team is available 24/7 for critical
            repairs, structural inspections, and on-site assistance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <a
            href="tel:+923001234567"
            className="flex flex-col items-center justify-center border border-[#ff6600] rounded-xl py-8 px-6 hover:bg-[#ff6600] hover:text-white transition-all text-center"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-10 w-10 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.342 4.026a1 1 0 01-.272 1.031L9.414 10.414a16 16 0 006.172 6.172l1.673-1.673a1 1 0 011.031-.272l4.026 1.342A1 1 0 0122 16.72V20a2 2 0 01-2 2h-1C8.268 22 2 15.732 2 8V7a2 2 0 011-2z"
              />
            </svg>
            <span className="font-semibold text-lg">Call Now</span>
            <span className="text-sm opacity-80">+92 300 1234567</span>
          </a>

          <a
            href="mailto:emergency@example.com"
            className="flex flex-col items-center justify-center border border-[#ff6600] rounded-xl py-8 px-6 hover:bg-[#ff6600] hover:text-white transition-all text-center"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-10 w-10 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold text-lg">Email Support</span>
            <span className="text-sm opacity-80">emergency@example.com</span>
          </a>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                         rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                         focus:ring-[#ff6600] transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+92 300 1234567"
              className="w-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                         rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                         focus:ring-[#ff6600] transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="issue"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Emergency Type
            </label>
            <select
              id="issue"
              required
              className="w-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                         rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                         focus:ring-[#ff6600] transition-colors duration-200"
            >
              <option value="">Select an emergency type</option>
              <option>Structural Damage</option>
              <option>Electrical Failure</option>
              <option>Plumbing Leak</option>
              <option>Roof Collapse</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="details"
              rows={5}
              required
              placeholder="Briefly describe the issue and location..."
              className="w-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                         rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                         focus:ring-[#ff6600] transition-colors duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff6600] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all uppercase tracking-wide"
          >
            Request Emergency Help
          </button>
        </form>
      </section>
    </main>
  );
}
