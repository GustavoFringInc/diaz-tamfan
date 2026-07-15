"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/motion/RevealText";
import StaggerGrid from "@/components/motion/StaggerGrid";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section-padding px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <RevealText>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Selected Work
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <Link
              href="/projects"
              className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </RevealText>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group block p-6 border border-border-subtle rounded-md bg-bg hover:bg-bg-elevated card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-bg-surface text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
