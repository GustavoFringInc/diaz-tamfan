"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/motion/TypingEffect";
import ConstellationBg from "@/components/motion/ConstellationBg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ConstellationBg />
      <div className="absolute inset-0 blueprint-grid" />

      {/* Corner annotations */}
      <div className="absolute top-20 left-6 coord-marker hidden lg:block rotate-[-1deg]">
        04.2891° S, 115.5295° E
      </div>
      <div className="absolute top-20 right-6 coord-marker hidden lg:block">
        FIELD NOTES / VOL. 03
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-20">
        {/* Main content — "pinned paper" feel on dark */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Push pin at top */}
          <div className="absolute -top-2 left-16 hidden md:block">
            <div className="push-pin" />
          </div>

          {/* Washi tape at top-right */}
          <div className="absolute -top-3 right-8 w-20 h-3 bg-tape rotate-[6deg] rounded-sm hidden md:block" />

          {/* Section label */}
          <div className="mb-6">
            <span className="section-number">01 — Perkenalan</span>
          </div>

          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            Daripada cuma bilang{" "}
            <span className="italic font-normal text-accent">&quot;saya bisa ini itu&quot;</span>,{" "}
            saya lebih suka nunjukin apa yang benar-benar pernah saya bangun.
          </h1>

          <div className="w-20 h-px bg-accent/30 mb-8" />

          <div className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed mb-10">
            <TypingEffect
              texts={[
                "AI itu alat bantu mikir, bukan pengganti otak.",
                "Yang simpel biasanya yang paling awet.",
                "Desain itu komunikasi, bukan sekadar dekorasi.",
                "Bikin yang emang dibutuhin orang.",
              ]}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg text-sm font-medium rounded-sm hover:bg-accent-hover transition-colors duration-300"
            >
              Lihat yang udah dibangun
              <span className="text-xs opacity-60">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-sm font-medium rounded-sm hover:border-text-muted hover:bg-bg-elevated transition-colors duration-300"
            >
              Atau ngobrol dulu
            </a>
          </div>

          {/* Small annotation */}
          <div className="mt-8 font-mono text-[9px] text-text-muted/40 italic">
            * bukan portfolio biasa — ini buku kerja
          </div>
        </motion.div>

        {/* Scrapbook elements around hero */}
        {/* Sticky note */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:block absolute -right-2 top-1/4 z-20"
        >
          <div className="sticky-note w-36 animate-peel">
            <p>scroll ke bawah, masih banyak cerita</p>
            <div className="absolute -top-1.5 left-4 washi-tape w-10 rotate-[-3deg]" />
          </div>
        </motion.div>

        {/* Polaroid placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden lg:block absolute -left-4 bottom-20 z-20"
        >
          <div className="polaroid w-28 rotate-[-5deg]">
            <div className="w-full h-20 bg-bg-elevated flex items-center justify-center">
              <span className="font-mono text-[8px] text-text-muted">setup.jpg</span>
            </div>
            <div className="polaroid-caption">GXDE terminal</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 right-8 flex items-center gap-2"
      >
        <span className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase">Balik halaman</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-5 bg-text-muted/40"
        />
      </motion.div>
    </section>
  );
}
