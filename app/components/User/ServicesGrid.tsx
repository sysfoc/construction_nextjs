// "use client";
import React from "react";
import Image from "next/image";
import SlantedButton from "../General/buttons/SlantedButton";

export default function ServicesGrid() {
  const services = [
    {
      icon: "/services/service_01.png",
      title: "General",
      subtitle: "Construction",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: "/services/service_02.png",
      title: "Repair &",
      subtitle: "Painting",
      description:
        "The building opened in 2020 and includes more than 120+ flats",
    },
    {
      icon: "/services/service_03.png",
      title: "Apartment",
      subtitle: "Design",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: "/services/service_04.png",
      title: "Expert",
      subtitle: "Mechanical",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: "/services/service_05.png",
      title: "Architecture &",
      subtitle: "Building",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
  ];

  return (
    <div className=" py-12 dark:bg-gray-900">
      <div className="container mx-auto px-5  sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-5 relative group">
              {/* Icon and Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-black dark:text-gray-200 font-bold text-lg leading-tight">
                    {service.title}
                  </h3>
                  <h3 className="text-black dark:text-gray-200 font-bold text-lg leading-tight">
                    {service.subtitle}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {service.description}
              </p>

              {/* Diagonal Orange Line */}
              <div className="absolute bottom-0 right-0 w-24 h-4 bg-[var(--color-primary)] transform origin-left clip-bottom-side"></div>
            </div>
          ))}

          <div className="bg-white dark:bg-gray-800 p-6 flex items-center justify-center">
            <SlantedButton text="GET STARTED" />
          </div>
        </div>
      </div>
    </div>
  );
}