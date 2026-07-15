"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import Terminal from "@/components/motion/Terminal";

const categories = [
  {
    title: "Hardware",
    items: [
      { name: "Laptop utama", desc: "Mesin Linux pake GXDE OS" },
      { name: "HP Android", desc: "Jalanin GXDE OS — karena kenapa enggak" },
      { name: "Keyboard", desc: "Mechanical, tactile switches, layout minimalis" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Editor", desc: "VS Code tema Gruvbox, extension seminimal mungkin" },
      { name: "Terminal", desc: "Zsh + Starship prompt, config Gruvbox custom" },
      { name: "Framework", desc: "Next.js (App Router) + TypeScript" },
      { name: "Styling", desc: "Tailwind CSS — cepet tanpa kompromi" },
      { name: "Database", desc: "Supabase (Postgres) + Drizzle ORM" },
      { name: "Hosting", desc: "Vercel buat frontend, Supabase buat backend" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Cursor", desc: "AI-first code editor buat rapid prototyping" },
      { name: "Claude", desc: "Deep thinking, arsitektur, dan dokumentasi" },
      { name: "Gemini", desc: "Research, analisis long-context, tugas multimodal" },
      { name: "v0 / Lovable", desc: "Rapid UI prototyping dan eksplorasi desain" },
      { name: "Google Gemini API", desc: "Backbone AI utama buat kebanyakan produk" },
      { name: "OpenAI API", desc: "Buat use case conversational tertentu" },
    ],
  },
  {
    title: "Desain",
    items: [
      { name: "Figma", desc: "UI design, prototyping, design systems" },
      { name: "Font pair", desc: "Space Grotesk (display) + Inter (body) + JetBrains Mono" },
      { name: "Color system", desc: "Gruvbox-inspired warm tones, desaturated buat web" },
      { name: "Icon set", desc: "Lucide — clean, konsisten, minimal" },
    ],
  },
  {
    title: "Produktivitas",
    items: [
      { name: "Knowledge base", desc: "Sistem second-brain di Google Drive (ala Karpathy)" },
      { name: "Notes", desc: "File Markdown, sync lintas device" },
      { name: "Writing", desc: "MDX buat long-form, markdown biasa buat yang lain" },
    ],
  },
];

export default function UsesPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Uses
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16 max-w-2xl">
              <p>
                Tools, setup, dan stack yang aku pakai sehari-hari. Semua dipilih 
                buat kecepatan, kejelasan, dan maintainability jangka panjang. 
                Bukan yang paling hype — yang paling cocok.
              </p>
            </RevealText>

            {/* Terminal preview */}
            <RevealText delay={0.15}>
              <div className="mb-16">
                <Terminal />
              </div>
            </RevealText>

            {/* Categories */}
            <div className="space-y-12">
              {categories.map((cat, i) => (
                <RevealText key={cat.title} delay={0.05 * i}>
                  <div>
                    <h2 className="font-display text-xl font-semibold mb-6 pb-2 border-b border-border-subtle">
                      {cat.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated transition-colors"
                        >
                          <div className="font-medium text-sm mb-1">
                            {item.name}
                          </div>
                          <div className="text-xs text-text-muted">
                            {item.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
