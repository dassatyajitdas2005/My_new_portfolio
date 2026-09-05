"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Take top 4 featured projects for home showcase
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section className="mx-auto my-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="reveal mb-4 flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-highlight" />
        <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
          My Work
        </span>
      </div>

      {/* Headings */}
      <div className="reveal reveal-delay-1">
        <h2 className="text-3xl font-medium tracking-tight text-text-primary md:text-5xl font-clash">
          Selected Projects
        </h2>
        <p className="mt-2 text-pretty text-base text-text-secondary font-satoshi">
          Here&apos;s a curated selection showcasing my health-tech developments, digital operations, and media solutions.
        </p>
      </div>

      {/* Project Grid with Staggered 2nd Column */}
      <div className="grid grid-cols-1 gap-y-10 py-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-14">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            stagger={idx % 2 === 1}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="reveal flex items-center justify-center pb-8 pt-4">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-[0.98] font-clash"
        >
          View All Projects
        </Link>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
