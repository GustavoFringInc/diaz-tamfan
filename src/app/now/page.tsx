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
                What I'm focused on right now. Inspired by{" "}
                <a
                  href="https://nownownow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  nownownow.com
                </a>
                . Last updated: July 2026.
              </p>
            </RevealText>

            <div className="space-y-12">
              <RevealText delay={0.15}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow"></span>
                    Building
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>
                      → Scaling <strong className="text-text-primary">SMANSO.AI</strong> — adding new AI tutoring features and expanding subject coverage.
                    </li>
                    <li>
                      → Working on <strong className="text-text-primary">Yapping.ai</strong> — refining AI personalities and conversational depth.
                    </li>
                    <li>
                      → Experimenting with <strong className="text-text-primary">Sora Loka</strong> — exploring offline P2P communication protocols.
                    </li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Learning
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ Deep dive into AI agents and agentic workflows.</li>
                    <li>→ Studying system design and distributed architectures.</li>
                    <li>→ Reading about philosophy of mind and human-computer interaction.</li>
                    <li>→ Exploring local LLM deployment and edge computing.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.25}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Reading
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ <em>"Thinking in Systems"</em> by Donella Meadows</li>
                    <li>→ <em>"The Design of Everyday Things"</em> by Don Norman</li>
                    <li>→ Various essays on AI alignment and product philosophy.</li>
                  </ul>
                </div>
              </RevealText>

              <RevealText delay={0.3}>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-3">
                    Thinking about
                  </h2>
                  <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                    <li>→ How to make AI more accessible for non-technical users.</li>
                    <li>→ The intersection of education technology and AI.</li>
                    <li>→ Building sustainable software businesses in Southeast Asia.</li>
                    <li>→ The future of knowledge management and second-brain systems.</li>
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
