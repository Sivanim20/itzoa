import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

import zoe from "../assets/person1.jpg";
import don from "../assets/person2.jpg";
import alex from "../assets/person3.jpg";

const testimonials = [
  {
    name: "Zoe Mantis",
    title: "Founder, Alpha Group",
    image: zoe,
    message:
      "Working with this team was an exceptional experience. Their creativity, professionalism, and attention to detail truly brought our vision to life.",
  },
  {
    name: "Don Joe",
    title: "Founder, Alpha Group",
    image: don,
    message:
      "Their dedication and technical expertise exceeded our expectations. The project was delivered on time, with outstanding quality and seamless communication.",
  },
  {
    name: "Alex Rider",
    title: "Founder, Alpha Group",
    image: alex,
    message:
      "From start to finish, the process was smooth and efficient. Their innovative solutions helped elevate our brand and reach a wider audience.",
  },
];


const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

      <div {...swipeHandlers} className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{testimonials[index].name}</p>
                <p className="text-sm text-gray-400">
                  {testimonials[index].title}
                </p>
              </div>
            </div>
            <p className="text-gray-300">{testimonials[index].message}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[6px] w-[20px] rounded-full cursor-pointer transition-all duration-300 ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
