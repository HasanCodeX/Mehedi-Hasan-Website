import React from "react";

const ProjectCard = () => {
  return (
    <div className="border border-base-content rounded-xl p-6 flex flex-col md:flex-row gap-6 bg-base-200">
      {/* Project image or preview area */}
      <div className="w-full md:w-1/2 bg-primary rounded-lg min-h-[200px] md:min-h-[250px]"></div>

      {/* Project content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-base-content">Project Title</h2>

        <p className="text-sm mb-3 text-base-content/80">
          Brief description of the project goes here. This is a short paragraph to describe what the project is about and what it does.
        </p>

        <ul className="text-sm mb-4 list-disc list-inside space-y-1 text-base-content/80">
          <li>Main feature 1</li>
          <li>Main feature 2</li>
          <li>Main feature 3</li>
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Tailwind", "Node"].map((tech, i) => (
            <span
              key={i}
              className="bg-base-100 border border-base-content px-3 py-1 rounded-full text-xs text-base-content"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <a href="#" className="btn btn-sm btn-primary">Live</a>
          <a href="#" className="btn btn-sm btn-outline">GitHub</a>
          <a href="#" className="btn btn-sm btn-outline">Details</a>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    // <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-base-100 text-base-content">
    <div className="pl-24 min-h-screen px-6 py-10 bg-base-100 text-base-content">
      {/* <div className="max-w-6xl mx-auto"> */}
        {/* <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact Me</h2> */}
        {/* <hr className="border-base-content opacity-30 mb-10" /> */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Projects</h2>
        <hr className="border-base-content opacity-30 mb-10" />
        <div className="space-y-10 max-w-6xl mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
