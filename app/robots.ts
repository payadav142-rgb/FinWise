import { MetadataRoute } from "next";

const BASE_URL = "https://finwise-silk.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/_next/",
          "/404",
          "/500",
        ],
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,

    host: BASE_URL,
  };
}