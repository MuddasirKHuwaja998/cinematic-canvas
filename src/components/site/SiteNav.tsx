import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/max/logo.png";

const links = [
  { href: "#about", label: "Chi Siamo" },
  { href: "#products", label: "Prodotti" },
  { href: "#pricing", label: "Prezzi" },
  { href: "#partner", label: "Partner" },
  { href: "#contact", label: "Contatti" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-3 bg-[rgba(250,248,243,0.78)] backdrop-blur-xl border-b border-[var(--line)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="MAXOTO">
            <img
              src={logo}
              alt="MAXOTO"
              className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_6px_18px_rgba(58,64,73,0.18)]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] tracking-[0.22em] uppercase text-ink-soft hover:text-gold-deep transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex btn btn-gold !py-3 !px-5 !text-[11px]">
              Test Gratuito <span className="arr">→</span>
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-11 h-11 flex flex-col gap-[5px] items-center justify-center rounded-full border border-[var(--line)] bg-white/60 backdrop-blur"
            >
              <span className={`block w-4 h-px bg-ink transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block w-4 h-px bg-ink transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
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
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl text-ink hover:text-gold-deep transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="btn btn-gold mt-4"
            >
              Test Gratuito <span className="arr">→</span>
            </motion.a>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
