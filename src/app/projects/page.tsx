"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import StaggerGrid from "@/components/motion/StaggerGrid";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding px-6">
          <div className="max-w-6xl mx-auto">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Projects
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16 max-w-2xl">
              <p>
                Each project starts with a question. Here are the answers I've
                built so far — products, experiments, and systems that explore what
                AI, design, and code can do together.
              </p>
            </RevealText>

            <div className="space-y-16">
              {projects.map((project, i) => (
                <RevealText key={project.slug} delay={0.05 * i}>
                  <article
                    id={project.slug}
                    className="grid md:grid-cols-3 gap-8 p-8 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated transition-colors"
                  >
                    <div className="md:col-span-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent mb-2 block">
                        {project.category} · {project.year}
                      </span>
                      <h2 className="font-display text-2xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            project.status === "active"
                              ? "bg-green-500/10 text-green-400"
                              : project.status === "experiment"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-1 rounded bg-bg text-text-muted border border-border-subtle"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1"
                        >
                          Visit project <ExternalLink size={14} />
                        </a>
                      )}
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
