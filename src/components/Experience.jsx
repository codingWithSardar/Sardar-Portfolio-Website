import { GraduationCap, Laptop, Code2 } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      type: "Education",
      icon: GraduationCap,
      title: "BS Software Engineering",
      place: "IQRA Universty Islamabad",
      period: "Final Year — Graduating 2027",
      description: "Studying software engineering while working as an independent developer on the side.",
    },
    {
      type: "Freelance",
      icon: Laptop,
      title: "Independent Full-Stack Developer",
      place: "Self-employed",
      period: "1.5+ years",
      description:
        "Solo developer building complete websites for clients — clothing e-commerce store, mobile shop website, restaurant website, and dentist website, all built and delivered end to end.",
    },
    {
      type: "Projects",
      icon: Code2,
      title: "AI Customer Support",
      place: "Personal Project",
      period: "In Progress",
      description:
        "Support assistant with authentication, RAG-based document search, and file uploads via Cloudinary and Multer.",
    },
  ];

  return (
    <main className="bg-neutral-950 min-h-screen pt-40 pb-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="text-neutral-400 text-sm mb-4">Journey</p>
        <h1 className="heading-font text-4xl text-neutral-100 mb-16">
          Where I've been and what I've built
        </h1>

        <div className="relative border-l border-neutral-800 pl-8 flex flex-col gap-12">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-neutral-900 border border-amber-500/50 flex items-center justify-center">
                <item.icon size={14} className="text-amber-500" />
              </div>
              <p className="text-amber-500 text-xs mb-2">{item.type}</p>
              <h3 className="text-neutral-100 text-lg mb-1">{item.title}</h3>
              <p className="text-neutral-500 text-sm mb-3">
                {item.place} · {item.period}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}