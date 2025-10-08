"use client";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { ReactNode } from "react";
import Image from "next/image";
import SlantedButton from "../General/buttons/SlantedButton";


interface PricingCardProps {
  topLabel: string;
  price: string | number;
  billingInfo: ReactNode;
  description: string;
  imageSrc: string;
}

export default function PricingCard({
  topLabel,
  price,
  billingInfo,
  description,
  imageSrc,
}: PricingCardProps) {
  return (
    <div className="w-[280px] sm:w-[300px] p-2 overflow-hidden">
      {/* Top Diagonal Bar */}
      <div className="relative">
        <div className="absolute -top-3 left-10 w-[40%] h-full bg-[var(--color-primary)] -z-10 clip-top-bar"></div>
        <div className="bg-[var(--color-foreground)] h-20 text-[var(--color-primary-foreground)] font-semibold text-xs px-3 clip-top-bar flex items-center">
          {topLabel}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-[var(--color-foreground)]">
            {price}
          </span>
          <div className="text-sm text-[var(--color-paragraph)] leading-tight">
            {billingInfo}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[var(--color-border)] my-3"></div>

        {/* Description */}
        <p className="text-sm text-[var(--color-paragraph)] leading-snug">
          {description}
        </p>

        {/* Button */}
        <div className="mt-4">
         <SlantedButton text="GET STARTED" onClick={() => console.log(`${topLabel} plan clicked`)} />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full relative h-64">
        <Image
          src={imageSrc}
          alt="Construction worker"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
