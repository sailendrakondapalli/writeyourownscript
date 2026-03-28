import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const WA_LINK = "https://wa.me/918148115360?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"

const groups = [
  {
    range: '6 – 18',
    label: 'Students & Teens',
    emoji: '🌱',
    // Indian school students — boys and girls
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    color: 'from-rose-400 to-pink-500',
    bg: 'from-rose-50 to-pink-50',
    border: 'border-rose-200',
    tagColor: 'text-rose-600 bg-rose-100',
    points: [
      'Building self-confidence early',
      'Handling peer pressure & social anxiety',
      'Discovering identity & purpose',
      'Academic stress & focus',
    ],
    desc: 'The foundation of a powerful life is built in the early years. Help your child develop unshakeable confidence, focus, and clarity before the world tries to dim their light.',
  },
  {
    range: '18 – 40',
    label: 'Young Adults & Professionals',
    emoji: '🔥',
    // Young Indian professional woman
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    color: 'from-pink-500 to-purple-600',
    bg: 'from-pink-50 to-purple-50',
    border: 'border-pink-200',
    tagColor: 'text-pink-600 bg-pink-100',
    points: [
      'Career clarity & direction',
      'Relationship & boundary issues',
      'Overcoming self-doubt & imposter syndrome',
      'Building a life you actually love',
    ],
    desc: 'This is your prime time. Stop playing small. Whether you\'re navigating career, relationships, or identity — this is where you rise and own your story.',
  },
  {
    range: '40 – 60',
    label: 'Mature Adults & Reinventors',
    emoji: '👑',
    // Mature Indian woman — graceful, experienced
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    color: 'from-purple-500 to-violet-600',
    bg: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    tagColor: 'text-purple-600 bg-purple-100',
    points: [
      'Rediscovering yourself after family/career',
      'Empty nest & life transitions',
      'Reigniting passion & purpose',
      'Confidence in the second chapter',
    ],
    desc: 'It is never too late to become who you were meant to be. Your second chapter can be your most powerful one — and I\'m here to help you write it.',
  },
]

export default function WhoIHelp() {
  const [ref, inView] = useInView()

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">For Everyone</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Wherever You Are in{' '}
            <span className="gradient-text">Your Journey</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Transformation has no age limit and no gender barrier. Whether you're just beginning or ready to reinvent — there's a place for you here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g, i) => (
            <motion.div
              key={g.range}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`rounded-3xl overflow-hidden border-2 ${g.border} shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 bg-white group`}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.label}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${g.color} opacity-50`} />

                {/* Age badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-4 py-1.5 shadow">
                  <span className="font-bold text-gray-800 text-sm">{g.range} yrs</span>
                </div>

                {/* Emoji */}
                <div className="absolute bottom-4 right-4 text-4xl drop-shadow-lg">{g.emoji}</div>
              </div>

              {/* Content */}
              <div className={`p-7 bg-gradient-to-br ${g.bg}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${g.tagColor}`}>
                  {g.label}
                </span>
                <p className="text-gray-600 text-base leading-relaxed mb-5">{g.desc}</p>

                <ul className="space-y-2 mb-6">
                  {g.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-gray-600 text-base">
                      <span className="text-pink-400 mt-0.5 flex-shrink-0">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-sm py-3"
                >
                  This Is Me — Let's Talk
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
