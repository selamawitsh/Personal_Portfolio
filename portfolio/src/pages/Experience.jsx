import React from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

const timelineData = [
  {
    year: "2025 - Present",
    title: "Independent Real-World Projects",
    company: "Self-Driven Practice",
    description:
      "Engaged in building real-life projects from scratch, applying industry-standard development practices. Focused on problem-solving, code quality, and end-to-end delivery — from planning and design to deployment — to strengthen my skills and gain practical experience.",
    icon: <FaLaptopCode />,
    position: "right",
  },
  {
    year: "2025 - 2026",
    title: "Backend Development Trainee",
    company: "ALX",
    description:
      "Currently enrolled in the ALX backend development program, learning to design, build, and deploy scalable server-side applications. Gaining hands-on experience with databases, APIs, and industry best practices through real-world projects and collaborative learning.",
    icon: <FaCode />,
    position: "left",
  },
  {
    year: "2023 - 2027",
    title: "B.E in Software Engineering",
    company: "Addis Ababa University",
    description:
      "Pursuing a Bachelor of Engineering in Software Engineering, focusing on software development methodologies, programming languages, and system design. Engaged in various projects and internships to apply theoretical knowledge in practical scenarios.",
    icon: <FaGraduationCap />,
    position: "right",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-[#e7e5e1] via-[#cfcbc5] to-[#eae9e5] dark:from-[#0f0f13] dark:via-[#23232b] dark:to-[#151518] text-gray-900 dark:text-white flex flex-col items-center py-16 transition-colors duration-300"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center font-serif">
        My Experience so far
      </h1>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex w-full ${
              item.position === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`relative w-full md:w-5/12 bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 transition-colors`}
            >
              <h3 className="text-sm text-gray-500 dark:text-gray-400">
                {item.year}
              </h3>
              <h2 className="text-2xl font-bold mt-1 font-serif">
                {item.title}
              </h2>
              <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                {item.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">
                {item.description}
              </p>

              {/* Icon circle */}
              <div
                className="absolute top-8 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center text-white border-4 border-white dark:border-[#23232b] shadow-lg"
                style={{
                  left: item.position === "left" ? "100%" : "-3rem",
                }}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
