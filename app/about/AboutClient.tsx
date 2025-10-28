// app/about/AboutClient.tsx
"use client";
import React, { useEffect, useState } from "react";
import { isPageVisible } from "@/lib/api/pageVisibility";
import { useRouter } from "next/navigation";
import AboutHeroSection from "@/app/components/User/about/AboutHeroSection";
import WhatWeDoSection from "@/app/components/User/about/WhatWeDoSection";
import ServicesAndTeam from "@/app/components/User/about/ServicesAndTeam";
import BlogSection from "@/app/components/User/about/BlogSection";

export default function AboutClient() {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = async () => {
      try {
        const visible = await isPageVisible("about");
        setIsVisible(visible);
        if (!visible) {
          router.push("/not-found");
        }
      } catch (error) {
        console.error("Error checking visibility:", error);
        setIsVisible(false);
        router.push("/not-found");
      } finally {
        setIsChecking(false);
      }
    };
    checkVisibility();
  }, [router]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-background dark:bg-background">

      <AboutHeroSection />

      <WhatWeDoSection />

      <ServicesAndTeam />

      <BlogSection />
    </div>
  );
}