"use client";

import * as React from "react";
import Link from "next/link";
import { Hand, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section className="mx-auto my-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 max-sm:my-4">
      {/* Greeting */}
      <div className="mb-6 flex items-center gap-2 text-text-primary">
        <span className="wave text-highlight">
          <Hand className="h-6 w-6 text-highlight" />
        </span>
        <p className="text-base font-medium sm:text-lg">{profileData.heroGreeting}</p>
      </div>

      {/* Main Headline */}
      <div>
        <h1 className="text-pretty font-clash text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:w-4/5 lg:text-7xl">
          {profileData.heroHeadline1}{" "}
          <span className="text-highlight">{profileData.heroHeadlineAccent}</span>{" "}
          {profileData.heroHeadline2}
        </h1>
      </div>

      {/* Separator + Description */}
      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="h-[1px] w-full bg-bg-700 md:w-1/3" />
        <p className="w-full text-pretty text-base text-text-secondary md:w-2/3 md:text-lg font-satoshi">
          {profileData.heroDescription}
        </p>
      </div>

      {/* Social Links + CTA Button */}
      <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <ul className="flex flex-wrap items-center gap-6">
          {profileData.socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {social.name}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-[0.98] font-clash"
          >
            Know me better
          </Link>
        </div>
      </div>
    </section>
  );
}
