import { MetadataRoute } from "next";
import { calculators } from "@/data/calculators";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://finwise-silk.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${BASE_URL}/calculators`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },

    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    {
      url: `${BASE_URL}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const calculatorPages = calculators.map((calculator) => ({
    url: `${BASE_URL}/calculators/${calculator.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...calculatorPages,
    ...blogPages,
  ];
}