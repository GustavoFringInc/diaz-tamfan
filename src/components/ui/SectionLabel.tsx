"use client";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <span className="section-number">{number}</span>
      <div className="h-px flex-1 max-w-[60px] bg-blueprint opacity-30" />
      <span className="section-number">{label}</span>
    </div>
  );
}
