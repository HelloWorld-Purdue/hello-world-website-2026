import React from "react";
import { HeartPulse, Leaf, GraduationCap, Clapperboard } from "lucide-react";

const TRACKS = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Explore how technology can improve the way people manage, access, and experience care. From wellness monitoring to tools that support underserved patients, this track invites you to prototype solutions that put people's health first.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Design projects that rethink how we interact with our environment and communities. Whether you're focused on reducing everyday waste, promoting conscious consumption, or strengthening local ecosystems, bring an idea that moves us toward a more responsible future.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Build tools that change how knowledge reaches people. This track is about removing barriers, sparking curiosity, and creating pathways for learners who might not have had access to the right tools or opportunities.",
  },
  {
    icon: Clapperboard,
    title: "Entertainment",
    description:
      "Craft an engaging experience at the intersection of technology and creative expression. Games, audio, visuals, interactive narratives, or something no one's thought of yet.",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* asymmetric display heading */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:col-span-9 lg:text-7xl">
            Four tracks,
            <br />
            <span className="italic font-medium text-primary">one weekend</span>{" "}
            to build.
          </h2>
          <p className="flex items-end font-serif text-base leading-relaxed text-foreground/60 lg:col-span-3 lg:pb-2">
            Pick a direction, form a team, and spend 24 hours prototyping something that matters.
          </p>
        </div>

        {/* hairline-ruled track list */}
        <div className="mt-16 border-t border-foreground/15">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
            <div
              key={track.title}
              className="group relative grid gap-6 border-b border-foreground/15 px-4 py-8 transition-colors duration-500 hover:bg-foreground/[0.04] sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              {/* accent tick that grows on hover */}
              <span className="absolute top-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />

              {/* icon + title */}
              <div className="lg:col-span-4">
                <Icon className="h-8 w-8 text-foreground/80 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary" />
                <h3 className="mt-5 font-serif text-3xl font-light leading-[0.95] tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {track.title}
                </h3>
              </div>

              {/* description */}
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-serif text-lg leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:text-foreground/85 sm:text-xl">
                  {track.description}
                </p>
              </div>

            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}