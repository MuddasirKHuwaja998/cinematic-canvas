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
            ? "py-2.5 bg-[rgba(26,29,34,0.92)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "py-4 bg-[rgba(26,29,34,0.78)] backdrop-blur-md"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="MAXOTO">
            <span className="relative inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] ring-1 ring-gold/30 transition-transform duration-700 group-hover:scale-105">
              <img src={logo} alt="MAXOTO" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            </span>
          </Link>

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
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex btn btn-gold !py-3 !px-5 !text-[11px]">
              Test Gratuito <span className="arr">→</span>
            </a>
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
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl text-white hover:text-gold transition-colors"
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
