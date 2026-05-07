import { motion } from "framer-motion";

export function QuoteBand() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(205,174,121,0.18),_transparent_70%)]" />
      <div className="glow-gold w-[50vw] h-[50vw] -top-1/4 left-1/4 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="container-x relative text-center max-w-4xl"
      >
        <svg className="mx-auto mb-10 opacity-50" width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2H4M19 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2h-1" stroke="#cdae79" strokeWidth="1" />
        </svg>
        <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] font-light">
          "L'udito è una <em className="not-italic shimmer-text">finestra sul mondo</em>. Restituirlo, con dignità e qualità italiana, è la nostra promessa quotidiana."
        </blockquote>
        <cite className="block mt-10 text-[11px] tracking-[0.3em] uppercase text-gold not-italic">
          — M.A.X.Oto Otocostruzioni
        </cite>
      </motion.div>
    </section>
  );
}
