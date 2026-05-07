import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import corner from "@/assets/max/corner.png";

export function Partner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="partner" ref={ref} className="relative py-32 lg:py-44 bg-paper overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <motion.div style={{ y }} className="lg:col-span-6 relative order-2 lg:order-1">
          <div className="absolute inset-0 -m-10 rounded-[3rem] bg-gradient-to-br from-gold-soft/30 via-transparent to-gold/20 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--line)] shadow-[0_60px_120px_-60px_rgba(58,64,73,0.5)]">
            <img src={corner} alt="Diventa partner M.A.X.Oto" className="w-full h-auto" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 order-1 lg:order-2"
        >
          <div className="eyebrow mb-7">Diventa Partner</div>
          <h2 className="display-md">
            Crea il tuo corner <em>insieme a noi</em>.
          </h2>
          <p className="lead mt-7">
            Vendi i nostri Amplificatori Acustici professionali nel tuo punto vendita. Direttamente dal produttore, senza intermediari, con la qualità Made in Napoli e il supporto tecnico continuo di M.A.X.Oto.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              ["i", "Vendita diretta produttore, margini su misura."],
              ["ii", "Formazione tecnica gratuita per il tuo team."],
              ["iii", "Materiali POS e supporto marketing dedicato."],
              ["iv", "Assistenza continua e ricambi rapidi."],
            ].map(([n, t]) => (
              <li key={n} className="flex items-start gap-5">
                <span className="font-serif italic text-gold-deep text-sm w-6 flex-shrink-0 pt-1">{n}.</span>
                <span className="text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-gold">Diventa Partner <span className="arr">→</span></a>
            <a href="tel:+39081287408" className="btn btn-outline">Chiama 081 287408</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
