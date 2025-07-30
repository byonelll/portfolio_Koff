'use client';

import Image from "next/image";
import { FaCheckCircle, FaComment, FaRetweet, FaHeart, FaShareAlt } from "react-icons/fa";

const testimonials = [
  {
    avatar: "/avatar-temoin.jpg",
    name: "Dosso Ibrahim",
    username: "@dosso_agri",
    date: "1j",
    message: (
      <>
        Travailler avec <span className="font-semibold text-blue-700">@AngenorKoffi</span> a été un vrai plaisir ! 🌟 Non seulement il a parfaitement exécuté notre vision, mais il a aussi proposé des améliorations pertinentes qui ont rendu le projet encore meilleur. <span className="text-blue-600">#WebDevelopment #Agri</span>
      </>
    ),
    comments: 18,
    retweets: 42,
    likes: 156,
  },
  {
    avatar: "/avatar-temoin2.jpg",
    name: "Angy moroccoLocks",
    username: "@morocco_Locks",
    date: "3j",
    message: (
      <>
        Très satisfaite de la collaboration avec <span className="font-semibold text-blue-700">@AngenorKoffi</span>. Il a su comprendre nos besoins et livrer un site moderne et performant. <span className="text-blue-600">#UX #Collaboration</span>
      </>
    ),
    comments: 12,
    retweets: 27,
    likes: 98,
  },
  {
    avatar: "/avatar-temoin3.jpg",
    name: "Ali Ben Youssef",
    username: "@ali_design",
    date: "5j",
    message: (
      <>
        J&apos;ai apprécié la réactivité et le professionnalisme d&apos;<span className="font-semibold text-blue-700">@AngenorKoffi</span>. Le résultat final correspondait parfaitement à nos attentes. <span className="text-blue-600">#Design #WebApp</span>
      </>
    ),
    comments: 9,
    retweets: 19,
    likes: 74,
  },
  {
    avatar: "/avatar-temoin4.jpg",
    name: "Fatou Diallo",
    username: "@fatou_d",
    date: "1 sem",
    message: (
      <>
        Un accompagnement sur-mesure et une grande écoute. Merci <span className="font-semibold text-blue-700">@AngenorKoffi</span> pour ce beau projet ! <span className="text-blue-600">#Support #ProjetWeb</span>
      </>
    ),
    comments: 15,
    retweets: 34,
    likes: 120,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
          Témoignages
        </span>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ce qu&apos;ils en pensent</h2>
        <p className="text-xl text-gray-500 dark:text-gray-300 text-center mb-16 max-w-2xl">
          Quelques retours d&apos;expérience de mes clients et partenaires. Leur satisfaction est ma plus grande récompense et témoigne de mon engagement à délivrer des solutions de qualité.
        </p>

        {/* Carrousel défilant */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-8 w-max">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-w-[340px] max-w-[380px] flex flex-col gap-4 items-start"
              >
                <div className="flex items-center gap-4 w-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg dark:text-white">{t.name}</span>
                      <FaCheckCircle className="text-blue-500" />
                    </div>
                    <span className="text-gray-500 dark:text-gray-300">{t.username}</span>
                  </div>
                  <span className="ml-auto text-gray-400 dark:text-gray-400 text-sm">{t.date}</span>
                </div>
                <div className="text-gray-800 dark:text-gray-100 text-lg">{t.message}</div>
                <div className="flex items-center gap-8 mt-2 text-gray-400 dark:text-gray-300 text-base w-full">
                  <span className="flex items-center gap-2"><FaComment /> {t.comments}</span>
                  <span className="flex items-center gap-2"><FaRetweet /> {t.retweets}</span>
                  <span className="flex items-center gap-2"><FaHeart /> {t.likes}</span>
                  <span className="flex items-center gap-2 ml-auto"><FaShareAlt /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
