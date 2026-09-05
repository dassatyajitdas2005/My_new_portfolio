"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkle, Download, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { TechMarquee } from "@/components/TechMarquee";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { AwardsSection } from "@/components/AwardsSection";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* About Profile Hero */}
      <section className="mx-auto max-w-screen-xl px-4 pt-6 sm:px-6 md:py-12 lg:px-8">
        <div className="flex flex-col items-center gap-12 sm:flex-row md:gap-16">
          {/* Left Avatar / Graphic Frame */}
          <div className="reveal relative flex w-full justify-center sm:w-1/2 sm:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[370px] lg:max-w-[390px]">
              {/* Arch Shaped Photo Container */}
              <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-b-full bg-bg-800 shadow-2xl">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 320px, 400px"
                />
              </div>

              {/* Floating "Let's Talk" Circular Rotating Badge */}
              <Link
                href="/contact"
                className="reveal reveal-delay-1 group absolute bottom-0 right-0 z-20 flex aspect-square w-[38%] max-w-[150px] min-w-[105px] items-center justify-center rounded-full border border-bg-700/80 bg-bg-800 p-2 shadow-2xl transition-transform duration-300 hover:scale-105"
                aria-label="Let's Talk"
              >
                {/* Rotating curved circular text */}
                <div className="absolute inset-0 flex items-center justify-center animate-[spin_12s_linear_infinite] group-hover:[animation-duration:6s]">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <path
                      id="letsTalkCircle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="fill-text-secondary text-[7.4px] font-medium tracking-[0.12em] uppercase">
                      <textPath
                        href="#letsTalkCircle"
                        startOffset="0%"
                        textLength="232"
                        lengthAdjust="spacing"
                      >
                        • LETS TALK • LETS TALK • LETS TALK • LETS TALK 
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner center circle with arrow */}
                <div className="relative flex h-[48%] w-[48%] items-center justify-center rounded-full border border-bg-600 bg-bg-900 transition-all duration-300 group-hover:border-highlight">
                  <ArrowUpRight className="h-4 w-4 text-text-primary transition-all duration-300 group-hover:rotate-45 group-hover:text-highlight sm:h-5 sm:w-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full space-y-6 sm:w-1/2">
            <div className="reveal flex items-center gap-2">
              <Sparkle className="h-4 w-4 text-highlight" />
              <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
                Biography &amp; Vision
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-balance font-clash text-3xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              I Build Things <span className="text-highlight">That Matter.</span>
            </h1>

            <p className="reveal reveal-delay-2 text-pretty text-base leading-relaxed text-text-secondary font-satoshi sm:text-lg">
              {profileData.aboutDescription}
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-[0.98] font-clash"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>
              <a
                href={profileData.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-6 py-3.5 text-sm font-semibold text-text-primary transition-all hover:bg-bg-700 active:scale-[0.98] font-clash"
              >
                Online Portfolio
                <ArrowUpRight className="h-4 w-4 text-highlight" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee Strip */}
      <div className="border-y border-bg-700 py-6">
        <TechMarquee />
      </div>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Awards & Recognition Section */}
      <AwardsSection />

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
