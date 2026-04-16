import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Romeo Berni Radiologia | Eccellenza in Diagnostica per Immagini",
  description: "Centro d'eccellenza per la diagnostica avanzata. Radiologia digitale, ecografia, senologia 3D e MOC DEXA a Parma. Precisione, tecnologia e cura del paziente.",
};

import { Footer } from "@/components/layout/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} font-body text-on-surface bg-surface antialiased`} suppressHydrationWarning={true}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
