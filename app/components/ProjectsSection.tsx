'use client';

import Image from "next/image";

const projects = [
  {
    title: "JobBoard+ - Plateforme d'offres d'emploi",
    description: "Application web pour la recherche d'emploi, matching intelligent et gestion de candidatures en temps réel.",
    tags: ["Emploi", "Matching IA", "Next.js"],
    image: "/projects/jobboard.png",
    demo: "#",
  },
  {
    title: "EduTrack - Suivi de progression scolaire",
    description: "Outil de suivi pour élèves et enseignants, avec analytics, notifications et export de bulletins.",
    tags: ["Éducation", "Analytics", "React"],
    image: "/projects/edutrack.png",
    demo: "#",
  },
  {
    title: "FoodFast - Livraison de repas",
    description: "Plateforme de commande et livraison de repas, paiement en ligne et suivi en temps réel.",
    tags: ["E-commerce", "Livraison", "Node.js"],
    image: "/projects/foodfast.png",
    demo: "#",
  },
  {
    title: "Portfolio Builder",
    description: "Générateur de portfolios personnalisés pour étudiants et freelances, avec hébergement intégré.",
    tags: ["SaaS", "NoCode", "Vercel"],
    image: "/projects/portfolio.png",
    demo: "#",
  },
  {
    title: "HealthConnect - Prise de rendez-vous médical",
    description: "Application de gestion de rendez-vous, notifications SMS et téléconsultation intégrée.",
    tags: ["Santé", "Rendez-vous", "Firebase"],
    image: "/projects/healthconnect.png",
    demo: "#",
  },
  {
    title: "Evently - Gestion d'événements",
    description: "Solution pour organiser, promouvoir et gérer des événements avec billetterie en ligne.",
    tags: ["Événementiel", "Billetterie", "Stripe"],
    image: "/projects/evently.png",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
           <span className="bg-gray-900 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
          Projets
        </span> <br /> <br />
          <h2 className="text-4xl font-bold mb-2">Découvrez mes réalisations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets sur lesquels j'ai travaillé. Cliquez sur les cartes pour voir les détails.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition group cursor-pointer">
              <div className="h-40 w-full relative rounded-t-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-700 dark:text-gray-300">{tag}</span>
                  ))}
                </div>
                <a href={project.demo} className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">Démo</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/projets"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
    </section>
  );
}