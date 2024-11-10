"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css"; // Import the CSS module

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle the menu visibility

  return (
    <nav className={styles.navbar}>
      <h1>
        <span className={styles.navbarSpan}>R</span>
        aima&apos;s <span className={styles.navbarSpan}>P</span>ortfolio
      </h1>

      {/* Desktop View (larger screens) */}
      <div className={styles.desktopNav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#skills">Skills</Link>
      </div>

      {/* Mobile View (hamburger menu) */}
      <div className={styles.mobileNav}>
        <button onClick={toggleMenu} className={styles.hamburgerButton}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`${styles.dropdownMenu} ${isOpen ? styles.open : ""}`}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#skills">Skills</Link>
        </div>
      </div>
    </nav>
  );
}
