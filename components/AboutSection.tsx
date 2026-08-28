"use client";

import * as React from "react";
import { Sparkle } from "lucide-react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const words = profileData.aboutStatement.split(" ");

  return (
    <section className="mx-auto my-28 max-w-screen-xl px-4 sm:px-6 lg:px-8 max-sm:my-16">
      {/* Category Pill with Shine */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <Sparkle className="h-4 w-4 text-highlight" />
        <span
          className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine"
        >
          About me
        </span>
      </div>

      {/* Large Statement */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-balance font-satoshi text-2xl font-medium leading-relaxed text-text-secondary sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-[1.4]">
          {words.map((word, i) => {
            const isHighlight =
              word.includes("Satyajit") ||
              word.includes("Pharmacy") ||
              word.includes("MediTrack") ||
              word.includes("health-tech") ||
              word.includes("development") ||
              word.includes("innovation");

            return (
              <span
                key={i}
                className={`inline-block mr-1.5 transition-colors duration-200 ${
                  isHighlight
                    ? "text-text-primary font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
