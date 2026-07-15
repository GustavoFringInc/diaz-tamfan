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
                Catatan soal product thinking, workflow AI, dan gimana caranya
                bikin sesuatu yang beneran berguna. Nulis itu cara aku mikir.
              </p>
            </RevealText>

            <div className="space-y-6">
              {[
                {
                  title: "Mikir dalam Sistem: Kenapa Aku Build Produk, Bukan Fitur",
                  date: "15 Des 2024",
                  tag: "product-thinking",
                },
                {
                  title: "AI sebagai Co-Architect: Cara Aku Kerja bareng LLM",
                  date: "28 Nov 2024",
                  tag: "AI",
                },
                {
                  title: "Quiet Confidence dalam Desain",
                  date: "10 Nov 2024",
                  tag: "desain",
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
                  Setup Aku
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Kerja dari terminal yang udah di-tweak rapi di GXDE OS. 
                  Tema Gruvbox, Zsh + Starship prompt, dan sekumpulan AI tools 
                  yang bantu aku mikir lebih cepet.
                </p>
              </RevealText>
              <RevealText delay={0.2}>
                <MagneticButton href="/uses" variant="secondary">
                  Lihat full setup
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
              Ayo ngobrol
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-8">
              <p>
                Selalu terbuka buat ngobrol soal AI products, education technology, 
                atau masalah menarik yang layak diselesaikan bareng.
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <MagneticButton href="/contact">Hubungi aku</MagneticButton>
            </RevealText>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
