import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogContent } from "@/data/blogs/content";
import { calculators } from "@/data/calculators";

const BASE_URL = "https://finwise-silk.vercel.app";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article =
    blogContent[
      slug as keyof typeof blogContent
    ];

  if (!article) {
    return {
      title: "Article Not Found | FinWise",
    };
  }

  const url = `${BASE_URL}/blog/${slug}`;

  const description = article.content
    .replace(/\n/g, " ")
    .slice(0, 160);

  return {
    title: `${article.title} | FinWise`,

    description,

    keywords: [
      article.title,
      "Personal Finance",
      "Financial Planning",
      "Investment",
      "Finance Blog",
      "India",
      "FinWise",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: article.title,
      description,
      url,
      siteName: "FinWise",
      locale: "en_IN",
      type: "article",

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
export default async function BlogPost({
  params,
}: Props) {
  const { slug } = await params;

  const article =
    blogContent[
      slug as keyof typeof blogContent
    ];

  if (!article) {
    notFound();
  }

  const relatedBlogs = Object.entries(
    blogContent
  )
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  const relatedCalculators =
    calculators.slice(0, 4);

  const url = `${BASE_URL}/blog/${slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: article.title,

    description: article.content
      .replace(/\n/g, " ")
      .slice(0, 160),

    articleBody: article.content,

    mainEntityOfPage: url,

    datePublished: "2026-07-12",

    dateModified: "2026-07-12",

    author: {
      "@type": "Organization",
      name: "FinWise",
    },

    publisher: {
      "@type": "Organization",

      name: "FinWise",

      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon-512.png`,
      },
    },

    image: `${BASE_URL}/og-image.png`,
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name: article.title,

    url,

    inLanguage: "en-IN",

    description: article.content
      .replace(/\n/g, " ")
      .slice(0, 160),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogSchema
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webpageSchema
          ),
        }}
      />

      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Hero */}

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-10">

          <div className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Finance Blog
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
            Learn practical personal finance tips,
            investment strategies and money
            management guides from FinWise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border bg-white px-4 py-2 text-sm">
              📖 8 min read
            </span>

            <span className="rounded-full border bg-white px-4 py-2 text-sm">
              📅 Updated July 2026
            </span>

            <span className="rounded-full border bg-white px-4 py-2 text-sm">
              ✍️ FinWise Team
            </span>

          </div>

        </div>

        {/* Article */}

        <article className="mt-12 rounded-3xl border bg-white p-10 shadow-sm">

          <div className="whitespace-pre-line leading-9 text-muted-foreground">
            {article.content}
          </div>

        </article>
                {/* Related Articles */}

        <section className="mt-20">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <h2 className="text-3xl font-bold">
                Related Articles
              </h2>

              <p className="mt-2 text-muted-foreground">
                Continue learning with more personal finance guides.
              </p>
            </div>

            <Link
              href="/blog"
              className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
            >
              View All
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {relatedBlogs.map(([blogSlug, blog]) => (

              <Link
                key={blogSlug}
                href={`/blog/${blogSlug}`}
                className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Blog
                </div>

                <h3 className="mt-4 text-xl font-semibold transition group-hover:text-blue-600">
                  {blog.title}
                </h3>

                <div className="mt-5 font-medium text-blue-600">
                  Read Article →
                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* Related Calculators */}

        <section className="mt-20">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Related Calculators
            </h2>

            <p className="mt-2 text-muted-foreground">
              Calculate instantly using our free financial tools.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {relatedCalculators.map((calculator) => (

              <Link
                key={calculator.slug}
                href={`/calculators/${calculator.slug}`}
                className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {calculator.category}
                </div>

                <h3 className="mt-4 text-xl font-semibold transition group-hover:text-blue-600">
                  {calculator.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {calculator.description}
                </p>

                <div className="mt-5 font-medium text-blue-600">
                  Open Calculator →
                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Start Planning Your Finances Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Explore our free financial calculators to plan investments,
            calculate taxes, estimate loan EMIs and make smarter financial
            decisions.
          </p>

          <Link
            href="/calculators"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105"
          >
            Explore Calculators
          </Link>

        </section>

      </main>
    </>
  );
}