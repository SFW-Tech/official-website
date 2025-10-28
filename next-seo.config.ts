const webUrl = process.env.NEXT_PUBLIC_webUrl 

const SEO = {
  baseUrl: webUrl,
  title: "Softworks Technologies",
  description:
    "SoftWorks Technologies is a leading Web, Mobile App, Odoo, Staff Augmentation & ERP Development Company based in Coimbatore, India, and Dubai, offering innovative solutions to boost business efficiency.",
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
      "SoftWorks Technologies, Coimbatore-based leader in Web, Mobile App, AI, SAP, Odoo & Staff Augmentation, delivering innovative solutions for business efficiency.",
    description:
      "SoftWorks Technologies is a leading Web, Mobile App, Odoo, Staff Augmentation & ERP Development Company based in Coimbatore, India, and Dubai, offering innovative solutions to boost business efficiency.",
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
