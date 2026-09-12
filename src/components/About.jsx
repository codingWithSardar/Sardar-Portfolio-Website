import { assets } from "../assets/assets";

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-72 h-72 md:w-full md:h-96 mx-auto md:mx-0">
          <div className="absolute inset-0 border border-amber-500/40 rounded-2xl -translate-x-4 -translate-y-4" />
          <img
            src={assets.about}
            alt="Sardar Abdullah Abid"
            className="relative w-full h-full object-cover rounded-2xl  shadow-2xl  transition-all duration-500"
          />
        </div>

        <div>
          <p className="text-neutral-400 text-sm mb-4">About Me</p>
          <h2 className="heading-font text-4xl text-neutral-100 mb-6">
            Building things that work, not just things that ship
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-5">
            I'm a full-stack developer working across the MERN stack and
            Python. I care more about how a system is put together than how
            fast I can push out a feature — clean data flow, sensible
            architecture, and code someone else can actually read.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-10">
            Right now I'm deep in system design and problem-solving,
            building real projects like an AI-powered expense tracker rather
            than tutorial clones.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-amber-500 text-2xl heading-font">10+</p>
              <p className="text-neutral-500 text-sm">Technologies used</p>
            </div>
            <div>
              <p className="text-amber-500 text-2xl heading-font">MERN</p>
              <p className="text-neutral-500 text-sm">Primary stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}