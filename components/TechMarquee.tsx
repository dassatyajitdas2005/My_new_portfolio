"use client";

import * as React from "react";
import { skillsList } from "@/data/skills";
import {
  Code,
  Layers,
  Cpu,
  Sparkles,
  FileSpreadsheet,
  Video,
  Database,
  Globe,
  Layout,
  Palette,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  JavaScriptIcon,
  FirebaseIcon,
  EmailJSIcon,
} from "./Icons";

interface TechMarqueeProps {
  duration?: number;
  className?: string;
}

const getIcon = (name: string) => {
  if (name === "JavaScript" || name.includes("JavaScript"))
    return <JavaScriptIcon className="h-4 w-4 text-highlight" />;
  if (name === "Firebase" || name.includes("Firebase"))
    return <FirebaseIcon className="h-4 w-4 text-highlight" />;
  if (name === "EmailJS" || name.includes("EmailJS"))
    return <EmailJSIcon className="h-4 w-4 text-highlight" />;
  if (name.includes("Web") || name.includes("React") || name.includes("Next"))
    return <Globe className="h-4 w-4 text-highlight" />;
  if (name.includes("Health") || name.includes("Pharmacy"))
    return <ShieldCheck className="h-4 w-4 text-highlight" />;
  if (name.includes("CapCut") || name.includes("Video"))
    return <Video className="h-4 w-4 text-highlight" />;
  if (name.includes("Design") || name.includes("Poster"))
    return <Palette className="h-4 w-4 text-highlight" />;
  if (name.includes("Sheets") || name.includes("Data"))
    return <FileSpreadsheet className="h-4 w-4 text-highlight" />;
  if (name.includes("TypeScript"))
    return <Code className="h-4 w-4 text-highlight" />;
  if (name.includes("Tailwind") || name.includes("HTML"))
    return <Layout className="h-4 w-4 text-highlight" />;
  if (name.includes("Git"))
    return <Terminal className="h-4 w-4 text-highlight" />;
  return <Sparkles className="h-4 w-4 text-highlight" />;
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
                className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-xs font-medium text-text-primary shadow-sm transition-colors hover:border-bg-600 dark:bg-bg-800"
              >
                {getIcon(skill.name)}
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
                className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-xs font-medium text-text-primary shadow-sm transition-colors hover:border-bg-600 dark:bg-bg-800"
              >
                {getIcon(skill.name)}
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
