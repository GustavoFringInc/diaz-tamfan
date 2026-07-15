"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MouseSpotlight from "@/components/motion/MouseSpotlight";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import RevealText from "@/components/motion/RevealText";
import MagneticButton from "@/components/motion/MagneticButton";
import Terminal from "@/components/motion/Terminal";

export default function Home() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="pt-16">
        <Hero />

        <div className="glow-line max-w-4xl mx-auto" />

        <Philosophy />

        <FeaturedProjects />

        {/* Journal preview section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Journal
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-text-secondary mb-12 max-w-xl">
                Notes on product thinking, AI workflows, and the craft of building
                things that matter.
              </p>
            </RevealText>

            <div className="space-y-6">
              {[
                {
                  title: "Thinking in Systems: Why I Build Products, Not Features",
                  date: "Dec 15, 2024",
                  tag: "product-thinking",
                },
                {
                  title: "AI as Co-Architect: How I Work with LLMs",
                  date: "Nov 28, 2024",
                  tag: "AI",
                },
                {
                  title: "Quiet Confidence in Design",
                  date: "Nov 10, 2024",
                  tag: "design",
                },
              ].map((post, i) => (
                <RevealText key={post.title} delay={0.1 + i * 0.08}>
                  <a
                    href="/journal"
                    className="group flex items-start justify-between gap-4 p-6 border border-border-subtle rounded-md hover:bg-bg-surface transition-colors"
                  >
                    <div>
                      <span className="text-xs font-mono text-accent mb-1 block">
                        {post.tag}
                      </span>
                      <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <span className="text-xs text-text-muted whitespace-nowrap mt-1">
                      {post.date}
                    </span>
                  </a>
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal / Uses preview */}
        <section className="section-padding px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <RevealText>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  My Setup
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-text-secondary leading-relaxed mb-6">
                  I work from a carefully curated terminal environment on GXDE OS.
                  Gruvbox-themed, Zsh + Starship prompt, and a stack of AI tools
                  that help me think faster.
                </p>
              </RevealText>
              <RevealText delay={0.2}>
                <MagneticButton href="/uses" variant="secondary">
                  See my full setup
                </MagneticButton>
              </RevealText>
            </div>
            <RevealText delay={0.2}>
              <Terminal />
            </RevealText>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <RevealText
              as="h2"
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Let's build something
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-8">
              <p>
                Always open to conversations about AI products, education
                technology, or interesting problems worth solving.
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <MagneticButton href="/contact">Get in touch</MagneticButton>
            </RevealText>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
