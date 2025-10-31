import { isPageVisible } from "@/lib/api/pageVisibility";
import AboutHeroSection from "@/app/components/User/about/AboutHeroSection";
import WhatWeDoSection from "@/app/components/User/about/WhatWeDoSection";
import ServicesAndTeamSection from "@/app/components/User/about/ServicesAndTeamSection";

async function getAboutData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/about`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

async function checkPageVisibility() {
  try {
    const visible = await isPageVisible("about");
    return visible;
  } catch (error) {
    console.error("Error checking visibility:", error);
    return false;
  }
}

export default async function AboutPage() {
  const [isVisible, aboutData] = await Promise.all([
    checkPageVisibility(),
    getAboutData(),
  ]);

  if (!isVisible) {
    return null;
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-gray-500">Unable to load about page content</p>
      </div>
    );
  }

  return (
    <div className="bg-background dark:bg-background">
      <AboutHeroSection data={aboutData.hero} />
      <WhatWeDoSection data={aboutData.whatWeDo} />
      <ServicesAndTeamSection data={aboutData.services} />
    </div>
  );
}
