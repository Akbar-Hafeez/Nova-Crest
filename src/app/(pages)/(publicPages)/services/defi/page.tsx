"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Coins, Zap, Rocket, CheckCircle2 } from "lucide-react";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import WhyChooseNova from "@/components/main-ui-components/services/defi/whychooseNova/WhyChooseNova";
import FaqPage from "@/components/main-ui-components/services/defi/faqs/Faqs";
import Image from "next/image";
import { useDialogStore } from "@/store/useDialogStore";

export default function DeFiServicePage() {
  const {open} = useDialogStore()
  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      {/* Hero Section */}
       <div className="max-w-7xl mx-auto px-6 py-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:-mt-4 lg:-mt-18"
        >
          <h1 className="main-heading primary-color ">
            Decentralized Finance by Nova
          </h1>
       

         <ul className="space-y-3 my-8 text-gray-700 mb-10">
      {[
        "Earn passive income through staking and liquidity pools",
        "Access decentralized lending and borrowing without intermediaries",
        
        "Non-custodial  you always control your assets and private keys",
        
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

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={open}
              variant="secondary"
            >
               Explore DeFi Solutions
            </Button>
           
          </div>
        </motion.div>

        {/* Right Image */}
       
          <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center "
              >
                <Image
                  src="/defi-dashboard.png" // 📱 your mobile dashboard image
                  alt="Nova Crypto Trading Dashboard"
                  width={370}
                  height={300}
                  className=" drop-shadow-2xl rounded-2xl"
                />
              </motion.div>
      </div>
      

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold mb-12">How Nova’s DeFi Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Coins,
              title: "Connect Wallet",
              desc: "Link your wallet to Nova’s secure platform and access decentralized services instantly.",
            },
            {
              icon: Shield,
              title: "Smart Contracts",
              desc: "All processes are governed by transparent, audited smart contracts ensuring complete security.",
            },
            {
              icon: Zap,
              title: "Earn & Borrow",
              desc: "Supply liquidity, stake your assets, or take decentralized loans  all in one place.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <item.icon className="mx-auto mb-4 text-[#7f00ff]" size={48} />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
   <WhyChooseNova/>

{/* FAQS  */}
<FaqPage/>
      {/* CTA */}
     <CtaBannerUtil heading="Ready to Step into the Future of Finance?" button="Get Started with Nova DeFi"/>
    </div>
  );
}

