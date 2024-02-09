import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Green from './Components/Green'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full bg-[#F1F1F1]'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Green/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
