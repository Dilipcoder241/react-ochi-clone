import React from 'react'

function Green() {
  return (
    <div className='bg-[#CDEA68] pt-1 pb-10'>
        <div className='p-14 mt-10'>
            <p className='text-[3.7vw] leading-none tracking-tighter w-[80vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
        </div>

        <div className='w-full border-t-[2px] border-b-[2px] border-[#3333333c] py-5 px-14 flex flex-col lg:flex items-center pb-20'>
            <div className='w-9/12'>
                <p>What you can expect:</p>                
            </div>

            <div className='flex flex-col lg:flex'>
                <div className="left w-2/3 lg:w-1/2">
                <p className='mb-10'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>

                <div className="right w-2/3 lg:w-1/2 flex lg:items-center justify-center flex-col mt-20">
                    <div>
                    <p className='mb-5'>S:</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Facebook</p>
                    <p>Linkdin</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex items-center px-10 lg:px-12 py-5 h-[75vh]'>
            <div className='w-1/2 self-start'>
                <h1 className='text-[3vw]'>Our approach:</h1>
                <button className='mt-5 mb-5 rounded-full bg-gray-800 text-white px-9 py-3 flex items-center gap-5'>
                    READ MORE
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                </button>
            </div>

            <div className='w-full lg:w-1/2 h-full rounded-lg overflow-hidden'>
                <div className='w-3/4 h-3/4 lg:w-full lg:h-full'>
                    <img src="./our-approach.jpg" alt="our approach"  className='object-cover object-center w-full h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Green