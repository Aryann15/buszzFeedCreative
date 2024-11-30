'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CaseStudy {
  title: string
  description: string
  image: string
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Agentech AI Assistant",
    description: "Found the highest-value opportunity in pet insurance and rapidly created an AI solution assistant built to solve it.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/agentech"
  },
  {
    title: "Know STD Testing",
    description: "The first ever at-home rapid STD test on the market.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/know"
  },
  {
    title: "Sooners Access",
    description: "Rapidly developed a subscription content proof of concept that gave college football fans exclusive access to their heroes.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/sooners"
  },
  {
    title: "Dental Mobile App",
    description: "Reimagined the patient experience and operational workflow for a mobile dental service looking to scale nationwide.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/dental"
  },
  {
    title: "Oklahoma Science Campaign",
    description: "Launched an ad campaign + video series promoting Oklahoma's science & technology ecosystem.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/oklahoma"
  },
  {
    title: "Prelude Funeral Planning",
    description: "Funeral planning app disrupting the death care space.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/case-study/prelude"
  }
]

export default function LatestWork() {
  return (
    <section className="bg-[#1a1b26] py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-mono text-blue-500 mb-12">Our Latest Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <p className="text-white/90 mb-4 min-h-[60px]">
                    {study.description}
                  </p>
                  <Link 
                    href={study.link}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    {study.title} Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View More Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

