"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { nonFiction, fiction } from "@/data/reading";
import { motion } from "framer-motion";

export default function ReadingPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="C" label="Reading" />

            <RevealText as="h1" className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-12 leading-[1.05]">
              Daftar bacaan
            </RevealText>

            {/* Non-fiksi */}
            <div className="mb-16">
              <RevealText>
                <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b border-border-subtle">
                  Non-Fiksi
                </h2>
              </RevealText>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {nonFiction.map((book, i) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 20, rotate: (i % 3 - 1) * 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: (i % 3 - 1) * 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, type: "spring", stiffness: 120 }}
                  >
                    <div className="ticket hover:border-accent/30 transition-colors">
                      <h3 className="text-sm font-medium leading-snug">{book.title}</h3>
                      <p className="text-[10px] text-text-muted mt-1">{book.author}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fiksi */}
            <div className="mb-16">
              <RevealText>
                <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b border-border-subtle">
                  Fiksi
                </h2>
              </RevealText>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {fiction.map((book, i) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 20, rotate: (i % 3 - 1) * 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: (i % 3 - 1) * 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, type: "spring", stiffness: 120 }}
                  >
                    <div className="ticket hover:border-accent/30 transition-colors">
                      <h3 className="text-sm font-medium leading-snug">{book.title}</h3>
                      <p className="text-[10px] text-text-muted mt-1">{book.author}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <RevealText delay={0.2}>
              <div className="text-center py-8 border-t border-border-subtle">
                <p className="font-hand text-xl text-text-muted">
                  masih banyak lagi, cuma males masukin semua
                </p>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
