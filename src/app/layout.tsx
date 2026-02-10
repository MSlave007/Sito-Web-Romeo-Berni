import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Tecnico Berni Romeo | Radioprotezione e Sicurezza",
  description: "Verifiche Rx, Apparecchi Elettromedicali, Autorizzazione Sanitaria e Sicurezza sul Lavoro a Parma.",
};

import { Footer } from "@/components/layout/Footer/Footer";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable}`} suppressHydrationWarning={true}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
