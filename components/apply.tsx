import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Apply = () => {
  return (
    <section id="apply" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ready to build?
          <br />
          <span className="italic font-medium text-primary">Apply now.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md font-serif text-lg leading-relaxed text-foreground/60">
          Applications take under five minutes. No experience required.
        </p>
        <a
          href="https://tally.so/r/eqLOPo"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-serif text-lg font-medium tracking-tight text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_-8px_rgba(116,255,167,0.45)]"
        >
          Apply to HelloWorld
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Apply;