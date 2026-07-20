"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";

export default function Header() {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            window.requestAnimationFrame(() => {
                const currentY = window.scrollY;
                const delta = currentY - lastScrollY.current;
                // Only toggle after scrolling past a small threshold so it
                // doesn't flicker near the top.
                if (currentY < 80) {
                    setVisible(true);
                } else if (delta < -2) {
                    // scrolling up
                    setVisible(true);
                } else if (delta > 2) {
                    // scrolling down
                    setVisible(false);
                }
                lastScrollY.current = currentY;
                ticking.current = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        //change rgba for opacity
        <header
            className={`fixed top-0 z-50 w-full [background:linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-10">
                <Link
                    href="/"
                    className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 hover:text-primary sm:text-3xl"
                >
                    Hello<span className="text-primary">World</span>
                </Link>
                <ul className="flex items-center gap-6 sm:gap-8">
                    {[
                        { label: "About", href: "#about" },
                        { label: "Tracks", href: "#tracks" },
                        { label: "Sponsors", href: "#sponsors" },
                        { label: "FAQs", href: "#faqs" },
                        { label: "Schedule", href: "/schedule" },
                    ].map(({ label, href }) => (
                        <li key={label} className="group">
                            <Link
                                href={href}
                                className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 transition-colors duration-300 hover:text-foreground"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    ))}
                    <li className="ml-2">
                        <Link
                            href="https://tally.so/r/81gKBY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative font-mono text-[11px] uppercase tracking-[0.3em] text-primary transition-colors duration-300 hover:text-foreground"
                        >
                            Apply
                            <span className="absolute -bottom-1 left-0 h-px w-full bg-primary transition-all duration-500 group-hover:w-0" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
