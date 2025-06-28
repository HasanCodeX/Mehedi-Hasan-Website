import React from "react";



// Typewriter effect logic
const phrases = [
  "I craft stunning UIs with React & Tailwind",
  "I build modern web applications",
  "I develop responsive and beautiful websites",
];

const Typewriter = () => {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];

      if (!deleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setDeleting(true);
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
      {text}
      <span className="border-r-2 border-white animate-pulse ml-1"></span>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <div className="min-h-screen dark:bg-black bg-white pl-24">
      {/* Top Navigation */}
     

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-10">
        {/* Left Section */}
        <div className="flex-1 text-white space-y-8">
          {/* Introduction */}
          <p className="text-xl font-light font-serif">Hi, I’m</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight">
            Mehedi Hasan
          </h1>

          <Typewriter />

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md font-light">
            A passionate Frontend Developer based in Bangladesh, I specialize in
            crafting modern, responsive web experiences using technologies like
            React, Tailwind CSS, and Next.js.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              My Resume
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/502503803_683905464271639_2523339238655852757_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEqal1A3nHOpHg-kIVak9xrQcfF5Z6gxT9Bx8XlnqDFP9XPnmrXCEK73LAa0_eqjaXJWgT7WMnspN-L1EvEErzt&_nc_ohc=D-5JV_lWcfkQ7kNvwG1xokD&_nc_oc=Adm8gbesfcy14OUsVStwdCrD0CUx7D-4zFx-o7YfjS_rXZjCALTrnlAOxmXzzoPupmo&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=Ufkh36o5lF1iZyjs-jmdhg&oh=00_AfOQWHoI7b6kWh8ygWVRL9kI4J51QVEQNd1B0vK3Plgi0g&oe=68652FEE"
            alt="Mehedi Hasan"
            className="rounded-lg w-80 h-auto shadow-lg object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
