import React from "react";
import { ArrowUpRight } from "lucide-react";
import { APPLY_FORM_URL } from "@/lib/constants";

const Apply = () => {
  return (
    <section id="apply" className="relative px-4 py-16 sm:px-10 sm:py-28 lg:px-16">
      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-xl leading-[1.5] tracking-tight text-foreground pixel-text sm:text-3xl sm:leading-[1.4] lg:text-4xl">
          Ready to build?
          <br />
          <span className="text-primary">Apply now.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md font-sans text-xl leading-[1.6] text-foreground/60 sm:text-2xl sm:leading-relaxed">
          Applications take under five minutes. No experience required.
        </p>
        <a
          href={APPLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-4 font-serif text-sm leading-relaxed text-primary-foreground pixel-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(0,0,0,0.55)]"
        >
          Apply to HelloWorld
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Apply;