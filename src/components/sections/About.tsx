"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" label="Tentang Saya" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - editorial */}
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
                  Sebagian besar ide project justru muncul saat saya lagi iseng nyobain AI baru, 
                  ngebedah cara kerjanya, terus kepikiran bikin produk dari situ. Prosesnya nggak 
                  pernah linear.
                </p>
                <p>
                  Jangka panjangnya, saya mau bangun produk yang bikin AI lebih berguna, 
                  lebih accessible, dan lebih manusiawi.
                </p>
              </div>
            </RevealText>
          </div>

          {/* Right - scrapbook cards */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Quick facts ticket */}
            <RevealText delay={0.15}>
              <div className="ticket rotate-[-1deg]">
                <div className="font-mono text-[9px] text-accent/60 uppercase tracking-wider mb-3">
                  Quick Facts
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    ["Lokasi", "Indonesia"],
                    ["Fokus", "AI Products"],
                    ["Stack", "Next.js + TS + Tailwind"],
                    ["AI", "Gemini, Claude, Cursor"],
                    ["OS", "GXDE Linux"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-text-muted">{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* Sticky note */}
            <RevealText delay={0.2}>
              <div className="ml-8 rotate-[2deg]">
                <div className="sticky-note sticky-note--pink w-52 animate-peel">
                  <p>Saya belajar sendiri. Nggak pernah ikut bootcamp.</p>
                  <div className="absolute -top-1.5 right-4 washi-tape w-10 rotate-[4deg]" />
                </div>
              </div>
            </RevealText>

            {/* Interest tags */}
            <RevealText delay={0.25}>
              <div>
                <h3 className="section-number mb-3">Yang bikin penasaran</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Agents", "LLM", "Prompt Engineering", "Product Design",
                    "Education Tech", "Knowledge Systems", "P2P Networks",
                    "Philosophy", "Linux",
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
