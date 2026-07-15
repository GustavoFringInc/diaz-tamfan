"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Philosophy() {
  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="06" label="Cara Berpikir" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left editorial */}
          <div className="lg:col-span-5">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Bukan sekadar bikin produk yang jalan. Tapi bikin{" "}
                <span className="italic text-accent">sistem</span> yang hidup.
              </h2>
            </RevealText>
            
            <RevealText delay={0.15}>
              <p className="text-text-secondary leading-relaxed">
                Ini bukan soal pamer skill atau numpuk technology badge. 
                Ini soal prinsip yang aku pegang setiap kali mulai project baru. 
                Prinsip yang bikin aku bisa tidur tenang setelah ship sesuatu.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="margin-note mt-8">
                Kalau kamu juga bangun produk dan merasa prinsip ini relate, 
                mungkin kita punya frekuensi yang sama.
              </div>
            </RevealText>
          </div>

          {/* Right - principles */}
          <div className="lg:col-span-7 space-y-1">
            {[
              {
                number: "01",
                title: "AI buat augmentasi, bukan replacement",
                body: "Teknologi harusnya bikin orang lebih jago mikir. Kalau AI cuma bikin males, kita udah salah arah.",
              },
              {
                number: "02",
                title: "Yang simpel biasanya yang menang",
                body: "Produk terbaik itu yang ngilangin ribet, bukan nambah fitur. Tiap interaksi harus punya alasan.",
              },
              {
                number: "03",
                title: "Desain itu komunikasi",
                body: "Interface cantik itu bagus, tapi jelas lebih penting. Minimalis bukan kosong — minimalis itu buang yang nggak perlu.",
              },
              {
                number: "04",
                title: "Bikin yang emang dibutuhin",
                body: "Aku lebih milih nyelesaiin masalah nyata daripada bikin project cuma buat impress developer lain.",
              },
              {
                number: "05",
                title: "Learn in public",
                body: "Tiap project adalah kesempatan buat dokumentasiin ide, eksperimen, kegagalan, dan perbaikan. Bukan cuma hasil akhir.",
              },
            ].map((item, i) => (
              <RevealText key={item.number} delay={0.08 + i * 0.06}>
                <div className="group py-7 border-b border-border-subtle last:border-b-0 hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm">
                  <div className="flex gap-5">
                    <span className="font-mono text-[10px] text-blueprint/50 pt-1 shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
