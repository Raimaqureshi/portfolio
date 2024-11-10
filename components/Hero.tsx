// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Left Side: Content */}
        <div className={styles.heroContentLeft}>
          <p className={styles.heroContentLeftText}>Hello, I&apos;m</p>
          <h1 className={styles.heroContentTitle}>Raima Qureshi</h1>
          <p className={styles.heroContentSubtitle}>
            A <span className={styles.heroContentGreen}>Creative Designer</span> From{' '}
            <span className={styles.heroContentYellow}>Pakistan</span>
          </p>

          <p className={styles.heroDescription}>
            I&apos;m a creative designer based in Pakistan, and I&apos;m very passionate and dedicated to my work.
          </p>
          <br />

          <a href="#contact" className={styles.contactButton}>
            Contact Me
          </a>
        </div>

        {/* Right Side: Image */}
        <div className={styles.heroImageWrapper}>
          <Image
            src="/pictures/raima.jpg"
            alt="Raima Qureshi"
            width={288}
            height={288}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
