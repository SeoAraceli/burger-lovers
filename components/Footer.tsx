"use client";

import Link from "next/link";

// ── Burger Lovers Logo (footer variant) ───────────────────
function BurgerLoversLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 17 C6 8, 34 8, 34 17 L32 18 L8 18 Z" fill="#FFBC0D" />
      <ellipse cx="14" cy="13" rx="2" ry="1.2" fill="#e5a800" />
      <ellipse cx="22" cy="11" rx="2" ry="1.2" fill="#e5a800" />
      <ellipse cx="29" cy="14" rx="1.8" ry="1.1" fill="#e5a800" />
      <path d="M5 20 Q10 17 15 20 Q20 23 25 20 Q30 17 35 20 L35 22 L5 22 Z" fill="#4ade80" />
      <rect x="6" y="22" width="28" height="3" rx="0.5" fill="#fbbf24" opacity="0.9" />
      <rect x="7" y="25" width="26" height="5" rx="3" fill="#92400e" />
      <path d="M8 30 L32 30 Q34 30 34 32 Q34 34 32 35 L8 35 Q6 35 6 32 Q6 30 8 30 Z" fill="#FFBC0D" />
      <path d="M16.5 28 C16.5 26.5 18 26 19 27 C20 26 21.5 26.5 21.5 28 C21.5 29.5 19 31 19 31 C19 31 16.5 29.5 16.5 28Z" fill="#DA291C" opacity="0.8" />
    </svg>
  );
}

export default function Footer() {
  const links = {
    "Carta": ["Hamburguesas", "Pollo & Fish", "Bebidas", "Postres", "Veggie"],
    "Empresa": ["Sobre Burger Lovers", "Franquicias", "Empleo", "Prensa"],
    "Legal": ["Privacidad", "Cookies", "Accesibilidad", "Términos"],
  };

  return (
    <footer className="bg-[#1a1917] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Burger Lovers">
              <BurgerLoversLogo />
              <span className="text-white font-black text-lg">Burger Lovers</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              La mejor hamburguesa merece el mejor amor. Hecha con pasión, servida con estilo.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Instagram", icon: "📸" },
                { label: "TikTok", icon: "🎵" },
                { label: "X", icon: "𝕏" },
                { label: "YouTube", icon: "▶️" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFBC0D]/20 flex items-center justify-center text-white/50 hover:text-[#FFBC0D] transition-all duration-200 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-[#FFBC0D] text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Burger Lovers España. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            <a href="#" className="bg-[#27251F] text-white/50 hover:text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
              App Store
            </a>
            <a href="#" className="bg-[#27251F] text-white/50 hover:text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
