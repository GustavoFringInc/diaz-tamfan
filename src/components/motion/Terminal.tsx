"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { type: "input", text: "diaz@gxde ~ % whoami" },
  { type: "output", text: "AI Product Builder · System Thinker · Indonesia" },
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
    <div className="bg-bg-dark border border-border-dark rounded-sm overflow-hidden font-mono text-sm shadow-lg">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-dark bg-bg-dark-surface">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
        <span className="ml-3 text-text-muted text-[10px] font-mono tracking-wider">diaz@gxde — zsh</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-1.5 min-h-[260px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line.type === "input" ? (
              <div className="text-[#d79921]">
                <span className="text-[#928374]">$</span> {line.text}
              </div>
            ) : (
              <div className="text-[#a89984] pl-3">{line.text}</div>
            )}
          </motion.div>
        ))}
        {visibleLines >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#d79921] flex items-center"
          >
            <span className="text-[#928374]">$</span>
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
