'use client';
import { useEffect, useState } from "react";
import { isPageVisible } from "@/lib/api/pageVisibility";
import { useRouter } from "next/navigation";

export default function BookService() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await isPageVisible("book-service");
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
    <main className="min-h-screen px-6 py-16 flex items-center justify-center">
      <section className="max-w-3xl w-full border border-gray-100 rounded-2xl shadow-md p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#ff6600] mb-3 tracking-tight uppercase">
            Book a Service
          </h1>
          <p className="text-base max-w-lg mx-auto">
            Schedule your construction or renovation service with our expert
            team. Fill in your details below and we’ll confirm your appointment
            promptly.
          </p>
        </div>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+92 300 1234567"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Service Type
            </label>
            <select
              id="service"
              required
              className="w-full border border-gray-300 dark:border-gray-700 
             bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
             rounded-lg px-4 py-3 
             focus:outline-none focus:ring-2 focus:ring-[#ff6600] 
             transition-colors duration-200"
            >
              <option value="">Select a service</option>
              <option>Residential Construction</option>
              <option>Commercial Renovation</option>
              <option>Site Inspection</option>
              <option>Material Supply</option>
              <option>Custom Project</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Preferred Date
            </label>
            <input
              id="date"
              type="date"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="details" className="block text-sm font-medium mb-1">
              Project Details
            </label>
            <textarea
              id="details"
              rows={5}
              required
              placeholder="Describe your project, location, and any specific requirements..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-[#ff6600] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
