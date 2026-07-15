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

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Lagi sibuk ngapain{" "}
              <span className="italic text-accent">sekarang</span>?
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16">
              <p>
                Halaman ini jawaban dari pertanyaan itu. Terinspirasi dari{" "}
                <a
                  href="https://nownownow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  nownownow.com
                </a>
                . Diupdate berkala. Terakhir: Juli 2026.
              </p>
            </RevealText>

            <div className="space-y-16">
              <RevealText delay={0.15}>
                <div>
                  <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Lagi dibangun
                  </h2>
                  <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                    <li className="pl-4 border-l-2 border-border-subtle">
                      Scale-up <strong className="text-text-primary">SMANSO.AI</strong> — nambah fitur AI tutoring baru dan expand coverage mapel.
                    </li>
                    <li className="pl-4 border-l-2 border-border-subtle">
                      Ngulik <strong className="text-text-primary">Yapping.ai</strong> — refine AI personalities dan conversational depth.
                    </li>
                    <li className="pl-4 border-l-2 border-border-subtle">
                      Eksperimen sama <strong className="text-text-primary">Sora Loka</strong> — explore protokol komunikasi P2P offline.
                    </li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div>
                  <h2 className="font-display text-xl font-bold mb-4">Lagi dipelajari</h2>
                  <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                    <li className="pl-4 border-l-2 border-border-subtle">Deep dive ke AI agents dan agentic workflows.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">System design dan distributed architectures.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Philosophy of mind dan human-computer interaction.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Local LLM deployment dan edge computing.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.25}>
                <div>
                  <h2 className="font-display text-xl font-bold mb-4">Lagi dibaca</h2>
                  <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                    <li className="pl-4 border-l-2 border-border-subtle"><em>Thinking in Systems</em> — Donella Meadows</li>
                    <li className="pl-4 border-l-2 border-border-subtle"><em>The Design of Everyday Things</em> — Don Norman</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Essays soal AI alignment dan product philosophy.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.3}>
                <div>
                  <h2 className="font-display text-xl font-bold mb-4">Lagi dipikirin</h2>
                  <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                    <li className="pl-4 border-l-2 border-border-subtle">Gimana caranya bikin AI lebih accessible buat orang non-teknis.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Intersection antara education technology dan AI.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Software business yang sustainable di Asia Tenggara.</li>
                    <li className="pl-4 border-l-2 border-border-subtle">Masa depan knowledge management dan second-brain systems.</li>
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
