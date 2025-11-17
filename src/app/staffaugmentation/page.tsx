import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Staffaugmentationpage/Herosection";
import Ourmodel from "../components/Staffaugmentationpage/Ourmodel";
import Productivity from "../components/Staffaugmentationpage/Productivity";
import Resourcesolution from "../components/Staffaugmentationpage/Resourcesolution";
import Serviceofferings from "../components/Staffaugmentationpage/Serviceofferings";
import Ourteam from "../components/Staffaugmentationpage/Ourteam";
import Talentpool from "../components/Staffaugmentationpage/Talentpool";
import Featuresofstaff from "../components/Staffaugmentationpage/Featuresofstaff";
import Reasonstochoose from "../components/Staffaugmentationpage/Reasonstochoose";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

//  PAGE METADATA
export const metadata: Metadata = {
  title: "Softworks Technologies | Staff Augmentation Company in Coimbatore",
  description:
    "Softworks Technologies offers top-notch staff augmentation services in Coimbatore, helping businesses hire skilled developers, designers, and IT professionals to scale efficiently.",
  keywords: [
    "Staff Augmentation Company in Coimbatore",
    "IT Staff Augmentation Services",
    "Hire Dedicated Developers Coimbatore",
    "Remote Development Team India",
    "Flexible Staffing Solutions",
    "Contract Developers Coimbatore",
    "On-Demand IT Resources",
    "Outsourced Development Teams",
    "Top Staff Augmentation Company India",
    "Software Development Resource Augmentation",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/staffaugmentation`,
    title: "Softworks Technologies | Staff Augmentation Company in Coimbatore",
    description:
      "Softworks Technologies provides IT staff augmentation and dedicated developer hiring solutions for startups and enterprises worldwide.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Staff Augmentation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Softworks Technologies | Staff Augmentation Company in Coimbatore",
    description:
      "Softworks Technologies offers dedicated developers and IT professionals through flexible staff augmentation services.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
  alternates: {
    canonical: `${weburl}/staffaugmentation`,
  },
  metadataBase: new URL(weburl),
};

// ✅ PAGE COMPONENT
export default function StaffAugmentationPage() {
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
          "Softworks Technologies provides IT staff augmentation services, helping companies hire experienced developers and technology professionals in Coimbatore.",
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
            name: "Staff Augmentation",
            item: `${weburl}/staffaugmentation`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/staffaugmentation/#webpage`,
        url: `${weburl}/staffaugmentation`,
        name: "Staff Augmentation Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies offers flexible staff augmentation and IT resource hiring solutions, enabling businesses to scale their tech teams efficiently.",
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
      <Ourmodel />
      <Productivity />
      <Resourcesolution />
      <Ourteam />
      <Serviceofferings />
      <Talentpool />
      <Featuresofstaff />
      <Reasonstochoose />
    </>
  );
}
