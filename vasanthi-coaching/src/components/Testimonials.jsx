import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import WaveDivider from './WaveDivider'

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Marketing Professional',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    text: 'Working with Vasanthi completely changed how I see myself. I went from constantly second-guessing every decision to leading my team with confidence. The clarity I gained in just 8 sessions was life-changing.',
    stars: 5,
  },
  {
    name: 'Ananya R.',
    role: 'Engineering Student',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
    text: 'I was so lost about my career path and couldn\'t stop overthinking. Vasanthi helped me find my direction and actually believe in myself. I got placed in my dream company 2 months after our sessions!',
    stars: 5,
  },
  {
    name: 'Meera K.',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    text: 'I was burned out, emotionally drained, and had completely lost myself. The Phoenix Women program gave me back my identity. I now run my business with joy instead of fear. Vasanthi is truly gifted.',
    stars: 5,
  },
  {
    name: 'Divya M.',
    role: 'Teacher',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    text: 'I never thought I deserved to invest in myself. Vasanthi showed me that self-love isn\'t selfish — it\'s essential. My relationships, my work, my entire life improved when I started showing up for myself.',
    stars: 5,
  },
  {
    name: 'Kavitha T.',
    role: 'MBA Student',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    text: 'The mindset shifts I experienced with Vasanthi are permanent. She doesn\'t just give you tools — she helps you understand WHY you think the way you do. That awareness alone transformed everything.',
    stars: 5,
  },
  {
    name: 'Lakshmi P.',
    role: 'Homemaker turned Coach',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80',
    text: 'At 38, I thought it was too late to start over. Vasanthi proved me wrong. I discovered my purpose, built my confidence, and launched my own coaching practice. She is the reason I believe in myself today.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" className="relative bg-gray-50 pt-24 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Success Stories</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Real Women,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            These are the stories that fuel my purpose every single day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <div className="font-semibold text-gray-800">{t.name}</div>
                  <div className="text-pink-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#ffffff" />
    </section>
  )
}
