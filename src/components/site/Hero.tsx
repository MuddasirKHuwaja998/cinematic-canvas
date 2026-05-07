import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/max/hero.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* ambient glows */}
      <div className="glow-gold w-[60vw] h-[60vw] -top-[20vw] -right-[20vw] opacity-70" />
      <div className="glow-gold w-[40vw] h-[40vw] top-[40vh] -left-[15vw] opacity-40" />

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
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="eyebrow mb-8"
          >
            Otocostruzioni · Napoli, Italia
          </motion.div>

          <h1 className="display">
            {["Amplificatori", "e", "Protesi", "Acustiche."].map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease, delay: 0.2 + i * 0.12 }}
                className="inline-block overflow-hidden mr-[0.25em]"
              >
                <span className={i >= 2 ? "italic text-gold-deep" : ""}>{w}</span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
            className="lead mt-8"
          >
            Produciamo protesi acustiche digitali certificate <em>CE0051</em>. Senza intermediari, senza costi nascosti — solo qualità italiana al prezzo sociale di <em>€ 950</em>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
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

        <motion.div style={{ y, scale }} className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease, delay: 0.3 }}
            className="relative aspect-square float-slow"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-soft/40 via-transparent to-gold/20 blur-2xl" />
            <img src={hero} alt="Amplificatori e apparecchi acustici M.A.X.Oto" className="relative w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(58,64,73,0.25)]" />
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
