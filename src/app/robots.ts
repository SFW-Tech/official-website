import { MetadataRoute } from "next";

const webUrl = process.env.NEXT_PUBLIC_webUrl!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", 
      allow: "/",     
    },
    sitemap: `${webUrl}/sitemap.xml`,
  };
}
