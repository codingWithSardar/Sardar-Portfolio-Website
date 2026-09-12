import { Code2, Server, Database, Terminal } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      icon: Code2,
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Node.js", "Express", "Next.js"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["MongoDB"],
    },
    {
      title: "Languages",
      icon: Terminal,
      items: ["Python", "JavaScript"],
    },
  ];

  return (
    <section id="skills" className="bg-neutral-950 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-neutral-400 text-sm mb-4">Skills</p>
        <h2 className="heading-font text-4xl text-neutral-100 mb-16 max-w-lg">
          Tools I reach for when building something real
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
            >
              <group.icon className="text-amber-500 mb-4" size={28} />
              <h3 className="text-neutral-100 text-lg mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-neutral-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}