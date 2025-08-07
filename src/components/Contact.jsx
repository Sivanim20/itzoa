import React from "react";
import { motion } from "framer-motion";
import PersonImage from "../assets/person.png";
import { Phone } from "lucide-react"; 

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Creative <span className="text-green-400">Digital</span><br />
          Marketing Agency
        </h1>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr,<br />
          sed diam nonumy eirmod tempor Lorem ipsum dolor sit<br />
          amet consectetur sadipscing elitr
        </p>

        <div className="flex items-center gap-6">
            <motion.button
                className="bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition shadow-lg"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px #22c55e' }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Contact us
            </motion.button>
          <span className="text-gray-400">Or</span>
          <div className="flex items-center gap-2 text-white font-medium">
            <Phone className="text-green-400" size={20} />
            +0 123 456-789
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={PersonImage}
          alt="Person"
          className="w-[300px] md:w-[350px] object-contain"
        />
      </motion.div>
      
      <div className="absolute top-10 right-40 w-3 h-3 bg-purple-500 rounded-sm"></div>
      <div className="absolute top-32 right-20 w-4 h-4 bg-orange-500 rotate-45"></div>
      <div className="absolute top-10 right-24 w-4 h-4 bg-green-500 rotate-45"></div>
    </section>
  );
};

export default Contact;
