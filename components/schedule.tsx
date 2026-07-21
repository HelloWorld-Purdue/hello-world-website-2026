"use client";

import { useState } from "react";
import { Clock, MapPin, User } from "lucide-react";

type ScheduleEvent = {
  time: string;
  title: string;
  location: string;
  category: string;
  speaker?: string;
  description?: string;
};

type Day = {
  label: string;
  date: string;
  events: ScheduleEvent[];
};

const SCHEDULE: Day[] = [
  {
    label: "Day One",
    date: "Saturday, Feb 21",
    events: [
      {
        time: "9:00 AM",
        title: "Check-in & Breakfast",
        location: "Lawson Commons",
        category: "Logistics",
        description:
          "Grab your badge, pick up swag, and fuel up. First-timers, look for a mentor in a green shirt — they're here to help you land.",
      },
      {
        time: "10:30 AM",
        title: "Opening Ceremony",
        location: "Fowler Hall",
        category: "Ceremony",
        speaker: "HelloWorld Team",
        description:
          "Kick off the weekend. We'll walk through the tracks, the rules, prizes, and everything you need to know before hacking begins.",
      },
      {
        time: "12:00 PM",
        title: "Hacking Begins",
        location: "Lawson Commons",
        category: "Milestone",
        description: "The clock starts. Form your team, pick a track, and start building.",
      },
      {
        time: "12:30 PM",
        title: "Intro to Git & GitHub",
        location: "Room 1142",
        category: "Workshop",
        speaker: "Mentor Team",
        description:
          "Never used version control? Start here. We'll cover commits, branches, and pushing your first project live.",
      },
      {
        time: "1:00 PM",
        title: "Lunch",
        location: "Lawson Commons",
        category: "Meal",
      },
      {
        time: "3:00 PM",
        title: "Building Your First Web App",
        location: "Room 1142",
        category: "Workshop",
        speaker: "Mentor Team",
        description:
          "A hands-on crash course in going from a blank page to something running in the browser.",
      },
      {
        time: "6:30 PM",
        title: "Dinner",
        location: "Lawson Commons",
        category: "Meal",
      },
      {
        time: "9:00 PM",
        title: "Midnight Games & Snacks",
        location: "Lawson Atrium",
        category: "Fun",
        description: "Step away from the keyboard. Games, prizes, and a caffeine refill to keep you going.",
      },
    ],
  },
  {
    label: "Day Two",
    date: "Sunday, Feb 22",
    events: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        location: "Lawson Commons",
        category: "Meal",
      },
      {
        time: "11:00 AM",
        title: "Submissions Due",
        location: "Devpost",
        category: "Milestone",
        description:
          "Projects lock at 11 AM sharp. Make sure your Devpost is submitted with a demo video and repo link.",
      },
      {
        time: "11:30 AM",
        title: "Project Expo & Judging",
        location: "Lawson Commons",
        category: "Ceremony",
        description:
          "Set up at your table and walk judges through what you built. Every team demos — this is the fun part.",
      },
      {
        time: "1:30 PM",
        title: "Closing Ceremony & Awards",
        location: "Fowler Hall",
        category: "Ceremony",
        speaker: "HelloWorld Team",
        description: "Winners announced, prizes handed out, and a send-off for your first hackathon.",
      },
      {
        time: "2:30 PM",
        title: "Wrap-up & Cleanup",
        location: "Lawson Commons",
        category: "Logistics",
      },
    ],
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const day = SCHEDULE[activeDay];

  return (
    <section id="schedule" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* day switcher */}
        <div className="mt-12 flex items-center gap-8 border-b border-foreground/15">
          {SCHEDULE.map((d, i) => {
            const isActive = i === activeDay;
            return (
              <button
                key={d.label}
                onClick={() => setActiveDay(i)}
                aria-pressed={isActive}
                className="group relative -mb-px flex flex-col gap-1 pb-5 text-left"
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif text-2xl font-light tracking-tight transition-colors duration-300 sm:text-3xl ${
                    isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/70"
                  }`}
                >
                  {d.label}
                </span>
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-foreground/50" : "text-foreground/25"
                  }`}
                >
                  {d.date}
                </span>
                {/* active underline */}
                <span
                  className={`absolute -bottom-px left-0 h-px bg-primary transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* timetable */}
        <ol className="mt-4">
          {day.events.map((event, i) => (
            <li
              key={`${day.label}-${i}`}
              className="group relative grid gap-4 border-b border-foreground/15 px-2 py-8 transition-colors duration-500 hover:bg-foreground/[0.04] sm:px-4 lg:grid-cols-12 lg:gap-10"
            >
              {/* accent tick that grows on hover */}
              <span className="absolute top-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />

              {/* time */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 font-mono text-lg tabular-nums text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  <Clock className="h-4 w-4 text-foreground/50 transition-colors duration-300 group-hover:text-primary" />
                  {event.time}
                </div>
                <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {event.category}
                </span>
              </div>

              {/* details */}
              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl font-light leading-tight tracking-tight text-foreground sm:text-3xl">
                  {event.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                  {event.speaker && (
                    <span className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5" />
                      {event.speaker}
                    </span>
                  )}
                </div>
                {event.description && (
                  <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:text-foreground/85">
                    {event.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* discord note */}
        <p className="mt-14 max-w-2xl font-serif text-lg leading-relaxed text-foreground/60">
          Everything live — announcements, room changes, last-minute workshops — goes out in our{" "}
          <a
            href="https://discord.gg/HRqTg8z2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 transition-colors duration-300 hover:underline"
          >
            official Discord
          </a>
          . Keep it open all weekend.
        </p>
      </div>
    </section>
  );
}
