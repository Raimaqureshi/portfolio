// components/Resume.tsx

import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <a
        href="/resume.pdf"
        download
        className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-500"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
