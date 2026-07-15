"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/motion/TypingEffect";
import ConstellationBg from "@/components/motion/ConstellationBg";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dark-section overflow-hidden">
      <ConstellationBg />
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Corner annotations */}
      <div className="absolute top-20 left-6 coord-marker hidden md:block">
        04.2891° S, 115.5295° E
      </div>
      <div className="absolute top-20 right-6 coord-marker hidden md:block text-right">
        PORTFOLIO / 2024—NOW
      </div>
      <div className="absolute bottom-8 left-6 coord-marker hidden md:block">
        SEC. 01
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-blueprint/70">
            01 — Perkenalan
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          Daripada cuma bilang{" "}
          <span className="italic font-normal text-accent">&quot;saya bisa ini itu&quot;</span>,{" "}
          saya lebih suka nunjukin apa yang benar-benar pernah saya bangun.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed mb-10"
        >
          <TypingEffect
            texts={[
              "AI itu alat bantu mikir, bukan pengganti otak.",
              "Yang simpel biasanya yang paling awet.",
              "Desain itu komunikasi, bukan sekadar dekorasi.",
              "Bikin yang emang dibutuhin orang, bukan yang cuma keren.",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton href="/projects">
            Lihat apa yang udah dibangun
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Atau ngobrol dulu aja
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 right-6 flex items-center gap-2"
        >
          <span className="font-mono text-[10px] text-text-muted tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-text-muted" size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
