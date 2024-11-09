import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="skills-section p-4 bg-gray-900">
      <h2 className="text-white text-3xl font-bold ml-4 mb-4">Skills</h2>
      <ul className="list-none space-y-2 text-lg text-gray-400 ml-5">
        <li className="flex items-center">
          <FaJsSquare className="mr-2 text-yellow-500" />
          JavaScript / TypeScript
        </li>
        <li className="flex items-center">
          <FaReact className="mr-2 text-blue-400" />
          React & Next.js
        </li>
        <li className="flex items-center">
          <FaHtml5 className="mr-2 text-orange-500" />
          HTML & CSS
        </li>
        <li className="flex items-center">
          <FaCss3Alt className="mr-2 text-blue-500" />
          Tailwind CSS
        </li>
      </ul>
    </div>
  );
}
