import { Code2, Smartphone, Zap, Layers, Sparkles } from "lucide-react";

export default function WhyWorkWithMe() {
  const points = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Readable, well-structured code that's easy to maintain and extend.",
    },
    {
      icon: Smartphone,
      title: "Responsive UI",
      description: "Interfaces that work smoothly across mobile, tablet, and desktop.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast load times and optimized rendering, not just working features.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Systems designed to grow without needing a rewrite later.",
    },
    {
      icon: Sparkles,
      title: "Modern Technologies",
      description: "Built with the current MERN stack, Next.js, and Python where it fits.",
    },
  ];

  return (
    <section className="bg-neutral-950 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-neutral-400 text-sm mb-4">Why Work With Me</p>
        <h2 className="heading-font text-4xl text-neutral-100 mb-16 max-w-lg">
          What you actually get when we work together
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
            >
              <point.icon className="text-amber-500 mb-4" size={26} />
              <h3 className="text-neutral-100 text-base mb-2">{point.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}