import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import manImage from '../assets/man.png';
import customer from '../assets/customer.png';

const Choose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-screen'>
      <div
        ref={ref}
        className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden"
      >
          <div className="absolute overflow-hidden bottom-20 -right-24 w-72 h-72 bg-transparent border-[1px] opacity-20 rounded-full  z-0 "></div>
          <div className="absolute overflow-hidden bottom-[50%] right-[50%] w-8 h-8 bg-green-600 opacity-30 rounded-sm z-0 rotate-45"></div>
          <div className="absolute overflow-hidden top-16 right-[30%] w-6 h-6 bg-blue-600 opacity-30 rounded-sm z-0 rotate-45"></div>
          <div className="absolute top-40 -right-16 w-80 h-80 bg-transparent border-[1px] opacity-20 rounded-full  z-0 "></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="relative flex-shrink-0 mr-6"
            variants={fadeInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute bg-[#2c1e00] sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-72 lg:h-80 w-56 h-60 rounded-3xl bottom-0 z-0"></div>
            <img
              src={manImage}
              alt="man"
              className="relative z-10 w-60 md:w-80 left-6 md:left-10"
            />

            {/* Revenue Card */}
            <motion.div
              className="absolute bottom-10 -left-8 bg-white text-black px-4 py-3 rounded-xl shadow-lg w-48 z-20"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-sm text-gray-800">Revenue</h3>
                <span className="text-green-500 text-xs font-semibold">↑ 83%</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span>
                  <span className="text-sm text-[#6a00ff] font-semibold">$462.22</span>
                </div>
                <span className="text-xs text-gray-500">23 Jun, 2021</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
                  <span className="text-sm text-pink-500 font-semibold">$251.77</span>
                </div>
                <span className="text-xs text-gray-500">22 Jun, 2021</span>
              </div>
            </motion.div>

            {/* Customer*/}
            <motion.div
              className="absolute top-24 lg:top-28 sm:top-16 -right-16 lg:-right-44 sm:-right-36 flex flex-col gap-1 w-[30%] lg:w-auto  sm:w-[50%] z-20 "
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-[10px] sm:text-xs lg:text-sm text-white mb-1 text-left">Our Customers</div>
              <div className="flex items-center">
                <img src={customer} alt="customers" className="w-2/3" />
                <span className="text-orange-500 text-sm font-semibold ml-2">+25K</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className=" max-w-lg w-full md:w-1/2 text-center md:text-left  z-10"
            variants={fadeInFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why should you <br /> choose <span className='text-green-500'>Axi</span>no<span className='text-green-500'>r</span>
            </motion.h2>
            <motion.p
              className="text-gray-300 text-sm mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Axinor, we blend creativity with strategy to deliver digital solutions that drive real results. With a focus on innovation, transparency, and client success, we help brands grow, engage, and thrive in the digital world.
            </motion.p>
              <motion.button
                  className="bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition shadow-lg"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px #22c55e' }}
                  transition={{ type: 'spring', stiffness: 300 }}
              >
                Contact us
              </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
