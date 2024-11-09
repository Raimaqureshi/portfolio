// components/Hero.tsx
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="flex items-center justify-center h-screen bg-cover bg-center text-center space-y-3"
      style={{
        backgroundImage: "url('/pictures/images.jfif')"
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center px-4 md:px-8">
        {/* Left Side: Content */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-5xl font-bold text-orange-700">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold text-white">Raima Qureshi</h1>
          <p className="text-white text-lg">
            A <span className="text-green-400">Creative Designer</span> From <span className="text-yellow-400">Pakistan</span>
          </p>

          <p className="text-lg text-white mt-4">I&apos;m a creative designer based in Pakistan, and I&apos;m very  passionate and dedicated to my work.</p><br />

          <a
            href="#contact" 
            className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition"
          >
            Contact Me
          </a> 
        </div>
        
        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/pictures/raima.jpg"
            alt="Raima Qureshi"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
