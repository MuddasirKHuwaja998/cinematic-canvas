import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 bg-cream">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="eyebrow mb-7">Contatti</div>
          <h2 className="display-md">
            Prenota il tuo <em>test gratuito</em> oggi.
          </h2>
          <p className="lead mt-7">
            Chiamaci o scrivici — l'audioprotesista viene direttamente da te per una valutazione completa, senza alcun impegno.
          </p>
          <a href="tel:+39081287408" className="btn btn-dark mt-10">
            Chiama 081 287408 <span className="arr">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div className="glass rounded-3xl p-2">
            <div className="rounded-[1.4rem] bg-white/50 divide-y divide-[var(--line)]">
              {[
                ["Sede Principale", <>Viale Antonio Gramsci 17/B<br />80122 Napoli (NA), Italia</>, null],
                ["Sede Operativa", <>Via Ripuaria 50<br />Varcaturo — Giugliano in Campania</>, null],
                ["Telefono", <>081 287408</>, "tel:+39081287408"],
                ["Email", <>info@maxoto.it</>, "mailto:info@maxoto.it"],
              ].map(([lab, val, href], i) => (
                <div key={i} className="flex items-center justify-between gap-6 px-7 py-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink-mute">{lab}</div>
                  {href ? (
                    <a href={href as string} className="text-right font-serif text-xl text-ink hover:text-gold-deep transition-colors">{val}</a>
                  ) : (
                    <div className="text-right text-ink-soft text-sm leading-relaxed">{val}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
