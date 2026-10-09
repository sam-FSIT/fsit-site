import { contenu } from '@/contenu'

export default function Hero() {
  const { hero } = contenu

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#e8ede0]"
    >
      {/* Glow blob subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4a832]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a832]/60 bg-[#d4a832]/10 text-[#d4a832] text-xs font-medium mb-8 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a832] animate-pulse" />
          {hero.badge}
        </div>

        {/* Logo / Brand */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4a832] to-amber-400 flex items-center justify-center shadow-lg">
            <span className="text-[#1a1a1a] font-bold text-xl">FS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a]">
            FULLST4CK<span className="text-[#d4a832]">-IT</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-light text-[#1a1a1a] mb-4 max-w-2xl mx-auto leading-relaxed">
          {hero.tagline}
        </p>
        <p className="text-base sm:text-lg text-[#1a1a1a]/70 mb-10 max-w-xl mx-auto leading-relaxed">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={hero.cta1.lien}
            className="px-8 py-3.5 bg-[#d4a832] text-[#1a1a1a] font-semibold rounded-xl hover:bg-amber-500 transition-all duration-200 shadow-md text-sm sm:text-base"
          >
            {hero.cta1.texte}
          </a>
          <a
            href={hero.cta2.lien}
            className="px-8 py-3.5 bg-transparent border border-[#1a1a1a]/40 text-[#1a1a1a] font-medium rounded-xl hover:border-[#1a1a1a]/70 transition-all duration-200 text-sm sm:text-base"
          >
            {hero.cta2.texte}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#1a1a1a]/40">
        <span className="text-xs">Défiler</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
