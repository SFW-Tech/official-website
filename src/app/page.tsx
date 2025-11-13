import type { Metadata } from "next";
import StructuredData from "./components/Seo/StructuredData";
import Topbar from "./components/HomePage/Topbar";
import HeroSection from "./components/HomePage/HeroSection";
import ClientsCardComponent from "./components/HomePage/ClientsCardComponent";
import AboutUsComponent from "./components/HomePage/AboutUsComponent";
import OurServices from "./components/HomePage/OurServices";
import Calloutsection from "./components/HomePage/Calloutsection";
import CaseStudiesSection from "./components/HomePage/CaseStudiesSection";
import StaffAugmentation from "./components/HomePage/StaffAugmentation";
import Latestposts from "./components/HomePage/Latestposts";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Softworks Technologies | Global Experts in Web, ERP, AI & Cloud Solutions",
  description:
    "SoftWorks Technologies is a leading Web, Mobile App, Odoo, Staff Augmentation & ERP Development Company based in Coimbatore, India, and Dubai, offering innovative solutions to boost business efficiency",
  keywords: [
    "Softworks Technologies",
    "Softworks Technologies Coimbatore",
    "Softworks Technologies Dubai",
    "Softworks Technologies India",
    "Softworks Technologies Pvt Ltd",
    "Softworks Tech",
    "Top IT Company in Coimbatore",
    "Best Software Company in Coimbatore",
    "Top Software Company in India",
    "Leading IT Company in Dubai",
    "IT Consulting Company Coimbatore",
    "Global IT Solutions Provider",
    "Web Development Company Coimbatore",
    "Website Designers in Coimbatore",
    "Custom Web App Development",
    "Next.js Development Company",
    "React.js Developers Coimbatore",
    "Frontend Development Services",
    "Full Stack Web Development Company",
    "Corporate Website Design",
    "Ecommerce Website Development",
    "Progressive Web App Development",
    "Responsive Web Design Services",
    "Web Portal Development Company",
    "Mobile App Development Coimbatore",
    "iOS App Development Company",
    "Android App Developers Coimbatore",
    "Cross Platform App Development",
    "Flutter App Development Services",
    "React Native App Development",
    "Custom Mobile Application Development",
    "Odoo Developers Coimbatore",
    "Odoo Developers Dubai",
    "ERP Software Development Company",
    "ERP Customization Services",
    "Odoo Implementation Company",
    "Odoo Integration Services",
    "Enterprise Resource Planning Solutions",
    "Odoo ERP Consultants India",
    "Odoo Support and Maintenance",
    "Cloud Infrastructure Services",
    "AWS Cloud Solutions",
    "Azure Cloud Management",
    "Google Cloud Services",
    "DevOps Automation Company",
    "Cloud Migration Services",
    "Cloud Security Services",
    "Server Deployment Solutions",
    "AI Development Company India",
    "Machine Learning Solutions Coimbatore",
    "Data Analytics and AI Integration",
    "Chatbot Development Company",
    "Natural Language Processing Services",
    "AI Automation Services",
    "Predictive Analytics Development",
    "IT Staff Augmentation Coimbatore",
    "Hire Remote Developers India",
    "Hire React Developers",
    "Hire Node.js Developers",
    "Dedicated Developer Services",
    "Outsourced IT Team India",
    "Software Outsourcing Company",
    "Ecommerce Development Coimbatore",
    "Shopify Development Company",
    "WooCommerce Development Services",
    "Magento Development Company",
    "Custom E-commerce Platforms",
    "Headless E-commerce Development",
    "SAP Implementation Services",
    "SAP Integration Coimbatore",
    "Enterprise Software Development",
    "Business Process Automation Solutions",
    "CRM Software Development",
    "Custom ERP Development India",
    "Digital Transformation Company",
    "Business Automation Solutions",
    "IT Infrastructure Consulting",
    "Enterprise Application Development",
    "Cloud and AI Integration",
    "IT Company Near Me",
    "Best Web Development Company in Coimbatore",
    "Top ERP Company in India",
    "Best Odoo Developer in Coimbatore",
    "Global IT Partner",
    "Technology Solutions Provider",
    "Software Development Experts",
    "Website Maintenance Services",
    "Cybersecurity Solutions Coimbatore",
    "Cloud Backup Services",
    "Server Management Company",
    "Healthcare Software Solutions",
    "Education Management Software",
    "Retail ERP Solutions",
    "Manufacturing ERP Software",
    "Logistics Management Software",
    "Finance and Accounting Software",
    "MERN Stack Development",
    "Node.js Backend Development",
    "Express.js API Development",
    "MongoDB Development Services",
    "React Frontend Developers",
    "Next.js SEO Optimization",
    "IT Company in Coimbatore",
    "Software Development Company in Coimbatore",
    "Web Design Company in Coimbatore",
    "ERP Company in Dubai",
    "Odoo Developers in Dubai",
    "Global IT Services Company",
    "Best Software Company in Tamil Nadu",
  ],

  openGraph: {
    type: "website",
    url: weburl,
    title: "Softworks Technologies | Global IT, ERP, and AI Solutions Company",
    description:
      "Softworks Technologies delivers next-gen web, ERP, AI, Odoo, and cloud solutions worldwide with offices in Coimbatore and Dubai.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title:
      "Softworks Technologies | Global Experts in Web, ERP, and AI Development",
    description:
      "Softworks Technologies provides cutting-edge digital solutions — Web, ERP, Odoo, SAP, AI, and Cloud — trusted by clients across the world.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
  alternates: {
    canonical: weburl,
  },
  metadataBase: new URL(weburl),
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      //  1. Website Schema
      {
        "@type": "WebSite",
        "@id": `${weburl}/#website`,
        url: weburl,
        name: "Softworks Technologies",
        description:
          "Softworks Technologies — leading IT company in Coimbatore and Dubai, providing web, ERP, AI, Odoo, SAP, and cloud solutions globally.",
        publisher: { "@id": `${weburl}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: `${weburl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },

      //  2. Organization Schema
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        legalName: "Softworks Technologies Pvt. Ltd.",
        url: weburl,
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        foundingDate: "2019",
        description:
          "Softworks Technologies is one of the top IT companies in Coimbatore providing end-to-end solutions in Web Development, ERP, Odoo, AI, SAP, and Cloud services for clients across the globe.",
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "info@sfwtechnologies.com",
            telephone: "+91-9894113103",
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            availableLanguage: ["English"],
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641005",
            addressCountry: "IN",
          }
        ],
        knowsAbout: [
          "Web Development Coimbatore",
          "Mobile App Development Coimbatore",
          "E-Commerce Development Coimbatore",
          "ERP Software Development",
          "Odoo Customization",
          "AI and Machine Learning",
          "Cloud Solutions",
          "SAP Implementation",
          "Next.js and React Development",
          "Staff Augmentation",
        ],
        serviceType: [
          "Web App Development",
          "ERP & Odoo Implementation",
          "AI & Data Solutions",
          "E-Commerce Platform Development",
          "Cloud Deployment & Management",
          "SAP Integration",
          "Custom Software Solutions",
        ],
      },

      //  3. LocalBusiness Schema (for Google Local SEO)
      {
        "@type": "LocalBusiness",
        "@id": `${weburl}/#localbusiness`,
        name: "Softworks Technologies",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        telephone: "+91-9894113103",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "10.9927472",
          longitude: "77.0121149",
        },
        openingHours: "Mo-Fr 09:30-18:30",
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        description:
          "Top IT company in Coimbatore offering Web, ERP, Odoo, AI, SAP, and Cloud solutions for businesses worldwide.",
      },

      // 4. Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: weburl
          }
        ]
      },


      //  5. WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/#webpage`,
        url: weburl,
        name: "Softworks Technologies | IT Company in Coimbatore & Dubai | Web, ERP, AI Experts",
        description:
          "Softworks Technologies — a top IT company in Coimbatore and Dubai specializing in web, ERP, Odoo, SAP, AI, and cloud solutions for global clients.",
        inLanguage: "en",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },


    ],
  };


  return (
    <>
      <StructuredData data={jsonLd} />

      <Topbar />
      <HeroSection />
      <ClientsCardComponent />
      <AboutUsComponent />
      <OurServices />
      <Calloutsection />
      <CaseStudiesSection />
      <StaffAugmentation />
      {/* <Latestposts /> */}
    </>
  );
}
