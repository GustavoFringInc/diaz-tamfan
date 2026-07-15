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
            <SectionLabel number="A" label="Semua Project" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Kalau penasaran saya lagi sibuk ngapain akhir-akhir ini,{" "}
              <span className="italic text-accent">mungkin beberapa project di bawah ini bisa menjawab</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-2xl">
              <p>
                Tiap project mulai dari pertanyaan — bukan dari teknologi. Ini jawaban-jawaban 
                yang udah aku bangun sejauh ini. Ada yang masih jalan, ada yang eksperimen, 
                ada yang udah selesai.
              </p>
            </RevealText>

            <div className="space-y-1">
              {projects.map((project, i) => (
                <RevealText key={project.slug} delay={0.04 * i}>
                  <article
                    id={project.slug}
                    className="group grid md:grid-cols-12 gap-6 py-10 border-b border-border-subtle first:border-t hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm"
                  >
                    {/* Left meta */}
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] text-blueprint/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-mono text-[10px] text-blueprint/60 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                            project.status === "active"
                              ? "bg-green-500/10 text-green-700"
                              : project.status === "experiment"
                              ? "bg-amber-500/10 text-amber-700"
                              : "bg-blue-500/10 text-blue-700"
                          }`}
                        >
                          {project.status === "active" ? "aktif" : project.status === "experiment" ? "eksperimen" : "selesai"}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted">{project.year}</span>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="md:col-span-9">
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-1 rounded-sm bg-bg-surface text-text-muted border border-border-subtle"
                          >
                            {t}
                          </span>
                        ))}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1 ml-2"
                          >
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
