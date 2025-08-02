import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_n9v3jz3',
          'template_9ar2y8e',
          formRef.current,
          'Dtlmen9tD2u7b9KV9'
        )
        .then(
          () => {
            setSuccessMsg("Votre message a bien été envoyé !");
            formRef.current?.reset();
            setTimeout(() => {
              setShowForm(false);
              setSuccessMsg("");
            }, 2500);
          },
          (error) => {
            setSuccessMsg("Erreur lors de l'envoi : " + error.text);
          }
        );
    } else {
      setSuccessMsg("Le formulaire n'est pas disponible.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <span className="bg-gray-900 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
          Contact
        </span>
        <br /> <br />
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Contactez-moi – Développeur web & ingénieur logiciel au Maroc
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Vous avez un projet web, mobile ou logiciel ? Je serais ravi d’en discuter avec vous et de voir comment je peux vous aider à le réaliser.<br />
          Je réponds généralement dans les plus brefs délais.<br />
          <span className="sr-only">Contact développeur web Maroc, Next.js, React, freelance, ingénieur logiciel, projet digital</span>
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg shadow-lg"
            aria-label="Ouvrir le formulaire de contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Envoyez-moi un message
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white text-3xl"
              aria-label="Fermer le formulaire de contact"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              On prend contact ?
            </h3>
            <p className="text-center text-gray-500 mb-8">
              Je réponds généralement dans les plus brefs délais
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6" aria-label="Formulaire de contact">
              <div>
                <label htmlFor="name" className="block text-left font-semibold mb-1 text-gray-700 dark:text-gray-200">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-left font-semibold mb-1 text-gray-700 dark:text-gray-200">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="tel" className="block text-left font-semibold mb-1 text-gray-700 dark:text-gray-200">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Votre numéro"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-left font-semibold mb-1 text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre message ici..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              {successMsg && (
                <div className="text-green-600 dark:text-green-400 text-center font-semibold mb-2">
                  {successMsg}
                </div>
              )}
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg mt-4" aria-label="Envoyer le message">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9 6 9-6-9-6-9 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" />
                </svg>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}