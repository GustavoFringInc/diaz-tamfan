"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" label="Tentang" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
                Saya bangun produk pakai AI.{" "}
                <span className="italic text-accent">Bukan cuma kode</span> — tapi sistem.
              </h2>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="text-text-secondary leading-[1.8]">
                Nama saya Diaz. Dari Indonesia. Saya bikin produk digital yang combine 
                AI, desain, dan sistem jadi sesuatu yang beneran dipakai orang.
              </p>
            </RevealText>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Quick facts ticket */}
            <RevealText delay={0.15}>
              <div className="ticket rotate-[-1deg]">
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
                  <p>Belajar sendiri. Nggak pernah ikut bootcamp.</p>
                  <div className="absolute -top-1.5 right-4 washi-tape w-10 rotate-[4deg]" />
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
