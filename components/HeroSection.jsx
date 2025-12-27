"use client";
import React from "react";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-14 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 md:space-y-4 max-w-5xl mx-auto">
          {/* Greeting */}
          <div className="animate-fadeInDown">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg sm:text-xl md:text-2xl mb-0">
              👋 Hello, I'm
            </p>
          </div>
          {/* Main Heading */}
          <div className="animate-fadeInUp space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="prevent-wrap bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent animate-gradient leading-tight bg-[length:200%_auto]">
                Wajahat Baloch
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              <span className="text-gray-700 dark:text-gray-300">I'm a </span>
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Frontend Web Developer
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp animation-delay-200 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed px-4 sm:px-0">
              Passionate about crafting visually stunning and intuitive websites
              that elevate the online experience with modern design and
              cutting-edge technology.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl animate-fadeInUp animation-delay-400">
            <div className="group flex flex-col items-center p-4 sm:p-6 md:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg h-full">
              <div className="p-3 md:p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-3 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                <FiCode
                  size={28}
                  className="text-primary-600 dark:text-primary-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Clean Code
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Well-structured & maintainable
              </p>
            </div>

            <div className="group flex flex-col items-center p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-3 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                <FiLayers
                  size={28}
                  className="text-primary-600 dark:text-primary-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Modern Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Beautiful & intuitive UI/UX
              </p>
            </div>

            <div className="group flex flex-col items-center p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-3 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                <FiZap
                  size={28}
                  className="text-primary-600 dark:text-primary-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                Fast & Responsive
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Optimized performance
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center pt-3 md:pt-6 animate-fadeInUp animation-delay-600">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="group relative inline-flex w-full md:w-auto md:min-w-[220px] items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 transform transition-all duration-300 overflow-hidden text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative z-10 flex items-center">
                View My Work
                <HiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="inline-flex w-full md:w-auto md:min-w-[220px] items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <FaDownload className="mr-2" />
              Get In Touch
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 sm:mt-20 animate-bounce">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-gray-400 dark:text-gray-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <HiArrowDown size={32} className="sm:w-8 sm:h-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
