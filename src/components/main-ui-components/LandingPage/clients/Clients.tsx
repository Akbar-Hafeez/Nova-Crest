import React from 'react'
import TypewriterHeading from './TypeWriterHeading'

import { BadgeDollarSign, ChartCandlestick, ChartNoAxesCombined,  Gamepad2, Landmark, MapPinHouse } from 'lucide-react';





export default function Clients() {
  return (
    <section className="mt-28 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className='grid'>
            
      
      <div className="text-center">
        {/* Top heading with line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="block w-12 h-[2px] bg-gradient-to-r from-[#7f00ff] to-purple-400"></span>
          <h2 className="text-xl md:text-xl font-semibold  tracking-wide">
            Powering the future of
          </h2>
          <span className="block w-12 h-[2px] bg-gradient-to-r from-purple-400 to-[#7f00ff]"></span>
        </div>

        {/* Typewriter heading */}
        <TypewriterHeading
          words={[
            "Digital Gaming Enterprises",
            "Real Estate",
            "Digital Payment Firms",
            "Commodity Exchange Firms",
            "Trading Platforms",
            "Financial Enterprises",
          ]}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
        />
      </div>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
       
      
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
               <Landmark size={40} className='primary-color'/>
               
            </div>
</div>
             <div className="mt-4">
                <h3 className="text-xl font-bold tracking-wide text-slate-900">Financial Enterprises</h3>
                <p className="mt-2 text-sm text-color mr-4">Robust infrastructure for seamless banking and fintech services.</p>
            </div>

            
        </div>
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
               <ChartNoAxesCombined size={40} className='primary-color'/>
                
            </div>
</div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">Trading Platforms</h3>
                <p className="mt-2 text-sm text-color mr-4">Flexible financial services for CFD and brokerage providers.</p>
            </div>

            
        </div>
       
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
               <ChartCandlestick size={40} className='primary-color'/>
               
            </div>
</div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">Commodity exchange firms</h3>
                <p className="mt-2 text-sm text-color mr-4">Advanced solutions for seamless global commodity trading.</p>
            </div>

            
        </div>
       
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                <BadgeDollarSign size={40} className='primary-color'/>
               
            </div>
</div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">Digital payment firms</h3>
                <p className="mt-2 text-sm text-color mr-4">Robust, secure technology for evolving payment ecosystems.</p>
            </div>

            
        </div>
       
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
               <MapPinHouse size={40} className='primary-color'/>
              
            </div>
</div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">Real Estate</h3>
                <p className="mt-2 text-sm text-color mr-4">Next-gen infrastructure for cross-border real estate investments.</p>
            </div>

            
        </div>
       
       <div
            className="bg-white border border-gray-200 shadow-lg p-6 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 grid space-y-2 md:space-y-8">
                <div>
            <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
               <Gamepad2 size={40} className='primary-color'/>
               
            </div>
</div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">Digital Gaming Enterprises</h3>
                <p className="mt-2 text-sm text-color mr-4">Powering gaming platforms with seamless digital finance integration.</p>
            </div>

            
        </div>
       
   
       </div>

       </div>
    </section>
  );
}
