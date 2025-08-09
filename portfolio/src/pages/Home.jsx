import React, { useState, useEffect } from "react";
import selam from "../assets/selam.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane  } from "react-icons/fa";

export default function HomePage() {
  const fullName = "Selamawit Shimeles";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval;
    let erasingInterval;

    function startTyping() {
      typingInterval = setInterval(() => {
        setTypedName(fullName.slice(0, i + 1));
        i++;
        if (i === fullName.length) {
          clearInterval(typingInterval);
          setTimeout(() => startErasing(), 1500);
        }
      }, 120);
    }

    function startErasing() {
      i = fullName.length;
      erasingInterval = setInterval(() => {
        setTypedName(fullName.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(erasingInterval);
          setTimeout(() => startTyping(), 800);
        }
      }, 60);
    }

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(erasingInterval);
    };
  }, [fullName]);

  return (
    <section id="home"  className="min-h-screen bg-gradient-to-r from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white flex flex-col justify-center items-center pt-24 px-6 transition-colors duration-300">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-14 max-w-5xl w-full">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={selam}
            alt="Profile"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex justify-center md:justify-start space-x-6 mb-5 text-3xl">
            <a
              href="https://github.com/selamawitsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/selamawit-shimeles-991740353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-gray-400 transition" />
            </a>
            <a href="mailto:selamshimeles9@gmail.com">
              <FaEnvelope className="hover:text-gray-400 transition" />
            </a>

            <a href="https://t.me/Ortho_pia">
              <FaTelegramPlane  className="hover:text-gray-400 transition" />
            </a>
          </div>
          <h1 className="text-6xl font-bold mb-4 min-h-[70px]">
            {typedName}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            MERN Stack Engineer <span className="text-xl">|</span> Backend-Focused Software Developer
          </p>
        </div>
      </div>
    </section>
  );
}
