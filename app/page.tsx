import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import AnimationOverlay from './components/AnimationOverlay'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AnimationOverlay />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

