import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { motion } from 'framer-motion';


const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <div className='bg-[#070a07] text-white px-6 md:px-20 py-12'>
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8 w-full'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className='w-full'>
          <img src={logo} alt='Logo' className='w-32 sm:w-32 lg:w-44 md:w-36 ' />
          <p className='text-gray-400 text-base'>
            Creative agency crafting data-driven strategies to boost your brand online.
          </p>
          <button className='hidden md:block bg-green-500 font-semibold text-black text-sm mt-10 px-6 py-2 rounded-full'>Contact us</button>
        </div>

        <motion.div 
            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-0 md:pt-6 sm:pt-1 lg:pt-16'
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        > 
            <div className='mt-6'>
            <ul className='text-gray-300 text-xl md:text-xl sm:text-lg lg:text-2xl font-medium space-y-4'>
                <li><a href='#' className='hover:text-green-600'>Home</a></li>
                <li><a href='#' className='hover:text-green-600'>About Us</a></li>
                <li><a href='#' className='hover:text-green-600'>Services</a></li>
                <li><a href='#' className='hover:text-green-600'>Contact</a></li>
            </ul>
            </div>

            <div className='pt-6 md:pt-6 '>
            <h3 className='font-semibold mb-3 text-lg md:text-lg sm:text-sm lg:text-xl'>Services</h3>
            <ul className='text-gray-300 text-sm sm:text-xs lg:text-sm space-y-3'>
                <li><a href='#' className='hover:text-green-600'>SEO</a></li>
                <li><a href='#' className='hover:text-green-600'>PPC</a></li>
                <li><a href='#' className='hover:text-green-600'>Content Marketing</a></li>
                <li><a href='#' className='hover:text-green-600'>Social Media</a></li>
            </ul>
            </div>

            <div className='pt-6 md:pt-6 '>
            <h3 className='font-semibold mb-3 text-lg md:text-lg sm:text-sm lg:text-xl'>Contact</h3>
            <ul className='text-sm sm:text-xs lg:text-sm space-y-3'>
                <li>Email: info@axinor.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Location: Trivandrum, India</li>
                <li className='flex gap-4 mt-4 text-white'>
                <FaFacebookF className='hover:text-green-500 cursor-pointer' />
                <FaTwitter className='hover:text-green-500 cursor-pointer' />
                <FaInstagram className='hover:text-green-500 cursor-pointer' />
                <FaLinkedinIn className='hover:text-green-500 cursor-pointer' />
                </li>
            </ul>
            </div>
        </motion.div>
        <div className=' pt-2 text-left text-sm text-gray-500'>
            © {new Date().getFullYear()} Axinor. All Rights Reserved.
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
