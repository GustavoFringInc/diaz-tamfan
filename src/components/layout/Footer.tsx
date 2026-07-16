"use client";

import Link from "next/link";
import { Globe, Link2, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              <span className="font-display font-semibold">diaz rahardi</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              AI Product Builder dari Indonesia. Bantu orang mikir dan kerja lebih baik pakai AI.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="section-number mb-4">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/journal", label: "Journal" },
                { href: "/reading", label: "Reading" },
                { href: "/now", label: "Now" },
                { href: "/uses", label: "Uses" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="section-number mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/GustavoFringInc" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                <Globe size={18} />
              </a>
              <a href="https://instagram.com/growthdz" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="Instagram">
                <Link2 size={18} />
              </a>
              <a href="https://substack.com/@growthdz" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="Substack">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/6283179524847" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="text-xs text-text-muted">Paling cepet lewat WhatsApp.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Muhammad Diaz Rahardi Putra
          </p>
          <p className="text-xs text-text-muted font-mono">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
