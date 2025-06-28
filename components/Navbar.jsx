// // import React, { useState, useEffect } from "react";
// // import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// // const Navbar = () => {
// //   const [darkMode, setDarkMode] = useState(() => {
// //     const saved = localStorage.getItem("darkMode");
// //     return saved ? JSON.parse(saved) : true;
// //   });

// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     localStorage.setItem("darkMode", JSON.stringify(darkMode));
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //   }, [darkMode]);

// //   return (
// //     <>
// //       <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
// //         {/* Logo */}
// //         <div className="text-white font-bold text-xl">Mehedi</div>

// //         {/* Controls */}
// //         <div className="flex items-center space-x-4">
// //           {/* Dark Mode Toggle */}
// //           <button
// //             onClick={() => setDarkMode(!darkMode)}
// //             className="text-white text-xl"
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //           </button>

// //           {/* Hamburger Menu */}
// //           <button
// //             onClick={() => setMenuOpen(true)}
// //             className="text-white text-2xl"
// //           >
// //             <FaBars />
// //           </button>
// //         </div>
// //       </header>

// //       {/* Overlay Menu */}
// //       {menuOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
// //           <button
// //             onClick={() => setMenuOpen(false)}
// //             className="absolute top-6 right-6 text-2xl"
// //           >
// //             <FaTimes />
// //           </button>
// //           <a href="#home" onClick={() => setMenuOpen(false)}>
// //             Home
// //           </a>
// //           <a href="#portfolio" onClick={() => setMenuOpen(false)}>
// //             Portfolio
// //           </a>
// //           <a href="#contact" onClick={() => setMenuOpen(false)}>
// //             Contact
// //           </a>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = React.useState(false);

//   return (
//     <>
//       <header className="bg-base-200 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//         <div className="text-xl font-bold text-white">Mehedi</div>
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-white text-xl transition"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-white text-2xl"
//           >
//             <FaBars />
//           </button>
//           <input type="checkbox" value="nord" className="toggle theme-controller" />
//         </div>
//       </header>

//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-6 text-2xl"
//           >
//             <FaTimes />
//           </button>
//           <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
//           <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
//           <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "nord");

  // Apply theme on load and when changed
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "nord" ? "abyss" : "nord"));
  };

  return (
    <>
      <header className="bg-base-200 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-base-content">Mehedi</div>

        <div className="flex items-center gap-4">
          {/* DaisyUI theme toggle (manual version with icons) */}
          <button onClick={toggleTheme} className="text-xl text-base-content transition">
            {theme === "nord" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-base-content"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
        // <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
        //   <button
        //     onClick={() => setMenuOpen(false)}
        //     className="absolute top-6 right-6 text-2xl"
        //   >
        //     <FaTimes />
        //   </button>
        //   <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        //   <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        //   <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        // </div>
      
      <div
  className="fixed inset-0 bg-base-900 bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-12 text-base-content px-6 sm:px-12"
  role="dialog"
  aria-modal="true"
  aria-label="Mobile menu"
>
  <button
    onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-4xl text-base-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
    aria-label="Close menu"
  >
    <FaTimes />
  </button>
  <a
    href="#home"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Home
  </a>
  <a
    href="#about"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    About Me
  </a>
  <a
    href="#portfolio"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Portfolio
  </a>
  <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="block font-extrabold text-4xl hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded"
  >
    Contact
  </a>
</div>

      )}
    </>
  );
};

export default Navbar;
