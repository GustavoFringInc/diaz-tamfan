"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/motion/TypingEffect";
import ConstellationBg from "@/components/motion/ConstellationBg";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ConstellationBg />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-accent border border-accent/30 rounded-full bg-accent-subtle">
            AI Product Builder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Bantu orang mikir lebih baik{" "}
          <span className="text-gradient">pakai AI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary mb-8 font-light"
        >
          <TypingEffect
            texts={[
              "AI itu alat bantu mikir, bukan pengganti.",
              "Yang simpel biasanya yang menang.",
              "Desain itu komunikasi, bukan dekorasi.",
              "Bikin yang emang dibutuhin orang.",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton href="/projects">
            Lihat Projects
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Hubungi Aku
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-text-muted" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
