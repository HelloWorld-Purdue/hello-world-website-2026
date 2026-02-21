import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Schedule ({ scheduleData, openEventModal, Dialog, activeModal, closeModal, DialogContent, DialogHeader, DialogTitle, selectedEvent, Clock, MapPin, Calendar, User }) {
    // State to track which timelines are overflowing
    const [overflowState, setOverflowState] = useState({});

    // A ref to hold the DOM elements of the scrollable timelines
    const scrollRefs = useRef({});

    // Register the GSAP plugin once when the component mounts
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    // This effect checks for overflow whenever the data or window size changes
    useEffect(() => {
        const checkOverflow = () => {
            const newOverflows = {};
            for (const day in scrollRefs.current) {
                const element = scrollRefs.current[day];
                if (element) {
                    // An element overflows if its scroll width is larger than its client width
                    newOverflows[day] = element.scrollWidth > element.clientWidth;
                }
            }
            setOverflowState(newOverflows);
        };

        // Check once on mount/data change
        checkOverflow();

        // Add event listener to re-check on window resize
        window.addEventListener('resize', checkOverflow);

        // Cleanup listener when the component unmounts
        return () => window.removeEventListener('resize', checkOverflow);
    }, [scheduleData]); // Rerun effect if scheduleData changes

    // GSAP-powered scroll handler function
    const handleScroll = (day, direction) => {
        const scrollAmount = 500; // The amount of pixels to scroll
        const timeline = scrollRefs.current[day];

        if (timeline) {
            gsap.to(timeline, {
                scrollTo: {
                    x: direction === 'left' ? `-=${scrollAmount}` : `+=${scrollAmount}`
                },
                duration: 0.8,
                ease: "power2.inOut",
            });
        }
    };

    return (
        <>
            <section id="schedule" className="py-20 px-4 bg-background w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/cave-2.png')" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-foreground text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                            Live Schedule
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    </div>

                    <div className="space-y-20">
                        {Object.entries(scheduleData).map(([day, events], dayIndex) => (
                            <div key={day} className="bg-gradient-to-br from-card to-muted rounded-3xl p-8">
                                <h3 className="text-foreground text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                                    {/* <h3 className="text-4xl font-bold mb-16 text-center text-background bg-clip-text text-transparent"> */}
                                    Day {dayIndex + 1}
                                </h3>

                                <div className="relative group">
                                    <div
                                        ref={(el) => (scrollRefs.current[day] = el)}
                                        className="relative overflow-x-auto py-12 -my-8 px-4"
                                    >
                                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transform -translate-y-1/2 min-w-[800px]"></div>

                                        <div className="relative flex items-center gap-x-12 w-max">
                                            {events.map((event, index) => (
                                                <div key={index} className="flex flex-col items-center relative group">
                                                    <div
                                                        className={`max-w-48 ${
                                                            index % 2 === 0 ? "mb-8 order-1" : "mt-8 order-3"
                                                        } cursor-pointer transform hover:scale-105 transition-all duration-200`}
                                                        onClick={() => openEventModal(event)}
                                                    >
                                                        <div className="bg-background rounded-2xl p-4 shadow-lg border-2 border-transparent hover:border-primary/50 transition-all duration-200">
                                                            <div className="text-sm font-bold text-primary mb-2">{event.time}</div>
                                                            <div className="text-sm font-semibold text-card-primary leading-tight">{event.title}</div>
                                                        </div>
                                                    </div>

                                                    <div className={`w-1 bg-gradient-to-b from-primary to-secondary rounded-full order-2 h-12`}></div>

                                                    <button
                                                        onClick={() => openEventModal(event)}
                                                        className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all duration-200 order-2 relative z-10 transform hover:scale-125 shadow-lg"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 👇 Buttons are now rendered conditionally based on overflow state */}
                                    {overflowState[day] && (
                                        <>
                                            <button
                                                onClick={() => handleScroll(day, 'left')}
                                                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
                                            >
                                                &#x25C0; {/* Left Arrow */}
                                            </button>
                                            <button
                                                onClick={() => handleScroll(day, 'right')}
                                                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
                                            >
                                                &#x25B6; {/* Right Arrow */}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-background to-muted rounded-2xl p-8 border border-border">
                            <p className="text-xl text-foreground">
                                Make sure to join our <a href="https://discord.gg/HRqTg8z2" ><strong>official Discord server</strong> </a> and check it frequently, as we'll be posting all live updates and important announcements there!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Detail Modal */}
            <Dialog open={activeModal === "event"} onOpenChange={closeModal}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {selectedEvent?.title}
                        </DialogTitle>
                    </DialogHeader>
                    {selectedEvent && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <span className="font-semibold">{selectedEvent.time}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="h-5 w-5 text-secondary" />
                                    <span>{selectedEvent.location}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-5 w-5 text-accent" />
                                    <span>{selectedEvent.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <User className="h-5 w-5 text-muted" />
                                    <span>{selectedEvent.speaker}</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-foreground">Description</h4>
                                <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};