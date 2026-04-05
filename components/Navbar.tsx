"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Burger Lovers Logo SVG ──────────────────────────────────
function BurgerLoversLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top bun */}
      <path
        d="M6 17 C6 8, 34 8, 34 17 L32 18 L8 18 Z"
        fill="#FFBC0D"
      />
      {/* Sesame seeds on bun */}
      <ellipse cx="14" cy="13" rx="2" ry="1.2" fill="#e5a800" />
      <ellipse cx="22" cy="11" rx="2" ry="1.2" fill="#e5a800" />
      <ellipse cx="29" cy="14" rx="1.8" ry="1.1" fill="#e5a800" />
      {/* Lettuce layer */}
      <path
        d="M5 20 Q10 17 15 20 Q20 23 25 20 Q30 17 35 20 L35 22 L5 22 Z"
        fill="#4ade80"
      />
      {/* Cheese slice */}
      <rect x="6" y="22" width="28" height="3" rx="0.5" fill="#fbbf24" opacity="0.9" />
      {/* Patty */}
      <rect x="7" y="25" width="26" height="5" rx="3" fill="#92400e" />
      {/* Bottom bun */}
      <path
        d="M8 30 L32 30 Q34 30 34 32 Q34 34 32 35 L8 35 Q6 35 6 32 Q6 30 8 30 Z"
        fill="#FFBC0D"
      />
      {/* Heart accent on patty */}
      <path
        d="M16.5 28 C16.5 26.5 18 26 19 27 C20 26 21.5 26.5 21.5 28 C21.5 29.5 19 31 19 31 C19 31 16.5 29.5 16.5 28Z"
        fill="#DA291C"
        opacity="0.8"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Hamburguesas", href: "/hamburguesas" },
    { label: "BL App", href: "/mymcdonalds" },
    { label: "Nosotros", href: "/empresa" },
    { label: "Restaurantes", href: "/restaurantes" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#27251F]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Burger Lovers Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Burger Lovers — Ir a inicio"
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <BurgerLoversLogo size={36} />
          </div>
          <span className="text-[#FFBC0D] font-black text-xl tracking-tight hidden sm:block">
            Burger Lovers
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-[#FFBC0D] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFBC0D] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/delivery"
            className="bg-[#DA291C] hover:bg-[#b82418] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
          >
            Pedir Ahora
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#FFBC0D] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FFBC0D] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FFBC0D] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#27251F]/98 backdrop-blur-md ${
          menuOpen ? "max-h-72 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-[#FFBC0D] py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/delivery"
            className="mt-3 bg-[#DA291C] text-white font-bold text-sm px-5 py-2.5 rounded-full text-center transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Pedir Ahora
          </Link>
        </div>
      </div>
    </nav>
  );
}
