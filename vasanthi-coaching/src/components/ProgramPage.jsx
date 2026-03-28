import { useEffect } from 'react'
import { motion } from 'framer-motion'

const WA_LINK = "https://wa.me/918148115360?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"

export default function ProgramPage({ data, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!data) return null

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-white overflow-y-auto"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.4 }}
    >
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors font-medium"
        >
          <span className="text-xl">←</span> Back to Programs
        </button>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary py-2 px-6 text-sm">
          Apply Now — Free
        </a>
      </div>

      {/* Hero banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-65`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <div className="text-6xl mb-4">{data.emoji}</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">{data.title}</h1>
          <p className="text-white/90 text-lg italic max-w-xl">{data.tagline}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="section-tag">About This Program</span>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">{data.description}</p>
        </motion.div>

        {/* Photo grid */}
        {data.photos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {data.photos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-40 shadow-md">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-400" />
              </div>
            ))}
          </motion.div>
        )}

        {/* Is this for you */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mb-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100"
        >
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Is This For You?</h2>
          <p className="text-gray-600 mb-4">This program is designed for you if you're experiencing:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {data.problems.map(p => (
              <div key={p} className="bg-white rounded-xl p-4 shadow-sm border border-pink-100 text-center">
                <div className="text-2xl mb-2">💫</div>
                <div className="text-gray-700 font-medium text-sm">{p}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What you'll gain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">What You'll Gain</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-pink-500 text-lg flex-shrink-0 mt-0.5">✦</span>
                <span className="text-gray-700 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        {data.steps && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="flex flex-col gap-4">
              {data.steps.map((s, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex-1 border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="text-center bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl p-10 text-white"
        >
          <div className="text-4xl mb-4">{data.emoji}</div>
          <h2 className="font-playfair text-3xl font-bold mb-3">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
            Your first session is completely free. No pressure, no commitment — just a real conversation about your transformation.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-pink-50 transition-colors shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Apply on WhatsApp — It's Free
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
