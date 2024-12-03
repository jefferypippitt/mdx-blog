"use client";

import React, { useState } from "react";
import { TransitionPanel } from "./transition-panel";

const frontendSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "shadcn/ui",
  "Framer Motion",
  "Next View Transitions",
  "Tailwind CSS",
  "Magic UI",
  "Syntax UI",
  "Radix UI",
  "motion-primitives",
];

const backendSkills = [
  "Prisma",
  "Drizzle",
  "Vercel",
  "Neon",
  "PostgreSQL",
  "Supabase",
  "Convex",
  "Python",
  "Linux",
];

const developmentTools = [
  "GitHub",
  "Git",
  "Cursor",
  "VSCode",
  "Vercel",
  "Swift",
  "Notion",
  "v0",
  "MDX",
];

const apiServices = [
  "Authjs",
  "Clerk",
  "Kinde",
  "Better-Auth",
  "Stripe",
  "Resend",
  "MUX",
  "Claude",
  "GPT",
  "Uploadthing",
];

const SKILLS = [
  { title: "Frontend & UI", content: frontendSkills },
  { title: "Backend & Infrastructure", content: backendSkills },
  { title: "Development Tools", content: developmentTools },
  { title: "APIs & Services", content: apiServices },
];

const buttonStyles = {
  active: "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  inactive:
    "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-600",
};

const transitionVariants = {
  enter: { opacity: 0, y: -20, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: 20, filter: "blur(4px)" },
};

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="flex flex-col">
        <div className="mb-2 flex flex-wrap gap-1">
          {SKILLS.map((skill, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded px-2 py-0.5 text-sm font-medium transition-colors ${
                activeIndex === index
                  ? buttonStyles.active
                  : buttonStyles.inactive
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            variants={transitionVariants}
          >
            {SKILLS.map((skill, index) => (
              <div key={index} className="py-2">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {skill.content.join(", ")}
                </p>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </section>
  );
}
