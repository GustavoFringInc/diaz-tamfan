"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" label="Tentang Saya" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - editorial column */}
          <div className="lg:col-span-7">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
                Bukan programmer biasa.{" "}
                <span className="italic text-accent">Lebih ke arsitek sistem</span>{" "}
                yang kebetulan suka ngulik AI.
              </h2>
            </RevealText>

            <RevealText delay={0.1}>
              <div className="space-y-5 text-text-secondary leading-[1.8]">
                <p>
                  Nama lengkap saya Muhammad Diaz Rahardi Putra, tapi biasa dipanggil Diaz. 
                  Saya dari Indonesia, dan kalau harus ngejelasin diri dalam satu kalimat: 
                  saya bangun produk digital yang combine AI, desain, dan sistem jadi sesuatu 
                  yang beneran berguna.
                </p>
                <p>
                  Saya nggak nganggep diri cuma programmer atau desainer. Sebagian besar ide 
                  project justru muncul saat saya lagi iseng nyobain AI baru, ngebedah cara 
                  kerjanya, terus kepikiran bikin produk dari situ. Prosesnya nggak pernah 
                  linear — biasanya mulai dari masalah yang saya temui sendiri, terus cari 
                  cara paling simpel buat nyelesainnya.
                </p>
                <p>
                  Jangka panjangnya, saya mau bangun produk dan (mungkin) perusahaan yang bikin 
                  AI lebih berguna, lebih accessible, dan lebih manusiawi. Bukan AI yang gantiin 
                  orang mikir — tapi AI yang bantu orang mikir lebih baik.
                </p>
              </div>
            </RevealText>
          </div>

          {/* Right - annotations and quick facts */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick facts card */}
            <RevealText delay={0.15}>
              <div className="paper-note p-6 rounded-sm">
                <h3 className="font-mono text-[10px] tracking-wider uppercase text-blueprint/60 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border-subtle pb-2">
                    <span className="text-text-muted">Lokasi</span>
                    <span className="font-medium">Indonesia</span>
                  </div>
                  <div className="flex justify-between border-b border-border-subtle pb-2">
                    <span className="text-text-muted">Fokus</span>
                    <span className="font-medium">AI Products</span>
                  </div>
                  <div className="flex justify-between border-b border-border-subtle pb-2">
                    <span className="text-text-muted">Stack</span>
                    <span className="font-medium">Next.js + TS + Tailwind</span>
                  </div>
                  <div className="flex justify-between border-b border-border-subtle pb-2">
                    <span className="text-text-muted">AI Tools</span>
                    <span className="font-medium">Gemini, Claude, Cursor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">OS</span>
                    <span className="font-medium">GXDE Linux</span>
                  </div>
                </div>
              </div>
            </RevealText>

            {/* Margin note */}
            <RevealText delay={0.2}>
              <div className="margin-note">
                Saya belajar sendiri. Nggak pernah ikut bootcamp. Sebagian besar skill datang 
                dari eksperimen, baca dokumentasi, dan nanya ke AI sampai ngerti.
              </div>
            </RevealText>

            {/* Interest tags */}
            <RevealText delay={0.25}>
              <div>
                <h3 className="font-mono text-[10px] tracking-wider uppercase text-blueprint/60 mb-3">
                  Yang bikin penasaran
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Agents", "LLM", "Prompt Engineering", "Product Design",
                    "Education Tech", "Knowledge Systems", "P2P Networks",
                    "Philosophy", "History", "Linux",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-1 border border-border-subtle text-text-secondary rounded-sm hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
