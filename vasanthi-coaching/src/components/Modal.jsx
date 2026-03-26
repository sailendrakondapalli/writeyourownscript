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
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

          <div className="text-4xl mb-3">{data.emoji}</div>
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-2">{data.title}</h3>
          <p className="text-pink-600 font-medium italic mb-6">{data.tagline}</p>

          <p className="text-gray-600 leading-relaxed mb-6">{data.description}</p>

          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-3">What you'll gain:</h4>
            <ul className="space-y-2">
              {data.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-pink-500 mt-0.5 flex-shrink-0">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full text-center block"
          >
            Apply Now — It's Free to Start
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
