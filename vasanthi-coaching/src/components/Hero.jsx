import { motion } from 'framer-motion'
import logoPng from '../assets/logo.png'
import lotusBg from '../assets/lotus.png'

const WA_LINK = "https://wa.me/918148115360?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"

// Pink lotus — transformation, purity, new beginnings
const LOTUS_BG = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Lotus background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${lotusBg})` }}
      />
      {/* Dark overlay — keeps text readable, lets lotus show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/75 via-purple-900/60 to-purple-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Logo circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <img
            src={logoPng}
            alt="Write Your Own Script"
            className="h-36 w-36 md:h-44 md:w-44 mx-auto rounded-full object-cover shadow-2xl border-4 border-pink-400/40"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-5 drop-shadow-lg"
        >
          Transform Your Life —{' '}
          <span className="text-pink-300">Starting Today</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-xl"
        >
          Rewrite your life.. Live your dream
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary text-lg px-10 py-4">
            Book Appointment
          </a>
          <a href="#about" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300 rounded-full text-lg px-8 py-4 font-semibold">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>
    </section>
  )
}
