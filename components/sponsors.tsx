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
    <section id="sponsors" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* asymmetric display heading */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:col-span-9 lg:text-7xl">
            Built with our{" "}
            <span className="italic font-medium text-primary">sponsors</span>.
          </h2>
          <p className="flex items-end font-serif text-base leading-relaxed text-foreground/60 lg:col-span-3 lg:pb-2">
            Free for every hacker, thanks to the companies backing this event.
          </p>
        </div>

        {/* hairline-ruled sponsor grid */}
        <div className="mt-16 grid grid-cols-3 border-t border-l border-foreground/15 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {SPONSORS.map((slug) => (
            <div
              key={slug}
              className="group flex items-center justify-center border-b border-r border-foreground/15 p-8 transition-colors duration-300 hover:bg-foreground/[0.04]"
            >
              <img
                src={`/sponsors/${slug}.png`}
                alt={slug}
                className="h-7 w-auto object-contain brightness-0 invert opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(116,255,167,0.28)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}