'use client';

import { useEffect, useRef } from 'react';

const AI_HERO_FACTOR    = 0.15;  // furthest back — barely moves
const DEER_FACTOR       = 0.35;  // mid-ground right side
const DEER_RABBIT_FACTOR = 0.45; // mid-ground left side, enters later

export default function ParallaxBackground() {
  const bgRef         = useRef<HTMLDivElement>(null);
  const deerRef       = useRef<HTMLDivElement>(null);
  const deerRabbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-y * AI_HERO_FACTOR}px)`;
      }
      if (deerRef.current) {
        deerRef.current.style.transform = `translateY(${-y * DEER_FACTOR}px)`;
      }
      if (deerRabbitRef.current) {
        deerRabbitRef.current.style.transform = `translateY(${-y * DEER_RABBIT_FACTOR}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050510]" aria-hidden="true">

      {/* ── Layer 1: forest background — full portrait, no zoom, slowest ── */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 top-0 will-change-transform"
      >
        <img
          src="/images/ai_hero.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* ── Layer 2: deer — right side, visible at hero ────────────────── */}
      {/* Outer div is the positional anchor; inner (ref) carries the transform */}
      <div className="absolute bottom-0 right-[4%] pointer-events-none">
        <div ref={deerRef} className="will-change-transform" style={{ width: '26vw', maxWidth: '360px' }}>
          <img
            src="/images/deer.png"
            alt=""
            className="w-full h-auto"
            draggable={false}
          />
        </div>
      </div>

      {/* ── Layer 3: deer + rabbit — left side, enters viewport ~About section */}
      {/* bottom: '-70%' ≈ -70vh below viewport; drifts into view as user scrolls */}
      <div className="absolute left-[3%] pointer-events-none" style={{ bottom: '-70%' }}>
        <div ref={deerRabbitRef} className="will-change-transform" style={{ width: '28vw', maxWidth: '400px' }}>
          <img
            src="/images/deer_and_rabbit.png"
            alt=""
            className="w-full h-auto"
            draggable={false}
          />
        </div>
      </div>

    </div>
  );
}
