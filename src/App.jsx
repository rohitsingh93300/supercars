import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Aboutx from './components/Aboutx'
import Banner from './components/Banner'
import Inventory from './components/Inventory'
import Footer from './components/Footer'
import CarVideo from './components/CarVideo'


const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
    <CarVideo/>
   <About/>
   <Aboutx/>
   <Inventory/>
   <Banner/>
   <Footer/>
   </>
  )
}

export default App
