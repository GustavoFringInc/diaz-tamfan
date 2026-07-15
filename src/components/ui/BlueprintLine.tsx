"use client";

import { motion } from "framer-motion";

interface BlueprintLineProps {
  className?: string;
  direction?: "horizontal" | "vertical" | "diagonal";
  animated?: boolean;
}

export default function BlueprintLine({ 
  className = "", 
  direction = "horizontal",
  animated = true 
}: BlueprintLineProps) {
  if (direction === "horizontal") {
    return (
      <svg className={`w-full ${className}`} height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
        <motion.line
          x1="0" y1="1" x2="100" y2="1"
          stroke="rgba(107, 140, 174, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          initial={animated ? { pathLength: 0 } : false}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    );
  }

  if (direction === "vertical") {
    return (
      <svg className={`h-full ${className}`} width="2" viewBox="0 0 2 100" preserveAspectRatio="none">
        <motion.line
          x1="1" y1="0" x2="1" y2="100"
          stroke="rgba(107, 140, 174, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="4 3"
          initial={animated ? { pathLength: 0 } : false}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    );
  }

  return null;
}

export function BlueprintCross({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-3 h-3 ${className}`}>
      <div className="absolute inset-x-0 top-1/2 h-px bg-blueprint/40" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-blueprint/40" />
    </div>
  );
}

export function BlueprintPath({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 400 200" fill="none">
      <motion.path
        d="M0,100 C100,100 100,50 200,50 C300,50 300,150 400,150"
        stroke="rgba(107, 140, 174, 0.2)"
        strokeWidth="1"
        strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="200" cy="50" r="3"
        fill="rgba(107, 140, 174, 0.4)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
    </svg>
  );
}
