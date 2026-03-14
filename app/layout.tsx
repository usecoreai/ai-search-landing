import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BRAND_NAME } from "@/content/landing-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} — AI-поиск для интернет-магазинов`,
  description:
    "AI-поиск и AI-шоппинг-ассистент для e-commerce. Находим нужные товары даже по длинным, неточным и нестандартным запросам. Два формата интеграции, быстрое подключение к каталогу.",
  openGraph: {
    title: `${BRAND_NAME} — AI-поиск для интернет-магазинов`,
    description:
      "AI-поиск и AI-шоппинг-ассистент для e-commerce. Два формата интеграции, быстрое подключение к каталогу.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
