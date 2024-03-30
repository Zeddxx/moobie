import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function Robots(): MetadataRoute.Robots {
    const header = headers()
    const domain = (header as any).get("host") as string
    return {
        rules: {
            userAgent: "*",
            disallow: "/api/",
        },
        sitemap: `https://${domain}/sitemap.xml`
    }
}