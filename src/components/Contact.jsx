import React from 'react';
import { motion } from 'framer-motion';
import PersonImage from '../assets/person.png';
import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div id="Contact" className='w-screen bg-black text-white py-16 px-4 sm:px-8 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden gap-12'>
      <motion.div
        className='w-screen p-4 text-center md:text-left'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className='text-3xl sm:text-3xl lg:text-5xl md:text-4xl font-bold leading-tight mb-6'>
          Creative{' '}
          <span className='text-green-400'>Digital<br className='hidden sm:block' /> Marketing</span>{' '}
          Agency
        </h1>

        <p className='text-gray-400 text-sm sm:text-base mb-8'>
          We build data-driven strategies and designs that scale your brand across digital platforms.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6'>
          <motion.button
            className='bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition shadow-lg'
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22c55e' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contact us
          </motion.button>

          <span className='text-gray-400 hidden sm:inline'>or</span>

          <div className='flex items-center gap-2 text-white font-medium text-sm'>
            <Phone className='text-green-400' size={20} />
            +0 123 456-789
          </div>
        </div>
      </motion.div>

      <motion.div
        className='w-full md:w-1/2 flex justify-center md:justify-end'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={PersonImage}
          alt='Person'
          className='w-64 sm:w-72 md:w-80 lg:w-[350px] object-contain'
        />
      </motion.div>

      <div className='absolute top-10 right-52 w-3 h-3 bg-purple-500 rounded-sm rotate-45'></div>
      <div className='absolute top-32 right-[20%] md:right-[15%] lg:right-[10%] w-4 h-4 bg-orange-500 rotate-45'></div>
      <div className='absolute top-44 right-[75%] md:right-[50%] lg:right-[30%] w-4 h-4 bg-green-500 rotate-45'></div>
    </div>
  );
};

export default Contact;