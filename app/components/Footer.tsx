import { FaNewspaper, FaGithub } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gray-950 py-16" aria-label="Pied de page du site">
      <h2 className="sr-only">Informations légales et navigation</h2>
      {/* Texte du footer, bien visible et au-dessus de la barre flottante */}
      <div className="text-center text-gray-100 text-xl font-semibold tracking-wide mb-20">
        La sueur épargnera toujours le sang by <span className="text-blue-400">Angenor Koffi</span>
        <span className="sr-only">Portfolio développeur web Maroc, ingénieur logiciel, Next.js, React, Node.js</span>
      </div>
      {/* Barre de navigation flottante */}
      <nav className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50" aria-label="Navigation rapide">
        <div className="flex bg-white shadow-lg rounded-full px-6 py-3 gap-8 border border-gray-100">
          <a href="#home" className="text-blue-600 text-2xl hover:scale-110 transition" aria-label="Accueil"><HiOutlineHome /></a>
          <a href="#projects" className="text-gray-600 text-2xl hover:text-blue-600 transition" aria-label="Projets"><FaNewspaper /></a>
          <a href="#contact" className="text-gray-600 text-2xl hover:text-blue-600 transition" aria-label="Contact"><MdOutlineMail /></a>
          <a href="https://github.com/byonelll" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-2xl hover:text-blue-600 transition" aria-label="GitHub Angenor Koffi"><FaGithub /></a>
        </div>
      </nav>
    </footer>
  );
}