"use client";

import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

/**
 * ScrollProgressContext
 * Shares the raw framer-motion scrollYProgress (0→1) from ScrollVideoSection
 * so that HeroOverlay can synchronize text animations to the same scroll position.
 */
export const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function useScrollProgress() {
  return useContext(ScrollProgressContext);
}
