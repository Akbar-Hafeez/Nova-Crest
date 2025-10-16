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
  const { open } = useDialogStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-4 md:mt-10 overflow-hidden rounded-2xl
      bg-gradient-to-r from-[#7f00ff] via-[#b388ff] to-[#7f00ff]
      py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 shadow-[0_0_40px_-10px_rgba(127,0,255,0.5)]"
    >
      {/* ✨ Subtle Animated Glow Layer */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto text-center grid gap-3 sm:gap-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md mb-6 leading-snug sm:leading-tight md:leading-tight"
        >
          {heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            onClick={open}
            className="font-semibold bg-white text-black  
            hover:bg-gradient-to-r hover:from-[#7f00ff] hover:to-[#b388ff] hover:text-white 
            shadow-lg hover:shadow-[0_0_25px_rgba(127,0,255,0.6)] transition-all duration-300"
          >
            {button}
          </Button>
        </motion.div>
      </div>

      {/* Optional subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </motion.div>
  );
};

export default CtaBannerUtil;
