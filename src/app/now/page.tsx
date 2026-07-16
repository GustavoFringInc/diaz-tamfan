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

            <RevealText as="h1" className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Lagi sibuk ngapain{" "}<span className="italic text-accent">sekarang</span>?
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16">
              <p>
                Terinspirasi dari{" "}
                <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">nownownow.com</a>. 
                Diupdate berkala. Terakhir: Juli 2026.
              </p>
            </RevealText>

            <div className="space-y-16">
              {[
                { title: "Lagi dibangun", items: [
                  "Scale-up SMANSO.AI — fitur AI tutoring baru",
                  "Ngulik Yapping.ai — refine AI personalities",
                  "Eksperimen Sora Loka — P2P offline communication",
                ]},
                { title: "Lagi dipelajari", items: [
                  "AI agents dan agentic workflows",
                  "System design dan distributed architectures",
                  "Philosophy of mind dan HCI",
                  "Local LLM deployment",
                ]},
                { title: "Lagi dibaca", items: [
                  "Thinking in Systems — Donella Meadows",
                  "The Design of Everyday Things — Don Norman",
                  "Essays soal AI alignment",
                ]},
                { title: "Lagi dipikirin", items: [
                  "Bikin AI lebih accessible buat non-teknis",
                  "Intersection education tech + AI",
                  "Sustainable software business di Asia Tenggara",
                ]},
              ].map((section, si) => (
                <RevealText key={section.title} delay={0.05 * si}>
                  <div>
                    <h2 className="font-display text-xl font-bold mb-4">{section.title}</h2>
                    <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                      {section.items.map((item) => (
                        <li key={item} className="pl-4 border-l-2 border-border-subtle">{item}</li>
                      ))}
                    </ul>
                  </div>
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
