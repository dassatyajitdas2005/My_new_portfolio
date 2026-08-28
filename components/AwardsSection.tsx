"use client";

import * as React from "react";
import { Sparkle, Award } from "lucide-react";
import { awardsData } from "@/data/awards";

export function AwardsSection() {
  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center gap-2">
            <Sparkle className="h-4 w-4 text-highlight" />
            <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
              Recognition
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-medium tracking-tight text-text-primary md:text-5xl font-clash">
            Activities &amp; Highlights
          </h2>
          <p className="text-balance text-base text-text-secondary font-satoshi">
            Key milestones, student leadership positions, and academic dual-discipline achievements.
          </p>
        </div>

        {/* Right Column Horizontal List */}
        <div className="flex flex-col md:w-2/3">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="flex flex-wrap items-center justify-between gap-4 border-b border-bg-700 py-5 transition-colors duration-200 hover:border-bg-600"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B5FF6D]/10 text-highlight">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-satoshi text-base font-semibold text-text-primary sm:text-lg">
                    {award.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {award.organization}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="rounded-full bg-bg-800 px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                  {award.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
