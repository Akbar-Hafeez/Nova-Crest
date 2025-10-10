"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

interface Feature {
  icon: IconType;
  text: string;
}

interface Partner {
  logo: string;
  name: string;
}

interface ProductLayoutProps {
  title: string;
  description: string;
  imageSrc: string;
  features: Feature[];
  partners: Partner[];
  featureHeading?: string;
  partnerHeading?: string;
}

const ProductLayout = ({
  title,
  description,
  imageSrc,
  features,
  partners,
  featureHeading = "Key Features",
  partnerHeading = "Our Partners",
}: ProductLayoutProps) => {
  return (
    <section className="w-full bg-white text-black overflow-hidden">
    
 {/*  Hero Section */}
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-4 md:py-4">
  {/* Left Text Block */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="flex flex-col justify-center mt-8 md:mt-[-30px] lg:mt-[-80px]" //  this line aligns text vertically better
  >
    <h1 className="main-heading mb-6 text-balance">
      {title}
    </h1>
    <p className="paragraph text-color mb-6">
      {description}
    </p>
    <div className="flex flex-wrap gap-4">
      <Button variant="secondary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  </motion.div>

  {/* Right Image */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="flex justify-center items-center"
  >
    <div
      className="
        relative
        w-full
        max-w-[950px] 
        h-[380px] sm:h-[400px] md:h-[420px] lg:h-[550px]
        scale-110 md:scale-100
      "
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-contain rounded-2xl drop-shadow-2xl"
        priority
      />
    </div>
  </motion.div>
</div>




      {/*  Partners Section */}
      <div className="relative bg-color py-6  ">
        <h2 className="text-center text-xl sm:text-2xl  font-semibold mb-8 ">
          {partnerHeading}
        </h2>

        {/* Left & Right gradient masks */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-15 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-15 pointer-events-none"></div>

        {/* Infinite Slider */}
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center w-max"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={90}
                  height={50}
                  className="object-contain max-h-10 md:max-h-12 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/*  Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-12 ">
          {featureHeading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 border border-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white"
              >
                <Icon className="text-violet-700 text-2xl flex-shrink-0" />
                <p className="text-gray-800 leading-snug">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductLayout;
