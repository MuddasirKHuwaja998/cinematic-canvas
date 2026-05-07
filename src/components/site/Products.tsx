import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import aiSense from "@/assets/max/ai-sense.png";
import cic from "@/assets/max/cic.png";
import ric from "@/assets/max/ric.png";

type Product = {
  tag: string;
  tagTone: "medical" | "lifestyle";
  name: string;
  poster: string;
  video: string;
  points: string[];
};

const prescritti: Product[] = [
  {
    tag: "Dispositivo Medico · CE0051",
    tagTone: "medical",
    name: "Maxoto AI-Sense",
    poster: aiSense,
    video: "https://dl.dropboxusercontent.com/scl/fi/m3pp5mnm593uddjmunbau/Maxoto-AI-Sense.mp4?rlkey=e5kifif7yqn46abrps1triu7t&raw=1",
    points: ["Tecnologia digitale avanzata", "Marcatura CE0051", "Garanzia 2 anni"],
  },
];

const personalizzati: Product[] = [
  {
    tag: "Supporto Acustico · Non Medicale",
    tagTone: "lifestyle",
    name: "Amplimaxoto CIC",
    poster: cic,
    video: "https://dl.dropboxusercontent.com/scl/fi/c6djfqjtngbnn37418vrd/Amplimaxoto-cic.mp4?rlkey=nfk2e8nw6t7vymm807o1a3kmz&raw=1",
    points: ["Discreto, intracanale", "Pronto all'uso", "Senza prescrizione"],
  },
  {
    tag: "Supporto Acustico · Non Medicale",
    tagTone: "lifestyle",
    name: "Retro Micro One",
    poster: ric,
    video: "https://dl.dropboxusercontent.com/scl/fi/1bubpc4fj2dp8qbifgeq5/Amplimaxoto-ric.mp4?rlkey=zsp6ulpzrosjpnfj6e2t2jdh5&raw=1",
    points: ["Ricaricabile, wireless", "Ultraleggero", "Comfort retroauricolare"],
  },
];

const cardVar: Variants = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
};

function ProductCard({ p }: { p: Product }) {
  return (
    <motion.article
      variants={cardVar}
      className="group relative rounded-[2rem] overflow-hidden bg-white border border-[var(--line)] shadow-[0_30px_80px_-50px_rgba(58,64,73,0.4)] hover:shadow-[0_50px_120px_-50px_rgba(205,174,121,0.5)] transition-all duration-700"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#f5f1e8] to-[#ebe4d3]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={p.poster}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.6s] ease-out"
        >
          <source src={p.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute top-5 left-5">
          <span
            className={`inline-block text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md ${
              p.tagTone === "medical"
                ? "bg-gold/90 text-white"
                : "bg-white/80 text-ink"
            }`}
          >
            {p.tag}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-7 text-white">
          <h4 className="font-serif text-3xl mb-4">{p.name}</h4>
          <ul className="space-y-1.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="products" ref={ref} className="relative py-32 lg:py-44 bg-paper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(205,174,121,0.12),_transparent_60%)]" />

      <motion.div style={{ y }} className="container-x relative">
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-7">I Nostri Prodotti</div>
          <h2 className="display-md">
            Tre soluzioni per <em>ogni esigenza</em> uditiva.
          </h2>
          <p className="lead mt-7">
            Apparecchi acustici e amplificatori digitali, progettati per chi cerca qualità senza compromessi.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.18 } } }}
          className="space-y-24"
        >
          {/* Group 1 */}
          <div>
            <div className="hair mb-10">
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">Apparecchi Prescritti</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <ProductCard p={prescritti[0]} />
              <motion.div variants={cardVar} className="lg:py-10">
                <p className="lead">
                  Protesi acustiche digitali certificate, su misura. Prescritte e adattate da audioprotesisti qualificati per la riabilitazione dell'<em>ipoacusia</em>.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Group 2 */}
          <div>
            <div className="hair mb-10">
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold-deep">Amplificatori Personalizzati</span>
            </div>
            <p className="lead max-w-2xl mb-10">
              Soluzioni immediate per difficoltà uditive lievi o temporanee. Pronti all'uso, senza prescrizione, con la qualità tecnica M.A.X.Oto.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {personalizzati.map((p) => (
                <ProductCard key={p.name} p={p} />
              ))}
            </div>
            <p className="text-xs text-ink-mute mt-10 max-w-3xl italic leading-relaxed">
              Il dispositivo non è progettato per il trattamento, la compensazione o la riabilitazione di patologie dell'apparato uditivo. Non sostituisce in alcun modo la protesi acustica, la cui prescrizione e adattamento sono di esclusiva competenza medica e audioprotesica.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
