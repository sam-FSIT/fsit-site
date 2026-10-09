'use client'

import { useState } from 'react'
import { contenu } from '@/contenu'
import SocialIcon from '@/components/SocialIcon'

type FormState = { name: string; email: string; message: string; website: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { contact, liens: links } = contenu
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', website: '' })
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
        setForm({ name: '', email: '', message: '', website: '' })
      }
    } catch {
      setErrorMsg('Impossible de contacter le serveur. Veuillez réessayer.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 min-h-screen bg-[#e8ede0] relative overflow-hidden scroll-mt-16 flex flex-col justify-center">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#d4a832]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#d4a832] bg-[#d4a832]/10 border border-[#d4a832]/30 rounded-full mb-4 uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              Parlons de votre<br />
              <span className="text-gradient">projet IT</span>
            </h2>
            <p className="text-[#1a1a1a]/70 mb-8 leading-relaxed">
              Audit gratuit, devis sans engagement, ou simplement une question sur nos services — nous sommes disponibles et répondons sous 24h.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/70">
                <div className="w-9 h-9 rounded-lg bg-[#d4a832]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#d4a832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${contact.email}`} className="hover:text-[#1a1a1a] transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/70">
                <div className="w-9 h-9 rounded-lg bg-[#d4a832]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#d4a832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href={contact.telephoneHref} className="hover:text-[#1a1a1a] transition-colors">
                  {contact.telephone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/70">
                <div className="w-9 h-9 rounded-lg bg-[#d4a832]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#d4a832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{contact.adresse}</span>
              </div>
            </div>

            {/* Liens sociaux dynamiques */}
            {links.length > 0 && (
              <div className="mt-8 flex gap-3">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-[#dce4d4] border border-[#1a1a1a]/12 text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:border-[#d4a832]/40 flex items-center justify-center transition-all duration-200"
                  >
                    <SocialIcon icone={link.icone} label={link.label} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right — Form */}
          <div className="bg-[#dce4d4] border border-[#1a1a1a]/10 rounded-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a1a] font-semibold text-lg mb-2">Message envoyé !</h3>
                <p className="text-[#1a1a1a]/65 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[#d4a832] text-sm hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Nom complet <span className="text-[#d4a832]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 bg-white border border-[#1a1a1a]/20 text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 rounded-xl text-sm focus:outline-none focus:border-[#d4a832]/60 focus:ring-1 focus:ring-[#d4a832]/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Email professionnel <span className="text-[#d4a832]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full px-4 py-2.5 bg-white border border-[#1a1a1a]/20 text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 rounded-xl text-sm focus:outline-none focus:border-[#d4a832]/60 focus:ring-1 focus:ring-[#d4a832]/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Message <span className="text-[#d4a832]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full px-4 py-2.5 bg-white border border-[#1a1a1a]/20 text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 rounded-xl text-sm focus:outline-none focus:border-[#d4a832]/60 focus:ring-1 focus:ring-[#d4a832]/30 transition-all resize-none"
                  />
                </div>

                {/* Champ piège : un humain ne le voit pas, un robot le remplit. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Ne pas remplir</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-[#d4a832] text-[#1a1a1a] font-semibold rounded-xl hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-sm"
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

                <p className="text-xs text-[#1a1a1a]/45 text-center">
                  Vos données ne sont pas partagées avec des tiers. <a href="/politique-confidentialite" className="underline">Politique de confidentialité</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
