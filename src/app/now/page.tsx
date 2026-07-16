"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NowPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-3xl mx-auto">
            <SectionLabel number="D" label="Now" />

            <RevealText as="h1" className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-12 leading-[1.05]">
              Lagi ngapain sekarang
            </RevealText>

            <div className="space-y-12">
              {[
                { title: "Lagi dibangun", items: [
                  "Scale-up SMANSO.AI",
                  "Ngulik Yapping.ai",
                  "Eksperimen Sora Loka",
                ]},
                { title: "Lagi dipelajari", items: [
                  "AI agents & agentic workflows",
                  "System design",
                  "Local LLM deployment",
                ]},
                { title: "Lagi dibaca", items: [
                  "Thinking in Systems — Meadows",
                  "Design of Everyday Things — Norman",
                ]},
                { title: "Lagi dipikirin", items: [
                  "AI yang accessible buat non-teknis",
                  "Education tech + AI",
                  "Sustainable software business",
                ]},
              ].map((section, si) => (
                <RevealText key={section.title} delay={0.05 * si}>
                  <div>
                    <h2 className="font-display text-lg font-bold mb-3">{section.title}</h2>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      {section.items.map((item) => (
                        <li key={item} className="pl-4 border-l-2 border-border-subtle">{item}</li>
                      ))}
                    </ul>
                  </div>
                </RevealText>
              ))}
            </div>

            <RevealText delay={0.3}>
              <div className="mt-12 pt-6 border-t border-border-subtle">
                <p className="text-xs text-text-muted font-mono">
                  terakhir update: juli 2026 · terinspirasi dari nownownow.com
                </p>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
