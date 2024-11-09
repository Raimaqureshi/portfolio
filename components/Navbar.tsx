import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center p-4 pr-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">
        <span className="text-green-400">R</span>aima&apos;s <span className="text-green-400">P</span>ortfolio
      </h1>

      {/* Desktop View (larger screens) */}
      <div className="hidden md:flex space-x-4">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#skills">Skills</Link>
      </div>

      {/* Mobile View (hamburger menu) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-4 top-16 bg-gray-800 text-white rounded-lg shadow-lg w-48 py-2 space-y-2">
            <Link href="#home" className="block px-4 py-2">Home</Link>
            <Link href="#about" className="block px-4 py-2">About</Link>
            <Link href="#projects" className="block px-4 py-2">Projects</Link>
            <Link href="#contact" className="block px-4 py-2">Contact</Link>
            <Link href="#skills" className="block px-4 py-2">Skills</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
