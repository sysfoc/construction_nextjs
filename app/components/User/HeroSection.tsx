// app/components/User/HeroSection.tsx
"use client";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import SolidButton from "../General/buttons/SolidButton";
import HeroBanner from "./HeroBanner";
import Link from "next/link";

interface Slide {
  id: string;
  image: string;
  heading: string;
  buttonText: string;
  buttonUrl: string;
}

export default function HeroSection() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await fetch("/api/hero-slides");
      const data = await response.json();
      if (response.ok && data.slides.length > 0) {
        setSlides(data.slides);
      }
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide =
    slides.length > 0
      ? slides[currentIndex]
      : {
          id: "",
          image: "/Herosection/constructionImage_01.png",
          heading: "We are Providing\nIndustry Roofing\nSolution",
          buttonText: "GET STARTED",
          buttonUrl: "/get-started",
        };

  return (
    <>
      <div className="relative w-full h-screen min-h-[650px] overflow-hidden -mt-20 lg:-mt-24">
        {/* Background Image */}
        <Image
          src={currentSlide.image}
          alt="Construction background"
          fill
          priority
          fetchPriority="high"
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-opacity-40 z-[1]"></div>

        {/* Left Decorative Element - desktop only */}
        <button
          onClick={handlePrev}
          disabled={slides.length <= 1}
          className="absolute left-0 top-1/2 z-50 -translate-y-1/2 w-16 h-24 bg-primary hidden lg:flex items-center justify-center clip-left-arrow cursor-pointer"
        >
          <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground rotate-180" />
        </button>

        {/* Right Decorative Element - desktop only */}
        <button
          onClick={handleNext}
          disabled={slides.length <= 1}
          className="absolute right-0 top-1/2 z-50 -translate-y-1/2 w-16 h-24 bg-primary hidden lg:flex items-center justify-center clip-right-arrow cursor-pointer"
        >
          <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
        </button>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-24 pt-20 lg:pt-24">
          <div className="max-w-2xl">
            <p className="text-hero-subheading hidden lg:block text-sm lg:text-base font-semibold mb-4 uppercase tracking-wide">
              WELCOME YOU TO BUILDER
            </p>

            <h1 className="text-hero-heading text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8">
              {currentSlide.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < currentSlide.heading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Link href={currentSlide.buttonUrl}>
                <SolidButton text={currentSlide.buttonText} />
              </Link>

              <div className="flex items-center gap-3 bg-background px-5 py-3 lg:py-2 rounded-full shadow-lg">
                <div className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-paragraph font-medium">CALL NOW</p>
                  <p className="text-foreground font-bold">+268 2158 1234</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Decorative Arrows */}
          <div className="flex justify-center gap-6 mt-8 lg:hidden pb-16 z-[2]">
            <button
              onClick={handlePrev}
              disabled={slides.length <= 1}
              className="sm:w-16 sm:h-24 w-16 h-24 bg-primary flex items-center justify-center clip-left-arrow cursor-pointer"
            >
              <ArrowRight className="w-8 h-8 text-primary-foreground rotate-180" />
            </button>
            <button
              onClick={handleNext}
              disabled={slides.length <= 1}
              className="sm:w-16 sm:h-24 w-16 h-24 bg-primary flex items-center justify-center clip-right-arrow cursor-pointer"
            >
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
      <HeroBanner />
    </>
  );
}
