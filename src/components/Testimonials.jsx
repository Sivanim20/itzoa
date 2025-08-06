import React, { useState } from "react";
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
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    name: "Don Joe",
    title: "Founder, Alpha Group",
    image: don,
    message:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    name: "Alex Rider",
    title: "Founder, Alpha Group",
    image: alex,
    message:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

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

      <div {...swipeHandlers} className="relative max-w-xl mx-auto">
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
                className="w-11 h-11 rounded-full mr-4"
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
