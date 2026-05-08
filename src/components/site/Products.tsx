import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import aiSense from "@/assets/max/ai-sense.png";
import cic from "@/assets/max/cic.png";
import ric from "@/assets/max/ric.png";

type Product = {
  category: string;
  badge?: string;
  name: string;
  poster: string;
  video: string;
  points: string[];
  note?: string;
};

const apparecchi: Product[] = [
  {
    category: "Apparecchio Acustico · Dispositivo Medico",
    badge: "CE 0051",
    name: "Maxoto AI-Sense",
    poster: aiSense,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/m3pp5mnm593uddjmunbau/Maxoto-AI-Sense.mp4?rlkey=e5kifif7yqn46abrps1triu7t&raw=1",
    points: ["Tecnologia digitale avanzata", "Garanzia 2 anni inclusa"],
  },
];

const amplificatori: Product[] = [
  {
    category: "Amplificatore · Supporto Acustico",
    name: "Amplimaxoto CIC",
    poster: cic,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/c6djfqjtngbnn37418vrd/Amplimaxoto-cic.mp4?rlkey=nfk2e8nw6t7vymm807o1a3kmz&raw=1",
    points: ["Discreto, intracanale", "Pronto all'uso, senza prescrizione"],
  },
  {
    category: "Amplificatore · Supporto Acustico",
    name: "Retro Micro One",
    poster: ric,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/1bubpc4fj2dp8qbifgeq5/Amplimaxoto-ric.mp4?rlkey=zsp6ulpzrosjpnfj6e2t2jdh5&raw=1",
    points: ["Ricaricabile, ultraleggero", "Comfort retroauricolare"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.1, ease } },
};

function ProductStoryCard({ p, index }: { p: Product; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative"
    >
      {/* Header: name + category */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <div className="chapter-num mb-3">— Modello {String(index + 1).padStart(2, "0")}</div>
          <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
            {p.name}
          </h3>
          <div className="mt-3 text-[12px] tracking-[0.22em] uppercase text-ink-mute">
            {p.category}
          </div>
        </div>
        {p.badge && (
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/5">
            <span className="pulse-dot" />
            <span className="text-[10px] tracking-[0.28em] uppercase text-gold-deep font-medium">
              {p.badge}
            </span>
          </div>
        )}
      </div>

      {/* Visual stage — compact, refined */}
      <div className="relative mx-auto w-full max-w-[420px] rounded-[1.75rem] overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#efe7d4] to-[#e6dcc4] aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(58,64,73,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45),_transparent_60%)]" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={p.poster}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
        >
          <source src={p.video} type="video/mp4" />
        </video>
        {/* corner number */}
        <div className="absolute top-5 left-5 font-serif italic text-white/90 text-xs tracking-[0.3em]">
          0{index + 1}
        </div>
        {/* golden waveform overlay */}
        <div className="absolute bottom-5 right-5 waveform" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </div>
      </div>

      {/* Footer: highlights */}
      <ul className="mt-7 space-y-2.5">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3 text-[15px] text-ink-soft">
            <span className="mt-[10px] w-4 h-px bg-gold-deep/70 shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function ChapterTitle({
  number,
  eyebrow,
  title,
  emphasis,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
}) {
  return (
    <div className="relative mb-20 lg:mb-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-5 mb-8">
            <span className="chapter-num">Capitolo {number}</span>
            <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-gold-deep/50 to-transparent" />
            <span className="waveform" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
              ))}
            </span>
          </div>
          <div className="eyebrow mb-6">{eyebrow}</div>
          <h2 className="display-xl">
            {title} <em className="block md:inline">{emphasis}</em>
          </h2>
          <p className="lead mt-8 max-w-2xl">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="products" ref={ref} className="relative bg-paper overflow-hidden">
      {/* Section opener */}
      <div className="relative pt-32 lg:pt-44 pb-10">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(205,174,121,0.10),_transparent_65%)]"
        />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease }}
            className="max-w-3xl"
          >
            <div className="eyebrow mb-7">I Nostri Prodotti</div>
            <h2 className="display-md">
              Due famiglie. <em>Una sola cura</em> per l'udito.
            </h2>
            <p className="lead mt-7">
              Una linea di <strong className="text-ink font-medium">apparecchi acustici medicali</strong> certificati
              CE0051 e una linea di <strong className="text-ink font-medium">amplificatori acustici</strong> pronti
              all'uso. Scegli in base al tuo bisogno, non al tuo budget.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CHAPTER I — Apparecchi Acustici (Medical) */}
      <div className="relative pt-24 lg:pt-32 pb-24 lg:pb-36">
        <ChapterTitle
          number="I"
          eyebrow="Dispositivi Medici · CE 0051"
          title="Apparecchi"
          emphasis="Acustici."
          description="Protesi acustiche digitali certificate, prescritte e adattate da audioprotesisti qualificati per la riabilitazione dell'ipoacusia. Tecnologia medicale italiana, su misura."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="container-x"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <ProductStoryCard p={apparecchi[0]} index={0} />
            </div>
            <motion.aside
              variants={fadeUp}
              className="lg:col-span-5 lg:sticky lg:top-32 lg:pt-20"
            >
              <div className="text-[11px] tracking-[0.28em] uppercase text-gold-deep mb-5">
                Perché un dispositivo medico
              </div>
              <p className="lead">
                Gli apparecchi acustici sono <em>dispositivi medici</em> regolamentati. Compensano l'ipoacusia con
                elaborazione digitale del suono, riduzione del rumore e direzionalità adattiva. Richiedono prescrizione
                e adattamento personalizzato.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  ["CE 0051", "Marchio medicale"],
                  ["2 Anni", "Garanzia inclusa"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur p-5">
                    <div className="font-serif text-2xl text-ink">{k}</div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-ink-mute mt-2">{v}</div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>

      {/* Chapter divider */}
      <div className="container-x">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
      </div>

      {/* CHAPTER II — Amplificatori (Lifestyle) */}
      <div className="relative pt-32 lg:pt-44 pb-32 lg:pb-44">
        <ChapterTitle
          number="II"
          eyebrow="Supporti Acustici · Non Medicali"
          title="Amplificatori"
          emphasis="Acustici."
          description="Soluzioni immediate per difficoltà uditive lievi o temporanee. Pronti all'uso, senza prescrizione, con la qualità tecnica M.A.X.Oto."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.22 } } }}
          className="container-x"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {amplificatori.map((p, i) => (
              <ProductStoryCard key={p.name} p={p} index={i} />
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-xs text-ink-mute mt-16 max-w-3xl italic leading-relaxed"
          >
            Il dispositivo non è progettato per il trattamento, la compensazione o la riabilitazione di patologie
            dell'apparato uditivo. Non sostituisce in alcun modo la protesi acustica, la cui prescrizione e adattamento
            sono di esclusiva competenza medica e audioprotesica.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
