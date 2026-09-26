import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="scanlines relative w-full h-screen">
            <img src="/images/hero.png" alt="HelloWorld Hero Image" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-[#061014e6]" />
        </section>
    );
};

export default Hero;