import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Hero() {
 
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-neutral-950 pt-20 flex items-center"
    >
     
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
      
        <div
          className={`transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-neutral-400 text-sm mb-4">Hi, I'm</p>

          <h1 className="heading-font text-5xl md:text-6xl text-neutral-100 leading-tight mb-6">
            Sardar Abdullah Abid
          </h1>

          <p className="text-neutral-400 text-lg max-w-md mb-10 leading-relaxed">
            I build full-stack web applications with the MERN stack and
            Python — focused on clean architecture and solving real
            problems, not just writing code.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to={'/projects'}
              className="bg-amber-500 text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
            >
              View Work
            </Link>
            <a
              href="/my_resume.jpeg"
              className="border border-neutral-700 text-neutral-200 text-sm px-6 py-3 rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-150 flex justify-center md:justify-end ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
          
            <div className="absolute inset-0  rounded-2xl translate-x-4 translate-y-4" />

          
            <img
              src={assets.my}
              alt="Sardar Abdullah Abid"
              className="relative w-full h-full object-cover rounded-2xl border border-neutral-800 shadow-2xl grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}