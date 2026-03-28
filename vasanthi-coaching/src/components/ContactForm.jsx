import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const WA_BASE = "https://wa.me/918148115360?text="

export default function ContactForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', phone: '', age: '', goal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi Vasanthi! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nAge: ${form.age}\nMy Goal: ${form.goal}\n\n${form.message}`
    )
    window.open(`${WA_BASE}${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', age: '', goal: '', message: '' })
  }

  const goals = [
    'Build Confidence', 'Find Clarity', 'Career Direction',
    'Overcome Anxiety', 'Self Love', 'Mindset Change', 'Other',
  ]

  return (
    <section id="contact" className="relative bg-white pt-24 pb-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Let's Start Your{' '}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Fill in your details and I'll reach out to you on WhatsApp personally.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-pink-100 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition text-gray-800"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition text-gray-800"
              />
            </div>
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Age Group</label>
            <div className="flex flex-wrap gap-3">
              {['6–18 years', '18–40 years', '40–60 years'].map(a => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setForm({ ...form, age: a })}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                    form.age === a
                      ? 'bg-pink-500 border-pink-500 text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-pink-300'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">What's your main goal?</label>
            <div className="flex flex-wrap gap-2">
              {goals.map(g => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setForm({ ...form, goal: g })}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                    form.goal === g
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tell me a little about yourself</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="What's going on in your life right now? What do you most want to change?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition text-gray-800 resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-600 font-medium mt-4"
            >
              ✅ Opening WhatsApp... Vasanthi will respond shortly!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
