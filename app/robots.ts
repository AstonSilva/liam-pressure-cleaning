import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/business";
export default function robots(): MetadataRoute.Robots {
  return siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${siteUrl}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
