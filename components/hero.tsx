import React from "react";
import Image from "next/image";


const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen">
            <img src="/images/hero.png" alt="HelloWorld Hero Image" className="w-full h-full object-cover" />
            <img src="/images/logo.png" alt="HelloWorld Logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-auto drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)]" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-[#0a120e]" />
        </section>
    );
};

export default Hero;