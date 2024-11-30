import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Logo
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Product</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Features</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </header>
  )
}

