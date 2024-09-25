import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
            <p className="text-dark2">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Web Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Software Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Apps Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Home
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Services
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    About
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-start">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 py-4 bg-white rounded-s-xl focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="px-6 py-4 font-semibold text-white rounded-e-xl bg-primary">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex py-3 space-x-6">
              <a href="#">
                <FaWhatsapp className="duration-200 cursor-pointer hover:text-primary hover:scale-105 " />
              </a>
              <a href="#">
                <FaInstagram className="duration-200 cursor-pointer hover:text-primary hover:scale-105 " />
              </a>
              <a href="#">
                <TbWorldWww className="duration-200 cursor-pointer hover:text-primary hover:scale-105 " />
              </a>
              <a href="#">
                <FaYoutube className="duration-200 cursor-pointer hover:text-primary hover:scale-105 " />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
