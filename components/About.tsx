import React from "react";
import Resume from '../components/Resume';

const About = () => {
  return (
    <div className="max-w-full mx-auto p-5 bg-gray-900">
      <section className="mb-3">
        <h1 className=" text-2xl font-bold text-white ml-4 mt-3 mb-3">About Me</h1>
        <p className="text-lg text-gray-400 ml-6">
          I am an IT student with a passion for web development. I specialize in front-end technologies like HTML, CSS, and JavaScript, and I'm constantly learning new skills to stay up-to-date with the latest trends.
        </p>
      </section>

      <section className="mb-3">
        <h3 className="text-xl font-bold text-yellow-500 ml-5 mb-3">Goals</h3>
        <p className="text-lg text-gray-400 ml-6">
          I aim to grow as a full-stack developer, contributing to impactful projects and enhancing my technical expertise.
        </p>
      </section>
      <section className="mb-3">
        <h3 className="text-xl font-bold text-yellow-500 ml-5 mb-3">Why Me?</h3>
        <p className="list-disc pl-6 text-lg text-gray-400 ml-5">
        My strong foundation in web technologies combined with my dedication to learning new skills makes me an ideal candidate for building high-performance websites. I take pride in delivering quality work and ensuring client satisfaction.
        </p>
      </section>
      <Resume />
    </div>
  );
};

export default About;
