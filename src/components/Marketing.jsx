import React from "react";
import { motion } from 'framer-motion';

import seoIcon from "../assets/icons/Seo.png";
import webdevIcon from "../assets/icons/webdev.png";
import videoIcon from "../assets/icons/video.png";
import contentIcon from "../assets/icons/content.png";
import socialIcon from "../assets/icons/social.png";
import ppcIcon from "../assets/icons/ppc.png";

const expertiseItems = [
  { title: "Search Engine Optimization", icon: seoIcon },
  { title: "Website design & Development", icon: webdevIcon },
  { title: "Video editing & Production", icon: videoIcon },
  { title: "Content Writing", icon: contentIcon },
  { title: "Social media Marketing", icon: socialIcon },
  { title: "Pay per click (PPC)", icon: ppcIcon },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.3 }
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3, type: "spring" }
  }
};

const ExpertiseCard = ({ title, icon, index }) => (
  <motion.div
    className="bg-[#121212] p-6 rounded-xl flex flex-col items-center text-center hover:bg-[#3e5749] transition-colors shadow-md h-48 cursor-pointer mt-10"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.1)" }}
  >
    <img src={icon} alt={title} className="w-12 h-12 mb-4 mt-5" />
    <h3 className="text-white text-sm font-medium leading-tight">
      {title}
    </h3>
  </motion.div>
);

const Marketing = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="block sm:hidden space-y-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold leading-snug mt-2">
            Our Digital <br /> Marketing Expertise
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            We drive growth through smart digital marketing—combining SEO, content, ads, and social media to connect your brand with the right audience.
          </p>
        </motion.div>
        <ExpertiseCard 
          title={expertiseItems[0].title} 
          icon={expertiseItems[0].icon} 
          index={0} 
        />
        <ExpertiseCard 
          title={expertiseItems[1].title} 
          icon={expertiseItems[1].icon} 
          index={1} 
        />

        {/*desktop */}
        <motion.div
          className="hidden sm:flex flex-col justify-center space-y-4 lg:col-span-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold leading-snug mt-2">
            Our Digital <br /> Marketing Expertise
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We drive growth through smart digital marketing—combining SEO, content, ads, and social media to connect your brand with the right audience.
          </p>
        </motion.div>
        {expertiseItems.slice(2).map((item, idx) => (
          <ExpertiseCard
            key={idx + 2}
            title={item.title}
            icon={item.icon}
            index={idx + 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
