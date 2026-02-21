import React from "react";

/**
 * Footer component with a sponsor strip.
 *
 * Props:
 * - sponsorLogoSrc: string — path/URL to the SFAB logo image
 * - sponsorHref: string — optional link to SFAB site (defaults to '#')
 *
 * Usage:
 * <Footer sponsorLogoSrc="/images/sfab-logo.svg" sponsorHref="https://example.com" />
 */
export default function Footer({ sponsorLogoSrc = "/images/sfab.jpg", sponsorHref = "#" }) {
    return (
        <footer className="bg-gradient-to-br from-background to-muted text-background py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    HelloWorld
                </h3>
                <p className="text-muted-foreground mb-8">Building the future, one hack at a time.</p>

                {/* Sponsor strip */}
                <div className="mt-2 flex flex-col items-center gap-3">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">Sponsored by Purdue's SFAB</span>
                    <a href={sponsorHref} aria-label="SFAB" className="inline-flex items-center justify-center">
                        <img
                            src={sponsorLogoSrc}
                            alt="SFAB logo"
                            className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                    {/* subtle divider */}
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Social links */}
                <div className="mt-6 flex justify-center flex-wrap gap-8">
                    <a
                        href="https://www.instagram.com/helloworldpurdue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                        Instagram
                    </a>
                    <a href="https://discord.gg/HRqTg8z2" className="text-muted-foreground hover:text-primary transition-colors">
                        Discord
                    </a>
                </div>
            </div>
        </footer>
    );
}
