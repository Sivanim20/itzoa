import React from "react";
import { motion } from "framer-motion";
import AsusIcon from "../assets/icons/asus.png";
import AllianzIcon from "../assets/icons/allianz.png";
import ChaseIcon from "../assets/icons/chase.png";
import NytIcon from "../assets/icons/nyt.png";
import LinkedInIcon from "../assets/icons/linkedin.png";

const companies = [
  { name: "ASUS", icon: AsusIcon },
  { name: "Allianz", icon: AllianzIcon },
  { name: "Chase", icon: ChaseIcon },
  { name: "The New York Times", icon: NytIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Featured = () => {
  return (
    <div className="w-screen">
      <div className="bg-black text-white py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8">
            <h2 className="text-lg sm:text-xl font-semibold">Featured in</h2>
            <span className="border-l border-gray-600 h-5" />
            <span className="text-gray-500 text-sm sm:text-base">Our Certification</span>
          </div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="bg-[#1a1a1a] p-4 rounded-md flex items-center justify-center w-full h-16 sm:h-20 hover:bg-green-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={company.icon}
                  alt={company.name}
                  className="h-5 sm:h-6 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
