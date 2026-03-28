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
    <section id="sponsors" className="w-full py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-foreground text-6xl font-bold mb-6">
            Sponsors
          </h2>
          <div className="w-24 h-px bg-primary/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-x-8 gap-y-8 items-center justify-items-center">
          {SPONSORS.map((slug) => (
            <img
              key={slug}
              src={`/sponsors/${slug}.png`}
              alt={slug}
              className="h-8 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-[0_0_10px_rgba(116,255,167,0.22)] hover:opacity-100 transition-opacity duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
