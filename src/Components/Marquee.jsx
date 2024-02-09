import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='bg-[#004D43] text-white py-20 rounded-tr-3xl rounded-tl-3xl'>
        <div className='marquee border-t-2 border-b-2 whitespace-nowrap flex uppercase overflow-x-scroll overflow-y-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,duration:10 , repeat:Infinity}} className='text-[18vw] leading-[17vw] -mt-9 font-bold tracking-tighter pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,duration:10 , repeat:Infinity}} className='text-[18vw] leading-[17vw] -mt-9 font-bold tracking-tighter pr-20'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee