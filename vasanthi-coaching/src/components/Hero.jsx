import { motion } from 'framer-motion'

const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

// Indian woman — confident, professional
const HERO_BG = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=1600&q=80"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark scrim for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Soft pink glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-pink-900/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-6 border border-white/30 backdrop-blur-sm">
              ✨ Life Coaching
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Transform Your Life —{' '}
            <span className="text-pink-300">
              Starting Today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 font-light leading-relaxed drop-shadow"
          >
            Rewrite your life.. Live your dream
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
            <a href="#about" className="inline-block border-2 border-white text-white hover:bg-white hover:text-pink-700 transition-all duration-300 rounded-full text-lg px-8 py-4 font-semibold">
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
                <div className="text-3xl font-bold text-white font-playfair drop-shadow">{num}</div>
                <div className="text-white/70 text-sm mt-1">{label}</div>
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
            <div className="w-80 h-96 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80"
                alt="Life Coach Vasanthi"
                className="w-full h-full object-cover"
              />
            </div>
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
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </motion.div>
    </section>
  )
}
