import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import logoPng from '../assets/logo.png'

const WA_LINK = "https://wa.me/918148115360?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Coaching Programs', id: 'programs' },
  ]

  // If on home, smooth scroll; if on another page, go to /#section
  const handleNavClick = (e, section) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${section}`)
    }
  }

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
        {/* Logo — always goes home */}
        <a href="/" className="flex items-center" onClick={e => { e.preventDefault(); navigate('/') }}>
          <img
            src={logoPng}
            alt="Write Your Own Script"
            className="h-10 w-10 rounded-full object-cover border-2 border-pink-400/40"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={`/#${l.id}`}
                onClick={e => handleNavClick(e, l.id)}
                className={`font-medium transition-colors text-sm tracking-wide ${
                  scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-pink-300'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/phoenix-women"
              onClick={e => { e.preventDefault(); navigate('/phoenix-women') }}
              className={`font-medium transition-colors text-sm tracking-wide ${
                scrolled ? 'text-pink-600 hover:text-pink-700' : 'text-pink-300 hover:text-pink-200'
              }`}
            >
              Phoenix Women
            </a>
          </li>
          <li>
            <a
              href="/program/phoenix-leaders"
              onClick={e => { e.preventDefault(); navigate('/program/phoenix-leaders') }}
              className={`font-medium transition-colors text-sm tracking-wide ${
                scrolled ? 'text-violet-600 hover:text-violet-700' : 'text-violet-300 hover:text-violet-200'
              }`}
            >
              Future Visionaries
            </a>
          </li>
          <li>
            <a
              href="/#book"
              onClick={e => handleNavClick(e, 'book')}
              className={`font-medium transition-colors text-sm tracking-wide ${
                scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-pink-300'
              }`}
            >
              Book an Appointment
            </a>
          </li>
          <li>
            <a
              href="/#testimonials"
              onClick={e => handleNavClick(e, 'testimonials')}
              className={`font-medium transition-colors text-sm tracking-wide ${
                scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-pink-300'
              }`}
            >
              Testimonials
            </a>
          </li>
        </ul>



        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-700' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.label}
              href={`/#${l.id}`}
              onClick={e => handleNavClick(e, l.id)}
              className="text-gray-700 font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/phoenix-women"
            onClick={e => { e.preventDefault(); setMenuOpen(false); navigate('/phoenix-women') }}
            className="text-pink-600 font-medium py-1"
          >
            Phoenix Women
          </a>
          <a
            href="/program/phoenix-leaders"
            onClick={e => { e.preventDefault(); setMenuOpen(false); navigate('/program/phoenix-leaders') }}
            className="text-violet-600 font-medium py-1"
          >
            Future Visionaries
          </a>
          <a
            href="/#book"
            onClick={e => handleNavClick(e, 'book')}
            className="text-gray-700 font-medium py-1"
          >
            Book an Appointment
          </a>
          <a
            href="/#testimonials"
            onClick={e => handleNavClick(e, 'testimonials')}
            className="text-gray-700 font-medium py-1"
          >
            Testimonials
          </a>
        </div>
      )}
    </motion.nav>
  )
}
