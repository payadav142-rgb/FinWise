import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogContent } from "@/data/blogs/content";

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

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        {article.title}
      </h1>

      <div className="mt-10 whitespace-pre-line leading-8 text-muted-foreground">
        {article.content}
      </div>
    </main>
  );
}