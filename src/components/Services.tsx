import { contenu } from '@/contenu'

const SERVICE_ICONS = [
  // Infra & Réseau
  <svg key="infra" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
  // Microsoft 365 & Cloud
  <svg key="cloud" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  // Support & Maintenance
  <svg key="support" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
]

export default function Services() {
  const { services } = contenu

  return (
    <section id="services" className="py-24 min-h-screen bg-[#e8ede0] relative overflow-hidden scroll-mt-16 flex flex-col justify-center">
      {/* Motif de fond discret */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#d4a832] bg-[#d4a832]/10 border border-[#d4a832]/30 rounded-full mb-4 uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">{services.titre}</h2>
          <p className="text-[#1a1a1a]/70 max-w-xl mx-auto text-base sm:text-lg">{services.description}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.liste.map((service, i) => (
            <div
              key={service.titre}
              className="group relative bg-[#dce4d4] border border-[#1a1a1a]/10 hover:border-[#d4a832]/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#d4a832]/10 mb-6">
                <div className="text-[#d4a832]">{SERVICE_ICONS[i]}</div>
              </div>

              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{service.titre}</h3>
              <p className="text-[#1a1a1a]/65 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.points.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]/65">
                    <svg className="w-4 h-4 text-[#d4a832] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[#d4a832] bg-[#d4a832]/10 px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-[#d4a832]/20"
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
