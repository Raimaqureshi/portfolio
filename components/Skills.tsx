// components/Skills.tsx
"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import styles from "../styles/Skills.module.css"; // Import the CSS module

export default function Skills() {
  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsHeading}>Skills</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillsItem}>
          <FaJsSquare className={`${styles.icon} ${styles.iconJs}`} />
          JavaScript / TypeScript
        </li>
        <li className={styles.skillsItem}>
          <FaReact className={`${styles.icon} ${styles.iconReact}`} />
          React & Next.js
        </li>
        <li className={styles.skillsItem}>
          <FaHtml5 className={`${styles.icon} ${styles.iconHtml}`} />
          HTML & CSS
        </li>
        <li className={styles.skillsItem}>
          <FaCss3Alt className={`${styles.icon} ${styles.iconCss}`} />
          Tailwind CSS
        </li>
      </ul>
    </div>
  );
}
