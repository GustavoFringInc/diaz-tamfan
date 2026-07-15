"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";

export default function NowPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding px-6">
          <div className="max-w-3xl mx-auto">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Now
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-12">
              <p>
                Lagi fokus ngapain sekarang. Terinspirasi dari{" "}
                <a
                  href="https://nownownow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  nownownow.com
                </a>
                . Terakhir update: Juli 2026.
              </p>
            </RevealText>

            <div className="space-y-12">
              <RevealText delay={0.15}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow"></span>
                    Lagi bangun
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>
                      → Scale-up <strong className="text-text-primary">SMANSO.AI</strong> — nambah fitur AI tutoring baru dan expand coverage mapel.
                    </li>
                    <li>
                      → Ngulik <strong className="text-text-primary">Yapping.ai</strong> — refine AI personalities dan conversational depth.
                    </li>
                    <li>
                      → Eksperimen sama <strong className="text-text-primary">Sora Loka</strong> — explore protokol komunikasi P2P offline.
                    </li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Lagi belajar
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ Deep dive ke AI agents dan agentic workflows.</li>
                    <li>→ Studi system design dan distributed architectures.</li>
                    <li>→ Baca soal philosophy of mind dan human-computer interaction.</li>
                    <li>→ Explore local LLM deployment dan edge computing.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.25}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Lagi baca
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ <em>"Thinking in Systems"</em> — Donella Meadows</li>
                    <li>→ <em>"The Design of Everyday Things"</em> — Don Norman</li>
                    <li>→ Various essays soal AI alignment dan product philosophy.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.3}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Lagi mikirin
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ Gimana caranya bikin AI lebih accessible buat orang non-teknis.</li>
                    <li>→ Intersection antara education technology dan AI.</li>
                    <li>→ Bangun software business yang sustainable di Asia Tenggara.</li>
                    <li>→ Masa depan knowledge management dan second-brain systems.</li>
                  </ul>
                </div>
              </RevealText>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
