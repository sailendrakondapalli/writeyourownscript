import { motion } from 'framer-motion'
import WaveDivider from './WaveDivider'

const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

// Unsplash free-to-use motivational woman image
const HERO_BG = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1600&q=80"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle dark scrim — just enough for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-6 border border-pink-500/30">
              ✨ Life Coaching
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Transform Your Life —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Starting Today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-pink-100/80 mb-10 font-light leading-relaxed"
          >
            Rewire your life.. Live your dream
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary text-lg px-10 py-4">
              Book Free Session
            </a>
            <a href="#about" className="btn-outline border-pink-400 text-pink-300 hover:bg-pink-500 hover:border-pink-500 text-lg px-8 py-4">
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex gap-8"
          >
            {[['500+', 'Lives Transformed'], ['8+', 'Years Experience'], ['100%', 'Commitment']].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-white font-playfair">{num}</div>
                <div className="text-pink-300/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-96 rounded-3xl overflow-hidden border-2 border-pink-400/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Life Coach Vasanthi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-pink-600 font-bold text-lg">🔥 Phoenix Women</div>
              <div className="text-gray-500 text-sm">Rise. Reclaim. Become.</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#ffffff" />
      </div>
    </section>
  )
}
