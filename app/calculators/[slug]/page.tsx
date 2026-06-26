import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculator/CalculatorLayout";
import CalculatorContent from "@/components/calculator/CalculatorContent";
import ArticleSection from "@/components/calculator/ArticleSection";
import RelatedCalculators from "@/components/calculator/RelatedCalculators";
import { getCalculatorComponent } from "@/components/calculator/CalculatorRegistry";
import { calculators } from "@/data/calculators";
import { calculatorContent } from "@/data/calculatorContent";
import { seoData } from "@/data/seo";
import { articles } from "@/data/articles";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const seo =
    seoData[slug as keyof typeof seoData];

  if (!seo) {
    return {
      title: "Calculator Not Found",
    };
  }

  return {
    title: seo.title,
    description: seo.description,

    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
  };
}

export default async function CalculatorPage({
  params,
}: Props) {
  const { slug } = await params;

  const calculator = calculators.find(
    (calc) => calc.slug === slug
  );

  if (!calculator) {
    notFound();
  }

  const content =
    calculatorContent[
      slug as keyof typeof calculatorContent
    ];

  const article =
    articles[
      slug as keyof typeof articles
    ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://finwise-silk.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item:
          "https://finwise-silk.vercel.app/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: calculator.title,
        item: `https://finwise-silk.vercel.app/calculators/${slug}`,
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: calculator.title,
    description: calculator.description,
    url: `https://finwise-silk.vercel.app/calculators/${slug}`,
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
            webpageSchema
          ),
        }}
      />

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          {calculator.category}
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight">
          {calculator.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          {calculator.description}
        </p>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-semibold">
            Free Online {calculator.title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            Calculate accurate results instantly using our
            free calculator. Simply enter your details
            below and get instant results with complete
            accuracy.
          </p>
        </div>

        <CalculatorLayout>
          {getCalculatorComponent(slug)}
        </CalculatorLayout>

        {content && (
          <CalculatorContent
            overview={content.overview}
            howItWorks={content.howItWorks}
            benefits={content.benefits}
            faqs={content.faqs}
          />
        )}

        {article && (
          <ArticleSection
            title={article.title}
            sections={article.sections}
          />
        )}

        <RelatedCalculators
          currentSlug={slug}
        />
      </main>
    </>
  );
}