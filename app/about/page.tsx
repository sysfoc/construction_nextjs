"use client";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function ContractorHero() {
  const services = [
    {
      img: "/services_01.jpg",
      title: "Best Repair &\nPainting",
      desc: "There are many variations of passages of Lorem...",
    },
    {
      img: "/services_02.jpg",
      title: "Heavy\nEquipment",
      desc: "There are many variations of passages of Lorem...",
    },
    {
      img: "/services_03.jpg",
      title: "Apartment\nDesign",
      desc: "There are many variations of passages of Lorem...",
    },
  ];

  const teamMembers = [
    {
      img: "/Team/teamMember_01.png",
      name: "Marc Chiasson",
      role: "Head Railway Construction",
    },
    {
      img: "/Team/teamMember_02.png",
      name: "Marc Boucher",
      role: "Head Railway Construction",
    },
    {
      img: "/Team/teamMember_03.png",
      name: "Mitchel Johnson",
      role: "Head Railway Construction",
    },
  ];

  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start justify-around gap-4 lg:gap-6">
          {/* Left Content */}
          <div className="flex-1 w-full max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-0.5 h-2 bg-orange-500"></div>
                <div className="w-0.5 h-2 bg-orange-500"></div>
                <div className="w-0.5 h-2 bg-orange-500"></div>
              </div>
              <span className="text-orange-500 text-xs sm:text-sm font-medium">
                About Our Company
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
              A team of reliable and
              <br />
              experienced Contractors
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-snug mb-3 max-w-xl">
              Ipsam voluplatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia sit consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. am Neque porro dolor set quisquam est. qui dolorem
              ipsum quia dolor sit amet. consectetur, adipisci velit, sed quia
              non numquam
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
              <button className="bg-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium border-b-2 border-orange-500">
                Our Mission
              </button>
              <button className="bg-transparent px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-600">
                Our Vision
              </button>
              <button className="bg-transparent px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-600">
                Our Value
              </button>
            </div>

            {/* Mission Content */}
            <div className="bg-white border-l-4 border-orange-500 p-3 sm:p-4 mb-3 max-w-xl">
              <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                An IT firm or MSP who keeps your IT running smoothly at all
                times is like a plumber who fixes your pipes: that&apos;s what they
                are supposed to do. Many IT firms struggle to keep themselves
                and their IT from falling apart. We&apos;ve raised
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button className="bg-orange-500 text-white px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium uppercase w-full sm:w-auto">
                Learn More
              </button>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 leading-tight">
                    Want to Discuss:
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-tight">
                    +91(123)56789
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex-shrink-0 w-full lg:w-auto">
            <div className="relative w-full lg:w-80 xl:w-96 aspect-[4/5] rounded-tl-3xl overflow-hidden">
              <Image
                src="/team_01.jpg"
                alt="Construction team"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                25.
              </div>
              <div className="text-xs uppercase mt-0.5 leading-none">
                works of
              </div>
              <div className="text-xl sm:text-2xl font-bold uppercase leading-none">
                EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Images Grid */}
          <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-[70%] sm:w-[65%] h-[55%] rounded-tr-[40px] shadow-lg overflow-hidden z-10">
              <Image
                src="/team_02.jpg"
                alt="Construction team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[35%] left-[5%] w-[50%] h-[40%] rounded-tl-[40px] shadow-lg overflow-hidden z-20">
              <Image
                src="/team_03.jpg"
                alt="Construction workers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-tl-[40px] rounded-br-[40px] shadow-lg overflow-hidden z-30">
              <Image
                src="/team_04.jpg"
                alt="Construction worker"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 leading-tight">
                What We Do!
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-snug mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    World Wide Donation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Various industrial Applications.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Providing Solutions For Construction, Management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Engineers design and build the structure
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 leading-tight">
                What You Can Do in!
              </h2>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Certified & Awards winner
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Work with energetic team
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    Just Because You Work Hard You&apos;ll Be Successful.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-snug">
                    For all your construction needs!
                  </span>
                </li>
              </ul>

              <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wide shadow-md hover:shadow-lg">
                More Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-3 sm:p-4 text-center"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-3 rounded-tl-3xl overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 leading-tight"
                dangerouslySetInnerHTML={{
                  __html: service.title.replace(/\n/g, "<br />"),
                }}
              />
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-snug">
                {service.desc}
              </p>
              <button className="bg-gray-900 text-white w-full py-2 sm:py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <span className="text-sm sm:text-base">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-5 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
          <div className="bg-white border border-gray-200 px-4 py-2.5 text-center sm:text-left sm:rounded-l-full">
            <span className="text-orange-500 font-medium text-sm sm:text-base leading-tight">
              Offering High Quality Construction Solutions
            </span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full sm:rounded-l-none font-medium text-sm sm:text-base hover:bg-orange-600 transition-colors w-full sm:w-auto">
            Build Your Dream Now
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="relative h-[250px] mb-2 flex justify-center">
                <div className="relative h-full w-auto aspect-[3/4]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-base leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
