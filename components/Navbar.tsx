// components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 pr-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">
        <span className="text-green-400">R</span>aima&apos;s <span className="text-green-400">P</span>ortfolio
      </h1>

      <div className="space-x-4">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#skills">Skills</Link>
      </div>
    </nav>
  );
}
