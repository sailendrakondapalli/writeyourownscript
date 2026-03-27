import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const PHOENIX_IMG = "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=80"

export default function BrandMessage() {
  const [ref, inView] = useInView()

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Our Philosophy</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              Welcome to the World of{' '}
              <span className="gradient-text">Phoenix Women</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Phoenix is one of the most powerful symbols in human history — a bird that rises from
              its own ashes, more magnificent than before. That is exactly what you are capable of.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              No matter how burned out, broken down, or lost you feel right now — you have the power
              to rise. Not just survive, but truly <em>thrive</em>. The Phoenix Women movement is about
              women who refuse to stay small, who choose themselves, and who rise — again and again.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Strength isn't the absence of struggle. It's the decision to keep going despite it.
              Confidence isn't something you're born with — it's something you build, one brave
              choice at a time. Transformation isn't a destination — it's a way of living.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🔥', label: 'Rise' },
                { icon: '💎', label: 'Reclaim' },
                { icon: '👑', label: 'Reign' },
              ].map(item => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-gray-800">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={PHOENIX_IMG}
                alt="Phoenix Women - Rise and Transform"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent" />
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="font-playfair text-2xl font-bold mb-1">PHOENIX WOMEN</div>
              <div className="text-pink-200 text-sm">Rise Strong. Reclaim Yourself. Become Unstoppable.</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
