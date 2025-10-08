import { Button } from '@/components/ui/button'
import React from 'react'

type CtaBannerProps = {
    heading : string;
    button : string;
}
const CtaBannerUtil:React.FC<CtaBannerProps> = ({heading,button}) => {
  return (
    <div className="mt-4 md:mt-10 rounded-md bg-gradient-to-r from-[#6626d9] via-[#73c9e3] to-[#6626d9] 
      py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10">
      
      <div className="container mx-auto text-center grid gap-1 sm:gap-5">
        <h2 className="text-2xl  md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug sm:leading-tight md:leading-tight">
          {heading}
        </h2>

        <div>
          <Button className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-lg">
            {button}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CtaBannerUtil;