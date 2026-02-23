'use client';

import { useEffect, useRef } from 'react';

const BG_FACTOR    = 0.1;   // no_tree_hero — barely moves, furthest back
const TREES_FACTOR = 0.4;   // trees foreground — drifts up faster, creates depth

export default function ParallaxBackground() {
  const bgRef    = useRef<HTMLDivElement>(null);
  const treesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-y * BG_FACTOR}px)`;
      }
      if (treesRef.current) {
        treesRef.current.style.transform = `translateY(${-y * TREES_FACTOR}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050510]" aria-hidden="true">

      {/* Layer 1: background scene without trees — slowest */}
      <div ref={bgRef} className="absolute inset-x-0 top-0 will-change-transform">
        <img
          src="/images/no_tree_hero.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Layer 2: tree foreground (transparent PNG) — faster, frames the scene */}
      <div ref={treesRef} className="absolute inset-x-0 top-0 will-change-transform">
        <img
          src="/images/trees.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

    </div>
  );
}
