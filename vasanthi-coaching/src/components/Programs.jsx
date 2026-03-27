import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { programs } from '../data/programs'

export default function Programs() {
  const [ref, inView] = useInView()
  const navigate = useNavigate()

  return (
    <section id="programs" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
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
              className={`rounded-3xl overflow-hidden border-2 ${prog.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-55`} />
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
                  onClick={() => navigate(`/program/${prog.id}`)}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
