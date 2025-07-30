'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiVite, SiRedux, SiAstro,
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiFirebase, SiSupabase,
  SiNetlify, SiVercel, SiAdobeillustrator, SiAdobexd, SiAdobeaftereffects,
  SiAdobepremierepro, SiCanva, SiCapacitor, SiAdobephotoshop
} from 'react-icons/si';

const stacks = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Astro", icon: <SiAstro /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "DevOps & Hosting",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Design & Vidéos",
    items: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Xd", icon: <SiAdobexd /> },
      { name: "After Effects", icon: <SiAdobeaftereffects /> },
      { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Capcut", icon: <SiCapacitor /> }, // Capcut n’a pas de logo officiel
    ],
  },
];

export default function StacksSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
          Compétences 
        </span>
        <br /> <br />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Mes Stacks & Outils</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg">
          Ingénierie logicielle ou création digitale : je m’appuie sur les technologies et les
          outils les plus récentes et fais évoluer mes compétences en continu pour rester à la
          pointe de l’innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-left">
          {stacks.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-lg mb-4 text-blue-900 dark:text-blue-300 text-center sm:text-left">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center bg-white dark:bg-gray-800 rounded-md shadow-sm px-3 py-2 hover:shadow-md transition"
                  >
                    <span className="text-xl text-blue-500 mr-3">{tool.icon}</span>
                    <span className="text-base text-gray-900 dark:text-gray-100 font-medium">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}