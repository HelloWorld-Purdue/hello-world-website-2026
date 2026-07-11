import React from "react";
import Image from "next/image";


const Hero = () => {
    return (
        <section id="hero" className="w-full h-screen">
            <img src="/images/hero.png" alt="HelloWorld Hero Image" className="w-full h-full object-cover" />
        </section>
    );
};

export default Hero;