import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import WhyWorkWithMe from "../components/WhyWorkWithMe";
import { assets } from "../assets/assets";

export default function About() {

  const stats = [
    { label: "Years of experience", value: "1.5+" },
    { label: "Client projects delivered", value: "2" },
    { label: "Working as", value: "Solo Developer" },
    { label: "Graduating", value: "2027" },
  ];

  return (
    <main className="bg-neutral-950 min-h-screen pt-40 pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative w-72 h-72 md:w-full md:h-96 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl -translate-x-4 -translate-y-4" />
            <img
              src = {assets.about}
              alt="Sardar Abdullah Abid"
              className="relative w-full h-full object-cover rounded-2xl  shadow-2xl  transition-all duration-500"
            />
          </div>

          <div>
            <p className="text-neutral-400 text-sm mb-4">About Me</p>
            <h1 className="heading-font text-4xl text-neutral-100 mb-6">
              Building things that work, not just things that ship
            </h1>
            <p className="text-neutral-400 leading-relaxed mb-5">
              I'm Sardar Abdullah Abid, a solo full-stack developer working
              across the MERN stack and Python. I care more about how a
              system is put together than how fast I can push out a feature
              — clean data flow, sensible architecture, and code someone
              else can actually read.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I'm currently in my final year of a Software Engineering
              degree, graduating in 2027, while working independently as a
              developer — no company, just me, delivering real projects for
              real clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-y border-neutral-800 py-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="heading-font text-2xl md:text-3xl text-amber-500 mb-1">
                {stat.value}
              </p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="">
       <Skills/>
        </div>

       <div>
        <WhyWorkWithMe/>
       </div>

        <div className="border border-neutral-800 rounded-2xl p-12 text-center">
          <h2 className="heading-font text-3xl text-neutral-100 mb-4">
            Want to see the full journey?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Education, freelance work, and projects — laid out on one timeline.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center bg-amber-500 text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
          >
            View My Work
          </Link>
        </div>
      </div>
    </main>
  );
}