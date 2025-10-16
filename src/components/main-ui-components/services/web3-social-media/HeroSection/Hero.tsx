
"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  ChartBar,
  Globe,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Wallet,
  Camera,
  Video,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true },
});

export default function HeroSection(): JSX.Element {
    const {open} = useDialogStore()
  return (
    <section
      className="relative overflow-hidden py-6 px-6 md:px-6 flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-b from-white via-[#faf7ff] to-white"
      aria-label="Hero - Nova Web3 Social"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-gradient-radial from-[#7f00ff]/18 via-transparent to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-radial from-[#7f00ff]/10 via-indigo-200/6 to-transparent blur-[120px]" />
      </div>

      {/* LEFT CONTENT */}
      <motion.div
        {...fadeIn()}
        className="relative z-10 max-w-xl text-center lg:text-left space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Decentralized{" "}
          <span className="bg-clip-text text-transparent primary-color">
            Social Media
          </span>{" "}
          by Nova
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
          Experience the next evolution of digital connection — where content,
          identity, and rewards belong to you. Built on blockchain, powered by
          community, and designed for the future.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 pt-4">
          <Button variant="secondary" onClick={open} className="px-6 py-3 text-base font-medium">
            Join Nova
          </Button>
        </div>
      </motion.div>

      {/* RIGHT VISUAL / ORB */}
      <motion.div
        {...fadeIn(0.2)}
        className="relative z-10 flex justify-center md:justify-end mb-12 md:mb-12 lg:mb-0"
      >
        <div className="relative w-[300px] md:w-[360px] lg:w-[500px]">
          {/* Soft Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7f00ff]/25 via-fuchsia-400/10 to-blue-300/10 blur-3xl" />

          {/* SVG Network Orb */}
          <svg
            viewBox="0 0 420 420"
            fill="none"
            className="relative w-full h-auto rounded-full shadow-2xl border border-white/10 backdrop-blur-sm"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#7f00ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#00cfff" stopOpacity="0.65" />
              </linearGradient>
              <radialGradient id="r1" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="210" cy="210" r="208" fill="url(#r1)" />

            {/* Connection Lines */}
            <g stroke="url(#g1)" strokeWidth="1.4" strokeOpacity="0.85">
              <path d="M60 120 C140 60, 280 60, 360 120" />
              <path d="M60 300 C140 360, 280 360, 360 300" />
              <path d="M120 60 C60 140, 60 280, 120 360" />
              <path d="M300 60 C360 140, 360 280, 300 360" />
            </g>

            {/* Glowing Nodes */}
            <g>
              <circle cx="210" cy="70" r="7" fill="#7f00ff" />
              <circle cx="110" cy="120" r="6" fill="#ff80d5" />
              <circle cx="310" cy="120" r="6" fill="#4fdfff" />
              <circle cx="70" cy="210" r="6" fill="#ffd36a" />
              <circle cx="350" cy="210" r="6" fill="#b58cff" />
              <circle cx="110" cy="300" r="6" fill="#8bd7ff" />
              <circle cx="310" cy="300" r="6" fill="#ff8bb0" />
              <circle cx="210" cy="350" r="8" fill="#7f00ff" />
            </g>
          </svg>

          {/* Floating Social Icons */}
          {[
            { icon: <Globe />, top: "10%", left: "12%", color: "#7f00ff" },
            { icon: <Heart />, top: "20%", right: "10%", color: "#f472b6" },
            { icon: <MessageCircle />, top: "48%", left: "-3%", color: "#3b82f6" },
            { icon: <Share2 />, bottom: "20%", right: "10%", color: "#7f00ff" },
            { icon: <Wallet />, top: "34%", right: "24%", color: "#22d3ee" },
            { icon: <Users />, bottom: "28%", left: "16%", color: "#a855f7" },
            { icon: <Camera />, top: "62%", right: "38%", color: "#ec4899" },
            { icon: <Video />, top: "14%", left: "37%", color: "#8b5cf6" },
            { icon: <Star />, top: "40%", right: "60%", color: "#facc15" },
            { icon: <ChartBar />, bottom: "8%", left: "42%", color: "#6366f1" },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-md"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
              }}
            >
              <div className="w-4 h-4" style={{ color: item.color }}>
                {item.icon}
              </div>
            </motion.div>
          ))}

          {/* Reflection layer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/5 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
