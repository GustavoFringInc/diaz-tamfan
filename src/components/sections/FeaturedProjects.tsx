"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/motion/RevealText";
import StaggerGrid from "@/components/motion/StaggerGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section-spacing px-6 bg-bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="03" label="Kerjaan Terpilih" />

        <div className="flex items-end justify-between mb-16">
          <RevealText>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight">
              Yang udah pernah dibangun
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <Link
              href="/projects"
              className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
            >
              Lihat semua <ArrowUpRight size={14} />
            </Link>
          </RevealText>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group block paper-card p-8 rounded-sm"
            >
              {/* Top annotation */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-wider text-blueprint/60 uppercase">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {project.tagline}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-bg-surface text-text-muted border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom line */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <span className="text-xs text-text-muted">Baca studi kasus</span>
                <ArrowUpRight
                  size={14}
                  className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </Link>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
