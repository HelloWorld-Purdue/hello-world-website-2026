import React from "react";

const About = () => {
    return (
        <section id="about" className="w-full py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
                        About HelloWorld
                    </h2>
                    <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
                            The Midwest's Largest Beginner-Friendly Hackathon
                        </h3>
                        <p className="text-lg text-white leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
                            Welcome to HelloWorld 2026! HelloWorld is a 24-hour coding marathon where you can turn your ideas into reality. Our mission is to empower students who are just starting their journey in tech — ensuring a level playing field for everyone to learn, experiment, and bring their first big idea to life.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { stat: '500+',    label: 'Hackers'          },
                            { stat: '$2,500+', label: 'In Prizes'        },
                            { stat: '24',      label: 'Hours of Hacking' },
                            { stat: '20+',     label: 'Mentors'          },
                        ].map(({ stat, label }) => (
                            <div
                                key={label}
                                className="text-center p-8 border border-white/50 rounded-2xl hover:border-white/80 transition-colors duration-200"
                            >
                                <div className="text-4xl font-bold text-white mb-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">{stat}</div>
                                <div className="text-sm text-white uppercase tracking-wider [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
