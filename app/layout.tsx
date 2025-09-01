import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Blog — Lucas Zubiarrain",
  description:
    "Blog de Lucas Zubiarrain — Data, automatisation, visualisation, reporting, web et acquisition. Expérimentations, guides, retours d'expérience.",
  icons: {
    icon: [
      { url: "/Lucas Zubiarrain.png", sizes: "32x32", type: "image/png" },
      { url: "/Lucas Zubiarrain.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/Lucas Zubiarrain.png",
    apple: "/Lucas Zubiarrain.png",
  },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-973JVVRRGW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-973JVVRRGW');
          `}
        </Script>

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
