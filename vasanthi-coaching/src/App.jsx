import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhoIHelp from './components/WhoIHelp'
import Programs from './components/Programs'
import CoachingCategories from './components/CoachingCategories'
import Transformation from './components/Transformation'
import BrandMessage from './components/BrandMessage'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ParallaxStrip from './components/ParallaxStrip'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
        quote="Every woman deserves to live a life she's proud of — not one she's simply surviving."
      />

      <WhoIHelp />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        quote="Clarity is not a luxury. It's the foundation of every great life."
      />

      <Programs />
      <CoachingCategories />
      <Transformation />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        quote="You didn't come this far to only come this far. Rise, woman. Rise."
      />

      <BrandMessage />
      <Testimonials />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
        quote="The best investment you will ever make is in yourself."
      />

      <Booking />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
