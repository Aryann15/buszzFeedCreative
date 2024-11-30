import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">GITWIT</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-gray-300">Our Work</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          We use the power of deep insights to launch and grow brands, digital products, and companies.
        </h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Let's Chat
          </button>
          <button className="text-blue-500 py-2 px-6 rounded-md hover:bg-blue-100">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;