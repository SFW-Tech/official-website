import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/hompage.css";
import Footer from "./components/HomePage/Footer";
import NotistackProvider from "./components/NotistackProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softworks Technologies",
  description: "Official website of Softworks Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="font-[var(--font-display)]">
        <NotistackProvider>
          
          {children}
          <Footer />
        </NotistackProvider>

      </body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        {children}
      </body> */}
    </html>
  );
}
