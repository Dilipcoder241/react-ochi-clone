import { motion } from 'framer-motion'
import React from 'react'

function Featured() {
  return (
    <div>
        <div className='px-14 py-5 border-b-[1px] border-[#3a3a3a52]'>
            <h1 className='text-[4vw]'>Featured Projects</h1>
        </div>

        <div className='p-20'>
            <div className='flex flex-col lg:flex-row gap-5'>
            <div className='h-full w-full lg:w-1/2'>
                <div className='flex items-center gap-2'>
                    <div className="circle h-2 w-2 bg-black rounded-full"></div>
                    <p className='text-lg'>FYDE</p>
                </div>

                <motion.div whileHover={{scale:0.9}} className="imgcontainer h-full rounded-xl overflow-hidden mt-3 mb-3">
                    <div className='h-full w-full'>
                        <img src="./Fyde.png" alt="fyde" className='object-cover h-full w-full object-center'/>
                    </div>
                </motion.div>

                <div className='btns flex gap-3 flex-col lg:flex-row    '>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>AUDIT</button>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>COPYWRITING</button>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>SALES DECK</button>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>SLIDES DESIGN</button>
                </div>
            </div>

            <div className='h-full w-full lg:w-1/2'>
                <div className='flex items-center gap-2'>
                    <div className="circle h-2 w-2 bg-black rounded-full"></div>
                    <p className='text-lg'>VISE</p>
                </div>

                <motion.div whileHover={{scale:0.9}}  className="imgcontainer h-full rounded-xl overflow-hidden mt-3 mb-3">
                    <div className='h-full bg-red-900 w-full'>
                        <img src="./Vise.jpg" alt="fyde" className='object-cover h-full w-full object-center'/>
                    </div>
                </motion.div>

                <div className='btns flex gap-3'>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>AGENCY</button>
                    <button className='border-2 border-[#000] rounded-full px-3 py-1 text-sm'>COMPANY PRESENTATION</button>
                </div>
            </div>

            </div>
        </div>


        <div className="flex justify-center items-center pb-20">
        <button className='mt-5 rounded-full bg-gray-800 text-white px-9 py-3 flex items-center gap-5'>
                    VIEW ALL CASE STUDY
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                </button>
        </div>
    </div>
  )
}

export default Featured