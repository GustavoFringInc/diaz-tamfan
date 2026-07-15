"use client";

import Link from "next/link";
import { Globe, Link2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-display font-semibold text-lg mb-3">
              Diaz Rahardi
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              AI Product Builder. Building products that combine AI, thoughtful
              design, and meaningful experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/journal", label: "Journal" },
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

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/diazrahardi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Globe size={18} />
              </a>
              <a
                href="https://linkedin.com/in/diazrahardi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 size={18} />
              </a>
              <a
                href="mailto:diaz@example.com"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Muhammad Diaz Rahardi Putra. Built with intention.
          </p>
          <p className="text-xs text-text-muted font-mono">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
