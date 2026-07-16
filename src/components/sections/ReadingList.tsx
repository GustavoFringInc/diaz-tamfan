"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { nonFiction, fiction } from "@/data/reading";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReadingList() {
  const recentBooks = [...nonFiction.slice(0, 5), ...fiction.slice(0, 3)];

  return (
    <section className="section-spacing px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="04" label="Reading" />

        <RevealText>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
            Yang lagi dan udah dibaca
          </h2>
        </RevealText>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentBooks.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20, rotate: (i % 3 - 1) * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i % 3 - 1) * 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 120 }}
            >
              <div className="ticket hover:border-accent/30 transition-colors cursor-default">
                <div className="font-mono text-[8px] text-accent/50 uppercase tracking-wider mb-1.5">
                  {nonFiction.includes(book) ? "non-fiksi" : "fiksi"}
                </div>
                <h3 className="text-sm font-medium leading-snug">{book.title}</h3>
                <p className="text-[10px] text-text-muted mt-1">{book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <RevealText delay={0.3}>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-12 h-px bg-border" />
            <Link href="/reading" className="text-sm text-text-secondary hover:text-accent transition-colors">
              Lihat semua →
            </Link>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
