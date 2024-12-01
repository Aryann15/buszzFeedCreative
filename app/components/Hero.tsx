import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-900"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #60A5FA, #3B82F6, #2563EB, #1E40AF, #1E3A8A)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      {/* Floating shapes for added visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-sm" />
          <span className="text-lg font-semibold text-white font-poppins">Untitled UI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'Products', 'Resources', 'Pricing'].map((item) => (
            <Link key={item} className="text-sm text-white/90 hover:text-white transition-colors" href="#">
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 transition-colors">
            Log in
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors">
            Sign up
          </Button>
        </div>
      </nav>
      
      {/* Hero Content */}
      <main className="relative z-10 px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-poppins">
            How to improve your UI design skills: Quickly develop an "eye" for great design
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an "eye" for UI design and improve your design skills in 2023.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Design', 'Product', '12 min read'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-blue-400/10 backdrop-blur-sm text-sm text-white font-medium transition-colors hover:bg-blue-400/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

