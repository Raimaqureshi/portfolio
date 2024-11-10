// components/Resume.tsx
"use client";

import React from 'react';
import styles from "../styles/Resume.module.css"; // Import the CSS module

const Resume: React.FC = () => {
  return (
    <div className={styles.resumeContainer}>
      <a
        href="/resume.pdf"
        download
        className={styles.downloadButton}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
