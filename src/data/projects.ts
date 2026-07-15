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
    tagline: "Platform belajar berbasis AI buat siswa Indonesia",
    description:
      "Platform edukasi yang bikin belajar lebih interaktif dan personal lewat AI. Dibuat khusus buat anak SMA di Indonesia.",
    longDescription:
      "SMANSO.AI lahir dari observasi simpel: siswa Indonesia deserve tools belajar yang lebih baik. Platform ini pakai AI buat bikin pengalaman belajar yang personal, adapt sama pace dan gaya belajar masing-masing siswa. Dari quiz interaktif sampai sesi tutoring AI, semua fitur didesain biar belajar gak berasa kayak beban, tapi lebih kayak ngobrol sama mentor yang sabar. Jujur aja, ini project yang paling deket di hati karena langsung nyentuh masalah yang aku alamin sendiri waktu sekolah.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini", "Supabase"],
    category: "Edukasi",
    status: "active",
    year: "2024",
    featured: true,
  },
  {
    slug: "yapping-ai",
    title: "Yapping.ai",
    tagline: "Platform chat AI dengan berbagai kepribadian",
    description:
      "Platform AI conversational dengan berbagai karakter dan pengalaman obrolan yang unik. Bikin interaksi AI berasa lebih natural dan entertaining.",
    longDescription:
      "Yapping.ai itu eksperimen soal spektrum kepribadian AI. Tiap karakter punya voice, knowledge base, dan gaya ngobrol yang beda — dari pemikir filosofis sampai comedy writer. Tujuannya bukan gantiin obrolan manusia, tapi eksplorasi apa yang terjadi kalau AI punya karakter. Ternyata hasilnya lebih menarik dari yang dikira — orang lebih enjoy ngobrol sama AI yang punya 'personality' daripada yang netral-generic.",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    category: "Produk AI",
    status: "active",
    year: "2024",
    featured: true,
  },
  {
    slug: "sora-loka",
    title: "Sora Loka",
    tagline: "Eksperimen jaringan komunikasi P2P offline",
    description:
      "Konsep komunikasi peer-to-peer yang jalan tanpa internet. Eksplorasi decentralized networking buat komunikasi tanpa ketergantungan infrastruktur.",
    longDescription:
      "Sora Loka itu eksperimen di komunikasi yang resilient. Gimana kalau kita bisa connect tanpa bergantung sama server terpusat atau infrastruktur internet? Project ini eksplorasi mesh networking dan protokol P2P buat komunikasi lokal — research project yang push batas dari apa yang mungkin di environment yang disconnected. Masih eksperimental, tapi konsepnya punya potensi besar buat daerah-daerah yang infrastrukturnya belum stabil.",
    tech: ["JavaScript", "WebRTC", "P2P Networking", "Mesh Protocols"],
    category: "Eksperimen",
    status: "experiment",
    year: "2024",
    featured: true,
  },
  {
    slug: "ai-translate",
    title: "AI Translate",
    tagline: "Translate Indonesia-Inggris yang jaga tone dan konteks",
    description:
      "Web app yang nerjemahin Bahasa Indonesia ke Inggris yang natural sambil jaga tone, konteks, dan nuansa aslinya.",
    longDescription:
      "Kebanyakan alat translate ngasilin terjemahan yang secara grammar bener tapi secara emosi datar. AI Translate fokus jaga voice dari penulis aslinya — mau itu casual, formal, humoris, atau akademis. Hasilnya Bahasa Inggris yang kedengeran kayak yang penulis mau, bukan kayak kamus. Ini project yang lahir dari frustasi pribadi — translate Google sering bikin hasil yang technically correct tapi soul-nya ilang.",
    tech: ["Next.js", "Tailwind CSS", "Google Gemini", "Vercel"],
    category: "Tool",
    status: "completed",
    year: "2024",
    featured: false,
  },
  {
    slug: "catatan-siswa",
    title: "Catatan Siswa",
    tagline: "Platform publikasi digital buat siswa",
    description:
      "Platform dimana siswa bisa nulis artikel, sharing opini, dan publish cerita. Dorong budaya nulis di kalangan anak muda Indonesia.",
    longDescription:
      "Catatan Siswa kasih siswa Indonesia sebuah suara. Ini platform publikasi digital yang didesain approachable buat penulis pertama kali, tapi cukup profesional biar terasa bermakna. Siswa publish artikel mulai dari kehidupan sekolah sampai komentar sosial.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "Supabase"],
    category: "Publikasi",
    status: "active",
    year: "2024",
    featured: false,
  },
  {
    slug: "growthdz",
    title: "Growthdz",
    tagline: "Marketplace digital buat template & creative resources",
    description:
      "Marketplace buat template dan resources kreatif berkualitas, bantu creator nemuin tools yang mereka butuh buat bangun lebih cepet.",
    longDescription:
      "Growthdz itu marketplace digital terkurasi dimana creator bisa nemuin dan jual template, design resources, dan productivity tools. Setiap produk di-review kualitasnya sebelum listing.",
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase", "Tailwind CSS"],
    category: "Marketplace",
    status: "active",
    year: "2024",
    featured: false,
  },
];
