"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowLeftRight,
  Zap,
  Globe2,
  
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Shield, FileText, Cog, CreditCard, Coins, Lock } from "lucide-react";
import Link from "next/link";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import CoinTransactionFaq from "@/components/main-ui-components/services/coin-transaction/faqs/Faqs";
import HowNovaTransactionsWork from "@/components/main-ui-components/services/coin-transaction/howItWorks/HowItWorks";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";

const CoinTransactionService = () => {
  const {open} = useDialogStore()
  return (
    <section className="bg-white text-black">
      {/* 🟣 HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:-mt-4 lg:-mt-18"
        >
          <h1 className="main-heading primary-color ">
            The Future of Coin Transactions
          </h1>
       

          
           <ul className="space-y-3 my-8 text-gray-700 mb-10">
      {[
        "Instant transfers across wallets and exchanges.",
        "No hidden fees or intermediaries.",
        
        "Real-time blockchain tracking and confirmation.",
        
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
              Start Transactions 
            </Button>
            {/* <Link
              href="/learn"
              className="border border-[#7f00ff] px-8 py-3 font-semibold text-[#7f00ff]   transition"
            >
              Explore Features
            </Link> */}
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
                  src="/coin-transaction-dashboard.png" // 📱 your mobile dashboard image
                  alt="Nova Crypto Trading Dashboard"
                  width={370}
                  height={300}
                  className=" drop-shadow-2xl rounded-2xl"
                />
              </motion.div>
      </div>

      {/* 🟣 HOW IT WORKS */}
     <HowNovaTransactionsWork/>

      {/* 🟣 SECURITY & RELIABILITY */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/buy-with-fiat.webp"
            alt="buy-with-fiat"
            width={520}
            height={520}
            className="rounded-2xl"
          />
        </motion.div>
        <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black"
    >
      <h2 className="main-heading mb-6 primary-color bg-clip-text ">
        Buy Crypto with Fiat  Simple, Safe, Profitable
      </h2>
      <p className="text-gray-600 mb-6">
        Nova lets you buy over 30+ cryptocurrencies using your debit or credit card,
        all at market-leading rates and with unmatched blockchain security.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <CreditCard className="w-6 h-6 text-[#7f00ff] mt-1" />
          <div>
            <p className="font-semibold">Simple</p>
            <p className="text-gray-600 text-sm">
              Buy 30+ coins easily using your debit or credit card in just a few clicks.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <Coins className="w-6 h-6 text-[#7f00ff] mt-1" />
          <div>
            <p className="font-semibold">Profitable</p>
            <p className="text-gray-600 text-sm">
              Benefit from transparent, market-leading exchange rates with no hidden fees.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <Lock className="w-6 h-6 text-[#7f00ff] mt-1" />
          <div>
            <p className="font-semibold">Safe</p>
            <p className="text-gray-600 text-sm">
              Receive your crypto directly into your personal wallet  no middlemen, no risks.
            </p>
          </div>
        </li>
      </ul>
    </motion.div>
      </div>

      {/* 🟣 COMPARISON SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl main-heading  text-center mb-12   bg-clip-text ">
          Why Choose Nova Over Traditional Transfers?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f5f5f7] text-[#7f00ff] uppercase text-sm">
              <tr>
                <th className="py-4 px-6">Feature</th>
                <th className="py-4 px-6">Traditional Transfer</th>
                <th className="py-4 px-6">Nova Transaction</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm md:text-base">
              {[
                ["Speed", "2–5 business days", "Instant (<10 seconds)"],
                ["Transparency", "Hidden conversion fees", "Fully transparent"],
                ["Access", "Bank-dependent", "Global 24/7 access"],
                ["Security", "Centralized & fragile", "Blockchain encrypted"],
                ["Supported Assets", "Only fiat", "200+ cryptocurrencies"],
              ].map(([feature, oldWay, novaWay], i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="py-4 px-6 font-semibold">{feature}</td>
                  <td className="py-4 px-6 text-gray-500">{oldWay}</td>
                  <td className="py-4 px-6 text-[#7f00ff] font-medium">
                    {novaWay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Faqs */}
      <CoinTransactionFaq/>

      {/* 🟣 CTA */}
      <CtaBannerUtil heading="Experience Fast, Secure, and Borderless Transactions" button="Get Started With Nova" />
    </section>
  );
};

export default CoinTransactionService;
