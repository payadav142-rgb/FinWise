import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogContent } from "@/data/blogs/content";
import { calculators } from "@/data/calculators";

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
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,

    description: article.content
      .trim()
      .slice(0, 150),

    openGraph: {
      title: article.title,
      description: article.content
        .trim()
        .slice(0, 150),
      type: "article",
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

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    articleBody: article.content,
    author: {
      "@type": "Organization",
      name: "FinWise",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogSchema
          ),
        }}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          {article.title}
        </h1>

        <div className="mt-10 whitespace-pre-line leading-8 text-muted-foreground">
          {article.content}
        </div>

        {/* Related Blogs */}

        <section className="mt-20">
          <h2 className="mb-6 text-3xl font-bold">
            Related Articles
          </h2>

          <div className="grid gap-4">
            {relatedBlogs.map(
              ([blogSlug, blog]) => (
                <Link
                  key={blogSlug}
                  href={`/blog/${blogSlug}`}
                  className="rounded-2xl border p-5 hover:shadow-md"
                >
                  {blog.title}
                </Link>
              )
            )}
          </div>
        </section>

        {/* Related Calculators */}

        <section className="mt-20">
          <h2 className="mb-6 text-3xl font-bold">
            Related Calculators
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {relatedCalculators.map(
              (calculator) => (
                <Link
                  key={calculator.slug}
                  href={`/calculators/${calculator.slug}`}
                  className="rounded-2xl border p-5 hover:shadow-md"
                >
                  <h3 className="font-semibold">
                    {calculator.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {
                      calculator.description
                    }
                  </p>
                </Link>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}