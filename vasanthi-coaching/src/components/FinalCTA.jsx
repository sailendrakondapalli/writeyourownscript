import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

export default function FinalCTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
          </div>

          <span className="section-tag">The Time Is Now</span>

          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Your Future Is{' '}
            <span className="gradient-text">Waiting</span>
          </h2>

          <p className="text-gray-500 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is a day your dream life doesn't start. The version of you that's
            confident, clear, and unstoppable — she's already inside you.
          </p>

          <p className="text-gray-400 mb-12 text-lg">
            All she needs is someone to help her rise. 🔥
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xl px-14 py-5 inline-block"
          >
            Start Your Journey Today
          </a>

          <p className="text-gray-400 text-sm mt-6">
            First session is completely free. No credit card required.
          </p>

          {/* Decorative bottom */}
          <div className="flex justify-center mt-12">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
