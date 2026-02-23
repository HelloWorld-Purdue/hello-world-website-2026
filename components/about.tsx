import React from "react";

const About = () => {
    return (
        <section id="about" className="w-full py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
                        About HelloWorld
                    </h2>
                    <div className="w-24 h-px bg-white/30 mx-auto"></div>
                </div>

                <div className="bg-white/15 border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-4 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
                        The Midwest's Largest Beginner-Friendly Hackathon
                    </h3>
                    <p className="text-white/90 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
                        HelloWorld is a 24-hour coding marathon where you can turn your ideas into reality. Our mission is to empower students just starting their journey in tech — ensuring a level playing field for everyone to learn, experiment, and bring their first big idea to life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
