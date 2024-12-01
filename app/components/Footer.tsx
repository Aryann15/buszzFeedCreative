'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube, InstagramIcon as TiktokIcon } from 'lucide-react'

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter signup
  }

  return (
    <footer className="bg-[#1a1b26] text-white">
      {/* Testimonial Section */}
      <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
        <p className="text-gray-400 mb-4">Aditya Chauhan, principal</p>
        <blockquote className="text-2xl md:text-3xl italic font-light mb-8">
          "buzzfeedCreative is a serial innovator; we have applied our team and process with repeated success regardless of industry, size, problem, or point of entry."
        </blockquote>
        <Link
          href="/contact"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Let&apos;s Chat
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Newsletter Signup */}
        <div className="lg:col-span-1">
          <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            G
          </div>
          <h3 className="text-xl font-semibold mb-4">Let&apos;s be friends!</h3>
          <p className="text-gray-400 mb-4">Sign up for our newsletter.</p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/work" className="text-gray-400 hover:text-white">Our Work</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/learning" className="text-gray-400 hover:text-white">Learning</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/ventures" className="text-gray-400 hover:text-white">Ventures</Link></li>
            <li><Link href="/articles" className="text-gray-400 hover:text-white">Articles</Link></li>
            <li>
              <Link href="/chat" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                Let&apos;s Chat <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="lg:text-right">
          <p className="text-gray-400">Jahangirputi</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024, Aryan. All Rights Reserved.</p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://tiktok.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">TikTok</span>
              <TiktokIcon className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto px-4 py-12">
        <div className="w-48 md:w-64 mx-auto">
          <div className="text-4xl md:text-6xl font-bold text-blue-600">buzzfeed CREATIONS</div>
        </div>
      </div>
    </footer>
  )
}

