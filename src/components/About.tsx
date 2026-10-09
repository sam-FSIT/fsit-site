import { contenu } from '@/contenu'

const VALUE_ICONS = [
  // Fiabilité
  <svg key="fiabilite" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Réactivité
  <svg key="reactivite" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Expertise
  <svg key="expertise" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  // Proximité
  <svg key="proximite" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
]

export default function About() {
  const { about } = contenu

  return (
    <section id="about" className="py-24 min-h-screen bg-[#e8ede0] relative scroll-mt-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#d4a832] bg-[#d4a832]/10 border border-[#d4a832]/30 rounded-full mb-4 uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">{about.titre}</h2>
            <div className="space-y-4 text-[#1a1a1a]/75 text-base leading-relaxed">
              {about.paragraphes.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {/* Zone géo */}
            <div className="mt-8 flex items-center gap-3 p-4 bg-[#dce4d4] border border-[#1a1a1a]/12 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#d4a832]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4a832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[#1a1a1a] text-sm font-medium">Zone d&apos;intervention</div>
                <div className="text-[#1a1a1a]/60 text-xs mt-0.5">{about.zone}</div>
              </div>
            </div>
          </div>

          {/* Right — Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.valeurs.map((v, i) => (
              <div
                key={v.titre}
                className="p-5 bg-[#dce4d4] border border-[#1a1a1a]/10 rounded-xl hover:border-[#d4a832]/40 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d4a832]/10 flex items-center justify-center text-[#d4a832] mb-3">
                  {VALUE_ICONS[i]}
                </div>
                <h3 className="text-[#1a1a1a] font-semibold text-sm mb-1.5">{v.titre}</h3>
                <p className="text-[#1a1a1a]/65 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
