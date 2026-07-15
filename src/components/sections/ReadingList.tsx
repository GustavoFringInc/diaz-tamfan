"use client";

import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { nonFiction, fiction } from "@/data/reading";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function ReadingList() {
  const recentBooks = [...nonFiction.slice(0, 4), ...fiction.slice(0, 2)];

  return (
    <section className="section-spacing px-6 bg-bg-surface relative">
      {/* Blueprint accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full blueprint-grid-dense opacity-10 hidden lg:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionLabel number="04" label="Daftar Bacaan" />

        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <RevealText>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Beberapa orang hobi koleksi sepatu.{" "}
                <span className="italic text-accent">Saya malah hobi baca</span>.
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                Campuran non-fiksi berat dan fiksi yang bikin susah tidur. 
                Nggak semuanya &ldquo;produktif&rdquo; — ada yang dibaca cuma karena penasaran.
              </p>
            </RevealText>
          </div>
        </div>

        {/* Bookshelf-style list */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
          {recentBooks.map((book, i) => (
            <RevealText key={book.title} delay={0.05 * i}>
              <div className="group py-5 border-b border-border-subtle hover:bg-paper/50 transition-colors px-3 -mx-3 rounded-sm">
                <div className="flex items-start gap-4">
                  {/* Book icon / number */}
                  <div className="shrink-0 w-8 h-10 bg-bg-elevated border border-border-subtle rounded-sm flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    <BookOpen size={12} className="text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[9px] text-blueprint/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider">
                        {nonFiction.includes(book) ? "non-fiksi" : "fiksi"}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm group-hover:text-accent transition-colors leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {book.author}
                    </p>
                    {book.note && (
                      <p className="text-xs text-text-secondary mt-2 italic leading-relaxed">
                        {book.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </RevealText>
          ))}
        </div>

        {/* More link */}
        <RevealText delay={0.3}>
          <div className="mt-10 flex items-center gap-3">
            <div className="w-12 h-px bg-border" />
            <Link
              href="/reading"
              className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
            >
              Lihat daftar lengkap <span className="text-xs">→</span>
            </Link>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
