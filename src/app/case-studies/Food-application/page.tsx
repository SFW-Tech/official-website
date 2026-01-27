import type { Metadata } from "next";
import StructuredData from "../../components/Seo/StructuredData";
import Herosection from "@/app/components/Casestudies/Food-application/Herosection";
import Content from "@/app/components/Casestudies/Food-application/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
    title: "Food Application Case Study",
    description:
        "Discover how Softworks Technologies built a feature-rich food delivery application — enabling order tracking, restaurant management, and real-time delivery updates.",
    keywords: [
        "Food Application case study",
        "food delivery app development",
        "restaurant management software",
        "real-time order tracking",
        "Softworks Technologies case study",
    ],
    openGraph: {
        type: "article",
        url: `${weburl}/case-studies/Food-application`,
        title: "Softworks Technologies | Food Application Case Study",
        description:
            "See how Softworks Technologies developed a scalable food application that improved restaurant operations and enhanced user experience.",
        siteName: "Softworks Technologies",
        images: [
            {
                url: `${weburl}/assets/Casestudies/Food-Application/Food-app-model.png`,
                width: 1200,
                height: 630,
                alt: "Food Application Case Study - Softworks Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@softworkstech",
        creator: "@softworkstech",
        title: "Food Application Case Study | Softworks Technologies",
        description:
            "Learn how Softworks Technologies created a full-featured food delivery app with order management, tracking, and payment integration.",
        images: [`${weburl}/assets/Casestudies/Food-Application/Food-app-model.png`],
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${weburl}/#website`,
                url: weburl,
                name: "Softworks Technologies",
                description:
                    "Softworks Technologies — a global IT company delivering web, ERP, Odoo, AI and cloud solutions from Coimbatore and Dubai.",
                publisher: { "@id": `${weburl}/#organization` },
                inLanguage: "en",
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${weburl}/?s={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "Organization",
                "@id": `${weburl}/#organization`,
                name: "Softworks Technologies",
                legalName: "Softworks Technologies Pvt. Ltd.",
                url: weburl,
                logo: `${weburl}/assets/Sfw-Logo1.svg`,
                foundingDate: "2019",
                description:
                    "Softworks Technologies provides web, mobile, ERP, Odoo, AI and cloud software solutions for businesses worldwide.",
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
                        areaServed: { "@type": "Place", name: "Worldwide" },
                        availableLanguage: ["English"],
                    },
                ],
                address: [
                    {
                        "@type": "PostalAddress",
                        streetAddress:
                            "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
                        addressLocality: "Coimbatore",
                        addressRegion: "Tamil Nadu",
                        postalCode: "641005",
                        addressCountry: "IN",
                    },
                ],
            },
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
                openingHours: "Mo-Fr 09:30-18:30",
                sameAs: [
                    "https://www.facebook.com/softworkstech19",
                    "https://www.linkedin.com/company/softworks-technologies",
                    "https://www.instagram.com/softworkstech19/",
                    "https://x.com/softworkstech",
                ],
                description:
                    "Top IT company in Coimbatore offering Web, ERP, Odoo, AI, SAP and Cloud solutions.",
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${weburl}/case-studies/Food-application/#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: weburl },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Case Studies",
                        item: `${weburl}/case-studies`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Food Application",
                        item: `${weburl}/case-studies/Food-application`,
                    },
                ],
            },
            {
                "@type": "WebPage",
                "@id": `${weburl}/case-studies/Food-application/#webpage`,
                url: `${weburl}/case-studies/Food-application`,
                name: "Food Application Case Study | Softworks Technologies",
                description:
                    "Case study: Softworks Technologies developed a robust food delivery app integrating restaurant listings, payments, and delivery management.",
                inLanguage: "en",
                isPartOf: { "@id": `${weburl}/#website` },
                about: { "@id": `${weburl}/#organization` },
            },
            {
                "@type": "Article",
                "@id": `${weburl}/case-studies/Food-application/#article`,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `${weburl}/case-studies/Food-application`,
                },
                headline: "Food Application Case Study | Softworks Technologies",
                description:
                    "Discover how Softworks Technologies built a modern food ordering and delivery platform for seamless restaurant-to-customer operations.",
                image: `${weburl}/assets/Casestudies/Food-Application/Food-app-model.png`,
                author: {
                    "@type": "Organization",
                    name: "Softworks Technologies",
                    url: weburl,
                },
                publisher: {
                    "@type": "Organization",
                    name: "Softworks Technologies",
                    logo: { "@type": "ImageObject", url: `${weburl}/assets/Sfw-Logo1.svg` },
                },
                datePublished: "2024-12-18",
                dateModified: "2024-12-18",
            },
        ],
    };

    return (
        <>
            <StructuredData data={jsonLd} />
            <Herosection />
            <Content />
        </>
    );
}
