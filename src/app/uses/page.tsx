"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import Terminal from "@/components/motion/Terminal";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const pcSetup = [
  { name: "Perangkat Utama", desc: "Laptop Linux pake GXDE OS" },
  { name: "Editor", desc: "VS Code tema Gruvbox" },
  { name: "Browser", desc: "Firefox / Arc" },
  { name: "Terminal", desc: "Zsh + Starship prompt" },
  { name: "Framework", desc: "Next.js + TypeScript" },
  { name: "Styling", desc: "Tailwind CSS" },
  { name: "Database", desc: "Supabase + Drizzle" },
  { name: "Hosting", desc: "Vercel" },
  { name: "AI Tools", desc: "Cursor, Claude, Gemini" },
  { name: "Workflow", desc: "Iteratif + dokumentasi SKILL.md" },
];

const mobileSetup = [
  { name: "Smartphone", desc: "Android + GXDE OS" },
  { name: "AI Mobile", desc: "Gemini, ChatGPT" },
  { name: "Aplikasi Favorit", desc: "Telegram, Notion, Kindle" },
  { name: "Produktivitas", desc: "Markdown sync + second-brain" },
  { name: "Tools Harian", desc: "Calendar + task manager" },
  { name: "Eksperimen", desc: "Testing responsive di device" },
];

export default function UsesPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="E" label="Uses" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Alat perang{" "}
              <span className="italic text-accent">sehari-hari</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-2xl">
              <p>
                Bukan yang paling hype — yang paling cocok. Dua device utama: laptop dan HP.
              </p>
            </RevealText>

            <RevealText delay={0.15}>
              <div className="mb-20">
                <Terminal />
              </div>
            </RevealText>

            {/* PC */}
            <RevealText delay={0.2}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-accent/60">01</span>
                  <h2 className="font-display text-2xl font-bold">PC / Laptop</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {pcSetup.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15, rotate: i % 2 === 0 ? -1 : 1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="dark-card p-5 rounded-sm"
                    >
                      <div className="font-mono text-[8px] text-accent/40 uppercase tracking-wider mb-1.5">
                        {item.name}
                      </div>
                      <div className="text-sm text-text-secondary">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* HP */}
            <RevealText delay={0.25}>
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-accent/60">02</span>
                  <h2 className="font-display text-2xl font-bold">HP / Smartphone</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {mobileSetup.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15, rotate: i % 2 === 0 ? 1 : -1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="dark-card p-5 rounded-sm"
                    >
                      <div className="font-mono text-[8px] text-accent/40 uppercase tracking-wider mb-1.5">
                        {item.name}
                      </div>
                      <div className="text-sm text-text-secondary">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
