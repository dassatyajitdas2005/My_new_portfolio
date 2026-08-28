"use client";

import * as React from "react";
import { Sparkle, ChevronDown, Briefcase, Building2, Video, Users } from "lucide-react";
import { experienceData } from "@/data/experience";

const getCompanyIcon = (company: string) => {
  if (company.includes("NeedMet")) return <Building2 className="h-5 w-5 text-highlight" />;
  if (company.includes("YouTube") || company.includes("Rental"))
    return <Video className="h-5 w-5 text-highlight" />;
  if (company.includes("CATALYST")) return <Users className="h-5 w-5 text-highlight" />;
  return <Briefcase className="h-5 w-5 text-highlight" />;
};

export function ExperienceSection() {
  const [openId, setOpenId] = React.useState<string | null>(experienceData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left Info Column */}
        <div className="w-full lg:w-1/3">
          <div className="mb-4 flex items-center gap-2">
            <Sparkle className="h-4 w-4 text-highlight" />
            <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
              Work History
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-medium tracking-tight text-text-primary md:text-5xl font-clash">
            Experience
          </h2>
          <p className="text-balance text-base text-text-secondary font-satoshi">
            My professional journey spanning business data listing, promotional video production, health-tech innovation, and student leadership.
          </p>
        </div>

        {/* Right Experiences Column */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4">
            {experienceData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-bg-700 bg-bg-800/80 transition-all duration-300 hover:border-bg-600"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bg-600 bg-bg-700">
                        {getCompanyIcon(item.company)}
                      </div>
                      <div>
                        <h4 className="font-satoshi text-base font-semibold text-text-primary sm:text-lg">
                          {item.role}
                        </h4>
                        <p className="text-xs text-text-secondary sm:text-sm">
                          <span className="font-medium text-text-primary">
                            @{item.company}
                          </span>{" "}
                          • {item.period} ({item.duration})
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-text-secondary transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-highlight" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-bg-700/80 px-6 pb-6 pt-4 animate-accordion-down">
                      <p className="text-sm leading-relaxed text-text-secondary font-satoshi">
                        {item.description}
                      </p>

                      <div className="mt-4">
                        <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-text-primary">
                          Key Responsibilities & Highlights
                        </h5>
                        <ul className="space-y-1.5">
                          {item.achievements.map((ach, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-text-secondary sm:text-sm"
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-bg-700 px-3 py-1 text-xs text-text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
