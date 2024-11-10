// components/Projects.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Project.module.css'; // Import the CSS module

const Projects: React.FC = () => {
  const projects = [
    {
      name: "My Own Resume",
      description: "My personal resume showcasing my skills and experiences in a clean and professional layout.",
      image: "/pictures/reem.png",  // Path to image
      link: "https://hackthon-milestone-01-02.vercel.app/"  // Vercel project link
    },
    {
      name: "Calendar App",
      description: "An interactive calendar app for managing and organizing events with a user-friendly interface and customizable features.",
      image: "/pictures/cale.png",  // Path to image
      link: "https://calendar-projecy.vercel.app/"  // Vercel project link
    },
    {
      name: "Resume Form Project",
      description: "A dynamic and customizable resume builder app that helps users create professional resumes effortlessly.",
      image: "/pictures/make.png",  // Path to image
      link: "https://hackthon-milestone-05.vercel.app/"  // Vercel project link
    },
    {
      name: "HTML Project",
      description: "A modern and responsive HTML project designed to showcase essential web development skills with clean, structured layouts and interactive elements.",
      image: "/pictures/pana.png",  // Path to image
      link: "https://html-ch-08.vercel.app/contact.html"  // Vercel project link
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              className={styles.projectImage}
              src={project.image}
              alt={project.name}
              width={1600}  
              height={900}  
              priority={true}  // optional, to load the image early
            />
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            <div className={styles.projectButtonContainer}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectButton}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
