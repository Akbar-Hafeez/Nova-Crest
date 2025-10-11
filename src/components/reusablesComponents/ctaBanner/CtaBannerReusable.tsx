"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useDialogStore } from "@/store/useDialogStore";

type CtaBannerProps = {
  heading: string;
  button: string;
};

const CtaBannerUtil: React.FC<CtaBannerProps> = ({ heading, button }) => {
  const {open} = useDialogStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-4 md:mt-10 overflow-hidden rounded-md bg-gradient-to-r 
        from-[#6626d9] via-[#73c9e3] to-[#6626d9] py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10"
    >
      {/* ✨ Animated Gradient Glow Layer */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto text-center grid gap-1 sm:gap-5 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug sm:leading-tight md:leading-tight"
        >
          {heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Button onClick={open} className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition">
            {button}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaBannerUtil;
