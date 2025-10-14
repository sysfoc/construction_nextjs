import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";


export const metadata = {
  title: "Testimonials | Client Feedback",
  description: "Read feedback from our clients and partners who trust our construction services and project delivery.",
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  feedback: string;
  date: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Anderson",
    role: "CEO",
    company: "TechVision Inc",
    image: "/testimonials/customer_01.png",
    rating: 5,
    feedback:
      "Outstanding service and exceptional quality. The team delivered beyond our expectations and helped transform our business operations completely.",
    date: "March 2025",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "InnovateCo",
    image: "/testimonials/customer_02.png",
    rating: 5,
    feedback:
      "Professional, efficient, and results-driven. Their expertise and dedication made our project a tremendous success from start to finish.",
    date: "February 2025",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandHub",
    image: "/testimonials/customer_03.png",
    rating: 5,
    feedback:
      "Incredible attention to detail and customer service. They understood our vision perfectly and brought it to life with precision.",
    date: "January 2025",
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Founder",
    company: "StartupLabs",
    image: "/testimonials/customer_04.png",
    rating: 5,
    feedback:
      "A game-changer for our company. Their innovative approach and commitment to excellence set them apart from the competition.",
    date: "March 2025",
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Rebecca Thompson",
    role: "Operations Head",
    company: "GlobalTech",
    image: "/testimonials/customer_05.png",
    rating: 5,
    feedback:
      "Reliable, professional, and highly skilled. Working with them has been one of the best decisions we've made for our business.",
    date: "February 2025",
    location: "Boston, MA",
  },
  {
    id: 6,
    name: "David Park",
    role: "CTO",
    company: "DataStream",
    image: "/testimonials/customer_06.png",
    rating: 5,
    feedback:
      "Excellence in every aspect. Their technical expertise and proactive communication ensured our project was delivered flawlessly.",
    date: "January 2025",
    location: "Los Angeles, CA",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-[var(--background)] rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/20 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--background)] flex items-center justify-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[var(--foreground)] text-lg mb-0.5">
              {testimonial.name}
            </h3>
            <p className="text-sm text-[var(--paragraph-color)] mb-1">
              {testimonial.role}
            </p>
            <div className="flex items-center gap-1.5 mb-2">
              <svg
                className="w-4 h-4 text-[var(--primary)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-[var(--foreground)] text-sm">
                {testimonial.company}
              </span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-[var(--primary)]"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pl-3 border-l-4 border-[var(--primary)] mb-4">
          <p className="text-[var(--paragraph-color)] text-sm leading-relaxed">
            {testimonial.feedback}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1 text-xs text-[var(--paragraph-color)]">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {testimonial.location}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--paragraph-color)]">
              {testimonial.date}
            </span>
            <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">
              ✓ Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerTestimonials: React.FC = () => {
  return (
    <>
        <section className="relative -mt-20 lg:-mt-10 bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            Testimonials
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>Testimonials</span>
          </p>
        </div>
      </section>

      <div className="bg-[var(--background)] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[var(--page-heading)] mb-2">
              Trusted by Industry Leaders
            </h2>
            <p className="text-[var(--paragraph-color)] text-base max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to
              say about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="relative bg-[var(--primary)] rounded-2xl p-8 text-center shadow-xl overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-[var(--primary-foreground)] text-2xl font-bold mb-2">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-base text-[var(--primary-foreground)] mb-5">
                Over 500+ satisfied clients worldwide trust us with their business
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="bg-[var(--primary-foreground)] text-[var(--primary)] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[var(--background)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerTestimonials;
