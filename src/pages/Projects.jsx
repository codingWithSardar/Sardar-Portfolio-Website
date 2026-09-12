import { Link } from "react-router-dom";
import { ArrowUpRight, Search, PenTool, Code2, Rocket } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Clothing E-Commerce Store",
      description:
        "Online shopping website for a clothing brand with product listings, cart, and checkout flow.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      status: "Completed",
      live: "https://nova-6nmaxkjzf-sardar-abdullahs-projects.vercel.app/",
    },
    {
      name: "Mobile Shop Website",
      description:
        "E-commerce site for a mobile phone store with product browsing and order management.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      status: "Completed",
      live: "https://mobile-shop-site-henna.vercel.app/",
    },
    {
      name: "Restaurant Website",
      description:
        "A modern and responsive restaurant website UI built with React and Tailwind CSS. Features a clean design, attractive food sections, and a smooth user experience. Frontend-only static project.",
      tags: ["React", "Tailwind CSS"],
      status: "Completed",
      live: "https://food-delivery-app-wine-gamma.vercel.app/",
    },
    {
      name: "Dentist Website",
      description:
        "A full-stack dental clinic website built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Tailwind CSS. Features a modern, responsive UI, appointment booking, and backend integration for managing dental clinic services and patient data.",
      tags: ["React", "Tailwind CSS" , "Node.js", "Express", "MongoDB"],
      status: "Completed",
      live: "https://dental-spark.vercel.app/",
    },
    {
      name: "AI Customer Support",
      description:
        "Support assistant with authentication, RAG-based document search, and file uploads via Cloudinary and Multer.",
      tags: ["React", "Node.js", "RAG", "Tailwind CSS" , "Express" , "MongoDB" , "FireBase" ],
      status: "In Progress",
      live: "#",
    },
  ];

  const process = [
    {
      icon: Search,
      title: "Understand",
      description: "Get clear on what the site needs to do and who it's for.",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Plan the structure and look before writing any code.",
    },
    {
      icon: Code2,
      title: "Build",
      description:
        "Develop with clean, scalable code — MERN stack or the right tools for the job.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "Test, polish, and ship — with support after launch too.",
    },
  ];

  return (
    <main className="bg-neutral-950 min-h-screen pt-40 pb-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-neutral-400 text-sm mb-4">Work</p>
        <h1 className="heading-font text-5xl text-neutral-100 mb-6 max-w-lg">
          Projects I've actually built end to end
        </h1>
        <p className="text-neutral-400 max-w-md mb-20">
          A mix of client websites and personal projects, built solo from start
          to finish.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-28">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="heading-font text-2xl text-neutral-100">
                    {project.name}
                  </h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      project.status === "Completed"
                        ? "border-amber-500/40 text-amber-500"
                        : "border-neutral-700 text-neutral-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-neutral-400 border border-neutral-700 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.live}
                className="inline-flex items-center gap-1 text-sm text-neutral-200 hover:text-amber-500 transition-colors w-fit"
              >
                Live Demo <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mb-28">
          <p className="text-neutral-400 text-sm mb-4">How I Work</p>
          <h2 className="heading-font text-3xl text-neutral-100 mb-12 max-w-lg">
            A simple process, from first message to launch
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div
                key={step.title}
                className="border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
              >
                <step.icon className="text-amber-500 mb-4" size={26} />
                <h3 className="text-neutral-100 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-neutral-800 rounded-2xl p-12 text-center">
          <h2 className="heading-font text-3xl text-neutral-100 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Let's talk about what you're building and how I can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-amber-500 text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-400 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
