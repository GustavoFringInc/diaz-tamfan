"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import Terminal from "@/components/motion/Terminal";
import Link from "next/link";
import { motion } from "framer-motion";

const pcSetup = [
  { name: "OS", desc: "GXDE Linux" },
  { name: "Editor", desc: "VS Code + Gruvbox" },
  { name: "Terminal", desc: "Zsh + Starship" },
  { name: "Browser", desc: "Firefox / Arc" },
  { name: "AI Co-pilot", desc: "Cursor, Claude, Gemini" },
  { name: "Framework", desc: "Next.js + TypeScript" },
  { name: "Styling", desc: "Tailwind CSS" },
  { name: "Database", desc: "Supabase + Drizzle" },
];

const mobileSetup = [
  { name: "Device", desc: "Android (GXDE OS)" },
  { name: "AI Mobile", desc: "Gemini, ChatGPT" },
  { name: "Notes", desc: "Markdown sync" },
  { name: "Reading", desc: "Kindle + PDFs" },
  { name: "Produktivitas", desc: "Telegram, Notion" },
  { name: "Tools harian", desc: "Second-brain di Drive" },
];

export default function UsesSection() {
  return (
    <section className="section-spacing px-6 bg-bg-surface relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="07" label="Alat Perang" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Alat perang{" "}
                <span className="italic text-accent">sehari-hari</span>.
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-8">
                Bukan yang paling hype — yang paling cocok.
              </p>
            </RevealText>

            <RevealText delay={0.15}>
              <Terminal />
            </RevealText>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 space-y-10">
            {/* PC */}
            <RevealText delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-accent/60">01</span>
                  <h3 className="font-display font-bold text-lg">PC / Laptop</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {pcSetup.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15, rotate: i % 2 === 0 ? -1 : 1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="dark-card p-4 rounded-sm"
                    >
                      <div className="font-mono text-[8px] text-accent/40 uppercase tracking-wider mb-1">
                        {item.name}
                      </div>
                      <div className="text-sm font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* HP */}
            <RevealText delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-accent/60">02</span>
                  <h3 className="font-display font-bold text-lg">HP / Smartphone</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {mobileSetup.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15, rotate: i % 2 === 0 ? 1 : -1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="dark-card p-4 rounded-sm"
                    >
                      <div className="font-mono text-[8px] text-accent/40 uppercase tracking-wider mb-1">
                        {item.name}
                      </div>
                      <div className="text-sm font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.25}>
              <Link
                href="/uses"
                className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1 mt-4"
              >
                Lihat detail lengkap <span className="text-xs">→</span>
              </Link>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
