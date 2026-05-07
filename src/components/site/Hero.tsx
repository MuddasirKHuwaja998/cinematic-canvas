import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/max/hero.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-32 lg:pt-40 pb-24 overflow-hidden">
      {/* ambient glows */}
      <div className="glow-gold w-[70vw] h-[70vw] -top-[25vw] -right-[25vw] opacity-70" />
      <div className="glow-gold w-[45vw] h-[45vw] top-[45vh] -left-[18vw] opacity-40" />

      {/* drifting dots */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {[8, 22, 38, 55, 72, 88, 15, 65].map((l, i) => (
          <span
            key={i}
            className="drift-dot"
            style={{ left: `${l}%`, animationDelay: `${i * 1.6}s`, animationDuration: `${12 + (i % 4) * 2}s` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="container-x relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="eyebrow mb-8"
          >
            Otocostruzioni · Napoli, Italia
          </motion.div>

          {/* MAXOTO — display name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="mb-6 flex items-end gap-5"
          >
            <h1 className="font-serif font-light tracking-[-0.04em] leading-[0.85] text-ink text-[clamp(4rem,14vw,11rem)]">
              {"MAXOTO".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.07 }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 1.1 }}
              className="waveform waveform-lg pb-3"
              aria-hidden
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} style={{ animationDelay: `${i * 0.12}s`, animationDuration: `${1.2 + (i % 3) * 0.25}s` }} />
              ))}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="font-serif italic text-2xl md:text-3xl text-gold-deep mt-2"
          >
            Amplificatori &amp; Protesi Acustiche.
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="lead mt-8"
          >
            Produciamo protesi acustiche digitali certificate <em>CE0051</em>. Senza intermediari, senza costi nascosti — solo qualità italiana al prezzo sociale di <em>€ 950</em>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn btn-gold">Prenota Test Gratuito <span className="arr">→</span></a>
            <a href="#products" className="btn btn-outline">Scopri i Prodotti</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="mt-14 flex flex-wrap gap-x-12 gap-y-6"
          >
            {[
              ["9M+", "Italiani con ipoacusia"],
              ["CE 0051", "Certificazione"],
              ["2 Anni", "Garanzia inclusa"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col">
                <div className="font-serif text-3xl text-ink">{n}</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-ink-mute mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y, scale, rotate: rot }} className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease, delay: 0.4 }}
            className="relative aspect-[4/3] float-slow"
          >
            <div className="absolute inset-[-8%] rounded-[3rem] bg-gradient-to-br from-gold-soft/40 via-transparent to-gold/25 blur-3xl" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.55),_transparent_65%)]" />
            <img
              src={hero}
              alt="MAXOTO — apparecchi acustici e amplificatori"
              className="relative w-full h-full object-contain drop-shadow-[0_60px_80px_rgba(58,64,73,0.28)]"
            />
            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.6 }}
              className="absolute -left-2 bottom-6 md:bottom-10 glass rounded-full px-5 py-3 flex items-center gap-3"
            >
              <span className="pulse-dot" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-ink">CE 0051 · Made in Napoli</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3 text-ink-mute">
        <div className="text-[10px] tracking-[0.3em] uppercase">Scroll</div>
        <div className="scroll-hint relative w-[18px] h-[28px] border border-[var(--line)] rounded-full" />
      </div>
    </section>
  );
}
