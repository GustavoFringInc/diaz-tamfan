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
      { name: "Primary laptop", desc: "Linux machine running GXDE OS" },
      { name: "Android phone", desc: "Running GXDE OS — because why not" },
      { name: "Keyboard", desc: "Mechanical, tactile switches, minimal layout" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Editor", desc: "VS Code with Gruvbox theme, minimal extensions" },
      { name: "Terminal", desc: "Zsh + Starship prompt, custom Gruvbox config" },
      { name: "Framework", desc: "Next.js (App Router) + TypeScript" },
      { name: "Styling", desc: "Tailwind CSS — speed without compromise" },
      { name: "Database", desc: "Supabase (Postgres) + Drizzle ORM" },
      { name: "Hosting", desc: "Vercel for frontend, Supabase for backend" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Cursor", desc: "AI-first code editor for rapid prototyping" },
      { name: "Claude", desc: "Deep thinking, architecture, and documentation" },
      { name: "Gemini", desc: "Research, long-context analysis, multimodal tasks" },
      { name: "v0 / Lovable", desc: "Rapid UI prototyping and design exploration" },
      { name: "Google Gemini API", desc: "Core AI backbone for most products" },
      { name: "OpenAI API", desc: "For specific conversational use cases" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma", desc: "UI design, prototyping, design systems" },
      { name: "Font pair", desc: "Space Grotesk (display) + Inter (body) + JetBrains Mono" },
      { name: "Color system", desc: "Gruvbox-inspired warm tones, desaturated for web" },
      { name: "Icon set", desc: "Lucide — clean, consistent, minimal" },
    ],
  },
  {
    title: "Productivity",
    items: [
      { name: "Knowledge base", desc: "Second-brain system on Google Drive (Karpathy-style)" },
      { name: "Notes", desc: "Markdown files, synced across devices" },
      { name: "Writing", desc: "MDX for long-form, plain markdown for everything else" },
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
                The tools, setup, and stack I use daily. Everything is chosen for
                speed, clarity, and long-term maintainability.
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
