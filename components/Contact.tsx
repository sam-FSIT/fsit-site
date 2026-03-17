'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Une erreur est survenue.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      }
    } catch {
      setErrorMsg('Impossible de contacter le serveur. Veuillez réessayer.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4 uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Parlons de votre<br />
              <span className="text-gradient">projet IT</span>
            </h2>
            <p className="text-brand-muted mb-8 leading-relaxed">
              Audit gratuit, devis sans engagement, ou simplement une question sur nos services — nous sommes disponibles et répondons sous 24h.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:samuel.mathie@fullstack-it.fr" className="hover:text-white transition-colors">
                  samuel.mathie@fullstack-it.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+33682828483" className="hover:text-white transition-colors">
                  06 82 82 84 83
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>12 rue des Entrepreneurs, 67270 Wilwisheim</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-white hover:border-brand-gold/30 flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Message envoyé !</h3>
                <p className="text-brand-muted text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-gold text-sm hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                    Nom complet <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border text-white placeholder-brand-muted/50 rounded-xl text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">
                    Email professionnel <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border text-white placeholder-brand-muted/50 rounded-xl text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1.5">
                    Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border text-white placeholder-brand-muted/50 rounded-xl text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-brand-gold text-brand-darker font-semibold rounded-xl hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours…
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>

                <p className="text-xs text-brand-muted/60 text-center">
                  Vos données ne sont pas partagées avec des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
