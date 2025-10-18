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
  FaChevronRight,
  FaLightbulb,
  FaShareAlt,
  FaImages,
} from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";
import { RiStockLine } from "react-icons/ri";

type DropdownItem = {
  isCategory?: boolean;
  label: string;
  icon?: JSX.Element;
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
  const { open} = useDialogStore();
  const handleMobileClick = () => {
    // setSidebarOpen(false)
    open()
     }

  const navItems: NavItem[] = [
 {
  label: "Nova Services",
  dropdownColumns: [
    [
      {
        label: "Blockchain Finance",
        isCategory: true,
      },
      {
        label: "Crypto Trading",
        href: "/services/crypto-trading",
        desc: "Smart and secure trading.",
        icon: <FaChartLine size={14} className="text-[#7f00ff]" />,
      },
      {
        label: "Coin Transactions",
        href: "/services/coin-transactions",
        desc: "Fast crypto-fiat transfers.",
        icon: <FaArrowRightArrowLeft size={14} className="text-[#7f00ff]" />,
      },
      {
        label: "Decentralized Finance (DeFi)",
        href: "/services/defi",
        desc: "Lending, staking, and yields.",
        icon: <FaWallet size={14} className="text-[#7f00ff]" />,
      },
    ],
    [
      {
        label: "Web3 Innovation",
        isCategory: true,
      },
      {
        label: "NFTs (Non-Fungible Tokens)",
        href: "/services/nfts",
        desc: "Create and trade NFTs.",
        icon: <FaImages size={14} className="text-[#7f00ff]" />,
      },
      {
        label: "Web3 Social Media",
        href: "/services/web3-social-media",
        desc: "Earn and engage socially.",
        icon: <FaShareAlt size={14} className="text-[#7f00ff]" />,
      },
      {
        label: "Consultancy in Web3 DApps",
        href: "/services/web3-consultancy",
        desc: "Expert Web3 guidance.",
        icon: <FaLightbulb size={14} className="text-[#7f00ff]" />,
      },
    ],
  ],
}


,
    {
      label: "Customers",
      href: "/customers",
      dropdownColumns: [
        [
          {
            label: "Financial Institutions",
            icon: <FaLandmark size={14} className="text-[#7f00ff]" />,
            href: "/customers#financial",
          },
          {
            label: "E-Commerce Platforms",
            icon: <FaShoppingCart size={14} className="text-[#7f00ff]" />,
            href: "/customers#ecommerce",
          },
          {
            label: "Trading Firms",
            icon: <FaChartLine size={14} className="text-[#7f00ff]" />,
            href: "/customers#trading",
          },
          {
            label: "Fintechs & Exchanges",
            icon: <FaServer size={14} className="text-[#7f00ff]" />,
            href: "/customers#fintech",
          },
        ],
        [
          {
            label: "Web3 Companies",
            icon: <FaAtom size={14} className="text-[#7f00ff]" />,
            href: "/customers#web3",
          },
          {
            label: "Developers",
            icon: <FaCode size={14} className="text-[#7f00ff]" />,
            href: "/customers#developers",
          },
          {
            label: "Startups",
            icon: <FaRocket size={14} className="text-[#7f00ff]" />,
            href: "/customers#startups",
          },
          {
            label: "Currency Exchange Houses",
            icon: <FaExchangeAlt size={14} className="text-[#7f00ff]" />,
            href: "/customers#currency",
          },
        ],
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
      label: "About Nova",
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
      <div className="bg-gray-200 flex items-center justify-between rounded-lg mt-5 px-4 md:px-6 z-50 py-1">
        <Link href="/" className="cursor-pointer">
          <Image src={"/Logo/logo-mobile.png"} className="block md:hidden"  alt="Logo" width={100} height={50} />
          <Image src={"/Logo/logo-main.png"} className="hidden md:block"  alt="Logo" width={145} height={150} />
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
      {item.label === "Customers" ? (
        // ✅ customers navigates + closes dropdown
        <Link
          href={item.href ?? "#"}
          className="flex items-center gap-1 duration-300 hover:text-[#7f00ff] relative z-50"
          onClick={() => {
            // close dropdown immediately when navigating to customers
            setOpenDropdown(null);
          }}
        >
          <span>{item.label}</span>
          {openDropdown === item.label ? (
            <FaChevronUp size={10} />
          ) : (
            <FaChevronDown size={10} />
          )}
        </Link>
      ) : (
        // 🚫 Other menu items only open dropdowns
        <button
          className="flex items-center gap-1 duration-300 hover:text-[#7f00ff] relative z-50"
          onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === item.label ? null : item.label);
          }}
        >
          <span>{item.label}</span>
          {openDropdown === item.label ? (
            <FaChevronUp size={10} />
          ) : (
            <FaChevronDown size={10} />
          )}
        </button>
      )}

      {/* Dropdown */}
     {openDropdown === item.label && (
  <div className="absolute left-0 top-full bg-white backdrop-blur-md rounded-xl shadow-lg py-4 px-4 z-50 animate-fadeIn w-max">
    {/* Transparent hover bridge */}
    <div className="absolute -top-3 left-0 w-full h-3 bg-transparent"></div>

    {"dropdownColumns" in item ? (
      <div className="grid grid-cols-2 gap-3">
        {item.dropdownColumns?.map((col, idx) => (
          <ul key={idx} className="flex flex-col gap-1">
            {col.map((d, i) => (
              <li
                key={i}
                onClick={() => !d.isCategory && setOpenDropdown(null)}
                className={`opacity-0 animate-fadeInItem ${
                  d.isCategory ? "cursor-default" : ""
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {d.isCategory ? (
                  <span className="block text-xs uppercase font-semibold primary-color tracking-widest mb-1 mt-2 px-3">
                    {d.label}
                  </span>
                ) : (
                  <Link
                    href={d.href ?? "#"}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <span className="flex items-center justify-center bg-gray-100 rounded-md w-9 h-9 shrink-0">
                      {d.icon}
                    </span>
                    <div>
                      <p className="text-gray-800 font-medium">{d.label}</p>
                      {d.desc && (
                        <p className="text-sm text-gray-500">{d.desc}</p>
                      )}
                    </div>
                  </Link>
                )}
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
              href={d.href ?? "#"}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <span className="flex items-center justify-center bg-gray-100 rounded-md w-9 h-9 shrink-0">
                {d.icon}
              </span>
              <div>
                <p>{d.label}</p>
                {d.desc && (
                  <p className="text-sm text-gray-500">{d.desc}</p>
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
          <Button variant="secondary" onClick={open} >Get Started</Button>
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

   <div
  className={`fixed top-0 left-0 right-0 max-h-screen overflow-y-auto bg-white/80 backdrop-blur-lg text-black shadow-lg transform transition-transform duration-500 ease-in-out z-50 rounded-b-2xl ${
    sidebarOpen ? "translate-y-0" : "-translate-y-full"
  }`}
>
  {/* Close Button */}
  <Button
    className="absolute top-4 right-4 text-2xl text-[#7f00ff]"
    onClick={() => setSidebarOpen(false)}
  >
    <FaTimes />
  </Button>

  {/* Navigation */}
  <nav className="mt-20 flex flex-col gap-4 px-6 font-medium text-lg">
  {navItems.map((item) => (
    <div key={item.label} className="border-b border-gray-200 pb-2">
      {/* ✅ Customers Label Clickable + Dropdown Works */}
      {item.label === "Customers" ? (
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === item.label ? null : item.label
            )
          }
        >
          <Link
            href={item.href ?? "#"}
            onClick={(e) => {
              e.stopPropagation(); // Prevent dropdown toggle when clicking label
              setSidebarOpen(false);
              setMobileDropdown(null);
            }}
            className="font-semibold hover:text-[#7f00ff] transition"
          >
            {item.label}
          </Link>
          {mobileDropdown === item.label ? (
            <FaChevronUp size={14} className="text-[#7f00ff]" />
          ) : (
            <FaChevronDown size={14} className="text-[#7f00ff]" />
          )}
        </div>
      ) : (
        // 🚫 Other Labels Dropdown Only (No Navigation)
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === item.label ? null : item.label
            )
          }
        >
          <span className="font-semibold hover:text-[#7f00ff] transition">
            {item.label}
          </span>
          {mobileDropdown === item.label ? (
            <FaChevronUp size={14} className="text-[#7f00ff]" />
          ) : (
            <FaChevronDown size={14} className="text-[#7f00ff]" />
          )}
        </div>
      )}

      {/* Dropdown Items */}
      {mobileDropdown === item.label && (
        <div className="mt-2 animate-fadeIn flex flex-col gap-2">
          {"dropdownColumns" in item
            ? item.dropdownColumns?.flat().map((d, idx) => (
                <Link
                  key={idx}
                  href={d.href ?? "#"}
                  onClick={() => {
                    setSidebarOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-base ${
                    d.label === "Blockchain Finance" || d.label === "Web3 Innovation"
                      ? "text-[#7f00ff] font-semibold mt-2 mb-1 tracking-wide uppercase cursor-default"
                      : ""
                  }`}
                >
                  {!(d.label === "Blockchain Finance" || d.label === "Web3 Innovation") && (
                    <span className="text-[#7f00ff]">{d.icon}</span>
                  )}
                  <span>{d.label}</span>
                </Link>
              ))
            : item.dropdown?.map((d, idx) => (
                <Link
                  key={idx}
                  href={d.href ?? "#"}
                  onClick={() => {
                    setSidebarOpen(false);
                    setMobileDropdown(null);
                  }}
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

  {/* CTA Button */}
  <Button
    className="my-4 w-full"
    variant="secondary"
    onClick={handleMobileClick}
  >
    Get Started
  </Button>
</nav>

</div>


    </header>
  );
}
