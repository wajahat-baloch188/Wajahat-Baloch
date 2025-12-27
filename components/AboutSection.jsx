"use client";
import React from "react";

const skills = [
  { skill: "HTML", icon: "🌐" },
  { skill: "CSS", icon: "🎨" },
  { skill: "JavaScript", icon: "⚡" },
  { skill: "React", icon: "⚛️" },
  { skill: "Next.js", icon: "▲" },
  { skill: "Tailwind CSS", icon: "💨" },
  { skill: "Git", icon: "📦" },
  { skill: "GitHub", icon: "🐙" },
  { skill: "Wordpress", icon: "📝" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6 animate-fadeInUp animation-delay-200">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Get to know me!
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi, my name is{" "}
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    Wajahat
                  </span>{" "}
                  and I am a <span className="font-bold">highly ambitious</span>
                  , <span className="font-bold">self-motivated</span>, and{" "}
                  <span className="font-bold">driven</span> Frontend Web
                  Developer.
                </p>
                <p>
                  I graduated in 2024 from{" "}
                  <span className="font-semibold">
                    Sindh Madressatul Islam University{" "}
                  </span>
                  with a Bachelor of Science degree in Computer Science.
                </p>
                <p>
                  I have a wide range of hobbies and passions that keep me busy.
                  From reading, playing sports, to traveling, I am always
                  seeking new experiences and love to keep myself engaged and
                  learning new things.
                </p>
                <p>
                  I believe that you should{" "}
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    never stop growing
                  </span>{" "}
                  and that's what I strive to do. I have a passion for
                  technology and a desire to always push the limits of what is
                  possible. I am excited to see where my career takes me and am
                  always open to new opportunities. 🙂
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6 animate-fadeInUp animation-delay-400">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
                My Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 transform cursor-default"
                  >
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">
                        {item.skill}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
