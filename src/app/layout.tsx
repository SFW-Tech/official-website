import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/HomePage/Footer";
import NotistackProvider from "./components/Layoutwrappers/NotistackProvider";
import PageTransitionWrapper from "./components/Layoutwrappers/Pagetransitionwrapper";
import ScrollToTop from "./components/HomePage/ScrollToTop";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_webUrl!),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Softworks Technologies",
    template: "%s | Softworks Technologies",
  },
  description: "SoftWorks Technologies, Coimbatore-based leader in Web, Mobile App, AI, SAP, Odoo & Staff Augmentation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
