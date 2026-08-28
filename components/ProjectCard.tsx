"use client";

import * as React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  stagger?: boolean;
}

export function ProjectCard({ project, onSelect, stagger = false }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect?.(project)}
      className={`group h-fit w-full cursor-pointer transition-all duration-300 ${
        stagger ? "sm:mt-14" : ""
      }`}
    >
      <div className="block h-fit w-full">
        {/* Project Thumbnail Image with Aspect 3/2 and Rounded Corners */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-bg-700 bg-bg-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />

          {/* Quick info overlay pill on hover */}
          <div className="absolute right-4 top-4 rounded-full border border-bg-700/80 bg-backdrop/80 p-2.5 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-text-primary" />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="font-satoshi text-lg font-medium text-text-primary transition-colors group-hover:text-highlight sm:text-xl">
              {project.title}
            </h5>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-text-secondary sm:text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-text-secondary sm:text-sm font-medium">
              {project.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
