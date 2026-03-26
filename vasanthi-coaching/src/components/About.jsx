import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import WaveDivider from './WaveDivider'

const ABOUT_IMG = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80"

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="relative bg-white pt-24 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Vasanthi Life Coach"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 -z-10" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl">
                  🌟
                </div>
                <div>
                  <div className="font-bold text-gray-800">Certified Life Coach</div>
                  <div className="text-pink-600 text-sm">NLP Practitioner • Mindset Expert</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-tag">About Me</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm Vasanthi —{' '}
              <span className="gradient-text">Your Life Coach</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate life coach dedicated to helping women and students break free from
              self-limiting beliefs and step into their fullest potential. With a heart-centered,
              results-driven approach, I guide you from where you are to where you truly want to be.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My coaching is rooted in practical strategies — no fluff, no generic advice. Whether
              you're struggling with clarity, confidence, or mindset blocks, I meet you exactly where
              you are and walk with you every step of the way.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                { icon: '🎯', title: 'Clarity & Direction', desc: 'Cut through confusion and find your true path' },
                { icon: '💪', title: 'Confidence Building', desc: 'Rebuild self-worth from the inside out' },
                { icon: '🧠', title: 'Mindset Mastery', desc: 'Rewire limiting beliefs into empowering ones' },
                { icon: '⚡', title: 'Practical Strategies', desc: 'Real tools that create real results — fast' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-pink-50/50 hover:bg-pink-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <WaveDivider fill="#ffffff" />
    </section>
  )
}
