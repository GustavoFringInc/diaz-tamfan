"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import BlueprintLine from "@/components/ui/BlueprintLine";

export default function Philosophy() {
  return (
    <section className="section-spacing px-6 relative">
      {/* Blueprint background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full blueprint-grid opacity-20 hidden lg:block" />
      
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" label="Cara Berpikir" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Editorial heading - left column */}
          <div className="lg:col-span-5">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Bukan sekadar bikin produk yang jalan. Tapi bikin{" "}
                <span className="italic text-accent">sistem</span> yang hidup.
              </h2>
            </RevealText>
            
            <RevealText delay={0.15}>
              <p className="text-text-secondary leading-relaxed">
                Aku nggak nganggep diri cuma programmer atau desainer. Yang aku lakuin itu 
                bangun produk digital yang combine teknologi, desain yang dipikirin mateng, 
                dan pengalaman yang beneran bermakna buat penggunanya.
              </p>
            </RevealText>

            {/* Margin note */}
            <RevealText delay={0.2}>
              <div className="margin-note mt-8">
                Ini bukan soal pamer skill. Ini soal cara aku melihat masalah dan membangun solusi.
              </div>
            </RevealText>
          </div>

          {/* Principles - right column */}
          <div className="lg:col-span-7 space-y-8">
            <RevealText delay={0.1}>
              <BlueprintLine className="mb-8" />
            </RevealText>
            
            {[
              {
                number: "2.1",
                title: "AI buat augmentasi, bukan replacement",
                body: "Teknologi harusnya bikin orang lebih jago mikir, belajar, dan bikin keputusan. Kalau AI cuma bikin orang males mikir, kita udah salah arah.",
              },
              {
                number: "2.2",
                title: "Yang simpel biasanya yang menang",
                body: "Produk terbaik itu yang ngilangin ribet, bukan nambah fitur. Tiap interface harusnya obvious. Tiap interaksi harus ada tujuannya.",
              },
              {
                number: "2.3",
                title: "Desain itu komunikasi",
                body: "Interface cantik itu bagus, tapi jelas lebih penting daripada dekorasi. Minimalis bukan kosong — minimalis itu buang semua yang nggak perlu.",
              },
              {
                number: "2.4",
                title: "Bikin yang emang dibutuhin",
                body: "Aku lebih milih nyelesaiin masalah nyata daripada bikin project cuma buat impress developer lain. Kalau nggak ada yang butuh, ngapain?",
              },
            ].map((item, i) => (
              <RevealText key={item.number} delay={0.15 + i * 0.08}>
                <div className="group flex gap-5 pb-8 border-b border-border-subtle last:border-b-0">
                  <span className="font-mono text-[11px] text-blueprint/60 pt-1 shrink-0">
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
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
