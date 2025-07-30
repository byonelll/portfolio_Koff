import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Angenor Koffi- Un partenaire professionnel et dévoué pour concrétiser vos projets',
  description:
    'Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, from beautiful user interfaces to robust server architectures.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'Frontend Development',
    'Backend Development',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Database Design',
    'API Development',
    'Cloud Solutions',
    'DevOps',
    'System Architecture',
    'Web Development',
    'Angenor Koffi',
  ],
  authors: [{ name: 'Angenor Koffi' }],
  creator: 'Angenor Koffi',
  openGraph: {
    title: 'Angenor Koffi - Ingénieur Informatique',
    description:
      'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
    url: 'https://your-domain.com',
    siteName: 'Angenor Koffi- Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Angenor Koffi - Ingénieur Informatique Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angenor Koffi- Ingénieur Informatique',
    description:
      'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
    creator: '@yourusername',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
