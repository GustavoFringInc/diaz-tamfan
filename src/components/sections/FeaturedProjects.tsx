"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
            >
              <Link
                href={`/projects#${project.slug}`}
                className="group block dark-card p-6 rounded-sm relative"
              >
                {/* Tape decoration */}
                <div className="absolute -top-2 left-6 washi-tape w-12 rotate-[-2deg]" />

                {/* Content */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="font-mono text-[9px] text-accent/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg text-text-muted border border-border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
                  <span className="text-[11px] text-text-muted">Baca cerita</span>
                  <ArrowUpRight
                    size={13}
                    className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
