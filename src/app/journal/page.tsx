"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RevealText from "@/components/motion/RevealText";
import StaggerGrid from "@/components/motion/StaggerGrid";
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

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border-subtle">
      <div
        className="h-full bg-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function JournalPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const post = journalPosts.find((p) => p.slug === selectedPost);

  return (
    <SmoothScroll>
      <Navbar />
      <ReadingProgress />
      <main className="pt-16">
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <RevealText
              as="h1"
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Journal
            </RevealText>
            <RevealText delay={0.1} className="text-text-secondary mb-16 max-w-2xl">
              <p>
                Pandangan personal soal AI, cara mikir, dan gimana AI bisa bantu 
                produktivitas dan problem solving yang nyata. Ditulis gaya ngobrol, 
                bukan artikel korporat. Nulis itu cara aku mikir — dan ini jejaknya.
              </p>
            </RevealText>

            <StaggerGrid className="space-y-6" staggerDelay={0.08}>
              {journalPosts.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => setSelectedPost(p.slug)}
                  className="w-full text-left group p-6 border border-border-subtle rounded-md bg-bg-surface hover:bg-bg-elevated transition-colors card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-accent">
                      {p.tags[0]}
                    </span>
                    <span className="text-xs text-text-muted">·</span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Calendar size={10} /> {p.date}
                    </span>
                    <span className="text-xs text-text-muted">·</span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock size={10} /> {p.readingTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {p.excerpt}
                  </p>
                </button>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Post modal */}
        {post && (
          <div className="fixed inset-0 z-50 bg-bg/95 overflow-y-auto">
            <div className="max-w-2xl mx-auto px-6 py-16">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
              >
                <X size={14} /> Balik ke journal
              </button>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-mono text-accent">
                  {post.tags[0]}
                </span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs text-text-muted">{post.date}</span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs text-text-muted">{post.readingTime}</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
                {post.title}
              </h1>
              <article className="max-w-none">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary leading-relaxed mb-4"
                  >
                    {paragraph.startsWith("**") && paragraph.endsWith("**") ? (
                      <strong className="text-text-primary">
                        {paragraph.replace(/\*\*/g, "")}
                      </strong>
                    ) : paragraph.startsWith("- ") ? (
                      <span className="block pl-4 border-l border-border-subtle">
                        {paragraph.replace("- ", "")}
                      </span>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </article>
              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-bg-surface text-text-muted border border-border-subtle"
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
