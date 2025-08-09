import Navbar from "./../components/Navbar";
import { FaPaperPlane } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div
        id="contact"
        className="min-h-screen bg-black text-white flex items-center justify-center px-4"
      >
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/selamawitsh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 hover:text-[#6e5494] hover:animate-bounce hover:animate-circle"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/selamawit-shimeles-991740353/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 hover:text-[#0077b5] hover:animate-bounce hover:animate-circle"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:selamshimeles9@gmail.com"
                className="transition-transform duration-300 hover:scale-125 hover:text-[#c71610] hover:animate-bounce hover:animate-circle"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://t.me/Ortho_pia"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 hover:text-[#229ED9] hover:animate-bounce hover:animate-circle"
              >
                <FaTelegramPlane className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Section (Form) */}
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none focus:border-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none focus:border-gray-400"
            />
            <textarea
              placeholder="Tell me about your project or idea..."
              rows="5"
              className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none focus:border-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black py-3 rounded-md font-medium hover:bg-gray-300 transition cursor-pointer"
            >
              <FaPaperPlane className="text-lg" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
