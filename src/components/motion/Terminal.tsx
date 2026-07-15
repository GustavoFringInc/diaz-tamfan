"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { type: "input", text: "diaz@gxde ~ % whoami" },
  { type: "output", text: "AI Product Builder · System Thinker · Indonesia 🇮🇩" },
  { type: "input", text: "diaz@gxde ~ % cat philosophy.txt" },
  { type: "output", text: "AI should help humans think, not replace them." },
  { type: "output", text: "Simplicity wins. Design is communication." },
  { type: "input", text: "diaz@gxde ~ % ls projects/" },
  { type: "output", text: "smanso.ai/  yapping.ai/  sora-loka/  ai-translate/" },
  { type: "input", text: "diaz@gxde ~ % neofetch --motto" },
  { type: "output", text: "\"Build things people actually need.\"" },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-surface border border-border rounded-md overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-elevated">
        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
        <span className="ml-2 text-text-muted text-xs">diaz@gxde — zsh</span>
      </div>
      <div className="p-5 space-y-1.5 min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line.type === "input" ? (
              <div className="text-accent">
                <span className="text-text-muted">{">"}</span> {line.text}
              </div>
            ) : (
              <div className="text-text-secondary pl-3">{line.text}</div>
            )}
          </motion.div>
        ))}
        {visibleLines >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent flex items-center"
          >
            <span className="text-text-muted">{">"}</span>
            <span className="ml-1">diaz@gxde ~ %</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="ml-1"
            >
              ▋
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
