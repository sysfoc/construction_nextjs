"use client";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative max-w-4xl z-20 ml-auto -mt-8">
      {/* Background with diagonal cut */}
      <div className="bg-gray-200 clip-diagonal">
        <div className="flex items-center justify-between px-4 lg:px-6 py-3">
          
          {/* Experience Section */}
          <div className="flex items-end gap-2 flex-shrink-0 ml-24"> 
            {/* ⬆ we add margin-left so text doesn’t overlap worker image */}
            <span className="text-5xl lg:text-6xl font-bold text-primary leading-none">25</span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Years of
              </span>
              <span className="text-xl lg:text-2xl font-bold text-black uppercase">
                Experience
              </span>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-700" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Our location</p>
              <p className="text-sm font-bold text-black">
                22 madi ave, new york
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
              <Mail className="w-4 h-4 text-gray-700" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Send us mail</p>
              <p className="text-sm font-bold text-primary">
                info@example.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Worker Image OUTSIDE of clip-diagonal */}
      <div className="absolute top-0 left-0 -mt-10 ml-4 w-20 h-20 lg:w-28 lg:h-28 z-20">
        <Image
          src="/Herosection/constructionImage_02.png"
          alt="Construction worker"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
