import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LearningSection() {
  return (
    <section className="bg-[#4361ee] py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-white/90 font-mono">Learning</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Our methods & tools,
            <br />
            <span className="text-[#b4ff39] italic">all for you to use.</span>
          </h2>
          <div className="mt-8">
            <Link
              href="/explore"
              className="inline-flex items-center px-6 py-3 bg-[#b4ff39] text-gray-900 rounded-full font-medium hover:bg-[#a3e635] transition-colors"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Customer Discovery Card */}
          <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="aspect-[16/9] relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Customer Discovery Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Customer Discovery
              </h3>
              <p className="text-white/80 mb-6">
                Gain an appreciation for gathering insights before jumping into decision mode, 
                an actionable process to implement in your own organization, and templates 
                to guide you and your team in your next discovery sprint.
              </p>
              <Link
                href="/learn/customer-discovery"
                className="inline-flex items-center text-[#b4ff39] hover:text-[#a3e635] transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product Vision Card */}
          <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="aspect-[16/9] relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Product Vision Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Product Vision
              </h3>
              <p className="text-white/80 mb-6">
                Learn about the impact your product vision has on project success, and get the 
                tools and guidance you need to run your own 1-day product vision workshop.
              </p>
              <Link
                href="/learn/product-vision"
                className="inline-flex items-center text-[#b4ff39] hover:text-[#a3e635] transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

