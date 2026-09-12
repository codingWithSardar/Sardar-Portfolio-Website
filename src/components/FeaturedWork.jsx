import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      name: "Ecommerce Shopping Clothes Website",
      description:
        "A full-stack clothing e-commerce platform built with the MERN stack, featuring a modern shopping experience with product browsing, search and filtering, user authentication, wishlist, shopping cart, checkout, and order management. The project also includes a complete admin panel for managing products, categories, inventory, customers, and orders.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      live: "https://nova-6nmaxkjzf-sardar-abdullahs-projects.vercel.app/",
    },
    {
      name: "Ecommerce Mobile Shop Website",
      description:
        "A full-stack mobile phone e-commerce platform built with the MERN stack, featuring product browsing, search and filtering, user authentication, shopping cart, checkout, and order management. The project also includes a complete admin panel for managing products, customers, orders, inventory, and store operations.",
      tags: ["React", "Node.js", "Tailwind CSS", "MongoDB" , "Express"],
      live: "https://mobile-shop-site-henna.vercel.app/",
    },
  ];

  return (
    <section className="bg-neutral-950 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-neutral-400 text-sm mb-4">Featured Work</p>
            <h2 className="heading-font text-4xl text-neutral-100 max-w-lg">
              A couple of things I've shipped
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-amber-500 transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-colors"
            >
              <h3 className="heading-font text-2xl text-neutral-100 mb-3">
                {project.name}
              </h3>
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
              <a
                href={project.live}
                className="inline-flex items-center gap-1 text-sm text-neutral-200 hover:text-amber-500 transition-colors"
              >
                Live Demo <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <Link
          to="/projects"
          className="md:hidden mt-10 inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-amber-500 transition-colors"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
