"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import StaggerGrid from "@/components/motion/StaggerGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import { journalPosts } from "@/data/journal";
import { X, Calendar, Clock } from "lucide-react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return <div className="reading-progress" style={{ width: `${progress}%` }} />;
}

export default function JournalPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const post = journalPosts.find((p) => p.slug === selectedPost);

  return (
    <SmoothScroll>
      <Navbar />
      <ReadingProgress />
      <main className="pt-14">
        <section className="section-spacing px-6">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="B" label="Journal" />

            <RevealText
              as="h1"
              className="font-editorial text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Nulis itu cara aku mikir.{" "}
              <span className="italic text-accent">Dan ini jejaknya</span>.
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-20 max-w-2xl">
              <p>
                Pandangan personal soal AI, cara mikir, dan gimana AI bisa bantu 
                produktivitas yang nyata. Bukan artikel korporat. Bukan tutorial. 
                Cuma catatan dari seseorang yang lagi jalan dan nulis sambil jalan.
              </p>
            </RevealText>

            <StaggerGrid className="space-y-1" staggerDelay={0.08}>
              {journalPosts.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setSelectedPost(p.slug)}
                  className="w-full text-left group py-8 border-b border-border-subtle hover:bg-bg-surface/30 transition-colors px-4 -mx-4 rounded-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-blueprint/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] text-accent tracking-wider uppercase">
                      {p.tags[0]}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted flex items-center gap-1">
                      <Calendar size={9} /> {p.date}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted flex items-center gap-1">
                      <Clock size={9} /> {p.readingTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                    {p.excerpt}
                  </p>
                </button>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Post modal - editorial style */}
        {post && (
          <div className="fixed inset-0 z-50 bg-bg/98 overflow-y-auto backdrop-blur-sm">
            <div className="max-w-2xl mx-auto px-6 py-16">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-10 text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 font-mono"
              >
                <X size={14} /> Kembali
              </button>
              <div className="mb-8 flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[10px] text-accent tracking-wider uppercase">
                  {post.tags[0]}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-mono text-[10px] text-text-muted">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-mono text-[10px] text-text-muted">{post.readingTime}</span>
              </div>
              <h1 className="font-editorial text-3xl md:text-4xl font-bold mb-10 leading-tight">
                {post.title}
              </h1>
              <article className="max-w-none">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary leading-[1.8] mb-5 text-[15px]"
                  >
                    {paragraph.startsWith("**") && paragraph.endsWith("**") ? (
                      <strong className="text-text-primary font-semibold">
                        {paragraph.replace(/\*\*/g, "")}
                      </strong>
                    ) : paragraph.startsWith("- ") ? (
                      <span className="block pl-5 border-l-2 border-border-subtle text-text-secondary">
                        {paragraph.replace("- ", "")}
                      </span>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </article>
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border-subtle">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 rounded-sm bg-bg-surface text-text-muted border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
