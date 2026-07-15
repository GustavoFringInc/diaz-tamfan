"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import { Mail, Globe, Link2, MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0831-7952-4847",
    href: "https://wa.me/6283179524847",
  },
  {
    icon: Globe,
    label: "GitHub",
    value: "GustavoFringInc",
    href: "https://github.com/GustavoFringInc",
  },
  {
    icon: Link2,
    label: "Instagram",
    value: "@growthdz",
    href: "https://instagram.com/growthdz",
  },
  {
    icon: Mail,
    label: "Substack",
    value: "@growthdz",
    href: "https://substack.com/@growthdz",
  },
];

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding px-6 min-h-[70vh] flex items-center">
          <div className="max-w-3xl mx-auto w-full">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Ayo ngobrol
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16 max-w-xl">
              <p>
                Aku selalu terbuka buat ngobrol soal produk AI, education technology, 
                desain, atau masalah menarik yang layak diselesaikan. Gak pake form — 
                langsung kontak aja.
              </p>
            </RevealText>

            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {links.map((link, i) => (
                <RevealText key={link.label} delay={0.08 * i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated hover:border-border transition-all card-hover"
                  >
                    <link.icon
                      size={20}
                      className="text-text-muted group-hover:text-accent transition-colors"
                    />
                    <div className="flex-1">
                      <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-0.5">
                        {link.label}
                      </div>
                      <div className="text-sm font-medium group-hover:text-accent transition-colors">
                        {link.value}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                </RevealText>
              ))}
            </div>

            <RevealText delay={0.3}>
              <div className="p-6 border border-border-subtle rounded-md bg-bg-surface">
                <h2 className="font-display text-lg font-semibold mb-2">
                  Terbuka buat
                </h2>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>→ Kolaborasi di produk AI dan education technology</li>
                  <li>→ Ngobrol soal AI workflow dan produktivitas</li>
                  <li>→ Konsultasi product architecture dan design systems</li>
                  <li>→ Obrolan menarik — gak perlu agenda khusus</li>
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
