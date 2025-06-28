// ProjectSection.jsx
import React from "react";

const ProjectCard = () => {
  return (
    <div className="border border-black dark:border-white rounded-xl p-4 flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-gray-800">
      <div className="w-full md:w-1/2 bg-green-600 rounded-lg min-h-[200px] md:min-h-[250px]"></div>
      <div className="w-full md:w-1/2 text-black dark:text-white">
        <h2 className="text-2xl font-bold mb-2">Title</h2>
        <p className="text-sm mb-3">
          Brief description Brief description Brief description Brief description Brief description Brief description
        </p>
        <ul className="text-sm mb-3 list-disc list-inside space-y-1">
          <li>Main feature 1</li>
          <li>Main feature 2</li>
          <li>Main feature 3</li>
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-white dark:bg-black border border-black dark:border-white px-3 py-1 rounded-full text-xs">React</span>
          <span className="bg-white dark:bg-black border border-black dark:border-white px-3 py-1 rounded-full text-xs">Tailwind</span>
          <span className="bg-white dark:bg-black border border-black dark:border-white px-3 py-1 rounded-full text-xs">Node</span>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">Live</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">GitHub</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">Details</button>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="space-y-10 max-w-6xl mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
