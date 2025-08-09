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
    <div  id= 'experience' className="bg-[#0c0c0c] min-h-screen text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-12">My Experience so far</h1>
      <div className="relative w-full max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex w-full ${
              item.position === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`relative w-5/12 bg-[#1a1a1a] rounded-lg p-6 shadow-lg`}
            >
              <h3 className="text-sm text-gray-400">{item.year}</h3>
              <h2 className="text-xl font-bold mt-1">{item.title}</h2>
              <h4 className="text-md font-semibold text-gray-300">
                {item.company}
              </h4>
              <p className="text-gray-400 mt-2 text-sm">{item.description}</p>

              {/* Icon circle */}
              <div
                className="absolute top-6 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white border-4 border-[#0c0c0c]"
                style={{
                  left: item.position === "left" ? "100%" : "-2.5rem",
                }}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
