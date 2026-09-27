import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="scanlines relative w-full">
            <div className="relative h-[100svh] min-h-[420px] w-full">
                {/* mobile: portrait background with centered horizontal logo */}
                <div className="absolute inset-0 md:hidden">
                    <img
                        src="/images/background.png"
                        alt=""
                        aria-hidden
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-8">
                        <img
                            src="/images/logo-horizontal.png"
                            alt="HelloWorld logo"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>
                </div>
                {/* md and up: landscape hero image */}
                <img
                    src="/images/hero.png"
                    alt="HelloWorld Hero Image"
                    className="hidden absolute inset-0 h-full w-full object-cover object-center md:block"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-[#061014e6]" />
        </section>
    );
};

export default Hero;