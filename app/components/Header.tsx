'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'w-1/3 bg-blue-700 shadow-md' : 'w-3/5 bg-blue-700'
      } rounded-lg`}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`font-bold text-4xl text-white`}>Lojgo</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className={`text-sm font-medium text-white hover:text-gray-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <Button 
              variant={scrolled ? "outline" : "secondary"}
              size="sm"
              className={`mr-4 ${
                scrolled ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Log in
            </Button>
            <Button 
              variant={scrolled ? "default" : "secondary"}
              size="sm"
              className={`${
                scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
