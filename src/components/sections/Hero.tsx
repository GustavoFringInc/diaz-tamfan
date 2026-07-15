"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/motion/TypingEffect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Desk texture / blueprint background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      {/* Scattered desk elements (decorative) */}
      <div className="absolute top-24 left-8 coord-marker hidden lg:block rotate-[-2deg]">
        04.2891° S, 115.5295° E
      </div>
      <div className="absolute top-28 right-10 coord-marker hidden lg:block rotate-[1deg]">
        FIELD NOTES / VOL. 03
      </div>
      <div className="absolute bottom-32 left-12 hidden lg:block">
        <div className="w-16 h-16 border border-blueprint/20 rounded-sm rotate-[3deg]" />
      </div>
      <div className="absolute bottom-24 right-16 hidden lg:block">
        <div className="font-mono text-[9px] text-text-muted/40 rotate-[2deg]">
          pg. 001
        </div>
      </div>

      {/* Main pinned paper */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Paper sheet */}
          <div className="relative bg-paper border border-border-subtle p-10 md:p-14 shadow-[4px_6px_20px_rgba(0,0,0,0.08)]">
            {/* Pin / tack at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-5 h-5 rounded-full bg-accent shadow-md border-2 border-paper" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent-hover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Small tape at top-right corner */}
            <div className="absolute -top-2 -right-4 w-16 h-5 bg-tape rotate-[8deg] rounded-sm opacity-70" />

            {/* Page number */}
            <div className="absolute top-4 right-6 font-mono text-[9px] text-text-muted/50">
              pg. 001
            </div>

            {/* Date annotation */}
            <div className="font-mono text-[10px] text-text-muted/60 tracking-wider uppercase mb-8">
              Catatan Lapangan — Juli 2026
            </div>

            {/* Main content */}
            <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0] mb-8">
              Halo, saya <span className="text-highlight">Diaz</span>.
              <br />
              <span className="italic font-normal text-text-secondary text-3xl md:text-5xl lg:text-6xl">
                Saya bangun produk pakai AI.
              </span>
            </h1>

            {/* Pencil-style divider */}
            <div className="w-24 h-px bg-text-primary/20 mb-8" />

            <div className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-10">
              <TypingEffect
                texts={[
                  "Daripada cuma bilang 'saya bisa', saya lebih suka nunjukin.",
                  "AI itu alat bantu mikir, bukan pengganti otak.",
                  "Yang simpel biasanya yang paling awet.",
                  "Bikin yang emang dibutuhin orang.",
                ]}
              />
            </div>

            {/* Handwritten-style navigation hint */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-paper text-sm font-medium hover:bg-accent transition-colors duration-300"
              >
                Lihat yang udah dibangun
                <span className="text-xs opacity-60">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-text-primary/30 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Atau ngobrol dulu
              </a>
            </div>

            {/* Small annotation at bottom */}
            <div className="absolute bottom-4 left-6 font-mono text-[9px] text-text-muted/40 italic">
              * bukan portfolio biasa — ini buku kerja
            </div>
          </div>

          {/* Shadow / depth element behind paper */}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-border-subtle/50 -z-10" />
        </motion.div>

        {/* Small sticky note beside the paper */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden md:block absolute -right-4 top-1/3 bg-[#fef3c7] p-3 w-28 shadow-sm rotate-[3deg] border border-yellow-200/50"
        >
          <p className="text-[10px] text-text-secondary leading-relaxed">
            scroll ke bawah, masih banyak yang mau diceritain
          </p>
          <div className="mt-1 w-8 h-0.5 bg-accent/30" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase">Balik halaman</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-6 bg-text-muted/40"
        />
      </motion.div>
    </section>
  );
}
