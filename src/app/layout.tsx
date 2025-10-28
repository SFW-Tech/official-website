"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/HomePage/Footer";
import NotistackProvider from "./components/Layoutwrappers/NotistackProvider";
import PageTransitionWrapper from "./components/Layoutwrappers/Pagetransitionwrapper";
import ScrollToTop from "./components/HomePage/ScrollToTop";
import SEO from "../../next-seo.config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Default SEO Config */}
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SEO.baseUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={SEO.baseUrl} />
        <meta property="og:image" content={SEO.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.image} />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PageTransitionWrapper>
          <NotistackProvider>
            {children}
            <Footer />
            <ScrollToTop />
          </NotistackProvider>
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
