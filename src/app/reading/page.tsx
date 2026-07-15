"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { nonFiction, fiction } from "@/data/reading";
import { BookOpen } from "lucide-react";

export default function ReadingPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="C" label="Reading" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Beberapa orang hobi koleksi sepatu.{" "}
              <span className="italic text-accent">Saya malah hobi baca</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-2xl">
              <p>
                Buku-buku yang udah aku baca dan somehow ngubah cara aku mikir. 
                Campuran antara non-fiksi berat sama fiksi yang bikin gak bisa tidur. 
                Gak semuanya &ldquo;produktif&rdquo; — ada yang dibaca cuma karena penasaran.
              </p>
            </RevealText>

            {/* Non-fiksi */}
            <RevealText delay={0.15}>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen size={16} className="text-accent" />
                  <h2 className="font-display text-2xl font-bold">Non-Fiksi</h2>
                </div>
                <p className="text-sm text-text-muted mb-8">
                  buku-buku yang bikin mikir keras (dan kadang bikin pusing)
                </p>
                <div className="space-y-1">
                  {nonFiction.map((book, i) => (
                    <div
                      key={book.title}
                      className="group py-5 border-b border-border-subtle hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-mono text-[10px] text-blueprint/50">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                              {book.title}
                            </h3>
                          </div>
                          <p className="text-xs text-text-muted pl-7">
                            {book.author}
                          </p>
                        </div>
                      </div>
                      {book.note && (
                        <p className="text-sm text-text-secondary mt-3 pl-7 italic">
                          <span className="text-highlight">{book.note}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* Fiksi */}
            <RevealText delay={0.2}>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen size={16} className="text-accent" />
                  <h2 className="font-display text-2xl font-bold">Fiksi</h2>
                </div>
                <p className="text-sm text-text-muted mb-8">
                  cerita-cerita yang nempel di kepala jauh setelah halaman terakhir
                </p>
                <div className="space-y-1">
                  {fiction.map((book, i) => (
                    <div
                      key={book.title}
                      className="group py-5 border-b border-border-subtle hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-mono text-[10px] text-blueprint/50">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                              {book.title}
                            </h3>
                          </div>
                          <p className="text-xs text-text-muted pl-7">
                            {book.author}
                          </p>
                        </div>
                      </div>
                      {book.note && (
                        <p className="text-sm text-text-secondary mt-3 pl-7 italic">
                          <span className="text-highlight">{book.note}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* Footer santai */}
            <RevealText delay={0.25}>
              <div className="text-center py-10 border-t border-border-subtle">
                <p className="text-sm text-text-muted italic">
                  masih banyak lagi sebenernya, cuma males masukin semua ke list. 
                  nanti kalau rajin aku update.
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
