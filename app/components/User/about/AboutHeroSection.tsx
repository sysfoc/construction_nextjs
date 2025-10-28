// app/about/components/AboutHeroSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutHeroSection() {
  return (
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
  );
}