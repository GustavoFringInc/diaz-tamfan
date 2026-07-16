"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const events = [
  { year: "2023", title: "Mulai serius ngulik AI", tag: "awal" },
  { year: "2024", title: "SMANSO.AI, Yapping.ai, AI Translate", tag: "produk" },
  { year: "2025", title: "Sora Loka, Growthdz, second-brain", tag: "sistem" },
  { year: "2026", title: "Fokus: AI workflow & edukasi", tag: "misi" },
];

export default function Timeline() {
  return (
    <section className="section-spacing px-6 bg-bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="05" label="Perjalanan" />

        <RevealText>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-12">
            Dari iseng jadi{" "}
            <span className="italic text-accent">serius</span>.
          </h2>
        </RevealText>

        <div className="relative">
          {/* String line */}
          <svg className="absolute left-5 md:left-10 top-0 bottom-0 w-4" preserveAspectRatio="none">
            <motion.line
              x1="50%" y1="0" x2="50%" y2="100%"
              className="string-line"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="space-y-8">
            {events.map((event, i) => (
              <RevealText key={i} delay={0.05 * i}>
                <div className="relative pl-14 md:pl-24">
                  <motion.div
                    className="absolute left-3 md:left-8 top-2 w-4 h-4 rounded-full border-2 border-accent bg-bg-surface"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                  />
                  
                  <div className="font-mono text-[11px] text-accent tracking-wider mb-2">
                    {event.year}
                  </div>

                  <div className="dark-card p-5 rounded-sm relative">
                    {i % 2 === 0 && (
                      <div className="absolute -top-2 right-4 washi-tape w-10 rotate-[3deg]" />
                    )}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display font-semibold text-base">
                        {event.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[8px] text-text-muted uppercase tracking-wider px-1.5 py-0.5 border border-border-subtle rounded-sm">
                        {event.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>

          <div className="relative pl-14 md:pl-24 mt-8">
            <div className="absolute left-3 md:left-8 top-1 w-4 h-4 rounded-full bg-accent" />
            <div className="font-mono text-[11px] text-accent tracking-wider">
              sekarang
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
