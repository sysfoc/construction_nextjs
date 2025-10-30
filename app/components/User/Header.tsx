"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import SolidButton from "../General/buttons/SolidButton";
import Link from "next/link";
import TopBanner from "./TopBanner";
import MobileSidebar from "./MobileSidebar";
import { useGeneralSettings } from "@/app/context/GeneralSettingsContext";
import Image from "next/image";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { settings } = useGeneralSettings();

  const navLinks = [
    {
      name: "Pages",
      sublinks: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      name: "Services",
      sublinks: [
        { name: "Construction", href: "/services/construction" },
        { name: "Renovation", href: "/services/renovation" },
        { name: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      name: "Projects",
      sublinks: [
        { name: "Ongoing", href: "/projects/ongoing" },
        { name: "Completed", href: "/projects/completed" },
        { name: "Gallery", href: "/projects/gallery" },
      ],
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full relative z-30">
      <TopBanner />
      {/* Main Header */}
      <div className="px-4 lg:-mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Diagonal background element */}
            <div className="hidden lg:block absolute inset-0 bg-header-background clip-diagonal1" />
            {/* Main header content */}
            <div className="relative flex items-center justify-between py-4 lg:py-4 px-4 lg:px-8 bg-header-background lg:bg-transparent">
              {/* Logo */}
              <div className="flex items-center gap-1 z-20">
                {settings?.logo && (
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src={settings.logo}
                      alt="Company Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-xl lg:text-2xl font-bold text-header-text">
                  {settings?.companyName}
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex flex-wrap justify-center gap-1 lg:gap-4 xl:gap-8 z-10">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center gap-1 text-header-text hover:text-primary font-medium transition-colors py-2 px-3 lg:px-4 rounded-lg hover:bg-gray-50 dark:bg-gray-900">
                      {link.name}
                      {link.sublinks && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {link.sublinks && activeDropdown === index && (
                      <div className="absolute top-full left-0 -mt-1 w-56 bg-background shadow-xl border border-border rounded-lg py-2 z-50">
                        {link.sublinks.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sublink.href}
                            className="block px-4 py-3 text-header-text hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-b border-border last:border-b-0"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block relative z-10">
                <SolidButton text="GET A QUOTE" />
              </div>

              {/* Mobile Header Right Section */}
              <div className="flex lg:hidden items-center gap-3 z-20">
                <div className="hidden sm:block bg-primary text-primary-foreground px-4 py-2 font-semibold cursor-pointer hover:opacity-90 transition-colors duration-200 text-sm rounded">
                  GET A QUOTE
                </div>

                <button
                  className="p-2 rounded-md text-header-text hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Sidebar Component */}
              <MobileSidebar
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                navLinks={navLinks}
                settings={settings}
              />

              <div className="hidden lg:block absolute bottom-0 right-0 w-64 h-16 bg-primary opacity-20 pointer-events-none z-0 clip-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}