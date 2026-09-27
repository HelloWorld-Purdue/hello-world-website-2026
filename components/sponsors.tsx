import React from "react";

const SPONSORS = [
  "openai", "google", "nvidia", "tesla", "vercel",
  "groq", "mistral", "elevenlabs", "langchain", "perplexity",
  "codegen", "codeium", "cartesia", "chroma", "context",
  "dain", "de-shaw", "delve", "ecopreneurship", "eigen-layer",
  "elastic", "flutterflow", "hrt", "intersystems", "liquid",
  "luma", "modal", "neo", "orbstack", "otsuka-valuenex",
  "paradigm", "pear", "rox", "scrapybara", "taisu",
  "terra", "vespa", "warp", "zoom",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative px-4 py-16 sm:px-10 sm:py-28 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* asymmetric display heading */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-serif text-xl leading-[1.5] tracking-tight text-foreground pixel-text sm:text-3xl sm:leading-[1.4] lg:col-span-9 lg:text-4xl">
            Built with our{" "}
            <span className="text-primary">sponsors</span>.
          </h2>
          <p className="flex items-end font-sans text-xl leading-[1.6] text-foreground/60 sm:leading-relaxed lg:col-span-3 lg:pb-2">
            Free for every hacker, thanks to the companies backing this event.
          </p>
        </div>

        {/* chunky-ruled sponsor grid */}
        <div className="mt-16 grid grid-cols-3 border-t-2 border-l-2 border-foreground/20 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {SPONSORS.map((slug) => (
            <div
              key={slug}
              className="group flex items-center justify-center border-b-2 border-r-2 border-foreground/20 p-4 sm:p-8 transition-colors duration-300 hover:bg-foreground/[0.04]"
            >
              <img
                src={`/sponsors/${slug}.png`}
                alt={slug}
                className="h-7 w-auto object-contain brightness-0 invert opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(217,255,143,0.4)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}