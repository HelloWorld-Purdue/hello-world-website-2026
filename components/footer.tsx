import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 text-white text-center">
            <h3 className="text-3xl font-bold mb-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">HelloWorld</h3>
            <p className="text-white/50 text-sm mb-8 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">Building the future, one hack at a time.</p>

            <div className="h-px w-24 bg-white/15 mx-auto mb-6" />

            <div className="flex justify-center gap-8">
                <a
                    href="https://www.instagram.com/helloworldpurdue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="text-white/50 hover:text-white transition-colors text-sm"
                >
                    Instagram
                </a>
                <a href="https://discord.gg/HRqTg8z2" className="text-white/50 hover:text-white transition-colors text-sm">
                    Discord
                </a>
            </div>
        </footer>
    );
}
