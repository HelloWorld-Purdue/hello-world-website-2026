import React from "react";
import Image from "next/image";


const Hero = () => {
    return (
        <section id="hero" className="w-full">
            <img src="/images/hero.png" alt="HelloWorld Hero Image" className="mx-auto" />
        </section>
    );
};

export default Hero;