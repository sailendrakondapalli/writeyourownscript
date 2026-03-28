import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhoIHelp from '../components/WhoIHelp'
import Programs from '../components/Programs'
import CoachingCategories from '../components/CoachingCategories'
import Transformation from '../components/Transformation'
import Booking from '../components/Booking'
import ContactForm from '../components/ContactForm'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import ParallaxStrip from '../components/ParallaxStrip'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.hash])
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

      <Programs />
      <CoachingCategories />
      <Transformation />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        quote="You didn't come this far to only come this far. Rise, woman. Rise."
      />

      <Booking />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
