"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "CryptoHUB",
    description:
      "Crypto Hub is a web app that's your one-stop destination for everything related to cryptocurrencies. Built with modern React technologies and real-time data integration.",
    image: "/CryptoHUB.png",
    github: "https://github.com/wajahat-baloch/CryptoHub.git",
    link: "https://crypto-hub-seven.vercel.app/",
    tags: ["React", "Crypto API", "Tailwind CSS"],
  },
  {
    name: "Ethereal Elegance",
    description:
      "Explore the ultimate destination for cosmetic beauty with our sleek, modern landing page. Discover top-quality products and exclusive offers tailored for your unique style.",
    image: "/ethreal.png",
    github: "https://github.com/wajahat-baloch188/Cosmetic-Landing-Page",
    link: "https://cosmetic-landing-page-nz58bmuzx.vercel.app/",
    tags: ["React", "Landing Page", "E-commerce"],
  },
  {
    name: "Delicious",
    description:
      "Delicious is a React.js recipe website where users can browse, search, and discover mouthwatering dishes. Features include recipe search, categories, and detailed cooking instructions.",
    image: "/delicious.png",
    github: "https://github.com/wajahat-baloch188/Delicious_Recipe_App",
    link: "https://delicious-recipe-gpvn1dwej-wajahatbaloch2020-gmailcom.vercel.app/",
    tags: ["React", "Recipe API", "Search"],
  },
  {
    name: "Daily Goals App",
    description:
      "This empowering app equips you with the tools to conquer your daily life goals and transform your aspirations into achievements. Track progress and stay motivated.",
    image: "/dailygoals.png",
    github: "https://github.com/wajahat-baloch/DailyLife-Goals-App.git",
    link: "https://daily-life-goals-app.vercel.app/",
    tags: ["React", "Productivity", "Local Storage"],
  },
  {
    name: "O Travels",
    description:
      "Embark on unforgettable journeys with our expertly crafted travel experiences. Your adventure begins here. Browse destinations and plan your perfect trip.",
    image: "/OTravels.png",
    github: "https://github.com/wajahat-baloch/O_Travels.git",
    link: "https://o-travels.vercel.app/",
    tags: ["React", "Travel", "Booking"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset="-100px 0px -100px 0px">
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors pr-2">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group/link"
                    >
                      <BsGithub size={18} className="sm:w-5 sm:h-5 group-hover/link:scale-110 transition-transform" />
                      <span className="font-medium">Code</span>
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-lg transition-all duration-200 group/link shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
                    >
                      <span className="font-medium">Live Demo</span>
                      <BsArrowUpRightSquare size={16} className="sm:w-[18px] sm:h-[18px] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
