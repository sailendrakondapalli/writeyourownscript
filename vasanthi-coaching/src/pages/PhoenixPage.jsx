import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import logoPng from '../assets/logo.png'

const WA_LINK = "https://wa.me/918148115360?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Phoenix%20Women"

export default function PhoenixPage() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #4a0a3e 100%)' }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(194,24,91,0.25) 0%, transparent 70%)'
        }} />
        <div className="relative z-10 text-center px-6 py-24">
          <button onClick={() => navigate(-1)}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
            ← Back
          </button>
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">Phoenix Women</h1>
          <p className="text-pink-300 text-lg italic">Rise Strong. Reclaim Yourself. Become Unstoppable.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* What is Phoenix Women */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14">
          <span className="section-tag">Our Philosophy</span>
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mt-3 mb-5">
            Welcome to the World of <span className="gradient-text">Phoenix Women</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The Phoenix is one of the most powerful symbols in human history — a bird that rises from its own ashes, more magnificent than before. That is exactly what you are capable of.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            No matter how burned out, broken down, or lost you feel right now — you have the power to rise. Not just survive, but truly <em>thrive</em>. The Phoenix Women movement is about women who refuse to stay small, who choose themselves, and who rise — again and again.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Strength isn't the absence of struggle. It's the decision to keep going despite it. Confidence isn't something you're born with — it's something you build, one brave choice at a time.
          </p>
        </motion.div>

        {/* Rise Reclaim Reign */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-14">
          {[{ icon: '🔥', label: 'Rise' }, { icon: '💎', label: 'Reclaim' }, { icon: '👑', label: 'Reign' }].map(item => (
            <div key={item.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="font-bold text-gray-800 text-lg">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex justify-center mb-14">
          <img src={logoPng} alt="Write Your Own Script" className="h-24 opacity-80" />
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="text-center bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl p-10 text-white">
          <h2 className="font-playfair text-3xl font-bold mb-3">Ready to Rise?</h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
            Your first session is completely free. Let's have a real conversation about your transformation.
          </p>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-pink-50 transition-colors shadow-lg">
            Connect on WhatsApp
          </a>
        </motion.div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
