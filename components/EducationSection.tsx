"use client";

import * as React from "react";
import { Sparkle, GraduationCap, Cross, School, BookOpen } from "lucide-react";
import { educationData, Education } from "@/data/education";

const getEducationIcon = (type: Education["iconType"]) => {
  switch (type) {
    case "graduation":
      return <GraduationCap className="h-6 w-6 text-highlight" />;
    case "pharmacy":
      return <Cross className="h-6 w-6 text-highlight" />;
    case "school":
      return <School className="h-6 w-6 text-highlight" />;
    case "book":
    default:
      return <BookOpen className="h-6 w-6 text-highlight" />;
  }
};

export function EducationSection() {
  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="mb-4 flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-highlight" />
        <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
          My Education
        </span>
      </div>

      {/* Headings */}
      <h2 className="mb-4 text-3xl font-medium tracking-tight text-text-primary md:text-5xl font-clash">
        Academic Journey
      </h2>
      <p className="mb-10 text-pretty text-base text-text-secondary font-satoshi">
        My educational foundation combining pharmaceutical sciences, business administration, and quantitative sciences.
      </p>

      {/* Grid of Education Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col justify-between rounded-3xl border border-bg-700 bg-bg-800/80 p-6 shadow-sm transition-all duration-300 hover:border-bg-600 hover:shadow-md"
          >
            <div>
              {/* Icon Badge */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-bg-600 bg-bg-700/80">
                {getEducationIcon(edu.iconType)}
              </div>

              {/* Institution & Degree */}
              <h4 className="font-satoshi text-lg font-semibold text-text-primary sm:text-xl">
                {edu.institution}
              </h4>
              <p className="mt-1 text-sm font-medium text-highlight">
                {edu.degree}
              </p>
              <p className="mt-0.5 text-xs text-text-secondary font-satoshi">
                {edu.field}
              </p>
            </div>

            <div className="mt-6 border-t border-bg-700/60 pt-4">
              <p className="text-xs font-medium text-text-primary">{edu.period}</p>
              <p className="text-xs text-text-secondary">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
