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
    <div className="bg-[#070a07] text-white px-6 md:px-20 py-12">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <img src={logo} alt="Logo" className="w-32 sm:w-40 md:w-44" />
          <p className="text-gray-400 text-base max-w-sm">
            Creative agency crafting data-driven strategies to boost your brand online.
          </p>
          <button className="bg-green-500 w-fit font-semibold text-black text-sm px-6 py-2 rounded-full hover:bg-green-600 transition">
            Contact us
          </button>
        </div>

        {/* Right Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-0 lg:mt-14"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <ul className="text-gray-400 space-y-6 text-xl font-semibold">
              <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-lg">Services</h3>
            <ul className="text-gray-300 space-y-4 text-sm">
              <li><a href="#" className="hover:text-green-500 transition">SEO</a></li>
              <li><a href="#" className="hover:text-green-500 transition">PPC</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Content Marketing</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Social Media</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Email: info@axinor.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: Trivandrum, India</li>
            </ul>
            <div className="flex gap-4 mt-8 text-xl text-white">
              <FaFacebookF className="hover:text-green-500 cursor-pointer" />
              <FaTwitter className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-green-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Axinor. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
