import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import Modal from './Modal'
import WaveDivider from './WaveDivider'

const programs = [
  {
    id: 'phoenix-women',
    emoji: '🔥',
    title: 'Phoenix Women',
    tagline: 'Rise Strong. Reclaim Yourself. Become Unstoppable.',
    color: 'from-rose-500 to-pink-600',
    lightColor: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    problems: ['Confidence issues', 'Emotional overwhelm', 'Lack of clarity'],
    description: 'Phoenix Women is a transformational coaching program designed for women who feel stuck, lost, or burned out. You\'ve been strong for everyone else — now it\'s time to rise for yourself. This program helps you shed the old identity that no longer serves you and step into the powerful, confident woman you were always meant to be.',
    benefits: [
      'Rebuild unshakeable self-confidence from within',
      'Break free from emotional overwhelm and people-pleasing patterns',
      'Gain crystal-clear clarity on your purpose and direction',
      'Develop a powerful mindset that attracts success',
      'Create healthy boundaries without guilt',
      'Transform self-doubt into decisive, bold action',
      'Build a life aligned with your deepest values and desires',
      'Join a community of women rising together',
    ],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
  },
  {
    id: 'phoenix-leaders',
    emoji: '🌟',
    title: 'Phoenix Future Leaders',
    tagline: 'Build Clarity. Lead Your Future.',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200',
    problems: ['Career confusion', 'Overthinking', 'Lack of focus'],
    description: 'Phoenix Future Leaders is built for students and young adults who feel overwhelmed by choices, paralyzed by overthinking, or unsure of their path. This program takes you from confusion to clarity, from self-doubt to confidence, and from procrastination to purposeful action — so you can lead your own future with intention.',
    benefits: [
      'Discover your unique strengths and natural talents',
      'Overcome overthinking and decision paralysis',
      'Build laser-sharp focus and study/work habits',
      'Develop leadership presence and communication skills',
      'Create a clear roadmap for your career and life goals',
      'Build resilience to handle pressure and setbacks',
      'Unlock your full academic and professional potential',
      'Step into your future with confidence and purpose',
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
  },
]

export default function Programs() {
  const [ref, inView] = useInView()
  const [modal, setModal] = useState(null)

  return (
    <section id="programs" className="relative bg-gray-50 pt-24 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Signature Programs</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Choose Your{' '}
            <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Two powerful programs designed to meet you exactly where you are
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`rounded-3xl overflow-hidden border ${prog.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-60`} />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-3xl mb-1">{prog.emoji}</div>
                  <h3 className="font-playfair text-2xl font-bold">{prog.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-500 italic mb-6">{prog.tagline}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">This is for you if you have:</p>
                  <ul className="space-y-2">
                    {prog.problems.map(p => (
                      <li key={p} className="flex items-center gap-3 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setModal(prog)}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {modal && <Modal data={modal} onClose={() => setModal(null)} />}
      <WaveDivider fill="#ffffff" />
    </section>
  )
}
