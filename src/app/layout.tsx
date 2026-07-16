import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diaz Rahardi — AI Product Builder",
  description:
    "Portfolio Muhammad Diaz Rahardi Putra — AI Product Builder yang bantu orang mikir dan kerja lebih baik pakai AI. Bukan cuma bikin produk, tapi bikin sistem yang hidup.",
  keywords: [
    "Diaz Rahardi",
    "AI Product Builder",
    "Portfolio",
    "Indonesia",
    "Next.js",
    "Artificial Intelligence",
    "Education Technology",
  ],
  authors: [{ name: "Muhammad Diaz Rahardi Putra" }],
  openGraph: {
    title: "Diaz Rahardi — AI Product Builder",
    description:
      "Bantu orang mikir dan kerja lebih baik pakai AI. Bangun produk digital yang combine teknologi, desain, dan meaningful user experience.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaz Rahardi — AI Product Builder",
    description:
      "Bantu orang mikir dan kerja lebih baik pakai AI. Bangun produk digital yang combine teknologi, desain, dan meaningful user experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-bg antialiased">
        {children}
      </body>
    </html>
  );
}
