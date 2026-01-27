import { MetadataRoute } from "next";

const webUrl = process.env.NEXT_PUBLIC_webUrl!

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0 },
    { path: "aboutus", priority: 0.8 },
    { path: "contact", priority: 0.8 },
    { path: "case-studies", priority: 0.8 },
    { path: "careers", priority: 0.8 },
    { path: "websitedevelopment", priority: 0.8 },
    { path: "mobileapplications", priority: 0.8 },
    { path: "webapplications", priority: 0.8 },
    { path: "ai", priority: 0.8 },
    { path: "odoo", priority: 0.8 },
    { path: "staffaugmentation", priority: 0.8 },
    { path: "e-commerce", priority: 0.8 },
    { path: "servicenow", priority: 0.8 },
    { path: "sap", priority: 0.8 },
  ];

  const caseStudies = [
    "Digital-transformation",
    "Reverse-logistics",
    "Appointment-booking",
    "Application-system",
    "Food-application",
    "Code-ninja",
    "Kiosk",
    "Field-Service-Management",
    "Token-management",
  ];

  const currentDate = new Date();

  const allPages: MetadataRoute.Sitemap = [
    ...pages.map((page) => ({
      url: `${webUrl}/${page.path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: page.priority,
    })),
    ...caseStudies.map((slug) => ({
      url: `${webUrl}/case-studies/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  return allPages;
}
