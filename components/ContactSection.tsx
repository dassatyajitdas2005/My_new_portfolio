"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkle, Mail, Phone, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, InstagramIcon, XIcon } from "./Icons";

export function ContactSection() {
  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="reveal mb-4 flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-highlight" />
        <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
          Connect with me
        </span>
      </div>

      <h1 className="reveal reveal-delay-1 mb-8 w-full font-clash text-3xl font-medium tracking-tight text-text-primary md:w-2/3 md:text-6xl">
        Let&apos;s start a project together
      </h1>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {/* Form Column */}
        <div className="reveal reveal-delay-2 w-full lg:w-3/5">
          <ContactForm />
        </div>

        {/* Profile Card Column */}
        <div className="reveal reveal-delay-3 w-full lg:w-2/5">
          <div className="h-full rounded-3xl border border-bg-700 bg-bg-800 p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Availability Badge */}
              <div className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#B5FF6D]/15 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-highlight" />
                <p className="text-xs font-medium text-text-primary">
                  Available for opportunities
                </p>
              </div>

              {/* Avatar Profile Photo */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-bg-600 bg-bg-700 shadow-md shrink-0">
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-satoshi text-lg font-semibold text-text-primary">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {profileData.role}
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-text-secondary font-satoshi">
                My inbox is always open. Whether you have a health-tech project inquiry, business collaboration, or just want to say Hi, I would love to hear from you.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3 border-t border-bg-700/80 pt-5">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 text-xs text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-highlight shrink-0" />
                  <span>{profileData.email}</span>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3 text-xs text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-highlight shrink-0" />
                  <span>{profileData.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <MapPin className="h-4 w-4 text-highlight shrink-0" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3.5 border-t border-bg-700/80 pt-6">
              <a
                href={profileData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-bg-900 text-text-secondary transition-colors hover:border-bg-600 hover:text-text-primary"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-bg-900 text-text-secondary transition-colors hover:border-bg-600 hover:text-text-primary"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-bg-900 text-text-secondary transition-colors hover:border-bg-600 hover:text-text-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={profileData.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-bg-900 text-text-secondary transition-colors hover:border-bg-600 hover:text-text-primary"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Gmail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-bg-900 text-text-secondary transition-colors hover:border-bg-600 hover:text-text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
