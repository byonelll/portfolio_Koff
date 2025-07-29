// Nouveau composant : ContactSection.tsx
export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
          <span className="bg-gray-900 text-white px-6 py-2 rounded-full mb-6 text-lg font-semibold shadow">
          Contact
        </span> <br /> <br />
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Discutons de votre projet</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Vous avez un projet en tête ? Je serais ravi d’en discuter avec vous et de voir comment je peux vous aider à le réaliser.
        </p>
        <form className="space-y-6">
          <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" required />
          <input type="email" placeholder="Votre email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" required />
          <textarea placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" required />
          <button type="submit" className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Envoyez-moi un message
          </button>
        </form>
      </div>
    </section>
  );
}