"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      image: "/products/product_01.jpg",
      label: "NEW SALE",
      category: "CONSTRUCTION ACCESSORIES",
      title: "Heavy Duty Drill",
      price: "$234.00",
    },
    {
      image: "/products/product_02.jpg",
      label: "NEW SALE",
      category: "CONSTRUCTION ACCESSORIES",
      title: "Safety Helmet",
      price: "$35.00",
    },
    {
      image: "/products/product_03.jpg",
      label: "NEW SALE",
      category: "CONSTRUCTION ACCESSORIES",
      title: "Steel Hammer",
      price: "$229.00",
    },
    {
      image: "/products/product_03.jpg",
      label: "NEW SALE",
      category: "CONSTRUCTION ACCESSORIES",
      title: "Steel Hammer",
      price: "$229.00",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector(".product-card") as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(container).gap) || 20;
        const scrollAmount =
          direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full bg-[var(--color-background)] py-6 sm:py-8 md:py-10 flex justify-center items-center">
      <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-5xl lg:max-w-6xl px-8 sm:px-10 md:px-12">
        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card w-[200px] xs:w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] bg-[var(--color-header-background)] shadow-md border border-[var(--color-border)] flex-shrink-0 snap-start"
            >
              <div className="relative w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] flex items-center justify-center bg-[var(--color-background)]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 md:top-3 md:left-3 flex flex-col items-start gap-0.5 sm:gap-1">
                  <span className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[8px] xs:text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5">
                    {product.label}
                  </span>
                  <span className="bg-[var(--color-foreground)] text-[var(--color-primary-foreground)] text-[8px] xs:text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2.5 xs:p-3 sm:p-3.5 md:p-4">
                <h3 className="text-xs xs:text-[13px] sm:text-sm md:text-[15px] font-semibold text-[var(--color-header-text)] mb-0.5 sm:mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center mb-0.5 sm:mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-[14px] md:h-[14px] text-[var(--color-primary)] fill-[var(--color-primary)]"
                    />
                  ))}
                </div>
                <p className="text-xs xs:text-[13px] sm:text-sm md:text-[15px] font-bold text-[var(--color-heading)]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-[var(--color-primary-foreground)] p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-[var(--color-primary-foreground)] p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
