"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType } from "react";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const MotionComponent = motion.create(Component);

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionComponent
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
