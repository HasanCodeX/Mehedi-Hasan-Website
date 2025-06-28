// import React, { useState, useEffect } from "react";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const saved = localStorage.getItem("darkMode");
//     return saved ? JSON.parse(saved) : true;
//   });

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <>
//       <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="text-white font-bold text-xl">Mehedi</div>

//         {/* Controls */}
//         <div className="flex items-center space-x-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-white text-xl"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Hamburger Menu */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-white text-2xl"
//           >
//             <FaBars />
//           </button>
//         </div>
//       </header>

//       {/* Overlay Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-6 text-2xl"
//           >
//             <FaTimes />
//           </button>
//           <a href="#home" onClick={() => setMenuOpen(false)}>
//             Home
//           </a>
//           <a href="#portfolio" onClick={() => setMenuOpen(false)}>
//             Portfolio
//           </a>
//           <a href="#contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </a>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-white">Mehedi</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-xl transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            <FaTimes />
          </button>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
