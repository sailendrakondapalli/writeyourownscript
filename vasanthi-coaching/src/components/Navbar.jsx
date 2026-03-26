import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Programs', 'Coaching', 'Testimonials', 'Book']

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span className={`font-playfair text-xl font-bold ${scrolled ? 'gradient-text' : 'text-white'}`}>Write Your Own Script</span>
          <span className={`text-xs font-light tracking-wide ${scrolled ? 'text-gray-400' : 'text-white/70'}`}>Rewrite your life.. Live your dream</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`font-medium transition-colors text-sm tracking-wide ${
                  scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-pink-300'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href={WA_LINK} target="_blank" rel="noreferrer" className="hidden md:inline-block btn-primary text-sm py-3 px-6">
          Book Free Session
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-700 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary text-center mt-2">
            Book Free Session
          </a>
        </div>
      )}
    </motion.nav>
  )
}
