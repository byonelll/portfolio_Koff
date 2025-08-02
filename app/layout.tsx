import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Angenor Koffi – Un partenaire professionnel et dévoué pour concrétiser vos projets",
  description:
    "Bienvenue sur mon portfolio ! Je suis un développeur full-stack passionné, spécialisé dans la création de solutions web complètes, du design d’interface à l’architecture serveur robuste. Découvrez mes réalisations et compétences techniques.",
  keywords: [
    "Développeur Full-Stack",
    "Ingénieur Logiciel",
    "Développement Frontend",
    "Développement Backend",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Conception de base de données",
    "Développement d’API",
    "Solutions Cloud",
    "DevOps",
    "Architecture Système",
    "Développement Web",
    "Angenor Koffi",
    "Maroc",
    "Portfolio",
    "Web",
    "Mobile"
  ],
  authors: [{ name: "Angenor Koffi" }],
  creator: "Angenor Koffi",
  openGraph: {
    title: "Angenor Koffi – Ingénieur Informatique & Développeur Web au Maroc",
    description:
      "Développeur full-stack passionné, je réalise des solutions web complètes. Découvrez mes projets et mon expertise technique sur tout le cycle de développement.",
    url: "https://angenorkoffi.vercel.app/",
    siteName: "Angenor Koffi – Portfolio",
    images: [
      {
        url: "https://angenorkoffi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angenor Koffi - Ingénieur Informatique Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angenor Koffi – Ingénieur Informatique & Développeur Web au Maroc",
    description:
      "Développeur full-stack passionné, je réalise des solutions web complètes. Découvrez mes projets et mon expertise technique sur tout le cycle de développement.",
    creator: "@angenorkoffi",
    images: ["https://angenorkoffi.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <head>
  <title>Angenor Koffi | Portfolio développeur web Maroc</title>
  <meta name="description" content="Portfolio d'Angenor Koffi, ingénieur logiciel, développeur web et mobile au Maroc. Découvrez mes projets, compétences et contactez-moi." />
  <meta name="keywords" content="Angenor Koffi, développeur, Maroc, portfolio, web, mobile, ingénieur, Next.js, React, Node.js" />
  <meta name="author" content="Angenor Koffi" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Angenor Koffi | Portfolio développeur web Maroc" />
  <meta property="og:description" content="Portfolio d'Angenor Koffi, ingénieur logiciel, développeur web et mobile au Maroc." />
  <meta property="og:url" content="https://angenorkoffi.vercel.app/" />
  <meta property="og:image" content="https://angenorkoffi.vercel.app/og-image.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Angenor Koffi | Portfolio développeur web Maroc" />
  <meta name="twitter:description" content="Portfolio d'Angenor Koffi, ingénieur logiciel, développeur web et mobile au Maroc." />
  <meta name="twitter:image" content="https://angenorkoffi.vercel.app/og-image.jpg" />
  <meta name="google-site-verification" content="MMAGG2VBouwZWUI1mLZe6kJMEBflMNZQz1EVxiSafDg" />
 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LWJ9B2T1S4"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LWJ9B2T1S4');
      `,
    }}
  />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
