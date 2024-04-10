import React from 'react'
import { About, Cards, Eyes, Featured, Footer, Landing, Marquee, Navbar } from './components'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-white min-h-screen bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App