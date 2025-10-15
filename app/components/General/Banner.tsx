import React from "react";
import Image from "next/image";
import SlantedButton from "../General/buttons/SlantedButton";

const ConstructionCTA: React.FC = () => {
  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/worker_03.jpg"
          alt="Construction worker"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 tracking-wide">
          Construction Project
        </h2>
       <SlantedButton text="GET STARTED"/>
      </div>
    </div>
  );
};

export default ConstructionCTA;
