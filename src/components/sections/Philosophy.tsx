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
                Bukan sekadar bikin yang jalan. Tapi bikin{" "}
                <span className="italic text-accent">sistem</span> yang hidup.
              </h2>
            </RevealText>
            
            <RevealText delay={0.15}>
              <p className="text-text-secondary leading-relaxed">
                Ini soal prinsip yang aku pegang setiap kali mulai project baru. 
                Yang bikin bisa tidur tenang setelah ship sesuatu.
              </p>
            </RevealText>

            {/* Sticky note margin note */}
            <RevealText delay={0.2}>
              <div className="mt-8 rotate-[1deg]">
                <div className="sticky-note sticky-note--blue w-56 animate-peel">
                  <p>Kalau kamu juga ngerasa ini relate, mungkin kita satu frekuensi.</p>
                  <div className="absolute -top-1.5 left-3 washi-tape w-10 rotate-[-4deg]" />
                </div>
              </div>
            </RevealText>
          </div>

          {/* Right - principles */}
          <div className="lg:col-span-7 space-y-1">
            {[
              { n: "01", title: "AI buat augmentasi", body: "Teknologi bikin orang lebih jago mikir. Kalau AI bikin males, kita salah arah." },
              { n: "02", title: "Simpel menang", body: "Yang ngilangin ribet, bukan nambah fitur. Tiap interaksi harus punya alasan." },
              { n: "03", title: "Desain = komunikasi", body: "Jelas lebih penting dari cantik. Minimalis itu buang yang nggak perlu." },
              { n: "04", title: "Bikin yang dibutuhin", body: "Nyelesaiin masalah nyata, bukan bikin project buat impress developer lain." },
              { n: "05", title: "Learn in public", body: "Tiap project = dokumentasi ide, eksperimen, kegagalan. Bukan cuma hasil akhir." },
            ].map((item, i) => (
              <RevealText key={item.n} delay={0.08 + i * 0.06}>
                <div className="group py-6 border-b border-border-subtle last:border-b-0 hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm">
                  <div className="flex gap-5">
                    <span className="font-mono text-[10px] text-accent/40 pt-1 shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
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
