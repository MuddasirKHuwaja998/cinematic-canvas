import { motion, type Variants } from "framer-motion";

const fade: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

export function About() {
  const stats = [
    ["9", "M+", "Italiani", "con ipoacusia"],
    ["€", "950", "Prezzo sociale", "tutto incluso"],
    ["CE", "0051", "Certificazione", "Made in Italy"],
    ["2", "Anni", "Garanzia", "inclusa nel prezzo"],
  ];

  return (
    <section id="about" className="relative py-32 lg:py-44">
      <div className="glow-gold w-[40vw] h-[40vw] top-[10%] -right-[15vw] opacity-30" />

      <div className="container-x grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="lg:col-span-6 lg:sticky lg:top-32"
        >
          <div className="eyebrow mb-8">Chi Siamo</div>
          <h2 className="display-md">
            Otocostruzioni dal <em>cuore di Napoli.</em>
          </h2>
          <p className="lead mt-8">
            Nati a Napoli come produttori diretti, in M.A.X.Oto abbattiamo le barriere dell'udito eliminando ogni intermediario. Oggi operiamo su scala nazionale offrendo, oltre ai dispositivi digitali su misura, una nuova gamma di Amplificatori Acustici professionali.
          </p>
          <p className="lead mt-5">
            Ideali per difficoltà lievi o temporanee, questi supporti sono immediati, semplici da usare e non richiedono prescrizione medica, mantenendo gli standard tecnici che ci distinguono da anni.
          </p>
          <div className="mt-10 font-serif italic text-2xl text-gold-deep">
            Italian craftsmanship, oggi.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
        >
          {stats.map(([sym, num, lab, desc], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-serif text-5xl text-ink leading-none flex items-baseline gap-1">
                <span className="text-gold-deep italic text-3xl">{sym}</span>
                <span>{num}</span>
              </div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink mt-5 font-medium">{lab}</div>
              <div className="text-sm text-ink-mute mt-1.5">{desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
