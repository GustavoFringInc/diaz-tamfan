"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { Mail, Globe, Link2, MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0831-7952-4847",
    href: "https://wa.me/6283179524847",
    note: "Paling cepet respon di sini",
  },
  {
    icon: Globe,
    label: "GitHub",
    value: "GustavoFringInc",
    href: "https://github.com/GustavoFringInc",
    note: "Lihat kode dan eksperimen",
  },
  {
    icon: Link2,
    label: "Instagram",
    value: "@growthdz",
    href: "https://instagram.com/growthdz",
    note: "Behind the scenes",
  },
  {
    icon: Mail,
    label: "Substack",
    value: "@growthdz",
    href: "https://substack.com/@growthdz",
    note: "Tulisan panjang",
  },
];

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6 min-h-[70vh] flex items-center">
          <div className="max-w-3xl mx-auto w-full">
            <SectionLabel number="F" label="Contact" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Mau ngobrol?{" "}
              <span className="italic text-accent">Pintunya terbuka</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-xl">
              <p>
                Soal produk AI, education technology, desain, atau hal menarik lain 
                yang layak didiskusikan. Nggak perlu formal, santai aja. 
                Nggak pake form — langsung kontak.
              </p>
            </RevealText>

            <div className="grid sm:grid-cols-2 gap-4 mb-20">
              {links.map((link, i) => (
                <RevealText key={link.label} delay={0.08 * i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 paper-card rounded-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <link.icon
                        size={20}
                        className="text-text-muted group-hover:text-accent transition-colors"
                      />
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                    <div className="font-mono text-[10px] text-blueprint/60 uppercase tracking-wider mb-1">
                      {link.label}
                    </div>
                    <div className="font-medium text-sm mb-2 group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                    <div className="text-xs text-text-muted">
                      {link.note}
                    </div>
                  </a>
                </RevealText>
              ))}
            </div>

            <RevealText delay={0.3}>
              <div className="paper-note p-6 rounded-sm max-w-lg">
                <h2 className="font-display text-lg font-bold mb-3">
                  Terbuka buat
                </h2>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>Kolaborasi di produk AI dan education technology</li>
                  <li>Ngobrol soal AI workflow dan produktivitas</li>
                  <li>Konsultasi product architecture dan design systems</li>
                  <li>Obrolan menarik tanpa agenda khusus</li>
                </ul>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
