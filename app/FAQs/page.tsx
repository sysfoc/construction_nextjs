"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const AgencyFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [formData, setFormData] = useState({
    fastName: "",
    phoneNumber: "",
    emailAddress: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is Agency ?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "Nulla vitae est risus. Aenean aliquam dolor a massa",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "Pellentesque habitant morbi tristique senectus ?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "Habitant morbi tristique senectus ?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "What should be listed on a business card?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "Why we are best company?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "How the template process works?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
    {
      question: "Comapny mission & vision?",
      answer:
        "Improve efficiency, provide a better customer experience with modern technolo services available around improve efficiency, provide a better customer experience",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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
      <div className="max-w-5xl mx-auto bg-[var(--color-background)] text-[var(--color-foreground)] py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* ===== Top Section (Headings + Paragraph) ===== */}
          <div className="px-8 grid md:grid-cols-2 items-center mb-10">
            {/* Left side: small + main heading */}
            <div>
              <p className="text-[var(--color-primary)] text-sm font-medium mb-2">
                Great Experience in building
              </p>
              <h2 className="text-4xl font-bold text-[var(--color-page-heading)] leading-tight">
                Frequently Asked
                <br />
                Any Questions
              </h2>
            </div>

            {/* Right side: paragraph */}
            <div>
              <p className="text-[var(--color-paragraph)] text-sm leading-relaxed">
                Aliquam tempus libero eget arcu euismod. In bibendum nisl
                posuere. Donec gravida sem eu odio rhoncus viverra. In vel
                cursus ante.
              </p>
            </div>
          </div>

          {/* ===== Bottom Section (Images + FAQ) ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center gap-10">
            {/* Left Side - Images */}
            <div className="relative w-full">
              <div className="relative w-auto h-72 sm:w-full sm:h-96 mb-4">
                <Image
                  src="/FAQ/FAQ_01.png"
                  alt="Construction worker"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative mt-5 sm:right-20 sm:bottom-20 w-auto h-56 sm:w-full sm:h-72 sm:-mt-12">
                <Image
                  src="/FAQ/FAQ_02.png"
                  alt="Construction workers"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Side - FAQ */}
            <div className="w-full">
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[var(--color-border)]"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between py-3 text-left group"
                    >
                      <h3 className="text-base font-semibold text-[var(--color-header-text)] pr-4">
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 text-[var(--color-primary)] text-xl font-light">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[var(--color-paragraph)] text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[var(--color-header-background)] dark:bg-slate-900 py-5 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-10 shadow-sm">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-page-heading)] dark:text-white mb-3">
                Contact Me
              </h2>

              {/* Description */}
              <p className="text-[var(--color-paragraph)] dark:text-slate-300 text-sm md:text-base mb-8 max-w-3xl">
                In nec libero luctus, aliquet turpis at, vehicula nisl. Cras
                eget mauris in nisl tempus lobortis.
              </p>

              {/* Form Fields */}
              <div>
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="fastName"
                    placeholder="First name"
                    value={formData.fastName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 dark:focus:ring-slate-500 transition-all"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 dark:focus:ring-slate-500 transition-all"
                  />
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email address"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 dark:focus:ring-slate-500 transition-all"
                  />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full select-arrow px-5 py-4 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-sm text-gray-900 dark:text-white appearance-none"
                  >
                    <option value="">Select Service Type</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-4xl text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-0 resize-none transition-all"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-10 py-4 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-sm font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyFAQ;
