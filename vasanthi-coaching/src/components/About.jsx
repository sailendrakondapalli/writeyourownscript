import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import aboutImg from '../assets/image.png'

const ABOUT_IMG = aboutImg

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
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
                className="w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
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
              Your{' '}
              <span className="gradient-text">Life Coach</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A certified life coach dedicated to helping women and students break free from
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
    </section>
  )
}
