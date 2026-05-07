import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Pricing() {
  const items = [
    ["01", "Test Gratuito", "Audiometria completa con audioprotesista qualificato."],
    ["02", "Garanzia 2 Anni", "Copertura completa su difetti e usura ordinaria."],
    ["03", "Assistenza Domiciliare", "Veniamo direttamente a casa tua, senza spostamenti."],
    ["04", "Pratica ASL", "Gestiamo la tua pratica per il rimborso ASL."],
  ];

  return (
    <section id="pricing" className="relative py-32 lg:py-44 bg-cream">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="eyebrow mb-7 justify-center">Tutto Incluso</div>
          <h2 className="display-md">
            Un pacchetto completo, <em>nessun costo nascosto.</em>
          </h2>
          <p className="lead mx-auto mt-7">
            Prezzo trasparente per il Maxoto AI-Sense — la qualità italiana, senza intermediari.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="my-16 lg:my-20 text-center relative"
        >
          <div className="glow-gold w-[40vw] h-[40vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
          <div className="relative font-serif text-[clamp(5rem,16vw,12rem)] leading-none tracking-tight">
            <span className="shimmer-text">€ 950</span>
          </div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-ink-mute mt-4">+ 4% IVA · Marcatura CE0051</div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {items.map(([n, title, desc]) => (
            <motion.div
              key={n}
              variants={item}
              className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-[var(--line)] hover:border-gold/40 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="font-serif text-gold-deep text-sm tracking-[0.3em] mb-6">{n}</div>
              <h4 className="font-serif text-2xl mb-3">{title}</h4>
              <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-1000" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
