"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { MessageCircle, Globe, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
            Soal produk AI, education technology, atau hal menarik lainnya. 
            Nggak perlu formal.
          </p>
        </RevealText>

        {/* Contact cards with slight rotations */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20, rotate: (i % 3 - 1) * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i % 3 - 1) * 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 120 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block dark-card p-5 rounded-sm text-center relative"
              >
                {/* Tape */}
                {i % 2 === 0 && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 washi-tape w-10 rotate-[-2deg]" />
                )}
                <link.icon
                  size={16}
                  className="text-text-muted group-hover:text-accent transition-colors mx-auto mb-2 mt-1"
                />
                <div className="font-mono text-[8px] text-accent/50 uppercase tracking-wider mb-1">
                  {link.label}
                </div>
                <div className="text-xs font-medium group-hover:text-accent transition-colors truncate">
                  {link.value}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* End marker */}
        <RevealText delay={0.3}>
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-border-subtle max-w-xs mx-auto">
            <div className="w-8 h-px bg-border" />
            <span className="font-hand text-lg text-text-muted/50">akhir catatan</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </RevealText>
      </div>
    </section>
  );
}
