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
import SectionLabel from "@/components/ui/SectionLabel";
import BlueprintLine from "@/components/ui/BlueprintLine";

export default function Home() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="pt-14">
        <Hero />

        {/* Editorial transition line */}
        <div className="px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="editorial-rule" />
          </div>
        </div>

        <Philosophy />

        <FeaturedProjects />

        {/* Journal preview section */}
        <section className="section-spacing px-6">
          <div className="max-w-5xl mx-auto">
            <SectionLabel number="04" label="Catatan" />

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left editorial column */}
              <div className="lg:col-span-4">
                <RevealText>
                  <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                    Nulis itu cara aku mikir.
                  </h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Kalau kamu penasaran soal cara aku lihat AI, cara kerja, dan 
                    gimana sesuatu dibangun dari nol, mungkin beberapa tulisan ini bisa menjawab.
                  </p>
                </RevealText>
                <RevealText delay={0.15}>
                  <a
                    href="/journal"
                    className="text-sm font-medium text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1"
                  >
                    Baca semua tulisan
                  </a>
                </RevealText>
              </div>

              {/* Right - article list */}
              <div className="lg:col-span-8 space-y-1">
                {[
                  {
                    title: "Mikir dalam Sistem: Kenapa Aku Build Produk, Bukan Fitur",
                    date: "15 Des 2024",
                    tag: "product-thinking",
                    excerpt: "Bedanya fitur sama produk itu bukan di kode — tapi di niat.",
                  },
                  {
                    title: "AI sebagai Co-Architect: Cara Aku Kerja bareng LLM",
                    date: "28 Nov 2024",
                    tag: "AI",
                    excerpt: "Aku gak pakai AI buat nulis kode buatku. Aku pakai buat mikir bareng aku.",
                  },
                  {
                    title: "Quiet Confidence dalam Desain",
                    date: "10 Nov 2024",
                    tag: "desain",
                    excerpt: "Interface terbaik gak teriak minta perhatian.",
                  },
                ].map((post, i) => (
                  <RevealText key={post.title} delay={0.1 + i * 0.08}>
                    <a
                      href="/journal"
                      className="group block py-6 border-b border-border-subtle last:border-b-0 hover:bg-bg-surface/50 transition-colors px-4 -mx-4 rounded-sm"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className="font-mono text-[10px] text-accent tracking-wider uppercase">
                          {post.tag}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-muted">{post.excerpt}</p>
                    </a>
                  </RevealText>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Terminal / Uses preview - dark section */}
        <section className="section-spacing px-6 dark-section relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-blueprint/70">
                05 — Setup
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <RevealText>
                  <h2 className="font-editorial text-4xl font-bold tracking-tight mb-6 leading-tight">
                    Kerja dari terminal yang udah di-tweak{" "}
                    <span className="italic text-accent">rapi banget</span>.
                  </h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    GXDE OS, tema Gruvbox, Zsh + Starship prompt. Kedengeran ribet 
                    tapi ini yang bikin kerja kerasa smooth. Ditambah beberapa AI tools 
                    yang bantu mikir lebih cepet — bukan gantiin mikir, tapi ngebutin prosesnya.
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
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <RevealText>
              <div className="flex justify-center mb-8">
                <div className="cross-marker" />
              </div>
            </RevealText>
            <RevealText
              as="h2"
              className="font-editorial text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Kalau penasaran atau mau ngobrol,{" "}
              <span className="italic text-accent">pintunya terbuka</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-10 max-w-lg mx-auto">
              <p>
                Soal produk AI, education technology, atau hal menarik lainnya yang layak 
                didiskusikan bareng. Nggak perlu formal, santai aja.
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
