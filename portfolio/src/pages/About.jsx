import Navbar from "../components/Navbar.jsx";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiJavascript,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <SiVercel />, label: "Vercel" },
    ],
  },
  {
    title: "Languages",
    items: [
      { icon: <SiPython />, label: "Python" },
      { icon: <SiJavascript />, label: "JavaScript" },
    ],
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="min-h-screen bg-gradient-to-r from-[#f5f3eb] via-[#eae9e5] to-[#e7e5e1] dark:from-[#23232b] dark:via-[#151518] dark:to-[#0f0f13] text-gray-900 dark:text-white px-4 py-20 font-serif transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
            About Me
          </h1>

          {/* Intro Text */}
          <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-16">
            Hi, I’m Selamawit — an enthusiastic MERN Stack Developer who loves
            creating dynamic, user-friendly applications. I’m always learning,
            experimenting, and growing with every project I take on.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((section) => (
              <div
                key={section.title}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-start transition-colors"
              >
                <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-2 bg-white dark:bg-[#23232b] text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-md text-lg font-medium shadow-sm"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
