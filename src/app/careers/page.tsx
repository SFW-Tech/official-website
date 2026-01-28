import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Careerspage/Herosection";
import Exploresection from "../components/Careerspage/Exploresection";
import Jobsection from "../components/Careerspage/Jobsection";
import Footer from "../components/HomePage/Footer";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Careers - Join Our IT Team",
  description:
    "Explore exciting career opportunities at Softworks Technologies. Join our expert team specializing in web, ERP, Odoo, AI, and cloud development across Coimbatore and Dubai.",
  keywords: [
    "Softworks Technologies Careers",
    "Softworks Technologies Jobs",
    "Softworks Technologies Hiring",
    "IT Jobs in Coimbatore",
    "Software Company Hiring Coimbatore",
    "IT Company Careers in Coimbatore",
    "Web Developer Jobs in Coimbatore",
    "Frontend Developer Jobs Coimbatore",
    "React Developer Jobs Coimbatore",
    "JavaScript Developer Careers Coimbatore",
    "Node.js Developer Jobs Coimbatore",
    "Full Stack Developer Jobs Coimbatore",
    "Backend Developer Jobs Coimbatore",
    "ERP Jobs Coimbatore",
    "Odoo Developer Jobs Coimbatore",
    "SAP Consultant Jobs Coimbatore",
    "AI Developer Careers India",
    "Artificial Intelligence Jobs Coimbatore",
    "Machine Learning Engineer Jobs Coimbatore",
    "Python Developer Jobs Coimbatore",
    "Software Engineer Careers Coimbatore",
    "Cloud Engineer Jobs Coimbatore",
    "IT Support Jobs Coimbatore",
    "UI UX Designer Jobs Coimbatore",
    "Web Designer Careers Coimbatore",
    "Digital Marketing Jobs Coimbatore",
    "Internship Opportunities in Coimbatore",
    "Freshers IT Jobs Coimbatore",
    "Software Developer Jobs Dubai",
    "ERP Jobs in Dubai",
    "IT Careers in Dubai",
    "Full Stack Developer Jobs Dubai",
    "Web Developer Jobs Dubai",
    "Odoo Developer Careers Dubai",
    "Join Softworks Technologies Team",
    "Work at Softworks Technologies",
    "Careers at Softworks Technologies Coimbatore",
    "Careers at Softworks Technologies Dubai",
    "Best IT Company Jobs Coimbatore",
    "Top Software Company Hiring Coimbatore",
    "Global IT Careers India",
    "Tech Company Hiring Coimbatore",
    "Software Development Company Careers",
    "Latest IT Openings Coimbatore",
    "Current Vacancies at Softworks Technologies",
    "Apply for IT Jobs Coimbatore",
    "Join Our IT Team Softworks Technologies"
  ],

  openGraph: {
    type: "website",
    url: `${weburl}/careers`,
    title: "Softworks Technologies | Careers – Join Our IT Team in Coimbatore & Dubai",
    description:
      "Build your future with Softworks Technologies — leading IT company in Coimbatore & Dubai specializing in Web, ERP, Odoo, AI, and Cloud solutions.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Softworks Technologies | Careers – Join Our IT Team in Coimbatore & Dubai",
    description:
      "Build your future with Softworks Technologies — leading IT company in Coimbatore & Dubai specializing in Web, ERP, Odoo, AI, and Cloud solutions.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/careers/#webpage`,
        url: `${weburl}/careers`,
        name: "Careers at Softworks Technologies | IT Jobs in Coimbatore & Dubai",
        description:
          "Join Softworks Technologies and explore career opportunities in web, ERP, Odoo, AI, and cloud development.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },

      // 2️  Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${weburl}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: `${weburl}/careers`,
          },
        ],
      },

      // 3️ Organization Reference (Link to Main)
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />

      <Herosection />
      <Exploresection />
      <Jobsection />

    </>
  );
}
