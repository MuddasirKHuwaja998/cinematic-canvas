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
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-32 lg:pt-36 pb-24 overflow-hidden">
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

      <motion.div style={{ opacity }} className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT — content (preserved) */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="eyebrow mb-8"
          >
            Otocostruzioni · Made in Italy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="font-serif font-light tracking-[-0.035em] leading-[0.95] text-ink text-[clamp(2.4rem,6.2vw,5.6rem)]"
          >
            <span className="block">Amplificatori <span className="italic text-gold-deep">acustici.</span></span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="lead mt-7"
          >
            Produciamo <strong className="text-ink font-semibold">amplificatori acustici professionali</strong>, direttamente dal <strong className="text-ink font-semibold">costruttore al rivenditore</strong> — solo <strong className="text-ink font-semibold">qualità italiana</strong>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("maxoto:open-test"))}
              className="btn btn-gold"
            >
              Prenota Test Gratuito <span className="arr">→</span>
            </button>
            <a href="#products" className="btn btn-outline">Scopri i Prodotti</a>
          </motion.div>
        </div>

        {/* RIGHT — bigger cinematic image + badge + stats */}
        <motion.div style={{ y, scale, rotate: rot }} className="lg:col-span-6 relative">
          {/* Welcome cinematic strip above image */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="mb-4 flex items-center gap-3 justify-end pr-2"
          >
            <span className="h-px w-10 bg-gold-deep/60" />
            <span className="font-serif italic text-gold-deep text-sm tracking-[0.35em] uppercase overflow-hidden">
              {"Benvenuto".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <span className="waveform" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease, delay: 0.4 }}
            className="relative aspect-[4/3] lg:aspect-[5/4] float-slow"
          >
            <div className="absolute inset-[-10%] rounded-[3rem] bg-gradient-to-br from-gold-soft/45 via-transparent to-gold/30 blur-3xl" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.6),_transparent_65%)]" />
            <img
              src={hero}
              alt="MAXOTO — apparecchi acustici e amplificatori"
              className="relative w-full h-full object-contain drop-shadow-[0_70px_90px_rgba(58,64,73,0.32)] scale-[1.08]"
            />
          </motion.div>

          {/* Badge below image — same design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.4 }}
            className="mt-6 flex justify-center"
          >
            <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
              <span className="pulse-dot" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-ink">CE 0051 · Made in Napoli</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats — single row, full width below the grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease }}
        className="container-x relative mt-14 lg:mt-20"
      >
        <div className="grid grid-cols-2 gap-6 sm:gap-12 border-t border-[var(--line)] pt-8 max-w-3xl mx-auto">
          {[
            ["9M+", "Italiani con ipoacusia"],
            ["2 Anni", "Garanzia inclusa"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink leading-none">{n}</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-ink-mute mt-2 sm:mt-3">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* scroll hint */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center gap-2 text-ink-mute hidden lg:flex">
        <div className="text-[10px] tracking-[0.3em] uppercase">Scroll</div>
        <div className="scroll-hint relative w-[18px] h-[28px] border border-[var(--line)] rounded-full" />
      </div>
    </section>
  );
}
