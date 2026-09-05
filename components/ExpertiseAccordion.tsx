"use client";

import * as React from "react";
import { Sparkle, ChevronDown, Activity, Code, Film, TrendingUp, Check } from "lucide-react";
import { expertiseAreas, ExpertiseArea } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="h-5 w-5 text-highlight" />,
  Code: <Code className="h-5 w-5 text-highlight" />,
  Film: <Film className="h-5 w-5 text-highlight" />,
  TrendingUp: <TrendingUp className="h-5 w-5 text-highlight" />,
};

export function ExpertiseAccordion() {
  const [activeId, setActiveId] = React.useState<string>(expertiseAreas[0].id);

  const activeExpertise =
    expertiseAreas.find((item) => item.id === activeId) || expertiseAreas[0];

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="reveal mb-4 flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-highlight" />
        <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
          Speciality
        </span>
      </div>

      <h2 className="reveal reveal-delay-1 mb-8 text-3xl font-medium tracking-tight text-text-primary md:text-5xl font-clash">
        Areas of Expertise
      </h2>

      <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
        {/* Left Accordion Column */}
        <div className="reveal w-full space-y-3.5 lg:w-1/2">
          {expertiseAreas.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-highlight/40 bg-bg-800 shadow-sm"
                    : "border-bg-700 bg-bg-800/60 hover:border-bg-600"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="flex w-full items-center justify-between p-5 text-left font-satoshi text-base font-medium text-text-primary transition-colors"
                >
                  <span className="flex items-center gap-3.5">
                    {iconMap[item.icon]}
                    <span className="text-base font-semibold sm:text-lg">
                      {item.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-highlight" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-bg-700/60 px-5 pb-5 pt-3 animate-accordion-down">
                    <p className="text-sm leading-relaxed text-text-secondary font-satoshi">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-bg-700 px-3 py-1 text-xs font-medium text-text-primary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Preview Card */}
        <div className="reveal reveal-delay-2 relative aspect-video w-full overflow-hidden rounded-3xl border border-bg-700 bg-bg-800 p-6 shadow-xl lg:w-1/2 flex flex-col justify-between">
          {/* Subtle Background Glow */}
          <div
            className={`pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-gradient-to-br ${activeExpertise.accent} blur-3xl opacity-50`}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#B5FF6D]/15 px-3 py-1 text-xs font-semibold text-highlight">
                Featured Specialty
              </span>
            </div>

            <h3 className="mt-3 font-clash text-2xl font-semibold text-text-primary sm:text-3xl">
              {activeExpertise.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-text-secondary sm:text-sm">
              {activeExpertise.tagline}
            </p>
          </div>

          {/* Capabilities List */}
          <div className="relative z-10 my-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Core Competencies
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {activeExpertise.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-text-secondary sm:text-sm font-satoshi"
                >
                  <Check className="h-4 w-4 shrink-0 text-highlight" />
                  <span className="truncate">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pills */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 border-t border-bg-700/60 pt-4">
            <span className="text-xs text-text-muted">Frameworks & Methods:</span>
            {activeExpertise.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-bg-700 bg-bg-900/80 px-2.5 py-0.5 text-xs text-text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
