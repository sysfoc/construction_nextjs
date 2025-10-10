import React from 'react';
import Image from 'next/image';
import { MapPin, Hammer, Crown, ChevronsRight } from 'lucide-react';

// Step Component
interface StepProps {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  isReversed?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, iconSrc, isReversed = false }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Large background number */}
      {/* <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[140px] font-bold text-gray-100 leading-none pointer-events-none z-0 dark:text-[var(--background)]">
        {number}
      </div> */}
      
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {isReversed ? (
          <>
            {/* Icon at top */}
            <div className="mb-8 mt-12">
              <Image src={iconSrc} alt={title} width={52} height={52} className="w-12 h-12 object-contain" />
            </div>
            
            {/* Orange horizontal line */}
            <div className="w-28 h-[3px] bg-[var(--primary)] mb-8"></div>
            
            {/* Content at bottom */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-[var(--page-heading)] mb-4 dark:text-[var(--foreground)]">{title}</h3>
              <p className="text-sm text-[var(--paragraph-color)] leading-relaxed px-2">{description}</p>
            </div>
          </>
        ) : (
          <>
            {/* Content at top */}
            <div className="text-center mt-12 mb-8">
              <h3 className="text-xl font-bold text-[var(--page-heading)] mb-4 dark:text-[var(--foreground)]">{title}</h3>
              <p className="text-sm text-[var(--paragraph-color)] leading-relaxed px-2">{description}</p>
            </div>
            
            {/* Orange horizontal line */}
            <div className="w-28 h-[3px] bg-[var(--primary)] mb-8"></div>
            
            {/* Icon at bottom */}
            <div>
              <Image src={iconSrc} alt={title} width={52} height={52} className="w-12 h-12 object-contain" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Great Solutions',
      description: 'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
      iconSrc: '/whyChooseUs/Vector (1).png',
      isReversed: false
    },
    {
      number: '02',
      title: 'Advice & guides',
      description: 'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
      iconSrc: '/whyChooseUs/Vector (2).png',
      isReversed: true
    },
    {
      number: '03',
      title: 'Design Ideas',
      description: 'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
      iconSrc: '/whyChooseUs/Vector (3).png',
      isReversed: false
    },
    {
      number: '04',
      title: 'Product Research',
      description: 'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
      iconSrc: '/whyChooseUs/Vector (4).png',
      isReversed: true
    }
  ];

  return (
    <div className="w-full bg-[var(--background)] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Dotted connecting lines */}
        <div className="relative hidden lg:block">
          <svg className="absolute top-40 left-0 w-full h-24 pointer-events-none" style={{ zIndex: 1 }}>
            <path
              d="M 200 50 Q 350 10, 500 50 Q 650 90, 800 50"
              stroke="var(--border-color)"
              strokeWidth="2"
              strokeDasharray="4,6"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              iconSrc={step.iconSrc}
              isReversed={step.isReversed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Banner Section Component
const BannerSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[240px] md:min-h-[280px] lg:min-h-[340px] overflow-hidden my-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whyChooseUs/bg.jpg"
          alt="Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto h-full min-h-[240px] md:min-h-[280px] lg:min-h-[340px] px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 xl:gap-20">
          {/* Workers Image */}
          <div className="relative w-full lg:w-[40%] flex justify-center lg:justify-start">
            <div className="relative w-2/3 sm:w-[230px] md:w-[260px] lg:w-[300px] aspect-[4/5]">
              <Image
                src="/whyChooseUs/workers.png"
                alt="Construction Workers"
                fill
                className="object-contain object-bottom"
                priority
              />

              {/* 25 Years Badge */}
              <div className="absolute bottom-4 left-4 bg-[var(--background)] rounded-full px-3 sm:px-6 sm:py-3 py-2 shadow-xl border border-[var(--border-color)]">
                <div className="flex gap-1 leading-tight">
                  <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[var(--primary)]">
                    25
                  </div>
                  <div className="text-[10px] text-start md:text-xs font-semibold text-[var(--paragraph-color)] uppercase tracking-widest">
                    Years of
                    <br />
                    <span className="text-xs sm:text-2xl">Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[50%] pb-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div>
              <p className="text-sm md:text-base mb-4 md:mb-5 leading-relaxed text-white">
                Our development center offers the best
                <br className="hidden lg:block" />
                expertise and reliable resources.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-5 mb-5">
                {/* Stat 1 */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/serviceDetail/serviceDetail_01.png"
                    alt="Quality assurance"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-bold text-[var(--primary)]">
                      434+
                    </div>
                    <div className="text-[10px] md:text-xs text-white">
                      Quality assurance
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/serviceDetail/serviceDetail_02.png"
                    alt="Projects"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-bold text-[var(--primary)]">
                      60+
                    </div>
                    <div className="text-[10px] md:text-xs text-white">
                      Completed Projects
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-semibold px-5 md:px-6 py-2 rounded transition duration-300 uppercase text-[10px] md:text-xs tracking-wide">
                More Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
interface ProjectCardProps {
  number: string;
  title: string;
  budget: string;
  location: string;
  builder: string;
  imageSrc: string;
  layout: "left-content" | "right-content";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  budget,
  location,
  builder,
  imageSrc,
  layout,
}) => {
  const contentSection = (
    <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-3 sm:px-4 py-4 sm:py-5 bg-gray-50 relative min-h-[120px] md:min-h-[140px] dark:bg-[var(--background)]">
      {/* Large background number */}
      {/* <div className="absolute top-1 sm:top-2 left-1 sm:left-2 text-[50px] sm:text-[60px] md:text-[70px] font-bold text-white opacity-60 leading-none pointer-events-none dark:text-[var(--border-color)]">
        {number}
      </div> */}

      <div className="relative z-10 w-full text-center md:text-center">
        <h2 className="text-base sm:text-lg font-bold text-[var(--page-heading)] mb-1.5 sm:mb-2 leading-tight px-1 dark:text-[var(--foreground)]">
          {title}
        </h2>

        <div className="flex items-center justify-center gap-1.5 text-[var(--paragraph-color)] text-xs">
          <Crown className="w-3.5 h-3.5 text-[var(--primary)] flex-shrink-0" fill="currentColor" />
          <span className="font-semibold">Budget:</span>
          <span className="whitespace-nowrap">{budget}</span>
        </div>
      </div>
    </div>
  );

  const infoSection = (
    <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-3 sm:px-4 py-4 sm:py-5 bg-[var(--background)] min-h-[100px] md:min-h-[140px]">
      <div className="space-y-2.5 sm:space-y-3 text-center w-full">
        <div className="flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-[var(--page-heading)] text-xs mb-0.5 dark:text-[var(--foreground)]">
              Location:
            </p>
            <p className="text-[var(--paragraph-color)] text-xs">{location}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5">
          <Hammer className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-[var(--page-heading)] text-xs mb-0.5 dark:text-[var(--foreground)]">
              Builder:
            </p>
            <p className="text-[var(--paragraph-color)] text-xs">{builder}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className="w-full md:w-1/3 relative h-[180px] sm:h-[200px] md:h-full md:min-h-[140px]">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
  );

  return (
    <div className="bg-[var(--background)] rounded-lg overflow-hidden shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:h-[140px]">
        {layout === "left-content" ? (
          <>
            {contentSection}
            {infoSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {infoSection}
            {contentSection}
          </>
        )}
      </div>
    </div>
  );
};

const ProjectCards: React.FC = () => {
  const projects = [
    {
      number: "01",
      title: "Develop Comprehensive",
      budget: "$10,500.00 USD",
      location: "United State",
      builder: "Boxro Thamos",
      imageSrc: "/whyChooseUs/worker_01.png",
      layout: "left-content" as const,
    },
    {
      number: "02",
      title: "Work with Energetic Team",
      budget: "$10,500.00 USD",
      location: "United State",
      builder: "Boxro Thamos",
      imageSrc: "/whyChooseUs/worker_02.png",
      layout: "right-content" as const,
    },
    {
      number: "03",
      title: "Project Horizon Redevelopment",
      budget: "$10,500.00 USD",
      location: "United State",
      builder: "Boxro Thamos",
      imageSrc: "/whyChooseUs/worker_03.png",
      layout: "left-content" as const,
    },
  ];

  return (
    <div className="w-full bg-[var(--background)] py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            number={project.number}
            title={project.title}
            budget={project.budget}
            location={project.location}
            builder={project.builder}
            imageSrc={project.imageSrc}
            layout={project.layout}
          />
        ))}
      </div>
    </div>
  );
};

// Main Page Component
const Page: React.FC = () => {
  return (
    <div className="w-full">
       <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[#161D39]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Why Choose Us
          </h1>
          <p className="text-lg font-light text-gray-200">
            Home <ChevronsRight className="inline-block w-4 h-4 text-primary" />{" "}
            <span>Why Choose Us</span>
          </p>
        </div>
      </section>

      <ProcessSteps />
      <BannerSection />
      <ProjectCards />
    </div>
  );
};

export default Page;
