import { useEffect, useState } from "react";
import selamLogo from "../assets/selam_logo.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  // Listen to scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 80; // Offset for navbar height
      let current = "Home";
      sections.forEach((section, idx) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navLinks[idx].name;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#151518] via-[#09090b] to-[#23232b] bg-opacity-95 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full z-50 border-b border-gray-900">
      <img src={selamLogo} className="w-10 h-10 rounded-full" alt="Logo" />
      <ul className="flex space-x-6 text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="relative">
            <a
              href={link.href}
              className={`transition-colors duration-200 px-2 py-1 ${
                active === link.name
                  ? "text-[#b656ec] font-bold"
                  : "hover:text-[#945cff]"
              }`}
            >
              {link.name}
              {active === link.name && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-[#b656ec] to-[#945cff] rounded-full"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
