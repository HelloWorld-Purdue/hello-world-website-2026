import React from "react";

const About = () => {
    return (
        <section id="about" className="w-full py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
                        About HelloWorld
                    </h2>
                    <div className="w-24 h-px bg-white/50 mx-auto"></div>
                </div>

                {/* Textbox frame with text inside */}
                <div className="relative w-full max-w-2xl mx-auto">
                    <img
                        src="/images/textbox.png"
                        alt=""
                        className="w-full h-auto"
                        draggable={false}
                    />
                    {/* Text overlaid inside the cream area of the frame */}
                    <div
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ padding: '16% 24% 22% 24%' }}
                    >
                        <h3 className="text-base md:text-xl font-bold mb-3 text-black text-center leading-snug">
                            The Midwest's Largest Beginner-Friendly Hackathon
                        </h3>
                        <p className="text-xs md:text-sm text-black leading-relaxed text-center">
                            HelloWorld is a 24-hour coding marathon where you can turn your ideas into reality. Our mission is to empower students just starting their journey in tech — ensuring a level playing field for everyone to learn, experiment, and bring their first big idea to life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
