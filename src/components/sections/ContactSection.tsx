"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { MessageCircle, Globe, Link2, Mail } from "lucide-react";

const links = [
  { icon: MessageCircle, label: "WhatsApp", value: "0831-7952-4847", href: "https://wa.me/6283179524847" },
  { icon: Globe, label: "GitHub", value: "GustavoFringInc", href: "https://github.com/GustavoFringInc" },
  { icon: Link2, label: "Instagram", value: "@growthdz", href: "https://instagram.com/growthdz" },
  { icon: Mail, label: "Substack", value: "@growthdz", href: "https://substack.com/@growthdz" },
];

export default function ContactSection() {
  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel number="08" label="Penutup" className="justify-center" />

        <RevealText>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Kalau penasaran atau mau ngobrol,{" "}
            <span className="italic text-accent">pintunya terbuka</span>.
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed mb-12">
            Soal produk AI, education technology, atau hal menarik lainnya yang 
            layak didiskusikan bareng. Nggak perlu formal, santai aja.
          </p>
        </RevealText>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-12">
          {links.map((link, i) => (
            <RevealText key={link.label} delay={0.05 * i}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 paper-card rounded-sm text-center"
              >
                <link.icon
                  size={16}
                  className="text-text-muted group-hover:text-accent transition-colors mx-auto mb-2"
                />
                <div className="font-mono text-[9px] text-blueprint/50 uppercase tracking-wider mb-1">
                  {link.label}
                </div>
                <div className="text-xs font-medium group-hover:text-accent transition-colors truncate">
                  {link.value}
                </div>
              </a>
            </RevealText>
          ))}
        </div>

        {/* Page ending annotation */}
        <RevealText delay={0.3}>
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-border-subtle max-w-xs mx-auto">
            <div className="w-8 h-px bg-border" />
            <span className="font-mono text-[9px] text-text-muted/50 uppercase tracking-wider">
              Akhir catatan
            </span>
            <div className="w-8 h-px bg-border" />
          </div>
        </RevealText>
      </div>
    </section>
  );
}
