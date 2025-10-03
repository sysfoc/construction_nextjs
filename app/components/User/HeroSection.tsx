"use client";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden -mt-20 lg:-mt-24">
      {/* Background Image */}
      <Image
        src="/Herosection/constructionImage_01.png"
        alt="Construction background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-opacity-40 z-[1]"></div>

      {/* Left Decorative Element - desktop only */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-24 bg-primary hidden lg:flex items-center justify-center z-[2]"
        style={{
          clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)",
        }}
      >
        <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
      </div>

      {/* Right Decorative Element - desktop only */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-24 bg-primary hidden lg:flex items-center justify-center z-[2]"
        style={{
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
        }}
      >
        <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-24 pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <p className="text-hero-subheading hidden lg:block text-sm lg:text-base font-semibold mb-4 uppercase tracking-wide">
            WELCOME YOU TO BUILDER
          </p>

          <h1 className="text-hero-heading text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8">
            We are Providing
            <br />
            Industry Roofing
            <br />
            Solution
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div
              className="bg-primary text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 font-semibold cursor-pointer hover:opacity-90 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)",
              }}
            >
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-3 bg-background px-5 py-3 lg:py-2 rounded-full shadow-lg">
              <div className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-paragraph font-medium">CALL NOW</p>
                <p className="text-foreground font-bold">+268 2158 2158</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔽 Mobile/Tablet Decorative Arrows */}
        <div className="flex justify-center gap-6 mt-8 lg:hidden pb-16 z-[2]">
          <div
            className="sm:w-16 sm:h-24 w-16 h-24 bg-primary flex items-center justify-center"
            style={{
              clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)",
            }}
          >
            <ArrowRight className="w-8 h-8 text-primary-foreground" />
          </div>
          <div
            className="sm:w-16 sm:h-24 w-16 h-24 bg-primary flex items-center justify-center"
            style={{
              clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
            }}
          >
            <ArrowRight className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
