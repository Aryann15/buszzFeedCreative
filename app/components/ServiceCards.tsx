'use client'

import { Card } from "@/components/ui/card"
import { Lightbulb, Rocket, Brain } from 'lucide-react'
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  team: string[]
  details: string[]
  ctaText: string
  gradient: string
}

function ServiceCard({ title, icon, team, details, ctaText, gradient }: ServiceCardProps) {
  return (
    <motion.div
      className="relative h-[400px] perspective-1000"
      whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className={`w-full h-full ${gradient} rounded-xl p-6 text-white group hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
        <div className="relative h-full">
          {/* Front content */}
          <div className="space-y-4 transition-opacity duration-500 group-hover:opacity-0">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="space-y-2">
              {team.map((member, index) => (
                <p key={index} className="text-white/80">+ {member}</p>
              ))}
            </div>
          </div>

          {/* Back content */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{title}</h3>
              <div className="space-y-2">
                {details.map((detail, index) => (
                  <p key={index} className="text-white/90 border-b border-white/20 py-2">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button - Always visible */}
          <button className="absolute bottom-0 left-0 right-0 bg-white/20 py-3 text-center hover:bg-white/30 transition-colors rounded-md">
            {ctaText}
          </button>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ServiceCards() {
  const services = [
    {
      title: "Insights & Consulting",
      icon: <Brain className="w-6 h-6 text-white" />,
      team: ["Researchers", "Analysts", "Strategists", "Instructors"],
      details: [
        "Market Research",
        "Business Strategy",
        "Digital Transformation",
        "Technology Consulting"
      ],
      ctaText: "View Insights & Consulting Work",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Product",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      team: ["Product Managers", "Designers", "Engineers", "QA Specialists"],
      details: [
        "Product Visioning",
        "Product Design",
        "User Testing & Validation",
        "System Architecture",
        "Full-Stack Engineering",
        "Product Management"
      ],
      ctaText: "View Case Studies",
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "Marketing",
      icon: <Rocket className="w-6 h-6 text-white" />,
      team: ["Growth Marketers", "Designers", "Writers", "Animators"],
      details: [
        "Growth Strategy",
        "Content Marketing",
        "Social Media",
        "Digital Advertising"
      ],
      ctaText: "View Marketing Work",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <p className="text-center mt-12 text-xl text-gray-600">
          A full-stack team under one roof.
        </p>
      </div>
    </section>
  )
}

