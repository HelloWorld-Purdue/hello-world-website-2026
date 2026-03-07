"use client";

import { useEffect, useRef } from "react";

export default function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementTop = el.offsetTop;
      // Offset by element's top so background aligns at 0 when section enters view
      el.style.backgroundPositionY = `${(scrollY - elementTop) * 0.2}px`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "0px",
      }}
    >
      {children}
    </div>
  );
}
