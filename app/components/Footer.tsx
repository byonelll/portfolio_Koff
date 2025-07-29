import { FaCalendarAlt, FaVideo, FaNewspaper, FaHome, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative mt-24 pb-32">
      <div className="text-center text-gray-500 mb-4">
         by <span className="font-semibold">Angenor Koffi</span>
      </div>
      <div className="flex justify-center gap-8 mb-8 text-gray-600">
        <a href="tel:+123456789" className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaCalendarAlt /> Call
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaVideo /> Vidéothèque
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaNewspaper /> My Substack
        </a>
      </div>
      {/* Barre de navigation flottante */}
      <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50">
        <div className="flex bg-white shadow-lg rounded-full px-6 py-3 gap-8 border border-gray-100">
          <a href="#home" className="text-blue-600 text-2xl hover:scale-110 transition"><HiOutlineHome /></a>
          <a href="#projects" className="text-gray-600 text-2xl hover:text-blue-600 transition"><FaNewspaper /></a>
          <a href="#contact" className="text-gray-600 text-2xl hover:text-blue-600 transition"><MdOutlineMail /></a>
          <a href="https://github.com/byonelll" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-2xl hover:text-blue-600 transition"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}