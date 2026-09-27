import React from "react";

const stats = [
  { value: "400+", label: "Expected Hackers" },
  { value: "24", label: "Hours" },
  // { value: "650+", label: "Last Year" },
  { value: "20+", label: "Mentors" },
  { value: "150", label: "Projects Built" },
];

const About = () => {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-10 sm:py-28 lg:px-16">
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
          <h2 className="font-serif text-xl leading-[1.5] tracking-tight text-foreground pixel-text sm:text-3xl sm:leading-[1.4] lg:col-span-9 lg:text-4xl">
            The Midwest&apos;s largest
            <br />
            <span className="text-primary">beginner-friendly</span>{" "}
            hackathon.
          </h2>
          <div className="flex items-end justify-center lg:col-span-3 lg:pb-2">
            <img
              src="/images/logo.png"
              alt="HelloWorld logo"
              className="w-48 h-auto max-w-full sm:w-full"
            />
          </div>
        </div>

        {/* pull-quote + body, split by a hairline */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              &quot;Every technical career has a starting point. Students enter a new world and leave as builders.&quot;
            </p>
          </div>
          <div className="lg:col-span-7 lg:border-l-2 lg:border-foreground/15 lg:pl-14">
            <p className="font-sans text-xl leading-[1.6] text-foreground/75 sm:text-2xl sm:leading-relaxed">
              Welcome to Hello World 2026, built for the newcomer, the first-timer, the
              just-curious. Our mission is to lower the barrier to entry into tech. Many of our
              hackers are strong technical students who have never attended a hackathon before.
              This is a level playing field: a place to learn through hands-on workshops, connect
              with industry professionals, and bring a first big idea to life. Last year we
              welcomed over 650 students. By the end of the weekend, they had built
              and demoed their very first project.
            </p>
          </div>
        </div>

        {/* stat strip — chunky game-UI panels */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative flex flex-col gap-3 border-2 border-foreground/20 bg-background/70 backdrop-blur-sm px-4 py-6 pixel-shadow-sm transition-colors duration-300 hover:border-primary sm:px-8 sm:py-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl leading-none text-primary transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                {s.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;