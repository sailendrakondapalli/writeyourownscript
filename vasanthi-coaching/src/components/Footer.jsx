const WA_LINK = "https://wa.me/918939645676?text=Hi%20Vasanthi%2C%20I%20want%20to%20book%20a%20free%20session"

export default function Footer() {
  const links = ['About', 'Programs', 'Coaching', 'Testimonials', 'Book']

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-playfair text-3xl font-bold gradient-text mb-4">Vasanthi</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Certified Life Coach helping women and students transform their lives through clarity,
              confidence, and mindset mastery.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-gray-500 hover:text-pink-400 transition-colors text-sm"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>🔥 Phoenix Women</li>
              <li>🌟 Phoenix Future Leaders</li>
              <li>🎯 Clarity Coaching</li>
              <li>💎 Confidence Coaching</li>
              <li>🧠 Mindset Coaching</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Contact</h4>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300 text-sm transition-colors"
              >
                +91 89396 45676
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Vasanthi Life Coaching. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm italic font-playfair">
            "Rise Strong. Reclaim Yourself. Become Unstoppable."
          </p>
        </div>
      </div>
    </footer>
  )
}
