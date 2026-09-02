"use client";

import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

export function CTASection() {
  return (
    <section className="mx-auto my-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center rounded-3xl border border-bg-700 bg-bg-800 px-6 py-16 text-center shadow-sm sm:px-12 sm:py-20">
        {/* Availability Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-[#B5FF6D]/15 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-highlight" />
          <p className="text-xs font-semibold text-text-primary">
            Available for work &amp; collaboration
          </p>
        </div>

        {/* Large Text */}
        <h2 className="mb-8 max-w-2xl font-clash text-3xl font-medium tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          Let&apos;s create your next big idea.
        </h2>

        {/* Action Button */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-[0.98] font-clash"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Social Links */}
        <div className="mt-8 flex items-center gap-6 text-text-secondary sm:hidden">
          <a
            href={profileData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-text-primary transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-text-primary transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profileData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-text-primary transition-colors"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="hover:text-text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
