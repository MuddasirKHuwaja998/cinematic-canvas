import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Pricing() {
  const items = [
    ["01", "Test Gratuito", "Audiometria completa con audioprotesista qualificato."],
    ["02", "Garanzia 2 Anni", "Copertura completa su difetti e usura ordinaria."],
    ["03", "Assistenza Rapida", "Problemi con i nostri prodotti? Contattaci e penseremo noi al resto."],
  ];

  return (
    <section id="pricing" className="relative py-32 lg:py-44 bg-cream">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 max-w-5xl mx-auto"
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
