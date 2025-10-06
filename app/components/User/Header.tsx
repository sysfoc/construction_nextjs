"use client";

import { ChevronDown, Zap, MapPin, Mail, Menu, X } from "lucide-react";
import { GiHouse } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    {
      name: "Pages",
      sublinks: ["About Us", "Our Team", "Careers"],
    },
    {
      name: "Services",
      sublinks: ["Construction", "Renovation", "Consulting"],
    },
    {
      name: "Projects",
      sublinks: ["Ongoing", "Completed", "Gallery"],
    },
    {
      name: "News",
    },
    {
      name: "Contact",
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

  const handleMobileDropdown = (index: number) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full relative z-30">
      {/* Top Banner */}
      <div className="bg-black hidden sm:block text-primary-foreground py-2 px-4 lg:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2 sm:gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
            <Zap className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-xs sm:text-sm text-center sm:text-left">
              We Will go through all the stages of construction
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm text-center sm:text-left">
                Tariq Bin Ziad Colony, Street # 1 Sahiwal, Pakistan
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm">info@sysfoc.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 lg:-mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Diagonal background element */}
            <div className="hidden lg:block absolute inset-0 bg-header-background clip-diagonal1" />
            {/* Main header content */}
            <div className="relative flex items-center justify-between py-4 lg:py-4 px-4 lg:px-8 bg-header-background lg:bg-transparent">
              {/* Logo */}
              <div className="flex items-center gap-3 z-20">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary flex items-center justify-center transform rotate-45">
                  <GiHouse className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground transform -rotate-45" />
                </div>
                <span className="text-xl lg:text-2xl font-bold text-header-text">
                  Construct
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
                    <button className="flex items-center gap-1 text-header-text hover:text-primary font-medium transition-colors py-2 px-3 lg:px-4 rounded-lg hover:bg-gray-50">
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
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-3 text-header-text hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-b border-border last:border-b-0"
                          >
                            {sublink}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block relative z-10">
                <div className="bg-primary text-primary-foreground px-6 lg:px-8 py-3 font-semibold cursor-pointer hover:opacity-90 transition-colors duration-200 shadow-lg hover:shadow-xl clip-slant">
                  GET A QUOTE
                </div>
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
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>

              {isMobileMenuOpen && (
                <div
                  className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-0 left-0 w-full h-full"
                  onClick={closeMobileMenu}
                ></div>
              )}

              {/* Mobile Navigation Menu */}
              <div
                className={`
                lg:hidden fixed top-0 left-0 w-4/5 max-w-sm h-full bg-background z-40 transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                pt-8 pb-8 px-6 overflow-y-auto shadow-xl
              `}
              >
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center transform rotate-45">
                      <GiHouse className="w-5 h-5 text-primary-foreground transform -rotate-45" />
                    </div>
                    <span className="text-xl font-bold text-header-text">
                      Construct
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-md text-header-text hover:bg-gray-100"
                    onClick={closeMobileMenu}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index} className="border-b border-border pb-2">
                      {link.sublinks ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-left text-header-text hover:text-primary font-medium py-3 text-base"
                            onClick={() => handleMobileDropdown(index)}
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {activeDropdown === index && (
                            <div className="mt-1 ml-4 space-y-1">
                              {link.sublinks.map((sublink, subIndex) => (
                                <a
                                  key={subIndex}
                                  href="#"
                                  className="block py-2 px-3 text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-gray-50"
                                  onClick={closeMobileMenu}
                                >
                                  {sublink}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href="#"
                          className="block text-header-text hover:text-primary font-medium py-3 text-base"
                          onClick={closeMobileMenu}
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="hidden lg:block absolute bottom-0 right-0 w-64 h-16 bg-primary opacity-20 pointer-events-none z-0 clip-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
