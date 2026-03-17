const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-gold to-amber-300 flex items-center justify-center">
                <span className="text-brand-darker font-bold text-xs">FS</span>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                FULLST4CK<span className="text-brand-gold">-IT</span>
              </span>
            </div>
            <p className="text-brand-muted text-xs leading-relaxed max-w-xs">
              L'informaticien des artisans et des PME. Infra réseau, Microsoft 365 & Cloud, support & infogérance en Alsace et Grand Est.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'À propos', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted text-xs hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Informations légales</h4>
            <ul className="space-y-2">
              {[
                { label: 'Mentions légales', href: '#' },
                { label: 'Politique de confidentialité', href: '#' },
                { label: 'CGV', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-muted text-xs hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-brand-muted/60 text-xs space-y-1">
              <div>SIRET : XXX XXX XXX XXXXX</div>
              <div>TVA : FR XX XXX XXX XXX</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-muted/60 text-xs">
            © {currentYear} FULLST4CK-IT. Tous droits réservés.
          </p>
          <p className="text-brand-muted/40 text-xs">
            Fait avec ❤️ en Alsace
          </p>
        </div>
      </div>
    </footer>
  )
}
