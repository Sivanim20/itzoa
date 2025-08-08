import React from 'react';
import { motion } from 'framer-motion';
import coverImg from '../assets/Cover_im.png';
import googleImg from '../assets/Gg.png';
import fbImg from '../assets/facebook.png';
import mediaImg from '../assets/media_icon.png';

const Hero = () => {
  return (
    <div className="w-screen" >
    <div className="bg-black text-white  py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">


      {/* Left side */}
      <motion.div
        className="max-w-xl z-10 px-6 md:px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mt-10 mb-4 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Creative <span className='text-green-400'>Digital <br /> Marketing </span> Agency
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          We combine creativity with strategy to deliver impactful digital marketing solutions. 
          From brand storytelling to performance-driven campaigns, we help businesses grow and connect with their audience effectively.
        </motion.p>

        <motion.button
          className="bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px #22c55e' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Contact us
        </motion.button>
      </motion.div>

      {/* Right Side*/}
      <motion.div
        className="relative w-[200px] md:w-[300px] lg:[400px] h-auto z-10 left-0 sm:left-5 lg:left-1 mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.img
          src={coverImg}
          alt="Businessman"
          className="w-[90%] object-contain z-10 relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <div className="absolute top-10 right-20 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#5c3d1b] rounded-full -z-10"/>
        <div className="absolute bottom-5 -left-2 w-28 h-28 lg:w-32 lg:h-32 bg-[#1b425c] rounded-3xl -z-10"/>

        <motion.img
          src={mediaImg}
          alt="Media"
          className="absolute top-56 -right-4 w-6 lg:w-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: [0, -8, 0], opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 4 }}
        />

        <motion.img
          src={fbImg}
          alt="Facebook"
          className="absolute bottom-10 left-[-15%] w-3 lg:w-5"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [0, 8, 0], opacity: 1 }}
          transition={{ delay: 1.8, repeat: Infinity, duration: 5 }}
        />

        <motion.img
          src={googleImg}
          alt="Google"
          className="absolute top-1/3 left-[-20%] w-6 lg:w-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />

        <motion.div
          className="absolute top-10 right-0 w-4 h-4 bg-orange-500 rounded-sm rotate-45"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <motion.div
          className="hidden md:block absolute top-80 left-[-30%] w-4 h-4 bg-blue-500 rounded-sm rotate-45"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <motion.div
          className="absolute top-10 left-5 w-2 h-2 bg-blue-900 rounded-sm rotate-45"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <motion.div
          className="absolute bottom-6 right-0 w-2 h-2 bg-purple-400 rounded-sm rotate-45"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>
    </div>
    </div>
  );
};

export default Hero;