"use client";

import * as React from "react";
import { Sparkle } from "lucide-react";

interface MarqueeProps {
  items?: string[];
  duration?: number;
  className?: string;
}

const defaultItems = [
  "Health-Tech",
  "Web Development",
  "Pharmacy Systems",
  "Business Strategy",
  "UI/UX Design",
  "Video Marketing",
  "Data Analytics",
  "Creative Direction",
  "Health-Tech",
  "Web Development",
  "Pharmacy Systems",
  "Business Strategy",
];

export function Marquee({
  items = defaultItems,
  duration = 45,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden border-y border-bg-700 py-4 my-20 max-sm:my-10 ${className}`}
    >
      <div className="overflow-hidden">
        <div
          className="group flex w-max gap-6 p-2 overflow-hidden"
          style={{ "--duration": `${duration}s` } as React.CSSProperties}
        >
          {/* Loop 1 */}
          <div className="flex shrink-0 animate-marquee flex-row items-center justify-around group-hover:[animation-play-state:paused]">
            {items.map((item, idx) => (
              <div key={`m1-${idx}`} className="me-6 flex items-center gap-6">
                <h2 className="text-3xl font-medium tracking-tight text-bg-600 sm:text-5xl font-clash">
                  {item}
                </h2>
                <Sparkle className="h-6 w-6 text-bg-600" />
              </div>
            ))}
          </div>

          {/* Loop 2 for seamless infinite scroll */}
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee flex-row items-center justify-around group-hover:[animation-play-state:paused]"
          >
            {items.map((item, idx) => (
              <div key={`m2-${idx}`} className="me-6 flex items-center gap-6">
                <h2 className="text-3xl font-medium tracking-tight text-bg-600 sm:text-5xl font-clash">
                  {item}
                </h2>
                <Sparkle className="h-6 w-6 text-bg-600" />
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
