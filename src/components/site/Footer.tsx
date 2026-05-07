import logo from "@/assets/max/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--dark-3)] text-white/70 pt-24 pb-10">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          <div className="lg:col-span-1">
            <img src={logo} alt="M.A.X.Oto" className="h-12 w-12 object-contain mb-6 brightness-110" />
            <p className="text-sm leading-relaxed">
              M.A.X.Oto Otocostruzioni italiana. Apparecchi acustici digitali certificati CE, direttamente al paziente.
            </p>
          </div>

          {[
            ["Prodotti", [["Maxoto AI-Sense", "#products"], ["Amplimaxoto CIC", "#products"], ["Retro Micro One", "#products"]]],
            ["Azienda", [["Chi Siamo", "#about"], ["Prezzi", "#pricing"], ["Contatti", "#contact"]]],
            ["Contatti", [["081 287408", "tel:+39081287408"], ["info@maxoto.it", "mailto:info@maxoto.it"]]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <h5 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5 font-sans font-medium">{h as string}</h5>
              <ul className="space-y-3">
                {(items as [string, string][]).map(([t, href]) => (
                  <li key={t}>
                    <a href={href} className="text-sm hover:text-gold transition-colors">{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-white/40">
          <div>© 2026 M.A.X.Oto Otocostruzioni · Tutti i diritti riservati</div>
          <div>Certificato 1682/MDD · CE 0051</div>
        </div>
      </div>
    </footer>
  );
}
