// components/About.tsx
import React from "react";
import Resume from '../components/Resume';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.resumeSection}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <p className={styles.sectionText}>
          I am an IT student with a passion for web development. I specialize in front-end technologies like HTML, CSS, and JavaScript, and I&apos;m constantly learning new skills to stay up-to-date with the latest trends.
        </p>
      </section>

      <section className={styles.resumeSection}>
        <h3 className={styles.goalTitle}>Goals</h3>
        <p className={styles.sectionText}>
          I aim to grow as a full-stack developer, contributing to impactful projects and enhancing my technical expertise.
        </p>
      </section>

      <section className={styles.resumeSection}>
        <h3 className={styles.goalTitle}>Why Me?</h3>
        <p className={styles.listItem}>
          My strong foundation in web technologies combined with my dedication to learning new skills makes me an ideal candidate for building high-performance websites. I take pride in delivering quality work and ensuring client satisfaction.
        </p>
      </section>

      <Resume />
    </div>
  );
};

export default About;
