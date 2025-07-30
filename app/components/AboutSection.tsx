'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="home" className="py-16 px-2 sm:px-4 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
        <div className="flex-shrink-0 mb-6 md:mb-0 flex justify-center md:justify-start w-full md:w-auto">
          <Image
            src="/profil1.jpeg"
            alt="Photo de profil"
            width={180}
            height={180}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">À propos</h2>
          <p className="text-lg leading-relaxed text-center md:text-left">
            Jeune diplômé en ingénierie logicielle, passionné par le développement web, la cybersécurité et l’innovation.<br />
            Curieux et rigoureux, j’aime transformer des idées en solutions digitales efficaces et accessibles.<br />
            Je valorise la confiance, l’honnêteté, le respect et l’écoute active. Ma méthode est collaborative : je vous accompagne avec engagement, mais votre implication est essentielle. Ensemble, construisons des projets solides, dans un esprit de transparence et de partenariat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/byonelll"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-100 transition text-gray-800 dark:text-white"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a
              href="https://ma.linkedin.com/in/angenor-koffi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-100 transition text-gray-800 dark:text-white"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-100 transition text-gray-800 dark:text-white"
            >
              <FaEnvelope className="text-xl" />
              Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}