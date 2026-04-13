import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Jacob — Développeur Full Stack & Data Science",
  description:
    "Portfolio de Lucas Jacob, étudiant MSc Data Science à EPITECH Paris. Développeur Full Stack (React, Next.js, Node.js, Python). Disponible en alternance 2025–2028.",
  keywords: [
    "Lucas Jacob",
    "développeur full stack",
    "data science",
    "EPITECH",
    "React",
    "Next.js",
    "TypeScript",
    "alternance",
  ],
  authors: [{ name: "Lucas Jacob", url: "https://lucas-jacob.com" }],
  openGraph: {
    type: "website",
    url: "https://lucas-jacob.com",
    title: "Lucas Jacob — Développeur Full Stack & Data Science",
    description:
      "Portfolio de Lucas Jacob, étudiant MSc Data Science à EPITECH Paris. Développeur Full Stack (React, Next.js, Node.js, Python).",
    siteName: "Lucas Jacob Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Jacob — Développeur Full Stack & Data Science",
    description:
      "Portfolio de Lucas Jacob, étudiant MSc Data Science à EPITECH Paris.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://lucas-jacob.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg-dark text-text-light">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
