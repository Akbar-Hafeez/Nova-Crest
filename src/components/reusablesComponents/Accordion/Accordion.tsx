"use client";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FaqItem[][];
  heading?: string; // optional heading
};

const Accordion: React.FC<AccordionProps> = ({ items, heading = "What Our Clients Ask Most" }) => {
  const [openIndex, setOpenIndex] = useState<string | null>("0"); // first open by default

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:mx-16 md:px-6 py-12">
      <div className="grid gap-6">
        {/* Section Heading */}
        <div>
          <h1 className="main-heading md:mb-10 flex justify-center text-center">
            {heading}
          </h1>
        </div>

        {/* Accordion Columns */}
        {items.map((col, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {col.map((item, idx) => {
              const indexKey = `${colIndex}-${idx}`;
              const isOpen = openIndex === indexKey;

              return (
                <div
                  key={indexKey}
                  className="bg-white shadow-md rounded-lg transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(indexKey)}
                    className="accordion-button cursor-pointer w-full text-lg font-medium text-left p-6 text-slate-900 flex items-center"
                  >
                    <span className="mr-4 text-md md:text-xl">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-[15px] h-[15px] fill-current ml-auto shrink-0 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                      <path
                        className={isOpen ? "hidden" : "block"}
                        d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                      />
                    </svg>
                  </button>

                  <div
                    className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pb-6 px-6">
                      <p className="text-md text-[#4B5563] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
