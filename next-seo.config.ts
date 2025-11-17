const webUrl = process.env.NEXT_PUBLIC_webUrl 

const SEO = {
  baseUrl: webUrl,
  title: "Softworks Technologies",
  description:
    "SoftWorks Technologies, Coimbatore-based leader in Web, Mobile App, AI, SAP, Odoo & Staff Augmentation, delivering innovative solutions for business efficiency.",
  canonical: webUrl,
  image: `${webUrl}/assets/Sfw-Logo1.svg`, 
  socialLinks: [
    "https://www.facebook.com/softworkstech19",
    "https://www.linkedin.com/company/softworks-technologies",
    "https://www.instagram.com/softworkstech19/",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${webUrl}/`,
    siteName: "Softworks Technologies",
    title:
      "Softworks Technologies",
    description:
      "SoftWorks Technologies, Coimbatore-based leader in Web, Mobile App, AI, SAP, Odoo & Staff Augmentation, delivering innovative solutions for business efficiency.",
    images: [
      {
        url: `${webUrl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Logo",
      },
    ],
  },
};

export default SEO;
