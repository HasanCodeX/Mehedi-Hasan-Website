
import { Helmet } from 'react-helmet-async';
import React, { useState } from "react";
import { FaGlobe, FaCode, FaServer } from "react-icons/fa";

// Project data
const projects = [
  {
   title: "Food Garden",
  description:
    "A production-ready food management app featuring real-time synchronization, JWT authentication, and optimized performance.",
  features: [
    "Real-time synchronization with Firebase",
    "JWT Authentication flow",
    "Full CRUD operations",
  ],
  techStack: [
    "React 19",
    "Tailwind CSS",
    "Firebase",
  ],
  liveLink: "https://food-garden-bd.web.app",
  frontendRepo: "https://github.com/HasanCodeX/Project---web-b11-A12-FoodGarden---client",
  backendRepo: "https://github.com/HasanCodeX/Project---web-b11-A12-FoodGarden---server",
  image: "https://i.ibb.co/NnQx5NND/Food-Guardian-06-29-2025-01-13-AM.png",
  },
  {
    title: "Event Explorer",
    description:
      "A full-stack event booking platform where users can browse and reserve seats for local events.",
    features: ["Authentication", "Booking System", "Firebase Integration"],
    techStack: ["React", "Firebase", "Node.js"],
    liveLink: "https://event-explorer-bd.netlify.app",
    frontendRepo: "https://github.com/HasanCodeX/Project---web-b11-A9-Event-Explorer",
    // backendRepo: "https://github.com/yourname/event-backend",
    image: "https://i.ibb.co/VWcfS0BV/Home-Event-Explorer-06-29-2025-01-07-AM.png",
  },
  {
    title: "Plant Care Tracker",
    description:
      "Helps users manage and track plant care routines with reminders and notes.",
    features: ["Add/Edit Plants", "Reminders", "Light/Dark Theme"],
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://plant-care-tracker-bd.web.app",
    frontendRepo: "https://github.com/HasanCodeX/Project---web-b11-A10-PlantCare---client",
    backendRepo: "https://github.com/HasanCodeX/Project---web-b11-A10-PlantCare---server",
    image: "https://i.ibb.co/27ssr5tp/Plant-Care-06-29-2025-12-43-AM.png",
  },
];

// Project Card Component
const ProjectCard = ({ project, onDetailsClick }) => {
  const {
    title,
    description,
    features,
    techStack,
    liveLink,
    frontendRepo,
    backendRepo,
    image,
  } = project;

  return (
    <div className="border border-base-content rounded-xl p-6 flex flex-col md:flex-row gap-6 bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-full max-h-[250px]"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-base-content">{title}</h2>
        <p className="text-sm mb-3 text-base-content/80">{description}</p>
        <ul className="text-sm mb-4 list-disc list-inside space-y-1 text-base-content/80">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="badge badge-outline text-xs px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {liveLink && (
            <a
              href={liveLink}
              className="btn btn-sm btn-primary gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe /> Live Site
            </a>
          )}
          {frontendRepo && (
            <a
              href={frontendRepo}
              className="btn btn-sm btn-outline gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode /> Client Code
            </a>
          )}
          {backendRepo && (
            <a
              href={backendRepo}
              className="btn btn-sm btn-outline gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaServer /> Server Code
            </a>
          )}
          <button
            onClick={() => onDetailsClick(project)}
            className="btn btn-sm btn-neutral"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Project Section with Modal
const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    document.getElementById("project_modal").showModal();
  };

  return (
    <>
      <Helmet>
        <title>Mehedi Hasan - Projects</title>
      </Helmet>
      <div className="mt-16 mb-16 md:pl-24 min-h-screen px-6 py-10 bg-base-100 text-base-content">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">My Projects</h2>
      <hr className="border-base-content opacity-30 mb-10" />
      <div className="space-y-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>

      {/* Modal for Details */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box max-w-3xl bg-base-200 text-base-content rounded-xl shadow-lg">
          {selectedProject && (
            <>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl mb-5 object-cover w-full max-h-[300px] shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-sm mb-4 text-base-content/80">
                {selectedProject.description}
              </p>

              <h4 className="font-semibold mb-1">Key Features:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-base-content/80">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h4 className="font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    className="btn btn-sm btn-primary gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGlobe /> Live Site
                  </a>
                )}
                {selectedProject.frontendRepo && (
                  <a
                    href={selectedProject.frontendRepo}
                    className="btn btn-sm btn-outline gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaCode /> Client Code
                  </a>
                )}
                {selectedProject.backendRepo && (
                  <a
                    href={selectedProject.backendRepo}
                    className="btn btn-sm btn-outline gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaServer /> Server Code
                  </a>
                )}
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm btn-error text-white">Close</button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
    </>
  );
};

export default ProjectSection;
