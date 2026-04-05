"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { useScrollProgress } from "./ScrollProgressContext";

/* ──────────────────────────────────────────────────────────
   SLOGAN: "Sin miedo al sabor."
   Subtítulo: "Burger Lovers. Donde el sabor manda."

   EFECTO: Word-by-word blur-to-sharp reveal sincronizado con
   el scroll-video progress (0 → 1).

   Mapa de thresholds (sobre scrollYProgress 0→1):
     0.00 → Badge aparece (fade + slide down)
     0.05 → "Sin"       entra (blur → sharp + slide up)
     0.12 → "miedo"     entra
     0.20 → "al"        entra
     0.28 → "sabor."    entra con color amarillo
     0.40 → Subtítulo   aparece completo (opacidad + slide)
     0.55 → CTAs        suben desde abajo
     0.70 → Scroll indicator desaparece (ya scrollearon)
─────────────────────────────────────────────────────────── */

/** Genera un motion value que va de 0→1 entre [from, to] del scroll */
function useWordReveal(
  scrollProgress: MotionValue<number>,
  from: number,
  to: number
) {
  return useTransform(scrollProgress, [from, to], [0, 1]);
}

/** Convierte un progress 0→1 en style: opacity + blur + translateY */
function useRevealStyle(
  progress: MotionValue<number>,
  options?: { yFrom?: number; blurMax?: number }
) {
  const { yFrom = 28, blurMax = 12 } = options ?? {};

  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const y = useTransform(progress, [0, 1], [yFrom, 0]);
  const filter = useTransform(
    progress,
    [0, 1],
    [`blur(${blurMax}px)`, "blur(0px)"]
  );

  return { opacity, y, filter };
}

