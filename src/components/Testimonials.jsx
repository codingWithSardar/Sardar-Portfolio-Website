export default function Testimonials() {
  const testimonials = [
   {
  quote:
    "Sardar understood what we needed pretty quickly. The website made our shop look much more professional, and he was easy to communicate with throughout the project.",
  name: "Hamza Khan",
  role: "Owner, Khan Mobile & Accessories — Islamabad",
},
{
  quote:
    "We wanted something simple that customers could check on their phones. Sardar kept the process straightforward and delivered a clean website that matched our business really well.",
  name: "Usman Ali",
  role: "Owner, Al-Rehman Boutique — Rawalpindi",
},
  ];

  return (
    <section className="bg-neutral-950 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&display=swap');
        .heading-font { font-family: 'Fraunces', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-neutral-400 text-sm mb-4">Testimonials</p>
        <h2 className="heading-font text-4xl text-neutral-100 mb-16 max-w-lg">
          What people say after working with me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="text-neutral-300 leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-amber-500/40" />
                <div>
                  <p className="text-neutral-100 text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}