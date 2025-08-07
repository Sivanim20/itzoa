import React from "react";
import { motion } from "framer-motion";
import artemImg from "../assets/artem.jpg";
import mayhemImg from "../assets/mayhem.jpg";
import basicImg from "../assets/basic.jpg";

const workItems = [
  {
    title: "Artem - Digital Marketing campaign",
    image: artemImg,
    description: "We developed a data-driven strategy for Artem, using SEO, ads, and content to boost visibility, engagement, and conversions.",
  },
  {
    title: "Mayhem - Search engine Optimization",
    image: mayhemImg,
    description: "We optimized Mayhem’s online presence through tailored SEO strategies, improving search rankings, organic traffic, and overall visibility.",
  },
  {
    title: "Basic - Pay per click (PPC)",
    image: basicImg,
    description: "We launched targeted PPC campaigns for Basic, driving high-quality traffic and maximizing ROI through strategic ad placements and keyword optimization.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const LatestWork = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left md:text-left">Our latest work</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {workItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="group relative bg-zinc-900/60 backdrop-blur-md p-1 rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-green-500/60 shadow-xl hover:shadow-green-700/30"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:animate-pulse group-hover:bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-lime-500/10 transition-all duration-500"></div>

            <div className="overflow-hidden rounded-xl relative z-10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="mt-5 z-10 relative p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
