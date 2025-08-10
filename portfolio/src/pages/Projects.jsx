import React from "react";
import {
  SiTailwindcss,
  SiVercel,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import Navbar from "../components/Navbar";
import personalExpenseTracker from "../assets/personalExpenseTracker.png";
import employee_management from "../assets/employee_management.png";
import job_board from "../assets/job_board.png";
import event_registration from "../assets/event_registration.png";

const projects = [
  {
    title: "Employee Management System",
    image: employee_management,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiNodedotjs />, label: "Node.js" },
    ],
  },
  {
    title: "Personal Expense Tracker",
    image: personalExpenseTracker,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiNodedotjs />, label: "Node.js" },
    ],
  },
  {
    title: "Job Board Platform",
    image: job_board,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiNodedotjs />, label: "Node.js" },
    ],
  },
  {
    title: "Event Registration System",
    image: event_registration,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiNodedotjs />, label: "Node.js" },
    ],
  },
  // Add more projects here...
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-[#f3f3f7] via-[#eae9e5] to-[#d4d2cd] dark:from-[#23232b] dark:via-[#151518] dark:to-[#0f0f13] text-gray-900 dark:text-white px-4 py-16 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300 mb-12 font-serif">
            Here are some of the projects I've worked on. Each project showcases
            different technologies and skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`
                  group
                  w-full
                  bg-white dark:bg-[#1a1a1a]
                  rounded-2xl shadow-md dark:shadow-lg
                  overflow-hidden border border-gray-200 dark:border-gray-800
                  flex flex-col transition-transform duration-500
                  hover:scale-[1.02]
                  ${idx % 2 === 1 ? "md:translate-y-10" : "md:-translate-y-2"}
                  md:hover:-translate-y-2
                `}
                style={{ minHeight: "420px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold mb-2 font-serif dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech.label}
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1.5 rounded-md text-sm font-medium"
                      >
                        {tech.icon}
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
