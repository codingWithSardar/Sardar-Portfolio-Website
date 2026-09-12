import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .logo-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="logo-font text-lg text-neutral-100">
          Sardar<span className="text-amber-500">.</span>
        </p>

        <div className="flex items-center gap-6">
          <Link
            to="https://github.com/codingWithSardar"
            className="text-neutral-400 hover:text-amber-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/sardar-abdullah-00a381388/"
            className="text-neutral-400 hover:text-amber-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </Link>
          <a
            href="mailto:sardarabdullahabid621@gmail.com"
            className="text-neutral-400 hover:text-amber-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Sardar Abdullah Abid
          </p>
          <button
            onClick={scrollToTop}
            className="text-neutral-400 hover:text-amber-500 border border-neutral-800 hover:border-amber-500 rounded-full p-2 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
