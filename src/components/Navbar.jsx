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
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <img className='absolute w-32 sm:w-32 lg:w-44 -top-4 lg:-top-6 md:left-5 left-0 lg:left-10' src={logo} alt='logo'/>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <div className="w-1/7"></div>
        <ul className='hidden md:flex gap-10 text-white'>
          <div className='absolute top-[-60px] left-[50%] w-28 h-28 bg-[#303158] rounded-full -z-10'></div>
          <div className='absolute top-11 left-[30%] w-20 h-20 bg-[#30583d] rounded-full -z-20'></div>
          <a href="#About" className='cursor-pointer hover:border-b-2 hover:border-green-600'>About Us</a>
          <a href="#Services" className='cursor-pointer hover:border-b-2 hover:border-green-600'>Services</a>
          <a href="#LatestWork" className='cursor-pointer hover:border-b-2 hover:border-green-600'>Latest Work</a>
          <a href="#Testimonails" className='cursor-pointer hover:border-b-2 hover:border-green-600'>Testimonails</a>
        </ul>
        <button className='hidden md:block bg-green-500 font-semibold text-black px-8 py-2 rounded-full'>Contact us</button>
        <img onClick={() => setShowMobileMenu(true)} src={menu_icon} className="md:hidden w-7 cursor-pointer" alt='' />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black z-[9999] transition-all duration-300 ease-in-out ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className='flex justify-end p-4 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={cross_icon} className="w-14" alt='' />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium text-white'>
          <a onClick={() => setShowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>About Us</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Latest Work</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
