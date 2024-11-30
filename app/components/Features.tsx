import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your tasks, boost productivity, and achieve more with our cutting-edge platform.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Free Trial
          </button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Product showcase"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

