"use client";

import RevealText from "@/components/motion/RevealText";

export default function Philosophy() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <RevealText
          as="h2"
          className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-16"
        >
          Cara aku mikir
        </RevealText>

        <div className="space-y-16">
          <RevealText delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
              Aku gak nganggep diri cuma programmer atau desainer. 
              Yang aku lakuin itu bangun produk digital yang gabungan teknologi, 
              desain yang dipikirin mateng, dan pengalaman user yang beneran bermakna. 
              Bukan cuma bikin jalan — tapi bikin sistem yang hidup.
            </p>
          </RevealText>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI buat augmentasi",
                body: "Teknologi harusnya bikin orang lebih jago mikir, belajar, dan bikin keputusan. Bukan gantiin mereka.",
              },
              {
                title: "Yang simpel menang",
                body: "Produk terbaik itu yang ngilangin ribet, bukan nambah fitur. Tiap interface harusnya obvious. Tiap interaksi harus ada tujuannya.",
              },
              {
                title: "Desain itu komunikasi",
                body: "Interface cantik itu bagus, tapi jelas lebih penting daripada dekorasi. Minimalis bukan kosong — minimalis itu buang semua yang gak perlu.",
              },
              {
                title: "Bikin yang penting",
                body: "Aku lebih milih nyelesaiin masalah nyata daripada bikin project cuma buat impress developer lain. Kalau gak ada yang butuh, ngapain?",
              },
            ].map((item, i) => (
              <RevealText key={item.title} delay={0.15 + i * 0.1}>
                <div className="border-l-2 border-accent/40 pl-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
