"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-5xl mx-auto">
            <SectionLabel number="A" label="Projects" />

            <RevealText as="h1" className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-12 leading-[1.05]">
              Semua project
            </RevealText>

            <div className="space-y-1">
              {projects.map((project, i) => (
                <RevealText key={project.slug} delay={0.04 * i}>
                  <article id={project.slug} className="group grid md:grid-cols-12 gap-6 py-8 border-b border-border-subtle first:border-t hover:bg-bg-surface/20 transition-colors px-4 -mx-4 rounded-sm">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] text-accent/40">{String(i + 1).padStart(2, "0")}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-mono text-[10px] text-accent/40 uppercase tracking-wider">{project.category}</span>
                      </div>
                      <h2 className="font-display text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                          project.status === "active" ? "bg-green-500/10 text-green-400" : project.status === "experiment" ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"
                        }`}>
                          {project.status === "active" ? "aktif" : project.status === "experiment" ? "eksperimen" : "selesai"}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-9">
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.tagline}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-sm bg-bg-surface text-text-muted border border-border-subtle">{t}</span>
                        ))}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1 ml-2">
                            Kunjungi <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </RevealText>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
