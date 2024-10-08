import React from 'react'
import banner from '../assets/banner.jpg'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <>
      <div
        className='relative'  >

        <div style={{
          height: '600px',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: -1
        }} className=''>
        </div>
        <motion.div
           initial={{ opacity: 0, scale: 0.7 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
          style={{ width: "400px" }} className='lg:pl-16 absolute top-10 lg:left-32 mx-auto px-7 lg:px-0' >
          <h2 className='text-white text-5xl font-bold text-center mb-5'>Contact <span className='text-red-500'>Us</span></h2>
          <form

            className='bg-red-50 rounded-lg p-10 space-y-4'>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>First Name:</label>
              <input
                className='p-1'
                type="text"
                name="firstName"
                placeholder='First Name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Last Name:</label>
              <input
               className='p-1'
                type="text"
                name="lastName"
                placeholder='Last Name'
              />

            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Email:</label>
              <input
               className='p-1'
                type="email"
                name="email"
                placeholder='Email'
              />

            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Message:</label>
              <textarea
               className='p-1'
                name="message"
                placeholder='Write Your Message'
              />

            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Submit</button>
          </form>
        </motion.div>
      </div>

    </>
  )
}

export default Banner
