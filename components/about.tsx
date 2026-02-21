import React from "react";


const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-foreground text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                            About HelloWorld
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h3 className="text-4xl font-bold mb-6 text-foreground">The Midwest's Largest Beginner-Friendly Hackathon</h3>
                        <div className="mb-6">
                            <p className="text-xl text-foreground leading-relaxed">
                                Welcome to HelloWorld 2025! HelloWorld is a 24-hour coding marathon where you can turn your ideas into reality. Our mission is to  empower students who are just starting their journey in tech. To foster a truly welcoming atmosphere, this event is built for newcomers, ensuring a level playing field for everyone to learn, experiment, and bring their first big idea to life.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-primary to-secondary rounded-2xl text-primary-foreground transform hover:scale-105 transition-transform duration-200">
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-lg">Hackers</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-secondary to-accent rounded-2xl text-primary-foreground transform hover:scale-105 transition-transform duration-200">
                            <div className="text-4xl font-bold mb-2">$2,500+</div>
                            <div className="text-lg">In Prizes</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-accent to-primary rounded-2xl text-primary-foreground transform hover:scale-105 transition-transform duration-200">
                            <div className="text-4xl font-bold mb-2">24</div>
                            <div className="text-lg">Hours of Hacking</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-muted to-primary rounded-2xl text-primary-foreground transform hover:scale-105 transition-transform duration-200">
                            <div className="text-4xl font-bold mb-2">20+</div>
                            <div className="text-lg">Mentors</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;