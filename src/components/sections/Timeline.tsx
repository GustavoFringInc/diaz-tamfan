"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const events = [
  {
    year: "2023",
    title: "Mulai serius ngulik AI",
    description: "Pertama kali nyobain ChatGPT dan langsung kepikiran bikin produk dari situ.",
    tag: "awal",
  },
  {
    year: "2024",
    title: "Bangun SMANSO.AI",
    description: "Platform belajar AI buat siswa Indonesia. Project pertama yang solve masalah nyata.",
    tag: "produk",
  },
  {
    year: "2024",
    title: "Yapping.ai & AI Translate",
    description: "Eksplorasi AI personality dan translation yang jaga tone.",
    tag: "eksperimen",
  },
  {
    year: "2025",
    title: "Sora Loka, Growthdz, second-brain",
    description: "P2P offline, marketplace digital, dan knowledge management system.",
    tag: "sistem",
  },
  {
    year: "2026",
    title: "Fokus ke AI workflow & edukasi",
    description: "Shift ke bantu orang pakai AI. Sharing workflow dan scale-up project.",
    tag: "misi",
  },
];

export default function Timeline() {
  return (
    <section className="section-spacing px-6 bg-bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="05" label="Perjalanan" />

        <RevealText>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Dari iseng jadi{" "}
            <span className="italic text-accent">sesuatu yang serius</span>.
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-text-secondary mb-16 max-w-xl leading-relaxed">
            Nggak ada rencana besar di awal. Yang ada cuma rasa penasaran yang terus berlanjut.
          </p>
        </RevealText>

        {/* Timeline with string/benang */}
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

          <div className="space-y-10">
            {events.map((event, i) => (
              <RevealText key={i} delay={0.05 * i}>
                <div className="relative pl-14 md:pl-24">
                  {/* Node on string */}
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
                    {/* Tape */}
                    {i % 2 === 0 && (
                      <div className="absolute -top-2 right-4 washi-tape w-10 rotate-[3deg]" />
                    )}
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <h3 className="font-display font-semibold text-base">
                        {event.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[8px] text-text-muted uppercase tracking-wider px-1.5 py-0.5 border border-border-subtle rounded-sm">
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>

          {/* End marker */}
          <div className="relative pl-14 md:pl-24 mt-10">
            <div className="absolute left-3 md:left-8 top-1 w-4 h-4 rounded-full bg-accent" />
            <div className="font-mono text-[11px] text-accent tracking-wider">
              sekarang
            </div>
            <p className="text-sm text-text-muted mt-1 font-hand text-lg">
              dan ceritanya masih berlanjut...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
