import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';
import logo from '../assets/logo1.png';

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
   
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [showMobileMenu]);


  return (
    <div className='w-screen pr-4'>
      <div className="absolute top-0 left-0 z-[99999] bg-transparent w-screen">
        <img className='absolute w-32 sm:w-32 lg:w-44 -top-4 lg:-top-6 md:left-5 left-0 lg:left-10' src={logo} alt='logo'/>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <div className="w-1/7"></div>
          <ul className='hidden md:flex gap-10 text-white'>
            <div className='absolute hidden lg:block top-[-60px] left-[50%] w-28 h-28 bg-[#303158] rounded-full -z-10'></div>
            <div className='absolute hidden lg:block top-11 left-[30%] w-20 h-20 bg-[#30583d] rounded-full -z-20'></div>
            <a href='#Marketing'className='cursor-pointer hover:border-b-2 hover:border-green-600'>About Us</a>
            <a href='#Services' className='cursor-pointer hover:border-b-2 hover:border-green-600'>Services</a>
            <a href='#LatestWork' className='cursor-pointer hover:border-b-2 hover:border-green-600'>Latest Work</a>
            <a href='#Testimonials' className='cursor-pointer hover:border-b-2 hover:border-green-600'>Testimonials</a>
          </ul>
          <button className='hidden md:block bg-green-500 font-semibold text-black px-8 py-2 rounded-full'>Contact us</button>
          <img onClick={() => setShowMobileMenu(true)} src={menu_icon} className="md:hidden w-7 cursor-pointer" alt='' />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 overflow-hidden w-screen h-screen bg-black z-[9999]  ${
            showMobileMenu
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex justify-end cursor-pointer px-4">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={cross_icon}
              className="w-14"
              alt=''
            />
          </div>
          <div>
            <ul className='flex flex-col items-center gap-4 mt-[20%] w-screen text-lg font-medium text-white'>
              <a onClick={() => setShowMobileMenu(false)} href='#Marketing' className='w-1/2 text-center px-6 py-2 rounded-full inline-block shadow-inner shadow-green-700 hover:border-[1px] hover:border-green-600'>About Us</a>
              <a onClick={() => setShowMobileMenu(false)} href='#Services' className='w-1/2 text-center px-6 py-2 rounded-full inline-block shadow-inner shadow-green-700 hover:border-[1px] hover:border-green-600'>Services</a>
              <a onClick={() => setShowMobileMenu(false)} href='#LatestWork' className='w-1/2 text-center px-6 py-2 rounded-full inline-block shadow-inner shadow-green-700 hover:border-[1px] hover:border-green-600'>Latest Work</a>
              <a onClick={() => setShowMobileMenu(false)} href='#Testimonials' className='w-1/2 text-center px-6 py-2 rounded-full inline-block shadow-inner shadow-green-700 hover:border-[1px] hover:border-green-600'>Testimonials</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;