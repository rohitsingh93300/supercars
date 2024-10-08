import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {  Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const NavHandler = () => {
    setOpen(!open);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    if(open){
      document.body.style.overflow = 'unset';

    }else{
      document.body.style.overflow = 'hidden';
    }
}

  return (
    <div className='bg-slate-100 py-1 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-5 lg:px-0'>
          {/* logo */}
          <div>
            <img src={Logo} alt="" className='w-24' />
          </div>
          {/* computer nav */}
          <ul className='md:flex gap-6 font-semibold items-center hidden'>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Home</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>About</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Inventory</li>
            <li className='hover:text-red-500 cursor-pointer transition-all'>Contact Us</li>
            <button className='bg-red-500 text-white px-4 py-2 rounded-full'>Book a Test Drive</button>
          </ul>
          <Menu
            onClick={NavHandler}
            className='lg:hidden' />
        </div>
      </div>
      {open ? ( <nav 
     
      className='bg-slate-50 scr lg:hidden'>
        <ul className='flex flex-col space-y-10 bg-slate-50 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0'>
          <li className='hover:text-red-500 cursor-pointer transition-all'>Home</li>
          <li className='hover:text-red-500 cursor-pointer transition-all'>About</li>
          <li className='hover:text-red-500 cursor-pointer transition-all'>Inventory</li>
          <li className='hover:text-red-500 cursor-pointer transition-all'>Contact Us</li>
          <button className='bg-red-500 text-white px-4 py-2 rounded-full'>Book a Test Drive</button>
        <X
        onClick={NavHandler}
        className='z-50 absolute top-0 right-10 border border-black p-1 rounded-md'/>
        </ul>
      </nav>):null}
     
    </div>
  )
}

export default Navbar
