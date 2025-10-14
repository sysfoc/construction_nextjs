"use client";

import Image from "next/image";

export default function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 – Quality Management",
      description:
        "Certified for maintaining high-quality management standards across all construction projects, ensuring excellence and reliability.",
      image: "/certificates/img_01.webp",
    },
    {
      id: 2,
      title: "OSHA Safety Compliance",
      description:
        "Recognized for following Occupational Safety and Health Administration (OSHA) guidelines to maintain a safe work environment.",
      image: "/certificates/img_02.webp",
    },
    {
      id: 3,
      title: "Green Building Certification",
      description:
        "Awarded for implementing eco-friendly building practices, minimizing environmental impact during construction.",
      image: "/certificates/img_03.webp",
    },
  ];

  return (
    <main className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16'>
      <section className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold text-[#ff6600] uppercase tracking-tight mb-4'>
            Certifications & Licenses
          </h1>
          <p className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
            Our certifications reflect our dedication to safety, quality, and
            sustainability in every construction project.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all'
            >
              <div className='relative h-56 w-full overflow-hidden'>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-[#ff6600] mb-2'>
                  {cert.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {certificates.length === 0 && (
          <div className='text-center mt-10 text-gray-500 dark:text-gray-400'>
            No certifications available at this moment.
          </div>
        )}
      </section>
    </main>
  );
}
