"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScroll } from "framer-motion";
import { ScrollProgressContext } from "./ScrollProgressContext";

interface ScrollVideoSectionProps {
  videoSrc: string;
  children?: React.ReactNode;
  scrollHeight?: string;
}

export default function ScrollVideoSection({
  videoSrc,
  children,
  scrollHeight = "400vh",
}: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);
  const scrollProgressRef = useRef(0);

  // Rule 1 — Scroll Synchronization via framer-motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rule 2 — Video Mapping: currentTime = progress * duration
  const updateVideoTime = useCallback(() => {
    const video = videoRef.current;
    if (!video || !isVisibleRef.current) return;

    const progress = scrollProgressRef.current;
    if (video.readyState >= 2 && video.duration) {
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.05) {
        video.currentTime = targetTime;
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
    // Rule 3 — Intersection Observer: only process when visible
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

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
    // Share scroll progress with children via Context
    <ScrollProgressContext.Provider value={scrollYProgress}>
      <div
        ref={containerRef}
        style={{ height: scrollHeight }}
        className="relative"
      >
        {/* Rule 4 — Sticky Aesthetic */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#27251F]">
          {/* Rule 2 — Video: NEVER plays, always scroll-driven */}
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            // NO autoPlay, NO .play() — purely scroll-driven
          />

          {/* Dark gradient overlay — brand colors Burger Lovers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#27251F]/60 via-transparent to-[#27251F]/80" />

          {/* Children receive scrollYProgress via context */}
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
