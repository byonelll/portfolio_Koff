'use client';

import React from "react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  demo: string;
};

const projects: Project[] = [
  {
    title: "Boutique d’achat en ligne – J2EE",
    description:
      "Application web complète avec gestion de catalogue, panier, commandes, et espace d’administration. Authentification sécurisée et gestion de sessions.",
    tags: ["E-commerce", "Java", "J2EE", "MySQL", "JSP/Servlets", "JDBC", "Bootstrap"],
    images: [
      "/projects/boutique1.png",
      "/projects/boutique2.png",
      "/projects/boutique3.png",
    ],
    demo: "#",
  },
  {
    title: "MoroccoLocks – Prise de rendez-vous (Laravel)",
    description:
      "Application de gestion de rendez-vous pour salon de coiffure. Réservation client, gestion de planning et notifications automatiques.",
    tags: ["Laravel", "PHP", "Planning", "MySQL", "Blade"],       
    images: [
      "/projects/moroccolocks1.png",
      "/projects/moroccolocks2.png",
      "/projects/moroccolocks3.png",
    ],
    demo: "#",
  },
  {
    title: "AssoFès – Plateforme des associations étudiantes",
    description:
      "Application web minimaliste centralisant les informations des associations étudiantes de Fès. ",
    tags: ["Associations", "React", "Next.js", "TypeScript", "Vercel", "TailwindCSS", "JSON"],
    images: [
      "/projects/asso1.png",
      "/projects/asso2.png",
      "/projects/asso3.png",
    ],
    demo: "https://associationfes.vercel.app",
  },
  {
    title: "Aura Studio – Services photo & vidéo au Maroc",
    description:
      "Landing page professionnelle pour proposer des prestations de photographie, vidéo et montage pour événements partout au Maroc. QR code intégré pour réservation directe via WhatsApp.",
    tags: ["Photographie", "Vidéo", "Next.js", "TailwindCSS", "TypeScript", "Vercel", "Marketing"],
    images: [
      "/projects/studio1.png",
      "/projects/studio2.png",
      "/projects/studio3.png",
    ],
    demo: "https://auravisuelle.vercel.app",
  }
];

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setCurrentImage(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  const nextImage = () => {
    if (!activeProject) return;
    setCurrentImage((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setCurrentImage((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  // Pour savoir si un projet doit ouvrir le lien demo directement
  const isDirectDemo = (project: Project) =>
    project.title.includes("AssoFès") || project.title.includes("Aura Studio");

  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-gray-900 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
            Projets
          </span>
          <br />
          <br />
          <h2 className="text-4xl font-bold mb-2">Découvrez mes réalisations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets sur lesquels j&apos;ai travaillé. Cliquez sur les cartes pour voir les images ou accéder à la démo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition group cursor-pointer"
            >
              <div className="h-40 w-full relative rounded-t-xl overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {isDirectDemo(project) ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                  >
                    Voir la démo
                  </a>
                ) : (
                  <span
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    Voir les images
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' });
            }}
          >
            Voir tous les projets
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">{activeProject.title}</h3>
            <div className="relative w-full h-64 mb-4">
              <Image
                src={activeProject.images[currentImage]}
                alt="Preview"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ◀ Précédent
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Suivant ▶
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}