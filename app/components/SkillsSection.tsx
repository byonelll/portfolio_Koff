'use client';

import { useEffect, useState } from "react";
import { Progress } from "../components/ui/progress";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

// Composant pour les points de compétences techniques
function SkillDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1 ml-auto">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-blue-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// Composant pour les points de langues
function LangDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1 ml-auto">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-blue-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// Cercle de progression SVG
function ProgressCircle({ value }: { value: number }) {
  const radius = 32;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dy=".3em"
        fontSize="1.1rem"
        fill="#2563eb"
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
}

// Grille d'activité GitHub
function GitHubActivity() {
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 364 }, () => Math.random());
    setActivity(generated);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 col-span-2">
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
        <span className="text-blue-500">↗</span> Activité GitHub
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-rows-7 grid-flow-col gap-1">
          {activity.map((value, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${
                value > 0.7
                  ? "bg-blue-600"
                  : value > 0.4
                  ? "bg-blue-300"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-300 mt-3">
        Dernière contribution le vendredi 25 juillet 2025
      </p>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Ajout du titre et du sous-titre */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Welcome to my universe</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            Quelques statistiques pour vous donner un aperçu de mon profil.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Colonne 1 */}
          <div className="flex flex-col gap-6">
            {/* Expertise Technique */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col gap-8">
              <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="text-blue-500">⚡</span> Expertise Technique
              </h3>
              <div className="flex gap-6 justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                    <ProgressCircle value={95} />
                  </div>
                  <div className="text-center mt-2">
                    <div className="font-bold text-gray-900 dark:text-white">Frontend</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                    <ProgressCircle value={85} />
                  </div>
                  <div className="text-center mt-2">
                    <div className="font-bold text-gray-900 dark:text-white">Backend</div>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500"><FaReact /></span>
                  React / Next.js
                  <SkillDots level={5} />
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400"><SiTypescript /></span>
                  TypeScript
                  <SkillDots level={4} />
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500"><FaNodeJs /></span>
                  Node.js
                  <SkillDots level={3} />
                </li>
              </ul>
            </div>

            {/* Langues & Soft Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col gap-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="text-blue-500">›</span> Langues & Soft Skills
              </h3>
              <div>
                <div className="font-medium mb-1 text-gray-900 dark:text-white">Langues</div>
                <div className="flex items-center gap-2">
                  Français
                  <LangDots level={5} />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  Anglais
                  <LangDots level={3} />
                </div>
              </div>
              <div>
                <div className="font-medium mb-1 mt-2 text-gray-900 dark:text-white">Soft Skills</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-xs">Communication</span>
                  <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-xs">Leadership</span>
                  <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-xs">Travail d'équipe</span>
                  <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-xs">Résolution de problèmes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col gap-6">
            {/* Statistiques projets */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">📊 Statistiques de projets</h3>
              <div className="text-3xl font-bold text-blue-600">+67</div>
              <p className="text-sm text-green-500 mb-4">+12% depuis l’année dernière</p>
              <div className="text-sm mb-2 text-gray-900 dark:text-gray-100">Sites web & apps : 65%</div>
              <Progress value={65} />
              <div className="text-sm mt-4 mb-2 text-gray-900 dark:text-gray-100">Apps mobiles : 25%</div>
              <Progress value={25} />
              <div className="text-sm mt-4 mb-2 text-gray-900 dark:text-gray-100">Autres projets : 10%</div>
              <Progress value={10} />
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">🎓 Certifications</h3>
              <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full mb-3 inline-block">
                En continu
              </span>
              <ul className="text-sm space-y-2 text-gray-900 dark:text-gray-100">
                <li>GomyCode – Bootcamp Node JS</li>
                <li>LinkedIn Learning – React JS</li>
                <li>LinkedIn Learning – Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Activité GitHub sur toute la largeur */}
        <div className="mt-6">
          <GitHubActivity />
        </div>
      </div>
    </section>
  );
}