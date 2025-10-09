// "use client";
import React from "react";
import Image from "next/image";
import { ChevronsRight, Phone } from "lucide-react";

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
    <div className="bg-background dark:bg-background -mt-20 md:-mt-10">
        <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            About Us
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>About Us</span>
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-10">
        <div className="flex flex-col lg:flex-row items-start justify-around gap-4 lg:gap-6">
          {/* Left Content */}
          <div className="flex-1 w-full max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-0.5 h-2 bg-primary"></div>
                <div className="w-0.5 h-2 bg-primary"></div>
                <div className="w-0.5 h-2 bg-primary"></div>
              </div>
              <span className="text-primary dark:text-primary text-xs sm:text-sm font-medium">
                About Our Company
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 text-[--page-heading] dark:text-white">
              A team of reliable and
              <br />
              experienced Contractors
            </h1>

            <p className="text-paragraph dark:text-gray-300 text-sm sm:text-base leading-snug mb-3 max-w-xl">
              Ipsam voluplatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia sit consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. am Neque porro dolor set quisquam est. qui dolorem
              ipsum quia dolor sit amet. consectetur, adipisci velit, sed quia
              non numquam
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
              <button className="bg-header-background dark:bg-header-background px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium border-b-2 border-primary hover:text-primary transition-colors text-header-text dark:text-header-text">
                Our Mission
              </button>
              <button className="bg-transparent px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-paragraph dark:text-paragraph hover:text-primary transition-colors">
                Our Vision
              </button>
              <button className="bg-transparent px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-paragraph dark:text-paragraph hover:text-primary transition-colors">
                Our Value
              </button>
            </div>

            {/* Mission Content */}
            <div className="bg-header-background dark:bg-header-background border-l-4 border-primary p-3 sm:p-4 mb-3 max-w-xl">
              <p className="text-paragraph dark:text-paragraph text-xs sm:text-sm leading-snug">
                An IT firm or MSP who keeps your IT running smoothly at all
                times is like a plumber who fixes your pipes: that&apos;s what
                they are supposed to do. Many IT firms struggle to keep
                themselves and their IT from falling apart. We&apos;ve raised
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button className="bg-primary text-primary-foreground px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium uppercase w-full sm:w-auto hover:opacity-90 transition-opacity">
                Learn More
              </button>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 hover:bg-primary hover:text-primary-foreground transition-all">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-paragraph dark:text-paragraph leading-tight">
                    Want to Discuss:
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-tight text-[--page-heading] dark:text-hero-heading">
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
                src="/team_01.png"
                alt="Construction team"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay with two-line text beside number */}
            <div className="absolute bottom-0 right-0 w-full bg-primary text-primary-foreground flex items-center px-4 py-2">
              <span className="text-5xl sm:text-6xl font-bold leading-none mr-2">
                25.
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm text-gray-800 font-bold uppercase">Years of</span>
                <span className="text-lg sm:text-xl font-bold uppercase">
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Images Grid */}
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1">
            <div className="absolute top-0 left-12 w-[75%] sm:w-[90%] h-[55%] rounded-3xl overflow-hidden z-10">
              <Image
                src="/team_02.png"
                alt="Construction team meeting"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[40%] right-[40%] lg:top-[45%] lg:right-[50%] w-[50%] h-[40%] rounded-3xl overflow-hidden z-20">
              <Image
                src="/team_03.png"
                alt="Construction workers"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[65%] right-[20%] lg:top-[70%] lg:right-[20%] w-[50%] h-[35%] overflow-hidden z-30">
              <Image
                src="/team_04.png"
                alt="Construction worker"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[--page-heading] dark:text-hero-heading leading-tight">
                What We Do!
              </h2>
              <p className="text-paragraph dark:text-paragraph text-sm sm:text-base leading-snug mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    World Wide Donation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Various industrial Applications.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Providing Solutions For Construction, Management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Engineers design and build the structure
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[--page-heading] dark:text-hero-heading leading-tight">
                What You Can Do in!
              </h2>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Certified & Awards winner
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Work with energetic team
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    Just Because You Work Hard You&apos;ll Be Successful.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                  <span className="text-header-text dark:text-header-text text-sm sm:text-base leading-snug">
                    For all your construction needs!
                  </span>
                </li>
              </ul>

              <button className="bg-primary hover:opacity-90 transition-opacity text-primary-foreground px-6 py-2.5 text-sm font-semibold uppercase tracking-wide shadow-md hover:shadow-lg">
                More Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-header-background dark:bg-header-background border-2 border-dashed border-border dark:border-border rounded-b-[5rem] p-3 sm:p-4 text-center flex flex-col justify-between h-[420px] overflow-hidden transition-colors"
              >
                {/* Image Wrapper */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 w-20 h-28 sm:w-24 sm:h-32 lg:w-28 lg:h-36 overflow-visible">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-contain object-top"
                  />
                </div>

                {/* Content */}
                <div className="mt-32 px-2">
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-5 sm:mb-6 leading-tight text-[--page-heading] dark:text-hero-heading"
                    dangerouslySetInnerHTML={{
                      __html: service.title.replace(/\n/g, "<br />"),
                    }}
                  />
                  <p className="text-paragraph dark:text-paragraph text-xs sm:text-sm mb-8 sm:mb-10 leading-snug">
                    {service.desc}
                  </p>
                </div>

                {/* Button */}
                <button className="bg-header-text dark:bg-heading text-primary-foreground w-[80%] mx-auto py-2 sm:py-2.5 mb-5 rounded-t-full hover:bg-primary transition-colors">
                  <span className="text-sm sm:text-base">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-5 sm:mt-6 lg:mt-8 flex justify-center">
          <div className="flex flex-col sm:flex-row items-stretch border-2 border-dashed border-border dark:border-border rounded-r-full overflow-hidden transition-colors">
            {/* Left Text Box */}
            <div className="bg-header-background dark:bg-header-background px-4 py-2.5 text-center sm:text-left flex items-center justify-center">
              <span className="text-primary dark:text-primary font-medium text-sm sm:text-base leading-tight">
                Offering High Quality Construction Solutions
              </span>
            </div>

            {/* Right Button */}
            <button className="bg-primary text-primary-foreground px-6 py-2.5 font-medium text-sm sm:text-base hover:opacity-90 transition-opacity">
              Build Your Dream Now
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/bgTeam.jpg"
            alt="Team Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Team Cards Section */}
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 -mt-52 py-6 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 lg:gap-0">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-start group">
                {/* Image + White Background */}
                <div className="relative h-[280px] mb-4 w-[80%]">
                  <div className="absolute bg-white dark:bg-header-background rounded-t-[4rem] w-[125%] h-[80%] top-[20%] left-[-2.5%] "></div>
                  <div className="relative h-[280px] w-auto aspect-[3/4] z-10 mx-auto">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Name + Role */}
                <div className="bg-gray-200 text-gray-800 relative top-2 left-[-2%] px-3 py-3 -mt-6 rounded-bl-3xl w-[65%] text-left ">
                  <h3 className="text-sm font-bold leading-tight ">
                    {member.name}
                  </h3>
                  <p className="text-xs leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-header-background dark:bg-header-background py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[200px] bg-primary mb-2 overflow-hidden rounded-tl-[80px] rounded-tr-lg">
                <Image
                  src="/services/service_06.png"
                  alt="Finding hidden Gems of this sort to play creativity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Author Info Overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-header-background dark:bg-header-background">
                    <Image
                      src="/About/worker.jpg"
                      alt="BUILDEXO"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-primary-foreground">
                    <p className="text-xs font-medium opacity-80">BY POST</p>
                    <p className="text-sm font-bold">CONSTRUCT</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4">
                <div className="flex items-center gap-2">
                  <span className="text-primary dark:text-primary text-xs font-bold tracking-wide">
                    LATEST POST
                  </span>
                  <span className="text-primary dark:text-primary text-xs font-bold">
                    /
                  </span>
                  <span className="text-primary dark:text-primary text-xs font-bold tracking-wide">
                    JULY 26, 2023
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[--page-heading] dark:text-hero-heading leading-snug group-hover:text-primary transition-colors">
                  Finding hidden Gems of this sort to play creativity
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[200px] bg-primary mb-2 overflow-hidden rounded-tr-[80px] rounded-tl-lg">
                <Image
                  src="/services/service_06.png"
                  alt="The rest of us Avoid Common Issues to get stuck"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Author Info Overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-header-background dark:bg-header-background">
                    <Image
                      src="/About/worker.jpg"
                      alt="BUILDEXO"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-primary-foreground">
                    <p className="text-xs font-medium opacity-80">BY POST</p>
                    <p className="text-sm font-bold">CONSTRUCT</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4">
                <div className="flex items-center gap-2">
                  <span className="text-primary dark:text-primary text-xs font-bold tracking-wide">
                    LATEST POST
                  </span>
                  <span className="text-primary dark:text-primary text-xs font-bold">
                    /
                  </span>
                  <span className="text-primary dark:text-primary text-xs font-bold tracking-wide">
                    JULY 25, 2023
                  </span>
                </div>
                <h3 className=" text-lg md:text-xl font-bold text-[--page-heading] dark:text-hero-heading leading-snug group-hover:text-primary transition-colors">
                  The rest of us Avoid Common Issues to get stuck
                </h3>
              </div>
            </div>
          </div>

          {/* More Explore Button */}
          <div className="flex justify-center">
            <button className="bg-primary hover:opacity-90 text-primary-foreground font-bold text-sm tracking-wide px-10 py-4 rounded transition-opacity uppercase">
              MORE EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
