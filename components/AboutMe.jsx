// import React, { useState, useEffect } from 'react';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaTools } from 'react-icons/fa';
// import { SiRedux, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman, SiJsonwebtokens, SiExpress, SiMongoose } from 'react-icons/si';
// import { MdOutlineApi } from 'react-icons/md';

// const skillIcons = [
//   { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
//   { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
//   { name: 'Next.js', icon: <SiNextdotjs className="text-white text-5xl" /> },
//   { name: 'Redux', icon: <SiRedux className="text-purple-500 text-5xl" /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl" /> },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-5xl" /> },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-5xl" /> },
//   { name: 'Mongoose', icon: <SiMongoose className="text-red-400 text-5xl" /> },
//   { name: 'REST APIs', icon: <MdOutlineApi className="text-blue-300 text-5xl" /> },
//   { name: 'JWT Authentication', icon: <SiJsonwebtokens className="text-pink-400 text-5xl" /> },
//   { name: 'Postman', icon: <SiPostman className="text-orange-400 text-5xl" /> },
//   { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
//   { name: 'HTML & CSS', icon: <><FaHtml5 className="text-orange-600 text-5xl inline-block mr-1" /><FaCss3Alt className="text-blue-500 text-5xl inline-block" /></> },
//   { name: 'React Router', icon: <FaReact className="text-pink-300 text-5xl" /> },
//   { name: 'Server-side Rendering (SSR)', icon: <FaTools className="text-gray-400 text-5xl" /> },
//   { name: 'Static Site Generation (SSG)', icon: <FaTools className="text-gray-400 text-5xl" /> }
// ];

// const AboutMe = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <section className={` min-h-screen  py-16 px-4 md:px-16 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-light border-b border-gray-600 inline-block">About me</h1>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
//         >
//           Toggle {darkMode ? 'Light' : 'Dark'} Mode
//         </button>
//       </div>

//       {/* About Myself */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-light mb-4">About Myself</h2>
//         <p className="text-gray-300 max-w-3xl">
//           Hi, I’m Mehedi Hasan — a passionate Frontend Developer based in Bangladesh. I specialize in building modern, responsive web applications using technologies like React, Tailwind CSS, and Next.js.
//         </p>
//       </div>

//       {/* Work Timeline */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-light mb-4">Work Timeline</h2>
//         <div className="max-w-3xl">
//           {[
//             ['MERN Stack Development Trainee', 'Programming Hero', '2024 (6-Month Course)'],
//             ['Frontend Projects & Practice', 'Self-Learning', '2018–2025'],
//             ['UI/UX Design Practice', 'Self-Learning', '2018–2024']
//           ].map(([role, source, period], idx) => (
//             <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-600 py-2">
//               <div className="font-medium">{role}</div>
//               <div className="text-gray-400">{source}</div>
//               <div className="text-gray-400">{period}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Skills */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-light mb-4">Skills</h2>
//         <div className="overflow-x-auto whitespace-nowrap py-6">
//           <div className="flex space-x-6 animate-scroll-horizontal">
//             {skillIcons.map((skill, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center min-w-[160px] h-48 bg-gray-800 text-white rounded-xl p-4 shadow-lg transform transition hover:scale-105 hover:bg-gray-700"
//               >
//                 <div className="mb-4">{skill.icon}</div>
//                 <div className="text-center font-medium text-lg">{skill.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <style>
//           {`
//             @keyframes scroll-horizontal {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); }
//             }
//             .animate-scroll-horizontal {
//               animation: scroll-horizontal 30s linear infinite;
//             }
//           `}
//         </style>
//       </div>

//       {/* Services */}
//       <div>
//         <h2 className="text-2xl font-light mb-4">Services</h2>
//         <div className="space-y-6 max-w-3xl">
//           {[
//             ['UI & UX Design', 'Creating user-centered interfaces with a focus on intuitive experiences, visual consistency, and responsive design.'],
//             ['Frontend Development', 'Building fast, responsive web interfaces using React, Tailwind CSS, and modern frontend tools to ensure seamless user experiences.'],
//             ['MERN Stack Development', 'Developing full-stack web applications using MongoDB, Express.js, React, and Node.js for scalable and efficient solutions.']
//           ].map(([title, desc], idx) => (
//             <div key={idx}>
//               <h3 className="text-lg font-medium border-b border-gray-600 inline-block">{title}</h3>
//               <p className="text-gray-300 mt-2">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaTools,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman, SiJsonwebtokens, SiExpress, SiMongoose
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-400 text-5xl" /> },
  { name: "REST APIs", icon: <MdOutlineApi className="text-blue-300 text-5xl" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400 text-5xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  {
    name: "HTML & CSS",
    icon: (
      <>
        <FaHtml5 className="text-orange-600 text-5xl inline-block mr-1" />
        <FaCss3Alt className="text-blue-500 text-5xl inline-block" />
      </>
    ),
  },
  { name: "React Router", icon: <FaReact className="text-pink-300 text-5xl" /> },
  { name: "SSR", icon: <FaTools className="text-gray-400 text-5xl" /> },
  { name: "SSG", icon: <FaTools className="text-gray-400 text-5xl" /> },
];

const AboutMe = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-light border-b border-gray-600">About me</h1>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-light mb-4">About Myself</h2>
        <p className="text-gray-300">
          Hi, I’m Mehedi Hasan — a passionate Frontend Developer based in Bangladesh. I specialize in building modern, responsive web applications using technologies like React, Tailwind CSS, and Next.js.
        </p>
      </div>

      <div className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-light mb-4">Work Timeline</h2>
        {[
          ["MERN Stack Development Trainee", "Programming Hero", "2024 (6-Month Course)"],
          ["Frontend Projects & Practice", "Self-Learning", "2018–2025"],
          ["UI/UX Design Practice", "Self-Learning", "2018–2024"],
        ].map(([title, org, year], idx) => (
          <div key={idx} className="grid sm:grid-cols-3 gap-4 border-b border-gray-600 py-2">
            <div className="font-medium">{title}</div>
            <div className="text-gray-400">{org}</div>
            <div className="text-gray-400">{year}</div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-light mb-4">Skills</h2>
        <div className="overflow-x-auto whitespace-nowrap py-6">
          <div className="flex space-x-6 animate-scroll-horizontal">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[160px] h-48 bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition"
              >
                <div className="mb-4">{skill.icon}</div>
                <div className="text-lg font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`@keyframes scroll-horizontal { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-scroll-horizontal { animation: scroll-horizontal 30s linear infinite; }`}
        </style>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-2xl font-light mb-4">Services</h2>
        {[
          ["UI & UX Design", "Creating user-centered interfaces with responsive design."],
          ["Frontend Development", "Building fast, responsive UIs using React and Tailwind."],
          ["MERN Stack Development", "Full-stack development with MongoDB, Express, React, Node."],
        ].map(([title, desc], idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-medium border-b border-gray-600">{title}</h3>
            <p className="text-gray-300 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
