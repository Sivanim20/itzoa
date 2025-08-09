import React from 'react';
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from 'react-icons/fa';


const services = [
  {
    title: "Website Design & Development",
    description: "Specialized in growing your brand Website.",
  },
  {
    title: "APP Design & Development",
    description: "Experts craft apps that define your brand.",
  },
  {
    title: "Business Technology Consulting",
    description: "Transform your bussiness with expert Technology consulting.",
  },
  {
    title: "UI/UX Research & Design",
    description: "Drive with thoughtful UI/UX research and design.",
  },
  {
    title: "Blockchain Development",
    description: "Blockchain development builds unbreakable ledgers for transparent transactions",
  },
  {
    title: "Cyber Security",
    description: "Ensure your Bussiness's safety with comprehensive cybersecurity solution.",
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand's visibility with targeted digital marketing strategies.",
  },
  {
    title: "Social Media Management",
    description: "Maximize your online prsence with our expert social media management",
  },
];

const Services = () => {
  return (
    <div id="Services" className='w-screen overflow-hidden bg-black text-white py-10'>
        <div className="flex flex-col md:flex-row justify-between text-center items-center px-6 md:px-[20%] lg:px-[30%]">
            <h2 className="text-4xl md:text-5xl font-light text-center p-6">
                <span className="font-bold">WHAT</span> we do
            </h2>
            <button className="group flex items-center text-xs group-hover:text-sm bg-green-600 text-black px-8 py-4 hover:px-9 hover:py-4 hover:shadow-md hover:shadow-green-800 rounded-full font-semibold mt-4 md:mt-0 transition-all duration-200">
                WHAT WE DO
                <span className="ml-2 group-hover:ml-3 bg-black text-green-600 w-4 h-4  flex items-center justify-center rounded-full">
                    <ArrowRight size={16} />
                </span>
            </button>
        </div>
        {/* service card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 px-8 pt-8">
            {services.map((service, index) => (
            <div 
            key={index} 
            className={'group p-8 border-[1px] border-gray-800 flex flex-col justify-between border-t-4 lg:border-t-[1px] border-t-green-600 lg:border-t-gray-600 hover:border-t-4 hover:border-t-green-600 transition-all transform duration-300 h-60 lg:h-80'}
            >
                <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    {service.description && (
                    <p className="text-gray-400 lg:text-transparent group-hover:text-gray-400 mt-4 transition-all transform duration-500">{service.description}</p>
                    )}
                </div>
                <button className="mt-6 bg-green-500 lg:bg-gray-600 text-white lg:w-4 lg:h-4 w-10 h-10  group-hover:w-10 group-hover:h-10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all transform duration-500">
                    <FaArrowRight className='text-black text-lg lg:text-[10px] group-hover:text-lg'/>
                </button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Services;