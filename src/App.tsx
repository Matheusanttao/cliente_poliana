import { Care } from './components/Care'
import { Contact } from './components/Contact'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Techniques } from './components/Techniques'
import { Testimonials } from './components/Testimonials'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-w-0 overflow-x-clip">
      <Header />
      <main className="min-w-0">
        <Hero />
        <Highlights />
        <Services />
        <Techniques />
        <Process />
        <Gallery />
        <Pricing />
        <Care />
        <Testimonials />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
