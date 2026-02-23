'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="text-center text-white px-4">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-white/60 mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
          Purdue University · 2026
        </p>
        <img
          src="/images/logo white cropped.png"
          alt="HelloWorld"
          className="mx-auto mb-8 w-72 md:w-[480px] h-auto [filter:drop-shadow(0_4px_40px_rgba(0,0,0,0.7))]"
          draggable={false}
        />
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg mx-auto leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]">
          The Midwest's largest beginner-friendly hackathon. 24 hours to build something amazing.
        </p>
        <Link
          href="/apply"
          className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
