import React from "react";

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
      const current = phrases[phraseIndex];
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, charIndex - 1));
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
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
      {text}
      <span className="border-r-2 border-current animate-pulse ml-1"></span>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <div className="pl-24 min-h-screen px-6 py-10 bg-base-100 text-base-content">
      <main className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-1 space-y-8">
          <p className="text-xl font-light font-serif">Hi, I’m</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif">Mehedi Hasan</h1>
          <Typewriter />
          <p className="text-base sm:text-lg font-light max-w-md">
            A passionate Frontend Developer based in Bangladesh, I specialize in React, Tailwind CSS, and Next.js.
          </p>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1YrK5nvx-qERTaq32aIWT7-tJgtfnHLRe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              My Resume
            </a>
            <a
              href="/contact"
              className="btn btn-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://i.ibb.co/KppYRxsz/profile-recize.jpg"
            alt="Mehedi Hasan"
            className="rounded-xl w-80 h-auto object-cover shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
