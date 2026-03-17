const services = [
  {
    id: 'infra',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Infra & Réseau',
    description: 'Conception, déploiement et administration de votre infrastructure réseau d\'entreprise. De la sécurité périmétrique à la connectivité mobile.',
    items: [
      'Firewall & sécurité périmétrique',
      'VPN site-à-site et nomades',
      'VLAN & segmentation réseau',
      'WiFi entreprise (802.1X, WPA3)',
      'Serveurs (Windows Server, Linux)',
      'Virtualisation (VMware, Hyper-V)',
    ],
  },
  {
    id: 'cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Microsoft 365 & Cloud',
    description: 'Pilotez votre transformation digitale avec les solutions Microsoft. Licences, migration, sécurité et gestion des identités dans le cloud.',
    items: [
      'Gestion des licences Microsoft 365',
      'Migration Exchange → Exchange Online',
      /*'Azure Active Directory & Entra ID',*/
      'Intune & gestion des appareils (MDM)',
      'Teams, SharePoint, OneDrive',
      'Sécurité & conformité Microsoft',
    ],
  },
  {
    id: 'support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Support & Maintenance',
    description: 'Un helpdesk réactif et des contrats de maintenance sur mesure pour garantir la disponibilité et la performance de votre système d\'information.',
    items: [
      'Contrats de maintenance',
      'Helpdesk utilisateurs',
      'Infogérance complète du SI',
      'Supervision & monitoring',
      'Sauvegarde',
      'Audit et optimisation SI',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4 uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Une expertise IT{' '}
            <span className="text-gradient">complète et intégrée</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg">
            De la sécurisation de votre réseau à la migration cloud, nous prenons en charge l'intégralité de votre système d'information.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-brand-surface border border-brand-gold/15 hover:border-brand-gold/40 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-brand-gold/10 mb-6">
                <div className="text-brand-gold">{service.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Feature list */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-muted">
                    <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-lg transition-all duration-200 hover:opacity-80"
              >
                En savoir plus
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
