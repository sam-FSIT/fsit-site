const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Fiabilité',
    description: 'Nous construisons des infrastructures stables et sécurisées, avec des contrats de service clairs.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Réactivité',
    description: 'Un helpdesk disponible et des interventions rapides pour minimiser l\'impact sur votre activité.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expertise',
    description: 'Certifications Microsoft, Cisco et VMware. Nous investissons continuellement dans notre montée en compétences.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Proximité',
    description: 'Une relation de confiance sur le long terme. Nous devenons un véritable partenaire IT de votre entreprise.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-darker relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4 uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Un partenaire IT<br />
              <span className="text-gradient">de confiance</span>
            </h2>
            <div className="space-y-4 text-brand-muted text-base leading-relaxed">
              <p>
                <strong className="text-white">FULLST4CK-IT</strong> est votre informaticien de proximité, spécialisé dans l'accompagnement des artisans et des PME. Nous intervenons sur l'ensemble de votre système d'information avec réactivité et pédagogie.
              </p>
              <p>
                De la mise en place de votre réseau à la gestion de vos postes de travail, en passant par la téléphonie et la migration cloud Microsoft 365 — nous gérons votre IT pour que vous puissiez vous concentrer sur votre métier.
              </p>
              <p>
                Notre approche ? Simple : comprendre votre activité pour vous proposer des solutions adaptées, sans jargon inutile.
              </p>
            </div>

            {/* Zone géo */}
            <div className="mt-8 flex items-center gap-3 p-4 bg-brand-surface border border-brand-border rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-medium">Zone d'intervention</div>
                <div className="text-brand-muted text-xs mt-0.5">Alsace & Grand Est — interventions sur site + télémaintenance partout en Alsace</div>
              </div>
            </div>
          </div>

          {/* Right — Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 bg-brand-surface border border-brand-border rounded-xl hover:border-brand-gold/30 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{value.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
