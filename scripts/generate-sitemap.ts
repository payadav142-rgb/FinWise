import fs from "fs";
import path from "path";

import { calculators } from "../data/calculators";
import { blogs } from "../data/blogs";

const BASE_URL = "https://finwise-silk.vercel.app";

const today = new Date().toISOString();

const staticPages = [
  "",
  "/calculators",
  "/blog",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
];

const urls = [
  ...staticPages.map((page) => ({
    loc: `${BASE_URL}${page}`,
    priority:
      page === ""
        ? "1.0"
        : page === "/calculators"
        ? "0.95"
        : "0.8",
    changefreq: "weekly",
  })),

  ...calculators.map((calculator) => ({
    loc: `${BASE_URL}/calculators/${calculator.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  })),

  ...blogs.map((blog) => ({
    loc: `${BASE_URL}/blog/${blog.slug}`,
    priority: "0.75",
    changefreq: "weekly",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(outputPath, xml);

console.log("✅ sitemap.xml generated successfully.");