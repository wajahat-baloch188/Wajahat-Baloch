"use client";
import React from "react";
import { HiBriefcase, HiCalendar } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Associate Frontend Developer",
    company: "Tafsol Technologies",
    period: "March 2025 - Present",
    type: "Full-time",
    description: [
      "Developing and maintaining responsive web applications using React and Next.js",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing modern UI/UX designs with Tailwind CSS and component libraries",
      "Optimizing application performance and ensuring code quality through best practices",
      "Participating in code reviews and contributing to team knowledge sharing"
    ],
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Git", "Agile"],
    current: true
  },
  {
    title: "Frontend Developer Intern",
    company: "Tafsol Technologies",
    period: "December 2024 - March 2025",
    type: "Internship",
    description: [
      "Worked on real-world projects using React and modern JavaScript frameworks",
      "Learned and applied industry best practices for frontend development",
      "Collaborated with senior developers to build scalable web applications",
      "Gained hands-on experience with version control, code reviews, and team collaboration",
      "Developed responsive user interfaces following modern design principles"
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Git", "Responsive Design"],
    current: false
  },
  {
    title: "Web Development Bootcamp",
    company: "360xpertsolutions",
    period: "September 2024 - December 2024",
    type: "Bootcamp",
    description: [
      "Completed intensive 3-month full-stack web development program",
      "Mastered fundamentals of HTML, CSS, JavaScript, and React",
      "Built multiple projects including responsive websites and web applications",
      "Learned modern development tools, version control, and deployment practices",
      "Participated in collaborative projects and peer code reviews"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Web Development"],
    current: false
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            My professional journey and growth in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-0 items-center justify-center">
                  <div className={`relative z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/50' 
                      : 'bg-white dark:bg-gray-800 border-4 border-primary-500'
                  }`}>
                    {exp.current ? (
                      <FiTrendingUp className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                    ) : (
                      <HiBriefcase className="text-primary-600 dark:text-primary-400 w-5 h-5 lg:w-6 lg:h-6" />
                    )}
                  </div>
                  {exp.current && (
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="md:ml-16 lg:ml-24">
                  <div className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    exp.current
                      ? 'border-primary-500 shadow-primary-500/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                  }`}>
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                        Current
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 pr-8 sm:pr-0">
                        <div>
                          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${
                            exp.current 
                              ? 'text-primary-600 dark:text-primary-400' 
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                            <HiBriefcase className="text-primary-500 w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                            <HiCalendar className="text-primary-500 w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 sm:mb-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.description.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            <span className="text-primary-500 mt-1.5 flex-shrink-0">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                        Technologies & Tools:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-200 dark:border-primary-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
