import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    icon: '🎯',
    title: 'Clarity Coaching',
    what: 'Clarity coaching helps you cut through mental fog and confusion to identify exactly what you want and why.',
    why: 'Without clarity, you drift. With it, every decision becomes easier and every action more purposeful.',
    who: 'Anyone feeling lost, overwhelmed by choices, or unsure of their next step in life or career.',
  },
  {
    icon: '💎',
    title: 'Confidence Coaching',
    what: 'A deep dive into rebuilding your self-worth, eliminating imposter syndrome, and owning your value.',
    why: 'Confidence is the foundation of every achievement. It\'s not arrogance — it\'s knowing your worth.',
    who: 'Women and students who shrink themselves, struggle with self-doubt, or fear judgment from others.',
  },
  {
    icon: '⚡',
    title: 'Empowerment Coaching',
    what: 'Empowerment coaching activates your inner strength and helps you reclaim your personal power.',
    why: 'You were born powerful. This coaching removes the layers that have dimmed your light.',
    who: 'Those who feel powerless, stuck in toxic patterns, or dependent on others\' validation.',
  },
  {
    icon: '😊',
    title: 'Happiness Coaching',
    what: 'Learn to cultivate genuine, lasting happiness by aligning your life with your values and desires.',
    why: 'Happiness isn\'t a destination — it\'s a skill. And like any skill, it can be learned and practiced.',
    who: 'Anyone feeling chronically unfulfilled, going through the motions, or searching for deeper meaning.',
  },
  {
    icon: '🧠',
    title: 'Mindset Coaching',
    what: 'Identify and rewire the limiting beliefs and thought patterns that are keeping you stuck.',
    why: 'Your mindset is the operating system of your life. Upgrade it, and everything changes.',
    who: 'People who self-sabotage, overthink, or feel held back by fear, perfectionism, or past experiences.',
  },
  {
    icon: '🌱',
    title: 'Self Development',
    what: 'A holistic approach to becoming the best version of yourself — mentally, emotionally, and professionally.',
    why: 'Growth is not optional if you want a fulfilling life. Intentional development accelerates everything.',
    who: 'Anyone committed to continuous improvement and ready to invest in their own evolution.',
  },
  {
    icon: '💗',
    title: 'Self Love Coaching',
    what: 'Learn to treat yourself with the same compassion, respect, and care you give to others.',
    why: 'You cannot pour from an empty cup. Self-love is the root of every healthy relationship and achievement.',
    who: 'Those who put everyone else first, struggle with self-criticism, or have never truly prioritized themselves.',
  },
  {
    icon: '🌟',
    title: 'Positivity Coaching',
    what: 'Cultivate an optimistic mindset and train yourself to see opportunities even in challenges.',
    why: 'Positivity is not toxic — it\'s a powerful lens that shifts your energy, attracts better outcomes, and fuels resilience.',
    who: 'Anyone stuck in negative thought loops, chronic pessimism, or struggling to find joy in everyday life.',
  },
  {
    icon: '⚖️',
    title: 'Work Life Balance Coaching',
    what: 'Learn to set boundaries, manage energy, and create harmony between your professional and personal life.',
    why: 'Burnout is not a badge of honour. A balanced life is a productive, joyful, and sustainable one.',
    who: 'Professionals, working women, and students who feel overwhelmed, exhausted, or like they\'re always running on empty.',
  },
]

export default function CoachingCategories() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(null)

  return (
    <section id="coaching" className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">What I Offer</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Coaching{' '}
            <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Click any card to discover what each coaching area can do for you
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActive(active?.title === cat.title ? null : cat)}
              className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                active?.title === cat.title
                  ? 'border-pink-400 bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg'
                  : 'border-gray-100 bg-gray-50 hover:border-pink-200'
              }`}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-gray-800 text-base leading-tight">{cat.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Expanded info */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.title}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{active.icon}</span>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">{active.title}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { label: 'What it is', text: active.what, color: 'text-pink-600' },
                    { label: 'Why it matters', text: active.why, color: 'text-purple-600' },
                    { label: 'Who it\'s for', text: active.who, color: 'text-rose-600' },
                  ].map(item => (
                    <div key={item.label}>
                      <div className={`font-semibold ${item.color} mb-2 text-sm uppercase tracking-wide`}>{item.label}</div>
                      <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
