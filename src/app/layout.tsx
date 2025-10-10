import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/HomePage/Footer";
import NotistackProvider from "./components/Layoutwrappers/NotistackProvider";
import PageTransitionWrapper from "./components/Layoutwrappers/Pagetransitionwrapper";
import ScrollToTop from "./components/HomePage/ScrollToTop";


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
  description: "SoftWorks Technologies is a leading Web, Mobile App, Odoo, Staff Augmentation & ERP Development Company based in Coimbatore, India, and Dubai, offering innovative solutions to boost business efficiency",
  keywords: [
    "Softworks Technologies",
    "Sfw-Tech",
    "IT Solutions",
    "Software Development",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile App Development",
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Apps",
    "Enterprise Software",
    "Custom Software Solutions",
    "Cloud Solutions",
    "SaaS Development",
    "E-commerce Development",
    "UI/UX Design",
    "Product Design",
    "Digital Transformation",
    "Software Consulting",
    "Technology Services",
    "API Development",
    "Software Maintenance",
    "DevOps Services",
    "QA & Testing",
    "Artificial Intelligence Solutions",
    "Machine Learning Services",
    "Blockchain Development",
    "Data Analytics",
    "Big Data Solutions",
    "IoT Solutions",
    "Cybersecurity Solutions",
    "IT Support",
    "IT Consulting",
    "IT Outsourcing",
    "Tech Innovation",
    "Software Company",
    "Custom App Development",
    "Staff Augmentation"
  ],
  authors: [{ name: "Softworks Technologies", url: "https://websitefororganisation.netlify.app/" }],

  openGraph: {
    title: "Softworks Technologies",
    description: "Softworks Technologies - Innovative IT solutions for web, mobile, and enterprise applications. Empowering businesses with technology.",
    url: "https://websitefororganisation.netlify.app/",
    siteName: "Softworks Technologies",
    images: [
      {
        url: "https://websitefororganisation.netlify.app/assets/Sfw-Logo1.svg",
        width: 1200,
        height: 630,
        alt: "Softworks Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="font-[var(--font-display)]">
        <PageTransitionWrapper>
          <NotistackProvider>

            {children}
            <Footer />
            <ScrollToTop />
          </NotistackProvider>
        </PageTransitionWrapper>

      </body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        {children}
      </body> */}
    </html>
  );
}
