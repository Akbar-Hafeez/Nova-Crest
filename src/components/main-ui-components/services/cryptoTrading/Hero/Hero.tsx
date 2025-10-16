"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";
import { CheckCircle2 } from "lucide-react";

export default function ProductHero() {
    const {open} = useDialogStore()
  return (
    <section className="max-w-7xl mx-auto px-6 py-4 grid md:grid-cols-2 items-center gap-12">
      {/* LEFT CONTENT */}
      <div className="text-left mt-8 md:-mt-4 lg:-mt-18">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="main-heading bg-clip-text mb-6 text-[#7f00ff]"
        >
        Your Gateway to Smarter Crypto Trades
        </motion.h1>

      

        {/* 🔹 Key Highlights */}
        <ul className="space-y-3 my-8 text-gray-700 mb-10">
      {[
        "Real-time analytics for every trade decision.",
        "Secure transactions with blockchain-grade encryption.",
        
        "Smart market insights powered by AI-driven trends.",
        
      ].map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-3 leading-relaxed sm:items-center"
        >
          <span className="flex-shrink-0 pt-1 sm:pt-0">
            <CheckCircle2 className="text-[#7f00ff] w-5 h-5 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[15px] sm:text-[16px] font-medium">
            {feature}
          </span>
        </li>
      ))}
    </ul>
       

        {/* CTA Button */}
        
      <Button
          onClick={open}
          variant="secondary"
        >
          Start Trading Now 
        </Button> 
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center "
      >
        <Image
          src="/crypto-trading-dashboard.png" // 📱 your mobile dashboard image
          alt="Nova Crypto Trading Dashboard"
          width={370}
          height={300}
          className=" drop-shadow-2xl rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
