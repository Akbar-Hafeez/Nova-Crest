"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/crowdfundinsider.png", alt: "Finextra" },
  { src: "/fintechtimes.webp", alt: "The Fintech Times" },
  { src: "/khaleej.webp", alt: "khaleej"  },
  { src:"/forbes.webp", alt: "forbes", },
  { src:"/Gulf.webp", alt: "Gulf" },
  
];

const FeaturedMarquee: React.FC = () => {
  return (
    <div className="w-full bg-colo pb-10 overflow-hidden">
      <h1 className="text-2xl font-bold text-center mb-8">Featured In</h1>

      <div className="relative flex overflow-hidden">
        {/* The marquee track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 min-w-[420px] max-w-[750px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={300}
                className="object-contain "
                
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMarquee;
