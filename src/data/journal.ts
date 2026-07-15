export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "mikir-dalam-sistem",
    title: "Mikir dalam Sistem: Kenapa Aku Build Produk, Bukan Fitur",
    excerpt:
      "Bedanya fitur sama produk itu bukan di kode — tapi di niat. Ini cara aku pendekatan bikin sesuatu yang beneran berguna.",
    content: `Bedanya fitur sama produk itu bukan di kode. Tapi di niat.

Waktu awal-awal bikin SMANSO.AI, instinct pertamaku itu nambah fitur. Lebih banyak tipe quiz. Lebih banyak mapel. Lebih banyak gamification. Daftarnya panjang banget, dan produknya kerasa makin berat tiap nambah satu.

Terus aku stop dan nanya ke diri sendiri: masalah apa yang sebenernya mau aku selesain?

Jawabannya simpel: siswa Indonesia butuh belajar yang kerasa personal, bukan industrial. Semua fitur setelah itu di-filter lewat lens ini. Kalau gak bikin belajar kerasa lebih personal, gak ship.

Ini yang aku maksud sama mikir dalam sistem. Sistem punya tujuan. Fitur tanpa sistem itu cuma noise.

Aku mulai terapin ini ke semua yang aku bangun. Sebelum nulis kode, aku tanya:
- Apa tujuan produk ini?
- Sistem paling simpel yang serve tujuan itu apa?
- Apa yang bisa aku buang tanpa kehilangan esensinya?

Produk-produk terbaik yang aku pakai tiap hari dibangun kayak gini. Linear, Notion, Arc browser — semuanya kerasa kayak sistem dengan tujuan jelas, bukan kumpulan fitur.

Itu standar yang aku pegang. Bukan perfection, tapi clarity.`,
    date: "2024-12-15",
    tags: ["product-thinking", "sistem", "filosofi"],
    readingTime: "4 menit",
  },
  {
    slug: "ai-sebagai-co-architect",
    title: "AI sebagai Co-Architect: Cara Aku Kerja bareng LLM",
    excerpt:
      "Aku gak pakai AI buat nulis kode buatku. Aku pakai buat mikir bareng aku. Ini prosesku kolaborasi sama language model.",
    content: `Aku gak pakai AI buat nulis kode buatku. Aku pakai buat mikir bareng aku.

Ada miskonsepsi umum kalau AI coding tools bikin kamu males. Dari pengalamanku, justru sebaliknya — kalau kamu pakainya bener.

Prosesku kayak gini:

1. Aku tulis prompt detail yang jelasin arsitekturnya, bukan cuma task-nya.
2. Aku review setiap saran secara kritis, tanya "kenapa pendekatan ini?"
3. Aku iterate — kadang 10+ ronde — sampai solusinya kerasa bener.
4. Aku dokumentasiin keputusannya di file SKILL.md buat referensi masa depan.

Kuncinya itu aku tetep jadi arsitek. AI itu buildernya. Aku yang mutusin blueprint, AI bantu aku construct lebih cepet.

Pendekatan ini fundamentally ngubah cara aku kerja. Sekarang aku bisa prototype dalam hitungan jam yang dulu butuh berhari-hari, tapi quality bar-nya gak turun. Malah lebih tinggi — karena aku punya lebih banyak waktu buat mikirin desain dan lebih sedikit waktu debugging boilerplate.

Masa depan software development itu bukan AI gantiin developer. Tapi developer pakai AI jadi arsitek dari sistem yang makin kompleks. Dan menurutku itu exciting, bukan threatening.`,
    date: "2024-11-28",
    tags: ["AI", "workflow", "development"],
    readingTime: "5 menit",
  },
  {
    slug: "quiet-confidence-dalam-desain",
    title: "Quiet Confidence dalam Desain",
    excerpt:
      "Interface terbaik gak teriak minta perhatian. Mereka earn trust lewat presisi, restraint, dan respect sama waktu user.",
    content: `Interface terbaik yang pernah aku pakai punya satu kualitas: mereka gak coba impress aku.

Linear gak animate semua hal. Notion gak pakai gradient. Dokumentasi Apple gak punya ilustrasi flashy. Mereka semua kerasa confident — bukan yang loud, tapi yang quiet, "aku tau yang aku lakuin" vibe.

Aku sebut ini quiet confidence dalam desain. Karakteristiknya:

**Restraint.** Gak semua elemen perlu gerak. Gak semua permukaan perlu dekorasi.

**Presisi.** Tiap pixel punya alasan. Spacing itu mathematical. Typography itu intentional.

**Respect.** Waktu user di-value. Information hierarchy jelas. Actions predictable.

Waktu aku desain, aku tanya diri sendiri: elemen ini earn tempatnya gak? Kalau aku buang, interface-nya kehilangan makna gak? Kalau jawabannya enggak, ya buang.

Filosofi ini extend ke kode juga. Clean architecture, clear naming, minimal abstractions — semua itu bentuk quiet confidence dalam engineering.

Tujuannya bukan minimalis buat minimalis. Tapi clarity. Dan clarity itu ultimate form of sophistication.`,
    date: "2024-11-10",
    tags: ["desain", "filosofi", "UI"],
    readingTime: "3 menit",
  },
  {
    slug: "ai-buat-produktivitas-nyata",
    title: "AI Buat Produktivitas Nyata, Bukan Demo",
    excerpt:
      "Banyak yang pakai AI cuma buat bikin demo keren. Tapi yang beneran ngubah hidup itu waktu AI jadi bagian dari workflow harian kamu.",
    content: `Jujur aja, aku mulai bosen lihat orang pamer "AI project" yang sebenernya cuma demo. Chatbot yang jawab pertanyaan random. Image generator yang bikin foto lucu. Cool, tapi after what?

Yang beneran ngubah cara aku kerja itu waktu AI jadi bagian dari workflow harian. Bukan project terpisah yang aku buka sekali-sekali, tapi tool yang aku pakai setiap hari buat mikir lebih cepet dan lebih dalam.

Contoh konkret:

Aku pakai AI buat brainstorm. Bukan buat generate ide final, tapi buat expand kemungkinan. "Kalau aku bikin X, apa aja konsekuensinya?" AI bagus banget buat explore angle yang belum kepikiran.

Aku pakai AI buat writing. Bukan buat nulis artikel final, tapi buat outline, buat cek clarity, buat nemuin blind spot. Hasil akhirnya tetep aku yang nulis, tapi prosesnya lebih cepet dan lebih tajam.

Aku pakai AI buat coding. Tapi bukan buat nulis semua kode — buat generate boilerplate, buat review logic, buat nemuin edge case yang aku miss.

Pattern-nya sama: AI augment, bukan replace. Aku tetep di driver seat, AI bantu aku navigate lebih baik.

Ini yang aku mau share lewat portfolio ini. Bukan "lihat project AI keren yang aku bikin", tapi "ini cara AI bikin aku lebih produktif, dan kamu bisa juga".`,
    date: "2024-10-22",
    tags: ["AI", "produktivitas", "workflow"],
    readingTime: "4 menit",
  },
];
