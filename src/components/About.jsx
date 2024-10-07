import { ChevronRight } from 'lucide-react'
import React from 'react'
import AboutCar from '../assets/About.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='bg-slate-50 relative z-0 overflow-x-hidden '>
    <div className='max-w-7xl  mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6 h-[650px] items-center justify-center'>
             {/* hero image */}
             <div className='lg:w-1/2 flex justify-center w-80'>
                <motion.img
                initial={{opacity:0,x:-200, scale:0.7}}
                whileInView={{opacity:1, x:0, scale:1}}
                transition={{duration:1.5, delay: 0.2}}
                src={AboutCar} alt="" />
            </div>
            {/* hero text */}
            <div className='lg:w-1/2  flex flex-col px-8 space-y-5 justify-center '>
                <motion.h3
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:0.1}}
                className='text-red-500 text-lg lg:text-xl'>On Demand Purchase _____</motion.h3>
                <motion.h1 
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.2}}
                className='text-4xl lg:text-6xl font-bold'>Experience the Thrill of <span className='text-red-500'>Super Cars</span></motion.h1>
                <motion.p 
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                className=''>Discover the world's most exclusive and high-performance vehicles. From blistering speed to unparalleled luxury, our super cars redefine the limits of automotive engineering.</motion.p>
                <div className='flex gap-3'>
                    <motion.button 
                    initial={{opacity:0, x:200}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1.8, delay:0.7}}
                    className='bg-red-500 text-white px-4 py-2 rounded-full flex items-center font-semibold'>Explore Models <ChevronRight /></motion.button>
                    <motion.button 
                    initial={{opacity:0, x:200}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, delay:1}}
                    className='bg-white border border-red-500 text-red-500 lg:px-4 lg:py-2 px-2 py-2 rounded-full'>Book a Test Drive</motion.button>
                </div>
                
            </div>
           
        </div>
    </div>
</div>
  )
}

export default About
