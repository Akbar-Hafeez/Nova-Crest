// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import React from 'react'

// export default function Header() {
//   return (
//     <header className='sticky top-0 z-50' >
//       <div className='bg-color flex items-center justify-between rounded-lg  mt-5 px-7 z-50'>
//         {/* Logo */}
//         <div className='cursor-pointer'>
//         <Image 
//         src={'/Logo/logo.png'}
//         alt='Logo'
//         width={85}
//         height={60}
//         />

//         </div>
//         {/* Navigations */}
//         <ul className='flex gap-4 font-medium text-lg space-x-2 '>
//           <li className='cursor-pointer text-hover'>Clients</li>
//           <li className='cursor-pointer text-hover'>Products</li>
//           <li className='cursor-pointer text-hover'>Developers</li>
//           <li className='cursor-pointer text-hover'>Our Company</li>
          
//         </ul>
//         {/* Buttons */}
//         <Button >Get Started</Button>
//       </div>
//     </header>
//   )
// }
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-color flex items-center justify-between rounded-lg mt-5 px-7 z-50">
        {/* Logo */}
        <div className="cursor-pointer">
          <Image src={"/Logo/logo.png"} alt="Logo" width={85} height={60} />
        </div>

        {/* Nav links (hidden on sm/md) */}
        <ul className="hidden lg:flex gap-4 font-medium text-lg space-x-2">
          <li className="cursor-pointer text-hover">Clients</li>
          <li className="cursor-pointer text-hover">Products</li>
          <li className="cursor-pointer text-hover">Developers</li>
          <li className="cursor-pointer text-hover">Our Company</li>
        </ul>

        {/* CTA Button (always visible on lg, hidden inside sidebar for sm/md) */}
        <div className="hidden lg:block">
          <Button>Get Started</Button>
        </div>

        {/* Hamburger menu for sm/md */}
        <Button size="icon"
          className="lg:hidden text-2xl text-white"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </Button>
      </div>

      {/* Sidebar (for sm & md screens) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-color shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <Button
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </Button>

        {/* Sidebar content */}
        <nav className="mt-20 flex flex-col gap-6 px-6 font-medium text-lg">
          <a className="cursor-pointer text-hover" onClick={() => setSidebarOpen(false)}>Clients</a>
          <a className="cursor-pointer text-hover" onClick={() => setSidebarOpen(false)}>Products</a>
          <a className="cursor-pointer text-hover" onClick={() => setSidebarOpen(false)}>Developers</a>
          <a className="cursor-pointer text-hover" onClick={() => setSidebarOpen(false)}>Our Company</a>
          <Button className="mt-6 w-full">Get Started</Button>
        </nav>
      </div>

      {/* Dark overlay behind sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
}
