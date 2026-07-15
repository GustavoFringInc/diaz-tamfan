"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import Terminal from "@/components/motion/Terminal";
import SectionLabel from "@/components/ui/SectionLabel";

const pcSetup = [
  { name: "Perangkat Utama", desc: "Laptop Linux pake GXDE OS — ringan, custom, dan nggak ribet" },
  { name: "Editor", desc: "VS Code tema Gruvbox, extension seminimal mungkin biar fokus" },
  { name: "Browser", desc: "Firefox buat development, Arc buat research dan browsing" },
  { name: "Terminal", desc: "Zsh + Starship prompt, config Gruvbox custom" },
  { name: "Framework", desc: "Next.js (App Router) + TypeScript — standar yang aku percaya" },
  { name: "Styling", desc: "Tailwind CSS — cepet tanpa kompromi" },
  { name: "Database", desc: "Supabase (Postgres) + Drizzle ORM" },
  { name: "Hosting", desc: "Vercel buat frontend, Supabase buat backend" },
  { name: "AI Tools", desc: "Cursor, Claude, Gemini, v0/Lovable — co-pilots yang bikin kerja ngebut" },
  { name: "Workflow", desc: "Iteratif dan dialogis — nulis prompt panjang, refine, dokumentasiin di SKILL.md" },
];

const mobileSetup = [
  { name: "Smartphone", desc: "Android yang jalanin GXDE OS — karena kenapa enggak" },
  { name: "AI Mobile", desc: "Gemini app, ChatGPT — buat quick thinking on the go" },
  { name: "Aplikasi Favorit", desc: "Telegram, Notion, Kindle — tiga itu yang paling sering dibuka" },
  { name: "Produktivitas", desc: "Markdown notes sync lintas device, second-brain di Google Drive" },
  { name: "Tools Harian", desc: "Calendar, task manager simpel, dan reading app" },
  { name: "Eksperimen", desc: "Kadang HP dipakai buat testing responsive design langsung di device" },
];

export default function UsesPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="E" label="Uses" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Alat perang{" "}
              <span className="italic text-accent">sehari-hari</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-2xl">
              <p>
                Semua dipilih buat kecepatan, kejelasan, dan maintainability 
                jangka panjang. Bukan yang paling hype — yang paling cocok. 
                Dua device utama: laptop dan HP.
              </p>
            </RevealText>

            {/* Terminal preview */}
            <RevealText delay={0.15}>
              <div className="mb-20">
                <Terminal />
              </div>
            </RevealText>

            {/* PC */}
            <RevealText delay={0.2}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-blueprint/60">01</span>
                  <h2 className="font-display text-2xl font-bold">PC / Laptop</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {pcSetup.map((item) => (
                    <div key={item.name} className="paper-card p-5 rounded-sm">
                      <div className="font-mono text-[9px] text-blueprint/50 uppercase tracking-wider mb-1.5">
                        {item.name}
                      </div>
                      <div className="text-sm text-text-secondary">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* HP */}
            <RevealText delay={0.25}>
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-[10px] text-blueprint/60">02</span>
                  <h2 className="font-display text-2xl font-bold">HP / Smartphone</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {mobileSetup.map((item) => (
                    <div key={item.name} className="paper-card p-5 rounded-sm">
                      <div className="font-mono text-[9px] text-blueprint/50 uppercase tracking-wider mb-1.5">
                        {item.name}
                      </div>
                      <div className="text-sm text-text-secondary">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
