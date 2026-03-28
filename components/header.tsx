import React from 'react';
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
                >
                    Hello World
                </Link>
                <ul className="flex items-center gap-1">
                    {[
                        { label: "About", href: "#about" },
                        { label: "Tracks", href: "#tracks" },
                        { label: "Sponsors", href: "#sponsors" },
                        { label: "FAQs", href: "#faqs" },
                        { label: "Schedule", href: "/schedule" },
                    ].map(({ label, href }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="ml-3">
                        <Link
                            href="https://tally.so/r/eqLOPo"
                            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
                        >
                            Apply
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
