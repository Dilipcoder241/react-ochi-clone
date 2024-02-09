import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setrotate] = useState(0);

    useEffect(() => {
      window.addEventListener('mousemove', (dets)=>{

        let deltaX = dets.clientX - window.innerWidth/2;
        let deltaY = dets.clientY - window.innerHeight/2;
        let angle = Math.atan2(deltaY , deltaX) * (180 / Math.PI) - 180;

        setrotate(angle);
        
      })


    })
    

  return (
    <div  className='relative h-screen w-full bg-[url("./Eyes-bg.jpg")] bg-cover '>
      <div data-scroll data-scroll-speed=".5" className='w-full h-full'>
        <div className="absolute h-[200px] w-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
            <div className='relative w-1/2 rounded-full bg-white'>
                <div className='h-36 w-36 bg-black rounded-full relative top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg) `}} className="line w-full h-6 absolute top-1/2 left-1/2">
                        <div className='w-6 h-full bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='relative w-1/2 rounded-full bg-white'>
                <div className='h-36 w-36 bg-black rounded-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg) `}} className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='w-6 h-full bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes