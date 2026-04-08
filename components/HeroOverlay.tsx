"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { useScrollProgress } from "./ScrollProgressContext";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ──────────────────────────────────────────────────────────
   SLOGAN: "Sin miedo al sabor."
   Subtítulo: "Burger Lovers. Donde el sabor manda."

   DESKTOP: Word-by-word blur-to-sharp reveal + scale
   MÓVIL:   Word-by-word opacity + translateY (SIN blur)
            blur() es muy caro en GPU móvil → jank garantizado

   Thresholds móvil comprimidos (scroll más corto en mobile)
─────────────────────────────────────────────────────────── */

function useWordReveal(
  scrollProgress: MotionValue<number>,
  from: number,
  to: number
) {
  return useTransform(scrollProgress, [from, to], [0, 1]);
}

/**
 * En desktop: opacity + blur + y
 * En móvil: solo opacity + y (blur eliminado para evitar GPU jank)
 */
function useRevealStyle(
  progress: MotionValue<number>,
  isMobile: boolean,
  options?: { yFrom?: number; blurMax?: number }
) {
  const { yFrom = 28, blurMax = 12 } = options ?? {};

  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const y = useTransform(progress, [0, 1], [isMobile ? yFrom * 0.6 : yFrom, 0]);
  // En móvil, filter siempre blur(0px) para no activar el compositor de GPU
  const filter = useTransform(
    progress,
    [0, 1],
    isMobile ? ["blur(0px)", "blur(0px)"] : [`blur(${blurMax}px)`, "blur(0px)"]
  );

  return { opacity, y, filter };
}