export default function HeroOverlay() {
  const scrollProgress = useScrollProgress();

  // ── Word-level progress values ───────────────────────────
  const badgeProgress   = useWordReveal(scrollProgress!, 0.00, 0.06);
  const word1Progress   = useWordReveal(scrollProgress!, 0.04, 0.14); // "Sin"
  const word2Progress   = useWordReveal(scrollProgress!, 0.11, 0.21); // "miedo"
  const word3Progress   = useWordReveal(scrollProgress!, 0.18, 0.28); // "al"
  const word4Progress   = useWordReveal(scrollProgress!, 0.25, 0.36); // "sabor."
  const subtitleProgress = useWordReveal(scrollProgress!, 0.38, 0.52); // Subtítulo
  const ctaProgress     = useWordReveal(scrollProgress!, 0.50, 0.62); // CTAs
  const indicatorProgress = useWordReveal(scrollProgress!, 0.00, 0.08); // Scroll hint

  // ── Style mappings ────────────────────────────────────────
  const badgeStyle    = useRevealStyle(badgeProgress, { yFrom: -16, blurMax: 6 });
  const word1Style    = useRevealStyle(word1Progress, { yFrom: 40, blurMax: 14 });
  const word2Style    = useRevealStyle(word2Progress, { yFrom: 40, blurMax: 14 });
  const word3Style    = useRevealStyle(word3Progress, { yFrom: 40, blurMax: 14 });
  const word4Style    = useRevealStyle(word4Progress, { yFrom: 40, blurMax: 16 });
  const subtitleStyle = useRevealStyle(subtitleProgress, { yFrom: 20, blurMax: 8 });
  const ctaStyle      = useRevealStyle(ctaProgress, { yFrom: 24, blurMax: 4 });

  // Indicator fades OUT as user scrolls (reverso)
  const indicatorOpacity = useTransform(scrollProgress!, [0, 0.12], [1, 0]);

  // Subtle scale on the whole headline as scroll progresses
  const headlineScale = useTransform(scrollProgress!, [0, 0.4], [1, 1.04]);

  if (!scrollProgress) {
    // Fallback si el contexto no está disponible (SSR / no-scroll)
    return <StaticFallback />;
  }

  return (
    <div className="text-center px-6 max-w-5xl w-full select-none">

      {/* ── Badge ─────────────────────────────────────── */}
      <motion.div
        style={{ opacity: badgeStyle.opacity, y: badgeStyle.y }}
        className="inline-flex items-center gap-2 bg-[#FFBC0D]/20 border border-[#FFBC0D]/40 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFBC0D] animate-pulse" />
        <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.25em] uppercase">
          Burger Lovers — Meat Lover Edition
        </span>
      </motion.div>

      {/* ── Main Headline — word by word ──────────────── */}
      <motion.div
        style={{ scale: headlineScale }}
        className="font-black text-5xl md:text-7xl lg:text-[88px] leading-[1.0] tracking-tight"
      >
        {/* Line 1: "Sin miedo" */}
        <div className="flex items-baseline justify-center gap-[0.25em] flex-wrap">
          {/* "Sin" */}
          <motion.span
            style={{
              opacity: word1Style.opacity,
              y: word1Style.y,
              filter: word1Style.filter,
            }}
            className="inline-block text-white will-change-transform"
          >
            Sin
          </motion.span>

          {/* "miedo" */}
          <motion.span
            style={{
              opacity: word2Style.opacity,
              y: word2Style.y,
              filter: word2Style.filter,
            }}
            className="inline-block text-white will-change-transform"
          >
            miedo
          </motion.span>
        </div>

        {/* Line 2: "al sabor." */}
        <div className="flex items-baseline justify-center gap-[0.22em] flex-wrap mt-1">
          {/* "al" */}
          <motion.span
            style={{
              opacity: word3Style.opacity,
              y: word3Style.y,
              filter: word3Style.filter,
            }}
            className="inline-block text-white will-change-transform"
          >
            al
          </motion.span>

          {/* "sabor." — amarillo + glow */}
          <motion.span
            style={{
              opacity: word4Style.opacity,
              y: word4Style.y,
              filter: word4Style.filter,
            }}
            className="inline-block text-[#FFBC0D] will-change-transform"
            // Glow effect on the keyword
            css-custom="true"
          >
            sabor.
          </motion.span>
        </div>
      </motion.div>

      {/* ── Subtitle ──────────────────────────────────── */}
      <motion.p
        style={{
          opacity: subtitleStyle.opacity,
          y: subtitleStyle.y,
          filter: subtitleStyle.filter,
        }}
        className="text-white/65 text-lg md:text-xl mt-7 max-w-lg mx-auto leading-relaxed tracking-wide font-medium"
      >
        Burger Lovers.{" "}
        <span className="text-white/90 font-bold">Donde el sabor manda.</span>
      </motion.p>

      {/* ── CTAs ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity: ctaStyle.opacity, y: ctaStyle.y }}
        className="flex flex-wrap justify-center gap-4 mt-9"
      >
        <a
          href="#carta"
          className="bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-black text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFBC0D]/30"
        >
          Ver la Carta
        </a>
        <a
          href="#app"
          className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-3.5 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105"
        >
          Descargar App
        </a>
      </motion.div>

      {/* ── Scroll Indicator (desaparece al scrollear) ── */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="mt-14 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/35 text-[11px] tracking-[0.3em] uppercase">
          Scroll para explorar
        </span>
        {/* Animated chevron */}
        <div className="flex flex-col items-center gap-1 mt-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 border-r-2 border-b-2 border-white/30 rotate-45"
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 4, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Static fallback (SSR / no context) ───────────────────── */
function StaticFallback() {
  return (
    <div className="text-center px-6 max-w-5xl">
      <h1 className="text-white font-black text-6xl md:text-8xl leading-tight tracking-tight">
        Sin miedo<br />
        <span className="text-[#FFBC0D]">al sabor.</span>
      </h1>
      <p className="text-white/65 text-xl mt-6">
        Burger Lovers. <span className="text-white/90 font-bold">Donde el sabor manda.</span>
      </p>
    </div>
  );
}
