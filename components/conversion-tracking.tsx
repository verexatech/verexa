"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ConversionTracking() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const cta = target?.closest<HTMLElement>("[data-cta]");
      if (!cta?.dataset.cta) return;

      window.gtag?.("event", "cta_click", {
        cta_name: cta.dataset.cta,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
