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
        <SectionLabel number="06" label="Contact" className="justify-center" />

        <RevealText>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
            Mau ngobrol?{" "}
            <span className="italic text-accent">Pintunya terbuka</span>.
          </h2>
        </RevealText>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
