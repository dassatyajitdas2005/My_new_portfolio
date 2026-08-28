"use client";

import * as React from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GitHubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-bg-700 bg-bg-900 p-6 shadow-2xl transition-all sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-bg-700 bg-bg-800 text-text-secondary transition-colors hover:bg-bg-700 hover:text-text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Tag */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#B5FF6D]/15 px-3 py-1 text-xs font-semibold text-highlight">
            {project.category}
          </span>
          <span className="text-xs font-medium text-text-secondary">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-clash text-2xl font-semibold text-text-primary sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-text-secondary">
          {project.subtitle}
        </p>

        {/* Overview */}
        <div className="my-6 space-y-4">
          <p className="text-sm leading-relaxed text-text-secondary font-satoshi sm:text-base">
            {project.fullOverview}
          </p>

          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-bg-700 bg-bg-800 p-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                The Challenge
              </h4>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                {project.problemStatement}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                The Solution
              </h4>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                {project.solutionStatement}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-text-primary">
              Key Features & Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-text-secondary sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-highlight mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-text-secondary">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-bg-700 bg-bg-800 px-3 py-1 text-xs text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-bg-700 pt-4">
          <div className="text-xs text-text-secondary">
            Role: <span className="font-medium text-text-primary">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-xs font-semibold text-text-primary transition-colors hover:bg-bg-700"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
