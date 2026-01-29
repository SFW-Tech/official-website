import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/e-commercepage/Herosection";
import Ecommerce from "../components/e-commercepage/Ecommerce";
import Whychooseus from "../components/e-commercepage/Whychooseus";
import Features from "../components/e-commercepage/Features";
import Carouselcomp from "../components/mobiledevelopmentpage/Carouselcomp";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "E-commerce Development Coimbatore",
  description:
    "Softworks Technologies builds powerful and scalable e-commerce websites and apps in Coimbatore. We specialize in custom online stores using Next.js, React, and Node.js with secure payment integration.",
  keywords: [
    "E-commerce Website Development",
    "Online Store Development",
    "E-commerce Development Company in Coimbatore",
    "Custom E-commerce Solutions",
    "React E-commerce Website",
    "Next.js E-commerce Development",
    "Shopify Development Coimbatore",
    "WooCommerce Development Coimbatore",
    "E-commerce App Development",
    "Secure Payment Gateway Integration",
    "Softworks Technologies E-commerce Development",
    "Best E-commerce Company in India",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/e-commerce`,
    title: "E-commerce Development Company | SFW",
    description:
      "Softworks Technologies creates responsive and high-performance e-commerce websites using React, Next.js, and Node.js.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies E-commerce Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "E-commerce Development Company | SFW",
    description:
      "Softworks Technologies offers full-scale e-commerce development solutions for online stores with advanced features and modern UI/UX design.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// ✅ PAGE COMPONENT
export default function EcommercePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️⃣ Website Schema
      {
        "@type": "WebSite",
        "@id": `${weburl}/#website`,
        url: weburl,
        name: "Softworks Technologies",
        publisher: { "@id": `${weburl}/#organization` },
        inLanguage: "en",
      },

      // 2️⃣ Organization Schema
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        legalName: "Softworks Technologies Pvt. Ltd.",
        url: weburl,
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
      },

      // 3️⃣ LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": `${weburl}/#localbusiness`,
        name: "Softworks Technologies",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        telephone: "+91-9894113103",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
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
        description:
          "Softworks Technologies is a trusted e-commerce development company in Coimbatore that builds secure and scalable online stores for businesses worldwide.",
      },

      // 4️⃣ Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: weburl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "E-commerce Development",
            item: `${weburl}/e-commerce`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/e-commerce/#webpage`,
        url: `${weburl}/e-commerce`,
        name: "E-commerce Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies offers advanced e-commerce website development in Coimbatore using React, Next.js, and Node.js — ensuring speed, SEO, and scalability.",
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

      <Herosection />
      <Ecommerce />
      <Whychooseus />
      <Features />
      <Carouselcomp />
    </>
  );
}
