"use client";

import * as React from "react";
import { Sparkle } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { CTASection } from "@/components/CTASection";

const categories = ["All", "Health-Tech", "Development", "Media & Strategy"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="mx-auto my-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="mb-4 flex items-center gap-2">
          <Sparkle className="h-4 w-4 text-highlight" />
          <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
            My Work
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-8 w-full font-clash text-3xl font-medium tracking-tight text-text-primary md:w-2/3 md:text-6xl">
          Creating next level digital products
        </h1>

        {/* Category Filters */}
        <div className="no-visible-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-4 sm:justify-end">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow"
                    : "border border-bg-700 bg-bg-800 text-text-secondary hover:border-bg-600 hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-y-12 py-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-16">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              stagger={idx % 2 === 1}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-text-secondary">
            <p>No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
