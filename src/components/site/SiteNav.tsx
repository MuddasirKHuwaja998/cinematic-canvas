import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/max/logo.png";
import { TestModal } from "./TestModal";

const links = [
  { href: "#about", label: "Chi Siamo" },
  { href: "#products", label: "Prodotti" },
  { href: "#pricing", label: "Prezzi" },
  { href: "#partner", label: "Diventa Partner" },
  { href: "#contact", label: "Contatti" },
];

// Decorative golden thread — looks like a thin tied wrap
function Thread({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 24"
      className={`shrink-0 h-5 w-[42px] opacity-90 ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="threadGold" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#cdae79" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#e3cfa8" stopOpacity="1" />
          <stop offset="100%" stopColor="#cdae79" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* main wrap line */}
      <path
        d="M2 12 Q 15 2, 30 12 T 58 12"
        stroke="url(#threadGold)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* secondary thinner thread */}
      <path
        d="M4 14 Q 18 6, 30 14 T 56 14"
        stroke="#cdae79"
        strokeOpacity="0.45"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      {/* tiny knot */}
      <circle cx="30" cy="12" r="1.4" fill="#e3cfa8" />
    </svg>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [testOpen, setTestOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const handler = () => setTestOpen(true);
    window.addEventListener("maxoto:open-test", handler);
    return () => window.removeEventListener("maxoto:open-test", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-2.5 bg-[rgba(26,29,34,0.92)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "py-4 bg-[rgba(26,29,34,0.78)] backdrop-blur-md"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:gap-5 min-w-0">
            <Link to="/" className="flex items-center group" aria-label="MAXOTO">
              <img
                src={logo}
                alt="MAXOTO"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-[1.04] drop-shadow-[0_4px_18px_rgba(205,174,121,0.35)]"
              />
            </Link>
            {/* Thread between logo and first menu link */}
            <Thread className="hidden lg:block" />
          </div>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-[12px] tracking-[0.24em] uppercase font-bold text-white/85 hover:text-white transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
            {/* Thread after Contatti */}
            <Thread />
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTestOpen(true)}
              className="hidden md:inline-flex btn btn-gold !py-3 !px-5 !text-[11px]"
            >
              Test Gratuito <span className="arr">→</span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-11 h-11 flex flex-col gap-[5px] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur"
            >
              <span className={`block w-4 h-px bg-white transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block w-4 h-px bg-white transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-7 px-6"
          >
            <Thread />
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-4xl text-white hover:text-gold transition-colors text-center"
              >
                {l.label}
              </motion.a>
            ))}
            <Thread />
            <motion.button
              onClick={() => {
                setOpen(false);
                setTestOpen(true);
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="btn btn-gold mt-2"
            >
              Test Gratuito <span className="arr">→</span>
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>

      <TestModal open={testOpen} onClose={() => setTestOpen(false)} />
    </>
  );
}
