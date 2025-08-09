import selamLogo from "../assets/selam_logo.jpg";

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-60 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full z-50">
      <img src={selamLogo} className="w-10 h-10 rounded-full" alt="" />
      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
