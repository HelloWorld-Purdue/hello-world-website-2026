import React from "react";

const stats = [
  { value: "500+", label: "Hackers" },
  { value: "$2,500", label: "In Prizes" },
  { value: "24", label: "Hours" },
  { value: "20+", label: "Mentors" },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16">
      {/* faint grain wash for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* asymmetric display heading */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:col-span-9 lg:text-7xl">
            The Midwest&apos;s largest
            <br />
            <span className="italic font-medium text-primary">beginner-friendly</span>{" "}
            hackathon.
          </h2>
          <div className="flex items-end justify-end lg:col-span-3 lg:pb-2">
            <img
              src="/images/logo.png"
              alt="HelloWorld logo"
              className="w-32 h-auto object-contain opacity-90 sm:w-40"
            />
          </div>
        </div>

        {/* pull-quote + body, split by a hairline */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-snug text-foreground/90 sm:text-3xl">
              &ldquo;A 24-hour coding marathon where ideas take their first breath.&rdquo;
            </p>
          </div>
          <div className="lg:col-span-7 lg:border-l lg:border-foreground/10 lg:pl-14">
            <p className="font-serif text-lg leading-relaxed text-foreground/70">
              Welcome to HelloWorld &mdash; built for the newcomer, the first-timer, the
              just-curious. Our mission is to empower students at the very start of their
              journey in tech. This is a level playing field: a place to learn, to
              experiment, and to bring a first big idea to life, surrounded by mentors
              who remember what it felt like to write line one.
            </p>
          </div>
        </div>

        {/* stat strip — masthead hairlines via gap-px trick */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-y border-foreground/15 bg-foreground/20 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative flex flex-col gap-3 bg-background/40 backdrop-blur-sm px-6 py-8 transition-colors duration-300 hover:bg-foreground/[0.04] sm:px-8 sm:py-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-5xl font-light leading-none text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-6xl">
                {s.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/60">
                {s.label}
              </span>
              {/* accent tick that grows on hover */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;