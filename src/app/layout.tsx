import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diaz Rahardi — AI Product Builder",
  description:
    "Portfolio of Muhammad Diaz Rahardi Putra — AI Product Builder who orchestrates AI, design, and systems into complete products.",
  keywords: [
    "Diaz Rahardi",
    "AI Product Builder",
    "Portfolio",
    "Indonesia",
    "Next.js",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Muhammad Diaz Rahardi Putra" }],
  openGraph: {
    title: "Diaz Rahardi — AI Product Builder",
    description:
      "Building digital products that combine AI, thoughtful design, and meaningful user experiences.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaz Rahardi — AI Product Builder",
    description:
      "Building digital products that combine AI, thoughtful design, and meaningful user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-bg antialiased">
        {children}
      </body>
    </html>
  );
}
