export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  status: "active" | "experiment" | "completed";
  year: string;
  link?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "smanso-ai",
    title: "SMANSO.AI",
    tagline: "AI-powered learning platform for Indonesian students",
    description:
      "An educational platform that makes learning more interactive and personalized through AI. Designed specifically for Indonesian high school students.",
    longDescription:
      "SMANSO.AI was born from a simple observation: Indonesian students deserve better learning tools. The platform uses AI to create personalized learning experiences, adapting to each student's pace and style. From interactive quizzes to AI tutoring sessions, every feature is designed to make learning feel less like a chore and more like a conversation with a patient mentor.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini", "Supabase"],
    category: "Education",
    status: "active",
    year: "2024",
    featured: true,
  },
  {
    slug: "yapping-ai",
    title: "Yapping.ai",
    tagline: "AI chat platform with multiple personalities",
    description:
      "A conversational AI platform featuring diverse personalities and unique conversational experiences. Making AI interactions feel natural and entertaining.",
    longDescription:
      "Yapping.ai explores the spectrum of AI personalities. Each character has a distinct voice, knowledge base, and conversational style — from a philosophical thinker to a comedy writer. The goal isn't to replace human conversation, but to explore what happens when AI has character.",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    category: "AI Product",
    status: "active",
    year: "2024",
    featured: true,
  },
  {
    slug: "sora-loka",
    title: "Sora Loka",
    tagline: "Experimental P2P offline communication network",
    description:
      "A peer-to-peer communication concept that works offline. Exploring decentralized networking for communication without internet dependency.",
    longDescription:
      "Sora Loka is an experiment in resilient communication. What if we could connect without relying on centralized servers or internet infrastructure? This project explores mesh networking and P2P protocols for local communication — a research project that pushes the boundaries of what's possible in disconnected environments.",
    tech: ["JavaScript", "WebRTC", "P2P Networking", "Mesh Protocols"],
    category: "Experiment",
    status: "experiment",
    year: "2024",
    featured: true,
  },
  {
    slug: "ai-translate",
    title: "AI Translate",
    tagline: "Indonesian to English translation that preserves tone",
    description:
      "A web application that translates Indonesian into natural English while preserving the original tone, context, and nuance.",
    longDescription:
      "Most translation tools produce grammatically correct but emotionally flat translations. AI Translate focuses on preserving the voice of the original writer — whether it's casual, formal, humorous, or academic. The result is English that sounds like the writer intended, not like a dictionary.",
    tech: ["Next.js", "Tailwind CSS", "Google Gemini", "Vercel"],
    category: "Tool",
    status: "completed",
    year: "2024",
    featured: false,
  },
  {
    slug: "catatan-siswa",
    title: "Catatan Siswa",
    tagline: "Digital publication platform for students",
    description:
      "A platform where students can write articles, share opinions, and publish stories. Encouraging a culture of writing among young Indonesians.",
    longDescription:
      "Catatan Siswa gives Indonesian students a voice. It's a digital publication platform designed to be approachable for first-time writers while professional enough to feel meaningful. Students publish articles on topics ranging from school life to social commentary.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "Supabase"],
    category: "Publication",
    status: "active",
    year: "2024",
    featured: false,
  },
  {
    slug: "growthdz",
    title: "Growthdz",
    tagline: "Digital marketplace for templates & creative resources",
    description:
      "A marketplace for high-quality templates and creative resources, helping creators find the tools they need to build faster.",
    longDescription:
      "Growthdz is a curated digital marketplace where creators can find and sell templates, design resources, and productivity tools. Every product is reviewed for quality before listing.",
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase", "Tailwind CSS"],
    category: "Marketplace",
    status: "active",
    year: "2024",
    featured: false,
  },
];
