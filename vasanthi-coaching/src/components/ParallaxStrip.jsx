// Fixed-background parallax strip between sections
export default function ParallaxStrip({ image, quote, author }) {
  return (
    <div
      className="relative h-56 md:h-72 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="text-pink-300 text-3xl mb-3">✦</div>
        <blockquote className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <div className="text-pink-300 mt-3 font-medium text-sm tracking-wide">— {author}</div>
        )}
      </div>
    </div>
  )
}
