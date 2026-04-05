"use client";

import { useState, useEffect } from "react";

/**
 * useIsMobile — detecta si el viewport es < 768px (un solo render)
 * Se usa para desactivar blur filter y reducir scroll height en móvil.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Solo se ejecuta en cliente
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    mql.addEventListener("change", check);
    return () => mql.removeEventListener("change", check);
  }, [breakpoint]);

  return isMobile;
}
