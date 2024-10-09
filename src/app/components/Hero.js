// components/Hero.js
export default function Hero() {
    return (
      <section className="text-center py-20 bg-gradient-to-b from-purple-50 to-white relative">
        {/* Background effect can be a positioned SVG or CSS gradient */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 opacity-50">
          {/* Placeholder for background, could be an SVG or image */}
          <img src="/globe.svg" alt="Background Globe" className="h-96" />
        </div>
  
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-gray-900">
          The Integration Platform for the AI Internet
        </h1>
  
        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600">
          The toolkit to build user-permissioned integrations for the most popular sites on the internet.
        </p>
      </section>
    );
  }
  