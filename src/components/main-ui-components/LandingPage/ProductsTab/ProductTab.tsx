"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductTab() {
  const [currentTab, setCurrentTab] = useState<string>("Stablecoin infrastructure");

  // ✅ Keep tab names stable
  const tabsName = useMemo(
    () => [
      "Stablecoin infrastructure",
      "Onramp / offramp",
      "Digital assets as a Service",
      "Payments",
      "OTC",
    ],
    []
  );

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const didMount = useRef(false); // ✅ track first render

  // ✅ Always scroll to top on page load (only once)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Sync active tab with scroll
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentTab(tabsName[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsName]);

  // ✅ Auto scroll tab button into view (but skip on initial mount)
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return; // skip on first render
    }

    const activeIndex = tabsName.indexOf(currentTab);
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      tabRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [currentTab, tabsName]);

  const content: Record<
    string,
    { sub: string; heading: string; paragraph: string; image: React.ReactNode }
  > = {
    "Stablecoin infrastructure": {
      sub: "Stablecoin",
      heading: "Trusted Stablecoin Framework",
      paragraph:
        "Build, scale, and manage stablecoins with high liquidity and transparent compliance frameworks.",
      image: (
        <Image
          src="/stableCoin.png"
          alt="Stablecoin infrastructure illustration"
          width={400}
          height={380}
          className="object-contain"
        />
      ),
    },
    "Onramp / offramp": {
      sub: "Onramp/Offramp",
      heading: "Seamless Fiat ↔ Crypto Conversion",
      paragraph:
        "Move between fiat and crypto effortlessly. Empower users with easy deposit and withdrawal options.",
      image: (
        <Image
          src="/onRamp.png"
          alt="Onramp offramp illustration"
          width={300}
          height={310}
          className="object-contain"
        />
      ),
    },
    "Digital assets as a Service": {
      sub: "Digital Assets as a Service",
      heading: "Seamless Crypto Integration with NOVA",
      paragraph:
        "Add trading, rewards, custody, and lending to your app in minutes. Nova APIs handle infrastructure, compliance, and security, so you can focus on growth.",
      image: (
        <Image
          src="/daas.png"
          alt="Digital assets illustration"
          width={550}
          height={450}
          className="object-contain"
        />
      ),
    },
    Payments: {
      sub: "Payments",
      heading: "Frictionless Payments Anywhere",
      paragraph:
        "Accept global payments with low fees and instant settlement. Make every transaction fast and borderless.",
      image: (
        <Image
          src="/payment.png"
          alt="Payments illustration"
          width={380}
          height={350}
          className="object-contain"
        />
      ),
    },
    OTC: {
      sub: "OTC",
      heading: "Secure OTC Trading",
      paragraph:
        "High-volume crypto trading with tight spreads and institutional-grade security for peace of mind.",
      image: (
        <Image
          src="/digital.png"
          alt="OTC trading illustration"
          width={350}
          height={350}
          className="object-contain"
        />
      ),
    },
  };

  return (
    <div className="relative">
      <div className="relative">
        {/* Content Sections */}
        {tabsName.map((tab, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={tab}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 md:px-12 py-10"
            >
              {/* Content Block */}
              <div
                className={`space-y-5 ${
                  isEven ? "md:order-1" : "md:order-2"
                } order-1`}
              >
                <h3 className="primary-color font-semibold text-sm sm:text-base md:text-lg uppercase">
                  {content[tab].sub}
                </h3>
                <h1 className="main-heading text-2xl sm:text-3xl md:text-5xl">
                  {content[tab].heading}
                </h1>
                <p className="paragraph text-sm sm:text-base md:text-lg max-w-md">
                  {content[tab].paragraph}
                </p>
                <Button
                  showArrow
                  variant="secondary"
                  className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  Explore now
                </Button>
              </div>

              {/* Image Block */}
              <div
                className={`flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                } order-2`}
              >
                {content[tab].image}
              </div>
            </div>
          );
        })}

        {/* Sticky Bottom Tab Bar */}
        <div className="sticky bottom-0 bg-white/90 backdrop-blur-md shadow-md rounded-md border-t border-gray-200">
          <ul
            className="
              flex flex-wrap justify-center md:justify-around gap-2 sm:gap-3 px-2 py-2
              max-h-[100px] overflow-y-auto sm:overflow-visible
            "
          >
            {tabsName.map((tab, index) => {
              const isActive = currentTab === tab;
              return (
                <li key={tab} className="flex">
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => {
                      setCurrentTab(tab);
                      sectionRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`px-3 sm:px-5 py-2 
                      text-xs sm:text-base font-medium 
                      rounded-sm transition-all duration-300 
                      truncate sm:whitespace-normal sm:truncate-none 
                      ${
                        isActive
                          ? "bg-gradient-to-r cursor-pointer  from-violet-600 to-indigo-600 text-white shadow-md"
                          : "bg-gray-100 cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-black"
                      }`}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

