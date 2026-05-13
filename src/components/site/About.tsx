import { motion, type Variants } from "framer-motion";

const fade: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

import collage from "@/assets/max/collage1.png";

export function About() {
  const stats = [
    ["9", "M+", "Italiani", "con ipoacusia"],
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
            Otocostruzioni <em>Made in Italy.</em>
          </h2>
          <p className="lead mt-8">
            Nati a <strong className="text-ink font-semibold">Napoli</strong> inizialmente come costruttori di protesi acustiche, in M.A.X.OTO abbattiamo le barriere dell'udito eliminando ogni intermediario. Da oggi operiamo su <strong className="text-ink font-semibold">scala nazionale</strong> offrendo nuove soluzioni.
          </p>
          <p className="lead mt-5">
            Offrendo una nuova gamma di <strong className="text-ink font-semibold">amplificatori acustici professionali</strong>, ideali per <strong className="text-ink font-semibold">difficoltà lievi o temporanee</strong>. Questi supporti sono semplici da usare e <strong className="text-ink font-semibold">non richiedono nessuna prescrizione medica</strong>, mantenendo gli standard tecnici che ci distinguono da anni.
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
          className="lg:col-span-6 grid grid-cols-2 gap-5"
        >
          {stats.map(([sym, num, lab, desc], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-serif text-4xl sm:text-5xl text-ink leading-none flex items-baseline gap-1">
                <span className="text-gold-deep italic text-2xl sm:text-3xl">{sym}</span>
                <span>{num}</span>
              </div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink mt-5 font-medium">{lab}</div>
              <div className="text-sm text-ink-mute mt-1.5">{desc}</div>
            </motion.div>
          ))}

          <motion.div
            variants={fade}
            className="col-span-2 relative rounded-3xl overflow-hidden aspect-[16/10] shadow-[0_40px_80px_-40px_rgba(58,64,73,0.35)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-soft/40 via-transparent to-gold/20" />
            <img
              src={collage}
              alt="M.A.X.OTO — laboratorio Made in Italy"
              className="relative w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-5 left-6 text-white text-[11px] tracking-[0.28em] uppercase font-bold">
              — Laboratorio M.A.X.OTO
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
