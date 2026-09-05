"use client";

import * as React from "react";
import { SkillItem, skillsList } from "@/data/skills";
import {
  Activity,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface TechMarqueeProps {
  duration?: number;
  className?: string;
}

const renderSkillIcon = (skill: SkillItem) => {
  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        width={18}
        height={18}
        loading="lazy"
        decoding="async"
        className="h-4 w-4 object-contain shrink-0"
      />
    );
  }

  if (skill.name.includes("Health")) {
    return <Activity className="h-4 w-4 text-emerald-400 shrink-0" />;
  }
  if (skill.name.includes("Pharmacy")) {
    return <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />;
  }
  if (skill.name.includes("Business")) {
    return <TrendingUp className="h-4 w-4 text-blue-400 shrink-0" />;
  }
  return <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />;
};

export function TechMarquee({ duration = 40, className = "" }: TechMarqueeProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden py-4 ${className}`}
    >
      <div className="overflow-hidden">
        <div
          className="group flex w-max gap-3 p-2 overflow-hidden"
          style={{ "--duration": `${duration}s` } as React.CSSProperties}
        >
          {/* Track 1 */}
          <div className="flex shrink-0 animate-marquee flex-row items-center justify-around group-hover:[animation-play-state:paused]">
            {skillsList.map((skill, idx) => (
              <div
                key={`t1-${idx}`}
                className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-bg-600 hover:bg-bg-700/80 dark:bg-bg-800"
              >
                {renderSkillIcon(skill)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee flex-row items-center justify-around group-hover:[animation-play-state:paused]"
          >
            {skillsList.map((skill, idx) => (
              <div
                key={`t2-${idx}`}
                className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-bg-600 hover:bg-bg-700/80 dark:bg-bg-800"
              >
                {renderSkillIcon(skill)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
