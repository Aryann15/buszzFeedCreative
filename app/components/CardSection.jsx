import { Card } from './Card'

const cardData = [
  {
    title: "Responsive Design",
    description: "Create layouts that automatically adapt to any device size.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "Responsive design ensures that your website looks great on all devices, from desktop computers to smartphones. It involves using flexible grids, layouts, and images, as well as CSS media queries. This approach improves user experience and is favored by search engines."
  },
  {
    title: "Modern Frameworks",
    description: "Leverage the power of React, Vue, and Angular for robust applications.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "Modern JavaScript frameworks like React, Vue, and Angular provide powerful tools for building complex, interactive web applications. They offer component-based architecture, efficient rendering through virtual DOMs, and extensive ecosystems of libraries and tools."
  },
  {
    title: "Performance Optimization",
    description: "Implement techniques to ensure your site loads quickly and runs smoothly.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "Performance optimization involves various techniques such as code splitting, lazy loading, caching, and minimizing HTTP requests. It also includes optimizing images, using content delivery networks (CDNs), and implementing efficient algorithms to ensure your website loads quickly and provides a smooth user experience."
  },
  {
    title: "Accessibility",
    description: "Ensure your website is usable by people of all abilities and disabilities.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "Web accessibility means designing and developing websites that can be used by everyone, including people with disabilities. This involves following WCAG guidelines, using semantic HTML, providing alternative text for images, ensuring keyboard navigation, and maintaining sufficient color contrast."
  },
  {
    title: "SEO Best Practices",
    description: "Optimize your site to rank higher in search engine results.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "SEO best practices include optimizing meta tags, creating high-quality content, improving site speed, building quality backlinks, and ensuring mobile-friendliness. It also involves using structured data, optimizing for local search, and keeping up with search engine algorithm updates."
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensure your site works flawlessly across all major web browsers.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    additionalInfo: "Cross-browser compatibility involves testing and adjusting your website to work consistently across different browsers like Chrome, Firefox, Safari, and Edge. This includes using standardized CSS, handling browser-specific quirks, and employing feature detection and polyfills when necessary."
  }
]

export function CardSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

