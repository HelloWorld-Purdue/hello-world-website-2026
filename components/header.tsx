import React from 'react';
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md dark:bg-black/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
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
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="ml-3">
                        <Link
                            href="/apply"
                            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                        >
                            Apply
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
