"use client";

import { motion } from "framer-motion";
import {
  FaLock,
  FaChartLine,
  FaWallet,
  FaGlobe,
  FaRobot,
  FaHandshake,
  FaBolt,
} from "react-icons/fa";
import Link from "next/link";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import HowItWorks from "@/components/main-ui-components/services/cryptoTrading/howItWorks/page";
import WhyChooseNova from "@/components/main-ui-components/services/cryptoTrading/whyChooseNova/WhyChooseNova";
import FaqPage from "@/components/main-ui-components/services/cryptoTrading/Faqs/Faqs";
import CryptoLiveAnalysis from "@/components/main-ui-components/services/cryptoTrading/CryptoLiveAnalysis/CryptoLiveAnalysis";
import ProductHero from "@/components/main-ui-components/services/cryptoTrading/Hero/Hero";

export default function CryptoTrading() {
  return (
    <div className="bg-white text-gray-900">
      {/* 🟣 HERO SECTION */}
      
      <ProductHero/>

      {/* 🧠 OVERVIEW SECTION */}
     <CryptoLiveAnalysis/>

      {/* ⚙️ HOW IT WORKS */}
    <HowItWorks/>
      

      {/* 🧩 FEATURES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Premium <span className="text-[#7f00ff]">Trading Features</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLock className="text-3xl text-[#7f00ff]" />,
                title: "Top-Tier Security",
                desc: "Advanced encryption, cold storage, and multi-sig protocols.",
              },
              {
                icon: <FaChartLine className="text-3xl text-[#7f00ff]" />,
                title: "Smart Analytics",
                desc: "Track trends with AI-powered insights and predictive analytics.",
              },
              {
                icon: <FaWallet className="text-3xl text-[#7f00ff]" />,
                title: "Non-Custodial Wallets",
                desc: "Keep control of your funds  we never hold your keys.",
              },
              {
                icon: <FaGlobe className="text-3xl text-[#7f00ff]" />,
                title: "Global Access",
                desc: "Trade from anywhere, anytime, with seamless multi-chain support.",
              },
              {
                icon: <FaRobot className="text-3xl text-[#7f00ff]" />,
                title: "Automated Bots",
                desc: "Set up trading bots to execute strategies 24/7 automatically.",
              },
              {
                icon: <FaHandshake className="text-3xl text-[#7f00ff]" />,
                title: "Instant Settlement",
                desc: "No waiting times  all trades are executed and settled instantly.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 WHY CHOOSE NOVA */}
      <WhyChooseNova/>

      {/* Faqs */}
      <FaqPage/>
      {/* 🚀 FINAL CTA */}
      <CtaBannerUtil heading="The Future of Crypto Trading" button="Begin Today"/>
     
    </div>
  );
}
