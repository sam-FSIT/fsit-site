import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Logo background */}
      <Image
        src="/path22.png"
        alt=""
        fill
        className="object-contain pointer-events-none select-none"
        style={{ opacity: 0.55 }}
      />
      {/* Glow blob subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-medium mb-8 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Conseil & Administration IT
        </div>

        {/* Logo / Brand */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-gold to-amber-300 flex items-center justify-center shadow-lg glow-gold">
            <span className="text-brand-darker font-bold text-xl">FS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            FULLST4CK<span className="text-brand-gold">-IT</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-light text-brand-muted mb-4 max-w-2xl mx-auto leading-relaxed">
          L&apos;informaticien <span className="text-white font-medium">des artisans et des PME.</span>
        </p>
        <p className="text-base sm:text-lg text-brand-muted/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Expertise en infra réseau, Microsoft 365 & Cloud, et support informatique. Developing your IT.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-brand-gold text-brand-darker font-semibold rounded-xl hover:bg-amber-400 transition-all duration-200 shadow-lg text-sm sm:text-base"
          >
            Nous contacter
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 bg-transparent border border-brand-border text-white font-medium rounded-xl hover:border-brand-muted transition-all duration-200 text-sm sm:text-base"
          >
            Découvrir nos services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-brand-border pt-10">
          {[
            { value: '10+', label: 'Années d\'expérience' },
            { value: '50+', label: 'Clients accompagnés' },
            { value: '99%', label: 'Satisfaction client' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-gold">{stat.value}</div>
              <div className="text-xs text-brand-muted mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-muted/50">
        <span className="text-xs">Défiler</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
