// app/about/components/AboutWhatWeDoSection.tsx
"use client";
import React from "react";
import Image from "next/image";

export default function WhatWeDoSection() {
  return (
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
  );
}