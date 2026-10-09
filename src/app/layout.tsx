import type { Metadata } from 'next'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/500.css'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://fullstack-it.fr'),
  title: { default: 'FullSt4ck-IT', template: '%s — FullSt4ck-IT' },
  description:
    "FULLST4CK-IT, l'informaticien des artisans et des PME : infrastructure réseau, Microsoft 365 & Cloud, support et maintenance en Alsace et Grand Est.",
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fullstack-it.fr',
    siteName: 'FULLST4CK-IT',
    title: 'FULLST4CK-IT — Conseil & Administration IT',
    description:
      "L'informaticien des artisans et des PME : infra réseau, Microsoft 365 & Cloud, support & maintenance.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
