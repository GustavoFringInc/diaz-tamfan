export interface Book {
  title: string;
  author: string;
  note?: string;
}

export const nonFiction: Book[] = [
  { title: "Sapiens", author: "Yuval Noah Harari", note: "buku yang bikin aku mikir ulang soal 'kenapa manusia bisa kayak gini'" },
  { title: "Matinya Kepakaran", author: "Tom Nichols", note: "relevan banget sama kondisi internet sekarang" },
  { title: "Pendidikan Kaum Tertindas", author: "Paulo Freire", note: "ngubah cara aku lihat pendidikan dan SMANSO.AI" },
  { title: "Sang Pangeran", author: "Niccolò Machiavelli", note: "kejam tapi jujur — buku strategi paling realistis yang pernah aku baca" },
  { title: "Cosmos", author: "Carl Sagan", note: "sains yang ditulis kayak puisi" },
  { title: "Homo Deus", author: "Yuval Noah Harari", note: "sequel Sapiens yang lebih gelap dan lebih relevan sama AI" },
  { title: "Retorika", author: "Aristoteles", note: "dasar dari semua komunikasi persuasif — masih relevant after 2000+ tahun" },
  { title: "Meditations", author: "Marcus Aurelius", note: "stoicisme dari sumbernya langsung, bukan dari quote Instagram" },
  { title: "Roadmap to the Top", author: "-", note: "self-development yang surprisingly grounded" },
  { title: "50 to 20", author: "-", note: "" },
  { title: "Filosofi Teras", author: "Henry Manampiring", note: "stoicisme versi Indonesia — accessible dan gak pretensius" },
];

export const fiction: Book[] = [
  { title: "Ronggeng Dukuh Paruk", author: "Ahmad Tohari", note: "sastra Indonesia yang bikin nangis dan marah di waktu bersamaan" },
  { title: "Sang Eksekutor", author: "-", note: "" },
  { title: "Teruslah Bodoh Jangan Pintar", author: "-", note: "judulnya provokatif, isinya lebih dalam dari yang dikira" },
  { title: "Laut Bercerita", author: "Leila S. Chudori", note: "sejarah 1998 yang ditulis dengan hati" },
  { title: "Janji", author: "-", note: "" },
  { title: "3726 MDPL", author: "-", note: "pendakian, persahabatan, dan refleksi — baca pas lagi butuh jeda" },
  { title: "Dunia Sophie", author: "Jostein Gaarder", note: "filsafat yang dibikin novel — cara paling enak belajar filsafat" },
  { title: "White Night", author: "Keigo Higashino", note: "misteri Jepang yang bikin gak bisa tidur sampai halaman terakhir" },
];
