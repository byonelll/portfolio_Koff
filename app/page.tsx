'use client';

import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import StacksSection from './components/StacksSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import TestiSection from './components/TestiSection';
import Footer from './components/Footer';

export default function FullStackPortfolio() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
            <AboutSection />
            <SkillsSection />
            <StacksSection />
            <ProjectsSection />
            <TestiSection />
            <ContactSection />
            <Footer />
        </main>
    );
}