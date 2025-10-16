"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "animate.css";
import { useDialogStore } from '@/store/useDialogStore';
import Link from 'next/link';
export default function HeroSection() {
  const { open} = useDialogStore()
  
  const technologiesName = ["Web3","Finance","Crypto","Payments","Blockchain"] ;
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
        Nova Crest powers the future of digital finance through advanced crypto, NFTs, and next-generation Web3 innovation solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 ">
            <Button onClick={open} variant="secondary">Get Started</Button>

            <Link href={"#servicesTab"}><Button
              variant="outline"
              className=""
              
            >
              Explore our Services
            </Button></Link>
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

  
