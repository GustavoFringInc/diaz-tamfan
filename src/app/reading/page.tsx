"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import { nonFiction, fiction } from "@/data/reading";
import { BookOpen } from "lucide-react";

export default function ReadingPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Reading
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16 max-w-2xl">
              <p>
                Buku-buku yang udah aku baca dan somehow ngubah cara aku mikir.
                Campuran antara non-fiksi berat sama fiksi yang bikin gak bisa tidur.
                Gak semuanya "produktif" — ada yang dibaca cuma karena penasaran.
              </p>
            </RevealText>

            {/* Non-fiksi */}
            <RevealText delay={0.15}>
              <div className="mb-16">
                <h2 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
                  <BookOpen size={20} className="text-accent" />
                  Non-Fiksi
                </h2>
                <p className="text-sm text-text-muted mb-8">
                  buku-buku yang bikin mikir keras (dan kadang bikin pusing)
                </p>
                <div className="space-y-3">
                  {nonFiction.map((book, i) => (
                    <RevealText key={book.title} delay={0.02 * i}>
                      <div className="p-5 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated transition-colors group">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-xs text-text-muted mt-0.5">
                              {book.author}
                            </p>
                          </div>
                        </div>
                        {book.note && (
                          <p className="text-sm text-text-secondary mt-3 italic border-l-2 border-accent/30 pl-3">
                            {book.note}
                          </p>
                        )}
                      </div>
                    </RevealText>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* Fiksi */}
            <RevealText delay={0.2}>
              <div className="mb-16">
                <h2 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
                  <BookOpen size={20} className="text-accent" />
                  Fiksi
                </h2>
                <p className="text-sm text-text-muted mb-8">
                  cerita-cerita yang nempel di kepala jauh setelah halaman terakhir
                </p>
                <div className="space-y-3">
                  {fiction.map((book, i) => (
                    <RevealText key={book.title} delay={0.02 * i}>
                      <div className="p-5 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated transition-colors group">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-xs text-text-muted mt-0.5">
                              {book.author}
                            </p>
                          </div>
                        </div>
                        {book.note && (
                          <p className="text-sm text-text-secondary mt-3 italic border-l-2 border-accent/30 pl-3">
                            {book.note}
                          </p>
                        )}
                      </div>
                    </RevealText>
                  ))}
                </div>
              </div>
            </RevealText>

            {/* Footer santai */}
            <RevealText delay={0.25}>
              <div className="text-center py-8">
                <p className="text-sm text-text-muted italic">
                  masih banyak lagi sebenernya, cuma males masukin semua ke list. 
                  nanti kalau rajin aku update 😅
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
