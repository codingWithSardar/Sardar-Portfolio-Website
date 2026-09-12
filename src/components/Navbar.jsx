import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .logo-font { font-family: 'Fraunces', serif; }
      `}</style>

      <header className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="logo-font text-xl text-neutral-100">
            Sardar<span className="text-amber-500">.</span>
          </NavLink>

          <nav className="hidden md:flex items-center bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-full p-1.5">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm px-5 py-2 rounded-full transition-colors ${
                    isActive
                      ? "bg-amber-500 text-neutral-950"
                      : "text-neutral-300 hover:text-neutral-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="hidden md:inline-flex items-center border border-neutral-700 text-neutral-200 text-sm px-5 py-2 rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            Let's talk
          </NavLink>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-neutral-200 bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-full p-2.5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden max-w-5xl mx-auto mt-3 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-amber-500 text-neutral-950"
                      : "text-neutral-300 hover:bg-neutral-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}