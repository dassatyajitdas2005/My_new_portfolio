"use client";

import * as React from "react";
import { Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, InstagramIcon, XIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 pb-24 sm:pb-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-bg-700 pt-6 sm:flex-row">
        <p className="text-center text-xs text-text-secondary sm:text-left sm:text-sm font-satoshi">
          © {currentYear} {profileData.name}. All rights reserved.
        </p>

        <div className="hidden sm:flex items-center gap-6 text-text-secondary">
          <a
            href={profileData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-text-primary transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-text-primary transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profileData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-text-primary transition-colors"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={profileData.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-text-primary transition-colors"
          >
            <XIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Gmail"
            className="hover:text-text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
