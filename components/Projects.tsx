// components/Projects.js

import Image from 'next/image';
import React from 'react';

const Projects = () => {
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
      image: "/pictures/calendar.png",  // Path to image
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
    <div className=" bg-gray-900 w-full py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800"
          >
            <Image
              className="w-full h-48 object-cover"
              src={project.image}
              alt={project.name}
            />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
            <div className="px-6 pb-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full w-full text-center"
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
