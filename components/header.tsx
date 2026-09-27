"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { APPLY_FORM_URL } from "@/lib/constants";

const NAV_LINKS = [
    { label: "About", href: "/#about" },
    // { label: "Tracks", href: "/#tracks" },
    // { label: "Sponsors", href: "/#sponsors" },
    { label: "FAQs", href: "/#faqs" },
];

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
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

    // Lock body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 z-50 w-full [background:linear-gradient(to_bottom,rgba(4,12,14,0.9)_0%,rgba(4,12,14,0)_100%)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    visible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-10">
                    <Link
                        href="/"
                        className="transition-opacity duration-300 hover:opacity-80"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img
                            src="/images/logo-horizontal.png"
                            alt="HelloWorld logo"
                            className="w-28 h-auto object-contain sm:w-40"
                        />
                    </Link>

                    {/* desktop nav */}
                    <ul className="hidden items-center gap-6 sm:flex sm:gap-8">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label} className="group">
                                <Link
                                    href={href}
                                    className="relative font-mono text-xs font-bold uppercase tracking-[0.25em] text-foreground pixel-text-sm transition-colors duration-300 hover:text-primary"
                                >
                                    {label}
                                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-full -translate-x-1/2 scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href={APPLY_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-none border-2 border-primary/60 px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary pixel-shadow-sm transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                Apply
                            </Link>
                        </li>
                    </ul>

                    {/* mobile menu button — large tap target */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="flex h-11 w-11 items-center justify-center border-2 border-foreground/25 bg-background/60 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary sm:hidden"
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" strokeWidth={2.5} />
                        ) : (
                            <Menu className="h-6 w-6" strokeWidth={2.5} />
                        )}
                    </button>
                </nav>
            </header>

            {/* mobile menu — full-screen overlay so taps never hit content behind it */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-[60] flex flex-col bg-[rgba(4,12,14,0.98)] transition-all duration-300 sm:hidden ${
                    menuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    <img
                        src="/images/logo-horizontal.png"
                        alt="HelloWorld logo"
                        className="w-28 h-auto object-contain"
                    />
                    <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="flex h-11 w-11 items-center justify-center border-2 border-foreground/25 bg-background/60 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                        <X className="h-6 w-6" strokeWidth={2.5} />
                    </button>
                </div>
                <ul className="flex flex-1 flex-col items-center justify-center gap-10 px-6">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground pixel-text-sm transition-colors duration-300 hover:text-primary"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={APPLY_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="inline-block border-2 border-primary bg-primary px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground pixel-shadow"
                        >
                            Apply
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
