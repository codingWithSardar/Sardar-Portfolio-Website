import { Mail, MapPin, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-40 pb-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');

        .heading-font {
          font-family: 'Fraunces', serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-28">
          <div>
            <p className="text-neutral-400 text-sm mb-4">Contact</p>

            <h1 className="heading-font text-5xl md:text-6xl text-neutral-100 leading-tight mb-6 max-w-xl">
              Let's build something worth talking about
            </h1>

            <p className="text-neutral-400 leading-relaxed max-w-lg mb-10">
              Have a website, web application, or idea you want to bring to
              life? Send me a message and let's talk about how I can help.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:hello@sardar.dev"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-11 h-11 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <Mail
                    size={18}
                    className="text-neutral-400 group-hover:text-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <p className="text-xs text-neutral-500 mb-1">Email</p>
                  <p className="text-sm text-neutral-200 group-hover:text-amber-500 transition-colors">
                   sardarabdullahabid621@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-800 flex items-center justify-center">
                  <MapPin size={18} className="text-neutral-400" />
                </div>

                <div>
                  <p className="text-xs text-neutral-500 mb-1">Location</p>
                  <p className="text-sm text-neutral-200">Rawalpindi , Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-neutral-800 flex items-center justify-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                </div>

                <div>
                  <p className="text-xs text-neutral-500 mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-neutral-200">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://github.com/codingWithSardar"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/sardar-abdullah-00a381388/"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>

          <div>
            <div className="border border-neutral-800 rounded-2xl p-7 md:p-9">
              <h2 className="heading-font text-3xl text-neutral-100 mb-2">
                Send a message
              </h2>

              <p className="text-neutral-500 text-sm mb-8">
                Tell me a little about your project.
              </p>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs text-neutral-400 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-2">
                    Project Type
                  </label>

                  <select
                    defaultValue=""
                    className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-400 outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option>Business Website</option>
                    <option>E-Commerce Website</option>
                    <option>Web Application</option>
                    <option>AI Integration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 text-neutral-950 text-sm font-medium px-6 py-3.5 rounded-full hover:bg-amber-400 transition-colors"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-neutral-500 text-sm mb-1">Prefer email?</p>

            <a
              href="mailto:sardarabdullahabid621@gmail.com"
              className="text-neutral-200 hover:text-amber-500 transition-colors text-sm"
            >
              sardarabdullahabid621@gmail.com
            </a>
          </div>

          <a
            href="mailto:hello@sardar.dev"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-500 transition-colors"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}