'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
			<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-8 md:mb-14"
				>
					<div className="space-y-5 mb-8">
						<h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
							Angenor Koffi
						</h1>
						<h2 className="text-2xl md:text-4xl font-semibold text-white leading-snug">
							Ingénieur logiciel & créateur digital passionné par la cybersécurité, l'IA, le cloud et l'innovation.
						</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							Je conçois des solutions digitales complètes, de l’interface utilisateur à l’infrastructure cloud, avec plus de 8 ans
							d’expérience en développement d’applications performantes.
						</p>
						<p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto italic">
							Ancien développeur full-stack senior chez <span className="text-blue-400 font-semibold">Stripe</span> & Tech Lead chez{' '}
							<span className="text-purple-400 font-semibold">Vercel</span>
						</p>
					</div>

					{/* Stack tags */}
					<div className="flex flex-wrap justify-center gap-3 mb-8">
						{[
							{ name: 'TypeScript', color: 'text-blue-400', bg: 'bg-blue-500/10' },
							{ name: 'React & Next.js', color: 'text-purple-400', bg: 'bg-purple-500/10' },
							{ name: 'Node.js', color: 'text-teal-400', bg: 'bg-teal-500/10' },
							{ name: 'Python', color: 'text-blue-400', bg: 'bg-blue-500/10' },
							{ name: 'AWS', color: 'text-purple-400', bg: 'bg-purple-500/10' },
						].map((tag, idx) => (
							<span
								key={idx}
								className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium ${tag.color} ${tag.bg}`}
							>
								{tag.name}
							</span>
						))}
					</div>
				</motion.div>

				{/* Architecture interactive */}
				<div className="w-full max-w-5xl px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800 p-6 md:p-10 shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Frontend */}
							<div
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
								className={`transition-all border-2 rounded-lg p-5 md:p-6 ${
									selectedStack === 'frontend'
										? 'bg-blue-500/20 border-blue-500'
										: 'bg-gray-800/40 hover:bg-gray-800/60 border-transparent'
								}`}
							>
								<h3 className="text-xl font-semibold mb-4 text-blue-400">Développement Frontend</h3>
								<ul className="space-y-2 text-sm text-gray-300">
									<li>• Interfaces modernes et interactives (React)</li>
									<li>• Optimisation des performances</li>
									<li>• Design responsive & UX fluide</li>
								</ul>
							</div>

							{/* Backend */}
							<div
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
								className={`transition-all border-2 rounded-lg p-5 md:p-6 ${
									selectedStack === 'backend'
										? 'bg-purple-500/20 border-purple-500'
										: 'bg-gray-800/40 hover:bg-gray-800/60 border-transparent'
								}`}
							>
								<h3 className="text-xl font-semibold mb-4 text-purple-400">Développement Backend</h3>
								<ul className="space-y-2 text-sm text-gray-300">
									<li>• Conception & sécurisation d’API</li>
									<li>• Architecture de bases de données</li>
									<li>• Applications en temps réel</li>
								</ul>
							</div>

							{/* DevOps */}
							<div
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
								className={`transition-all border-2 rounded-lg p-5 md:p-6 ${
									selectedStack === 'devops'
										? 'bg-teal-500/20 border-teal-500'
										: 'bg-gray-800/40 hover:bg-gray-800/60 border-transparent'
								}`}
							>
								<h3 className="text-xl font-semibold mb-4 text-teal-400">DevOps & Cloud</h3>
								<ul className="space-y-2 text-sm text-gray-300">
									<li>• Infrastructure AWS</li>
									<li>• Pipelines CI/CD</li>
									<li>• Systèmes hautement scalables</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