export default function HeroOverlay() {
  const scrollProgress = useScrollProgress();
  const isMobile = useIsMobile();

  // m=0.38 → el reveal completo termina al ~38% del scroll → animación muy ágil
  const m = isMobile ? 0.38 : 1.0;

  const badgeProgress    = useWordReveal(scrollProgress!, 0.00,        0.06 * m);
  const word1Progress    = useWordReveal(scrollProgress!, 0.04 * m,    0.16 * m);
  const word2Progress    = useWordReveal(scrollProgress!, 0.13 * m,    0.24 * m);
  const word3Progress    = useWordReveal(scrollProgress!, 0.21 * m,    0.32 * m);
  const word4Progress    = useWordReveal(scrollProgress!, 0.28 * m,    0.40 * m);
  const subtitleProgress = useWordReveal(scrollProgress!, 0.40 * m,    0.55 * m);
  const ctaProgress      = useWordReveal(scrollProgress!, 0.52 * m,    0.65 * m);

  const badgeStyle    = useRevealStyle(badgeProgress,    isMobile, { yFrom: -8,  blurMax: 6 });
  const word1Style    = useRevealStyle(word1Progress,    isMobile, { yFrom: 18,  blurMax: 14 });
  const word2Style    = useRevealStyle(word2Progress,    isMobile, { yFrom: 18,  blurMax: 14 });
  const word3Style    = useRevealStyle(word3Progress,    isMobile, { yFrom: 18,  blurMax: 14 });
  const word4Style    = useRevealStyle(word4Progress,    isMobile, { yFrom: 18,  blurMax: 16 });
  const subtitleStyle = useRevealStyle(subtitleProgress, isMobile, { yFrom: 12,  blurMax: 8 });
  const ctaStyle      = useRevealStyle(ctaProgress,      isMobile, { yFrom: 12,  blurMax: 4 });

  const indicatorOpacity = useTransform(scrollProgress!, [0, 0.10], [1, 0]);
  // En móvil desactivamos scale (puede causar subpixel issues)
  const headlineScale = useTransform(
    scrollProgress!,
    [0, 0.4],
    isMobile ? [1, 1] : [1, 1.04]
  );

  if (!scrollProgress) return <StaticFallback />;

  return (
    <div className="text-center px-5 max-w-5xl w-full select-none">

      {/* ── Badge ─────────────────────────────────────── */}
      <motion.div
        style={{ opacity: badgeStyle.opacity, y: badgeStyle.y }}
        className="inline-flex items-center gap-2 bg-[#FFBC0D]/20 border border-[#FFBC0D]/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFBC0D] animate-pulse" />
        <span className="text-[#FFBC0D] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
          Burger Lovers — Meat Lover Edition
        </span>
      </motion.div>

      {/* ── Main Headline — word by word ──────────────── */}
      <motion.div
        style={{ scale: headlineScale }}
        className="font-black text-[52px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight"
      >
        {/* Line 1: "Sin miedo" */}
        <div className="flex items-baseline justify-center gap-[0.2em] flex-wrap">
          <motion.span
            style={{
              opacity: word1Style.opacity,
              y: word1Style.y,
              filter: word1Style.filter,
              // will-change solo en desktop — en móvil consume memoria extra
              willChange: isMobile ? "auto" : "transform",
            }}
            className="inline-block text-white"
          >
            Sin
          </motion.span>

          <motion.span
            style={{
              opacity: word2Style.opacity,
              y: word2Style.y,
              filter: word2Style.filter,
              willChange: isMobile ? "auto" : "transform",
            }}
            className="inline-block text-white"
          >
            miedo
          </motion.span>
        </div>

        {/* Line 2: "al sabor." */}
        <div className="flex items-baseline justify-center gap-[0.18em] flex-wrap mt-0.5">
          <motion.span
            style={{
              opacity: word3Style.opacity,
              y: word3Style.y,
              filter: word3Style.filter,
              willChange: isMobile ? "auto" : "transform",
            }}
            className="inline-block text-white"
          >
            al
          </motion.span>

          <motion.span
            style={{
              opacity: word4Style.opacity,
              y: word4Style.y,
              filter: word4Style.filter,
              willChange: isMobile ? "auto" : "transform",
            }}
            className="inline-block text-[#FFBC0D]"
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
        className="text-white/65 text-base md:text-xl mt-5 md:mt-7 max-w-sm md:max-w-lg mx-auto leading-relaxed tracking-wide font-medium"
      >
        Burger Lovers.{" "}
        <span className="text-white/90 font-bold">Donde el sabor manda.</span>
      </motion.p>

      {/* ── CTAs ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity: ctaStyle.opacity, y: ctaStyle.y }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mt-7 md:mt-9"
      >
        <a
          href="#carta"
          className="bg-[#FFBC0D] hover:bg-[#e5a800] active:bg-[#e5a800] text-[#27251F] font-black text-sm px-7 md:px-8 py-3 md:py-3.5 rounded-full transition-colors duration-150 shadow-lg shadow-[#FFBC0D]/30"
        >
          Ver la Carta
        </a>
        <a
          href="#app"
          className="bg-white/10 active:bg-white/20 text-white font-bold text-sm px-7 md:px-8 py-3 md:py-3.5 rounded-full border border-white/20 transition-colors duration-150"
        >
          Descargar App
        </a>
      </motion.div>

      {/* ── Scroll Indicator ──────────────────────────── */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="mt-6 md:mt-14 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/35 text-[10px] tracking-[0.3em] uppercase">
          Scroll para explorar
        </span>
        <div className="flex flex-col items-center gap-1 mt-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3.5 h-3.5 border-r-2 border-b-2 border-white/30 rotate-45"
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

/* ── Static fallback (SSR) ─────────────────────────────────── */
function StaticFallback() {
  return (
    <div className="text-center px-6 max-w-5xl">
      <h1 className="text-white font-black text-[52px] md:text-8xl leading-tight tracking-tight">
        Sin miedo<br />
        <span className="text-[#FFBC0D]">al sabor.</span>
      </h1>
      <p className="text-white/65 text-lg md:text-xl mt-6">
        Burger Lovers.{" "}
        <span className="text-white/90 font-bold">Donde el sabor manda.</span>
      </p>
    </div>
  );
}
