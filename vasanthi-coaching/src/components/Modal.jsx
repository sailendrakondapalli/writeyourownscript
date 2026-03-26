import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

export default function Modal({ data, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!data) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="bg-white rounded-3xl w-full max-w-3xl relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 shadow text-xl font-bold"
            aria-label="Close"
          >×</button>

          {/* Hero image */}
          <div className="relative h-64 overflow-hidden">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-60`} />
            <div className="absolute bottom-6 left-8 text-white">
              <div className="text-4xl mb-2">{data.emoji}</div>
              <h3 className="font-playfair text-3xl font-bold drop-shadow">{data.title}</h3>
              <p className="text-white/90 italic mt-1">{data.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">{data.description}</p>

            {/* Photo grid */}
            {data.photos && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                {data.photos.map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden h-28">
                    <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            )}

            {/* What you'll gain */}
            <div className="mb-8">
              <h4 className="font-playfair text-xl font-bold text-gray-900 mb-4">What you'll gain:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-pink-50 rounded-xl p-3">
                    <span className="text-pink-500 mt-0.5 flex-shrink-0 text-lg">✦</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            {data.steps && (
              <div className="mb-8">
                <h4 className="font-playfair text-xl font-bold text-gray-900 mb-4">How it works:</h4>
                <div className="flex flex-col gap-3">
                  {data.steps.map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-1">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full text-center block text-lg py-4"
            >
              Apply Now — First Session is FREE 🔥
            </a>
            <p className="text-center text-gray-400 text-sm mt-3">No commitment. Just a conversation.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
