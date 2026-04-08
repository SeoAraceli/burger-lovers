"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScroll } from "framer-motion";
import { ScrollProgressContext } from "./ScrollProgressContext";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollVideoSectionProps {
  videoSrc: string;
  posterSrc?: string;
  children?: React.ReactNode;
  scrollHeight?: string;
  scrollHeightMobile?: string;
}

export default function ScrollVideoSection({
  videoSrc,
  posterSrc,
  children,
  scrollHeight = "400vh",
  scrollHeightMobile = "340vh",   // móvil: zona de scroll (más larga → animación más fluida)
}: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);
  const scrollProgressRef = useRef(0);
  const lastTimeRef = useRef(-1);   // evita micro-actualizaciones innecesarias

  const isMobile = useIsMobile();

  // En móvil: no usar scroll container grande, solo mostrar el hero estático
  // El video muestra el poster como imagen de fondo
  if (isMobile) {
    return (
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-[#27251F]">
        {/* Poster image as background */}
        {posterSrc && (
          <img
            src={posterSrc}
            alt="Burger Lovers"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#27251F]/60 via-[#27251F]/10 to-[#27251F]/80" />
        {/* Children (HeroOverlay) - shown directly without scroll animation */}
        {children && (
          <div className="relative z-10 h-full flex items-center justify-center">
            {children}
          </div>
        )}
      </section>
    );
  }

  // Desktop: scroll-driven animation
  const height = scrollHeight;

  // Rule 1 — Scroll Synchronization via framer-motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rule 2 — Video Mapping (throttled: skip update si diff < umbral)
  const updateVideoTime = useCallback(() => {
    const video = videoRef.current;
    if (!video || !isVisibleRef.current) return;

    const progress = scrollProgressRef.current;

    if (video.readyState >= 2 && video.duration) {
      const targetTime = progress * video.duration;
      const threshold = 0.04;
      if (Math.abs(video.currentTime - targetTime) > threshold) {
        if (Math.abs(targetTime - lastTimeRef.current) > threshold) {
          video.currentTime = targetTime;
          lastTimeRef.current = targetTime;
        }
      }
    }

    rafRef.current = requestAnimationFrame(updateVideoTime);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      scrollProgressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.preload = "auto";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            rafRef.current = requestAnimationFrame(updateVideoTime);
          } else {
            if (rafRef.current) {
              cancelAnimationFrame(rafRef.current);
              rafRef.current = null;
            }
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateVideoTime]);

  return (
    <ScrollProgressContext.Provider value={scrollYProgress}>
      <div
        ref={containerRef}
        style={{ height }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#27251F]">

          {/* Video — poster evita pantalla negra mientras carga */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
            // NO autoPlay, NO .play() — purely scroll-driven
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#27251F]/60 via-[#27251F]/10 to-[#27251F]/80" />

          {/* Children (HeroOverlay) */}
          {children && (
            <div className="relative z-10 h-full flex items-center justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </ScrollProgressContext.Provider>
  );
}
