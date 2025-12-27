"use client";
import React from "react";
import { Link } from "react-scroll";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-gray-300 border-t border-gray-800 dark:border-gray-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Wajahat Baloch
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Frontend Web Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer inline-block text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer inline-block text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer inline-block text-sm"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer inline-block text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer inline-block text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/wajahat-baloch188"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110 transform group"
                aria-label="GitHub"
              >
                <AiOutlineGithub
                  size={20}
                  className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/wajahatbaloch/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110 transform group"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin
                  size={20}
                  className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.facebook.com/wajahat.baloch.35"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110 transform group"
                aria-label="Facebook"
              >
                <AiOutlineFacebook
                  size={20}
                  className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Wajahat Baloch. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-105 transform group"
            aria-label="Scroll to top"
          >
            <span className="text-gray-400 group-hover:text-white text-xs sm:text-sm font-medium">Back to top</span>
            <AiOutlineArrowUp
              size={16}
              className="sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
