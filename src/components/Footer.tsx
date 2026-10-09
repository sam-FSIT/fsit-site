import { contenu } from '@/contenu'
import SocialIcon from '@/components/SocialIcon'

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'À propos', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'CGV', href: '/cgv' },
]

export default function Footer() {
  const { liens } = contenu

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#c8d4bc] border-t border-[#1a1a1a]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1.5">
        {/* Ligne 1 : Copyright GAUCHE — Réseaux sociaux CENTRE — Logo DROITE */}
        <div className="grid grid-cols-3 items-center gap-2">
          <p className="text-[#1a1a1a]/60 text-sm">© 2026 FULLSTACK-IT — Tous droits réservés.</p>

          <div className="flex items-center justify-center gap-3">
            {liens.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#1a1a1a]/55 hover:text-[#1a1a1a] transition-colors"
              >
                <SocialIcon icone={link.icone} label={link.label} className="w-7 h-7" />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#d4a832] to-amber-400 flex items-center justify-center">
              <span className="text-[#1a1a1a] font-bold text-[10px] leading-none">FS</span>
            </div>
            <span className="font-bold text-[#1a1a1a] text-sm tracking-tight">
              FULLSTACK<span className="text-[#d4a832]">-IT</span>
            </span>
          </div>
        </div>

        {/* Ligne 2 : Navigation — Légal */}
        <div className="flex items-center justify-center gap-3 flex-wrap text-xs text-[#1a1a1a]/55 text-center">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#1a1a1a]/25">|</span>}
              <a href={link.href} className="hover:text-[#1a1a1a] transition-colors">
                {link.label}
              </a>
            </span>
          ))}
          <span className="text-[#1a1a1a]/25 mx-1">—</span>
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#1a1a1a]/25">|</span>}
              <a href={link.href} className="hover:text-[#1a1a1a] transition-colors">
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
