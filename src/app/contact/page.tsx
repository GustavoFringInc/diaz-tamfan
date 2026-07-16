"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { Mail, Globe, Link2, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { icon: MessageCircle, label: "WhatsApp", value: "0831-7952-4847", href: "https://wa.me/6283179524847", note: "Paling cepet respon" },
  { icon: Globe, label: "GitHub", value: "GustavoFringInc", href: "https://github.com/GustavoFringInc", note: "Kode & eksperimen" },
  { icon: Link2, label: "Instagram", value: "@growthdz", href: "https://instagram.com/growthdz", note: "Behind the scenes" },
  { icon: Mail, label: "Substack", value: "@growthdz", href: "https://substack.com/@growthdz", note: "Tulisan panjang" },
];

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6 min-h-[70vh] flex items-center">
          <div className="max-w-3xl mx-auto w-full">
            <SectionLabel number="F" label="Contact" />

            <RevealText as="h1" className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Mau ngobrol?{" "}<span className="italic text-accent">Pintunya terbuka</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-xl">
              <p>Soal produk AI, education technology, atau hal menarik lainnya. Nggak perlu formal.</p>
            </RevealText>

            <div className="grid sm:grid-cols-2 gap-4 mb-20">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20, rotate: (i % 3 - 1) * 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: (i % 3 - 1) * 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 120 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="group block dark-card p-6 rounded-sm relative">
                    {i % 2 === 0 && <div className="absolute -top-2 right-4 washi-tape w-10 rotate-[3deg]" />}
                    <div className="flex items-start justify-between mb-4">
                      <link.icon size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                      <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="font-mono text-[9px] text-accent/50 uppercase tracking-wider mb-1">{link.label}</div>
                    <div className="font-medium text-sm mb-2 group-hover:text-accent transition-colors">{link.value}</div>
                    <div className="text-xs text-text-muted">{link.note}</div>
                  </a>
                </motion.div>
              ))}
            </div>

            <RevealText delay={0.3}>
              <div className="relative p-6 dark-card rounded-sm max-w-lg">
                <div className="absolute -top-2 left-8 washi-tape w-14 rotate-[-2deg]" />
                <h2 className="font-display text-lg font-bold mb-3 mt-1">Terbuka buat</h2>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>Kolaborasi produk AI dan education technology</li>
                  <li>Ngobrol soal AI workflow dan produktivitas</li>
                  <li>Konsultasi product architecture</li>
                  <li>Obrolan menarik tanpa agenda</li>
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
