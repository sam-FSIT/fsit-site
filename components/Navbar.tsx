'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-darker/95 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold to-amber-300 flex items-center justify-center">
              <span className="text-brand-darker font-bold text-xs">FS</span>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              FULLST4CK<span className="text-brand-gold">-IT</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-medium rounded-lg hover:bg-brand-gold/20 transition-all duration-200"
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-muted hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-brand-border py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-brand-muted hover:text-white text-sm font-medium transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-medium rounded-lg text-center"
              onClick={() => setMenuOpen(false)}
            >
              Nous contacter
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
