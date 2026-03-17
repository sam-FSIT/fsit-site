import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FULLST4CK-IT — Conseil, Administration et maintenance IT en Alsace',
  description: 'FULLST4CK-IT est votre partenaire de confiance pour la gestion de votre infrastructure réseau, vos solutions Microsoft 365 & Cloud, et votre support informatique Alsace.',
  keywords: 'infogérance, administration IT, réseau, firewall, Microsoft 365, support informatique, Alsace',
  authors: [{ name: 'FULLST4CK-IT' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fullstack-it.fr',
    siteName: 'FULLST4CK-IT',
    title: 'FULLST4CK-IT — Conseil & Administration IT en France',
    description: 'Votre partenaire de confiance pour la gestion IT : infra réseau, Microsoft 365 & Cloud, support & maintenance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FULLST4CK-IT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FULLST4CK-IT — Conseil, Administration et maintenance IT',
    description: 'Votre partenaire de confiance pour la gestion IT en Alsace.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
