import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent overflow-hidden">
      <img
        className="absolute w-28 sm:w-32 lg:w-44 -top-4 lg:-top-6 md:left-5 left-2"
        src={logo}
        alt="logo"
      />
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20 lg:px-32">
        <div className="w-1/7"></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white font-medium mt-4 text-xl md:text-sm lg:text-base ">
          <a href="#About" className="cursor-pointer hover:border-b-2 hover:border-green-600">About Us</a>
          <a href="#Services" className="cursor-pointer hover:border-b-2 hover:border-green-600">Services</a>
          <a href="#LatestWork" className="cursor-pointer hover:border-b-2 hover:border-green-600">Latest Work</a>
          <a href="#Testimonails" className="cursor-pointer hover:border-b-2 hover:border-green-600">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-green-500 font-semibold text-black px-6 py-2 rounded-full mt-4">
          Contact Us
        </button>

        {/* mobile menu*/}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black transition-all duration-300 ease-in-out z-[9999] ${
          showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-end p-4">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross_icon}
            className="w-10 cursor-pointer"
            alt="close"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-6 px-5 text-lg font-medium text-white">
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full">About Us</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Services" className="px-4 py-2 rounded-full">Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#LatestWork" className="px-4 py-2 rounded-full">Latest Work</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className="px-4 py-2 rounded-full">Testimonials</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contact" 
            className="px-4 text-sm py-2 rounded-full bg-green-500 text-black mt-4 hover:bg-green-950 hover:text-white hover:shadow-sm hover:shadow-green-500">
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
