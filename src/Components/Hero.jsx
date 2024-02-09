import { delay, motion } from 'framer-motion';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
    return (
        <div data-scroll data-scroll-speed="-.3" data-scroll-section className='h-[50vh] lg:h-[80vh]'>
            <div className="heading text-[8vw] font-bold uppercase leading-[6.5vw] tracking-tighter mx-10  mt-[5vw] overflow-hidden">
                <motion.h1 initial={{x:200 , opacity:0}} animate={{x:0 , opacity:1 }} transition={{ease:[0.32, 0, 0.67, 0],duration:0.5}}>We Create</motion.h1>
                <div className='flex gap-3'>
                    <motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.76, 0, 0.24, 1] , duration:1 ,delay:0.1}} className="img w-[9vw] h-[6vw] rounded-lg mt-[0.6vw] bg-[url('chutku.avif')] bg-cover bg-center"></motion.div>
                    <h1>Eye-opening</h1>
                </div>
                <motion.h1 initial={{x:200 , opacity:0}} animate={{x:0 , opacity:1 }} transition={{ease:[0.32, 0, 0.67, 0],duration:0.5}}>presentations</motion.h1>
            </div>

            <div className="footer border-t-2 w-full border-[#7b7b7b] mt-[8vw] px-12 py-4 text-base flex flex-col gap-6 lg:flex-row items-center justify-between">
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <div className='flex gap-3 items-center'>
                    <button className='uppercase border-[1px] py-1 px-3 rounded-full border-[#000]'>start the project</button>
                    <div className="circle w-8 h-8 rounded-full border-[1px] border-[#000] flex items-center justify-center -rotate-45">
                    <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero