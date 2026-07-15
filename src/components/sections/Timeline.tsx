"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const events = [
  {
    year: "2023",
    title: "Mulai serius ngulik AI",
    description:
      "Pertama kali nyobain ChatGPT dan langsung kepikiran: ini bukan cuma chatbot, ini bisa jadi co-pilot buat bikin produk. Mulai eksperimen serius.",
    tag: "awal",
  },
  {
    year: "2024",
    title: "Bangun SMANSO.AI",
    description:
      "Platform belajar berbasis AI buat siswa Indonesia. Project pertama yang beneran solve masalah nyata. Dari sini aku belajar kalau produk bagus itu yang dibutuhin orang, bukan yang keren di mata developer.",
    tag: "produk",
  },
  {
    year: "2024",
    title: "Yapping.ai & AI Translate",
    description:
      "Eksplorasi AI personality dan translation yang jaga tone. Dua project yang lahir dari frustasi pribadi sama tools AI yang terlalu generik.",
    tag: "eksperimen",
  },
  {
    year: "2024",
    title: "Sora Loka & Catatan Siswa",
    description:
      "Eksperimen P2P offline communication dan platform publikasi buat siswa. Dua project yang beda banget tapi sama-sama lahir dari pertanyaan: gimana kalau kita coba cara yang belum pernah dicoba?",
    tag: "riset",
  },
  {
    year: "2025",
    title: "Growthdz & second-brain system",
    description:
      "Marketplace digital dan sistem knowledge management pribadi ala Karpathy. Mulai fokus di sustainability dan long-term thinking.",
    tag: "sistem",
  },
  {
    year: "2026",
    title: "Fokus ke AI workflow & edukasi",
    description:
      "Shift dari 'bikin produk' ke 'bantu orang pakai AI'. Sharing workflow, nulis journal, dan scale-up project yang udah ada. Misi: bikin AI beneran berguna buat produktivitas nyata.",
    tag: "misi",
  },
];

export default function Timeline() {
  return (
    <section className="section-spacing px-6 relative overflow-hidden">
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
            Nggak ada rencana besar di awal. Yang ada cuma rasa penasaran yang 
            terus berlanjut. Ini jejaknya.
          </p>
        </RevealText>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <RevealText key={i} delay={0.05 * i}>
                <div className="relative pl-12 md:pl-20">
                  {/* Node on line */}
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 border-accent bg-paper" />
                  
                  {/* Year */}
                  <div className="font-mono text-[11px] text-accent tracking-wider mb-2">
                    {event.year}
                  </div>

                  {/* Content */}
                  <div className="paper-card p-6 rounded-sm">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-semibold text-lg">
                        {event.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[9px] text-text-muted uppercase tracking-wider px-2 py-0.5 border border-border-subtle rounded-sm">
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
          <div className="relative pl-12 md:pl-20 mt-12">
            <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-accent" />
            <div className="font-mono text-[11px] text-accent tracking-wider">
              sekarang
            </div>
            <p className="text-sm text-text-muted mt-1 italic">
              dan ceritanya masih berlanjut...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
