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
        <footer className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">

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
            <div className="mt-6 text-muted-foreground text-center">
                Made with ❤️ by the HelloWorld2026 team
            </div>
        </footer>
    );
}
