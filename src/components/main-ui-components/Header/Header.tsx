"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
  FaLandmark,
  FaShoppingCart,
  FaChartLine,
  FaServer,
  FaAtom,
  FaCode,
  FaRocket,
  FaExchangeAlt,
  FaBook,
  FaFileCode,
  FaInfoCircle,
  FaShieldAlt,
  FaUserTie,
  FaNewspaper,
  FaBalanceScale,
  FaCoins,
  FaWallet,
  FaMoneyBillWave,
  FaChartBar,
} from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type DropdownItem = {
  label: string;
  icon: JSX.Element;
  href?: string;
  desc?: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdownColumns?: DropdownItem[][];
  dropdown?: DropdownItem[];
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "Clients",
      href: "/clients",
      dropdownColumns: [
        [
          {
            label: "Financial Institutions",
            icon: <FaLandmark size={14} className="text-[#7f00ff]" />,
            href: "/clients#financial",
          },
          {
            label: "E-Commerce Platforms",
            icon: <FaShoppingCart size={14} className="text-[#7f00ff]" />,
            href: "/clients#ecommerce",
          },
          {
            label: "Trading Firms",
            icon: <FaChartLine size={14} className="text-[#7f00ff]" />,
            href: "/clients#trading",
          },
          {
            label: "Fintechs & Exchanges",
            icon: <FaServer size={14} className="text-[#7f00ff]" />,
            href: "/clients#fintech",
          },
        ],
        [
          {
            label: "Web3 Companies",
            icon: <FaAtom size={14} className="text-[#7f00ff]" />,
            href: "/clients#web3",
          },
          {
            label: "Developers",
            icon: <FaCode size={14} className="text-[#7f00ff]" />,
            href: "/clients#developers",
          },
          {
            label: "Startups",
            icon: <FaRocket size={14} className="text-[#7f00ff]" />,
            href: "/clients#startups",
          },
          {
            label: "Currency Exchange Houses",
            icon: <FaExchangeAlt size={14} className="text-[#7f00ff]" />,
            href: "/clients#currency",
          },
        ],
      ],
    },
    {
      label: "Products",
      dropdown: [
        {
          label: "Stablecoin Infrastructure",
          desc: "Deploy, manage, and scale stablecoins securely.",
          icon: <FaCoins size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Onramp / Offramp",
          desc: "Enable fiat-crypto conversions effortlessly.",
          icon: <FaArrowRightArrowLeft size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Digital Assets as a Service",
          desc: "Offer secure and compliant digital asset services.",
          icon: <FaWallet size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Payments",
          desc: "Seamless cross-border and blockchain payments.",
          icon: <FaMoneyBillWave size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "OTC",
          desc: "Access institutional-grade digital asset liquidity.",
          icon: <FaChartBar size={14} className="text-[#7f00ff]" />,
        },
      ],
    },
    {
      label: "Developers",
      dropdown: [
        {
          label: "Documentation v1",
          icon: <FaBook size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Documentation v2",
          icon: <FaFileCode size={14} className="text-[#7f00ff]" />,
        },
      ],
    },
    {
      label: "Company",
      dropdown: [
        {
          label: "About Nova Crest",
          icon: <FaInfoCircle size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Trust & Transparency",
          icon: <FaShieldAlt size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Careers",
          icon: <FaUserTie size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Nova Updates",
          icon: <FaNewspaper size={14} className="text-[#7f00ff]" />,
        },
        {
          label: "Legal Overview",
          icon: <FaBalanceScale size={14} className="text-[#7f00ff]" />,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gray-100 flex items-center justify-between rounded-lg mt-5 px-7 z-50">
        <Link href="/" className="cursor-pointer">
          <Image src={"/Logo/logo.png"} alt="Logo" width={85} height={60} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-3 lg:gap-6 font-medium text-lg relative">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative cursor-pointer group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1 duration-300 hover:text-[#7f00ff] relative z-50">
                <span>{item.label}</span>
                {openDropdown === item.label ? (
                  <FaChevronUp size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </div>

              {/* Dropdown */}
              {openDropdown === item.label && (
                <div className="absolute left-0 top-full bg-white backdrop-blur-md rounded-xl shadow-lg py-4 px-4 z-50 animate-fadeIn w-max">
                  {/* Transparent hover bridge (fix gap issue) */}
                  <div className="absolute -top-3 left-0 w-full h-3 bg-transparent"></div>

                  {"dropdownColumns" in item ? (
                    <div className="grid grid-cols-2 gap-3">
                      {item.dropdownColumns?.map((col, idx) => (
                        <ul key={idx} className="flex flex-col gap-1">
                          {col.map((d, i) => (
                            <li
                              key={i}
                              onClick={() => setOpenDropdown(null)}
                              className="opacity-0 animate-fadeInItem"
                              style={{ animationDelay: `${i * 0.05}s` }}
                            >
                              <Link
                                href={d.href ?? "#"}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                              >
                                <span className="flex items-center justify-center bg-gray-100 rounded-md w-9 h-9 shrink-0">
                                  {d.icon}
                                </span>
                                <span className="text-gray-800 font-medium">
                                  {d.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {item.dropdown?.map((d, idx) => (
                        <li
                          key={idx}
                          onClick={() => setOpenDropdown(null)}
                          className="opacity-0 animate-fadeInItem"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          <Link
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                          >
                            <span className="flex items-center justify-center bg-gray-100 rounded-md w-9 h-9 shrink-0">
                              {d.icon}
                            </span>
                            <div>
                              <p>{d.label}</p>
                              {d.desc && (
                                <p className="text-sm text-gray-500">
                                  {d.desc}
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          className="md:hidden text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </Button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 max-h-screen overflow-y-auto bg-white/80 backdrop-blur-lg text-black shadow-lg transform transition-transform duration-500 ease-in-out z-50 rounded-b-2xl ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Button
          className="absolute top-4 right-4 text-2xl text-[#7f00ff]"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </Button>

        <nav className="mt-20 flex flex-col gap-4 px-6 font-medium text-lg">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-200 pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === item.label ? null : item.label
                  )
                }
              >
                <span className="font-semibold">{item.label}</span>
                {mobileDropdown === item.label ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </div>

              {mobileDropdown === item.label && (
                <div className="mt-2 animate-fadeIn flex flex-col gap-2">
                  {"dropdownColumns" in item
                    ? item.dropdownColumns?.flat().map((d, idx) => (
                        <Link
                          key={idx}
                          href={d.href ?? "#"}
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-base"
                        >
                          <span className="text-[#7f00ff]">{d.icon}</span>
                          <span>{d.label}</span>
                        </Link>
                      ))
                    : item.dropdown?.map((d, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-base"
                        >
                          <span className="text-[#7f00ff]">{d.icon}</span>
                          <span>{d.label}</span>
                        </Link>
                      ))}
                </div>
              )}
            </div>
          ))}

          {/* Fixed: Drawer closes when clicking this */}
          <Button
            className="my-4 w-full"
            onClick={() => setSidebarOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
