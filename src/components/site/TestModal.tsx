import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(1, "Inserisci il tuo nome").max(60),
  cognome: z.string().trim().min(1, "Inserisci il tuo cognome").max(60),
  email: z.string().trim().email("Email non valida").max(160),
  telefono: z.string().trim().min(5, "Numero non valido").max(30),
  citta: z.string().trim().min(1, "Inserisci la città").max(80),
  indirizzo: z.string().trim().min(1, "Inserisci l'indirizzo").max(160),
  accept: z.literal(true, { errorMap: () => ({ message: "Devi accettare per continuare" }) }),
});

const TARGET = "https://hearing-screener.beyondhearing.org/ClinicaAudiologicaMAXO/Gtbsbr/welcome";

const fields: { key: keyof typeof initial; label: string; type?: string; col?: string }[] = [
  { key: "nome", label: "Nome", col: "sm:col-span-1" },
  { key: "cognome", label: "Cognome", col: "sm:col-span-1" },
  { key: "email", label: "Email", type: "email", col: "sm:col-span-2" },
  { key: "telefono", label: "Numero di Telefono", type: "tel", col: "sm:col-span-1" },
  { key: "citta", label: "Città", col: "sm:col-span-1" },
  { key: "indirizzo", label: "Indirizzo di residenza", col: "sm:col-span-2" },
];

const initial = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  citta: "",
  indirizzo: "",
  accept: false as boolean,
};

export function TestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    window.open(TARGET, "_blank", "noopener,noreferrer");
    onClose();
    setForm(initial);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-cream rounded-3xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)] border border-[var(--line)] overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
            <div className="relative p-7 sm:p-10">
              <button
                onClick={onClose}
                aria-label="Chiudi"
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[var(--line)] bg-white/70 hover:bg-white text-ink-mute hover:text-ink transition flex items-center justify-center"
              >
                ✕
              </button>

              <div className="eyebrow mb-5">Test Gratuito</div>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink leading-[1.05] tracking-tight">
                Comincia il tuo <em>Audio Test</em>.
              </h3>
              <p className="text-sm text-ink-mute mt-3 leading-relaxed">
                Compila i tuoi dati per iniziare il test dell'udito online — è gratuito e senza impegno.
              </p>

              <form onSubmit={submit} className="mt-7 grid sm:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.key} className={f.col}>
                    <label className="block text-[10px] tracking-[0.28em] uppercase text-ink-mute mb-1.5 font-semibold">
                      {f.label}
                    </label>
                    <input
                      type={f.type ?? "text"}
                      value={form[f.key] as string}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[var(--line)] focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition text-ink text-[15px]"
                    />
                    {errors[f.key] && (
                      <div className="text-[11px] text-red-600 mt-1">{errors[f.key]}</div>
                    )}
                  </div>
                ))}

                <label className="sm:col-span-2 flex items-start gap-3 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.accept}
                    onChange={(e) => setForm({ ...form, accept: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[color:var(--gold-deep)]"
                  />
                  <span className="text-[13px] text-ink-soft leading-relaxed">
                    <strong className="text-ink font-semibold">Accettazione.</strong> Accetto termini e condizioni
                    per poter effettuare il test dell'udito online.
                  </span>
                </label>
                {errors.accept && (
                  <div className="sm:col-span-2 text-[11px] text-red-600 -mt-2">{errors.accept}</div>
                )}

                <div className="sm:col-span-2 mt-3">
                  <button type="submit" className="btn btn-gold w-full justify-center">
                    Comincia il tuo Audio Test! <span className="arr">→</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
