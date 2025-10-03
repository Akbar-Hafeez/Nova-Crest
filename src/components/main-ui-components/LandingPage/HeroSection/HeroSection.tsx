"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "animate.css";
export default function HeroSection() {
  const technologiesName = ["Finance","Crypto","Payments","Banking"] ;
  const [index , setIndex] = useState<number>(0)
  useEffect(() => {
  const interval = setInterval(() => {
    
    setIndex((prevIndex) => (prevIndex + 1) % technologiesName.length)
  } , 2300)
  return () => clearInterval(interval)
  } , [technologiesName.length])
  return (
    <section className="max-w-7xl mx-auto  py-8 grid grid-cols-1 md:grid-cols-2  items-center px-2 mb-8">
        {/* Left Side */}
        <div className='w-[90%] grid grid-cols-1 gap-3 '>
         
          <h1 className="mt-4 main-heading">
            Shaping the new era of  <span
            key={index} // key makes React re-render span each time index changes
            className="primary-color animate__animated animate__fadeIn"
          >{technologiesName[index]}</span>
          </h1>
          <p className="mt-6 paragraph">
           Join leading companies that trust Nova Crest for global stablecoin payments, seamless fiat payouts and collections, and next-generation embedded crypto services.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 ">
            <Button >Get Started</Button>
            <Button
            //   variant="outline"
              className="bg-color border border-black text-black "
            >
              Explore our Products
            </Button>
          </div>
        </div >

        {/* Right Side - Mockup */}
      
         <div className='flex justify-center items-center mt-5 bg-slate-900 rounded-xl  shadow-2xl shadow-slate-500 '>
            <Image
              src="/digital.png"
              // src="/LandingPage/hero_image.png"
            
              alt="App Mockup"
              width={440}
              height={400}
              className="object-cover "
            />
         </div>
          
       
      </section>
  );
}

  
