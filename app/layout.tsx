import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Le carnet Data — Lucas Zubiarrain",
  description:
    "Blog de Lucas Zubiarrain — Data, automatisation, visualisation, reporting, web et acquisition. Expérimentations, guides, retours d'expérience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} bg-white text-slate-900 antialiased [font-family:Inter,sans-serif] selection:bg-slate-900 selection:text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
