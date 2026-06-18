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

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-4 inline-block rounded-full border px-3 py-1 text-sm">
          {calculator.category}
        </div>

        <h1 className="text-5xl font-bold">
          {calculator.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {calculator.description}
        </p>

        <CalculatorLayout
          title={
            slug === "sip-calculator"
              ? "Maturity Value"
              : slug === "fd-calculator"
              ? "Maturity Amount"
              : slug === "rd-calculator"
              ? "Maturity Amount"
              : slug === "cagr-calculator"
              ? "CAGR"
              : slug === "lumpsum-calculator"
              ? "Future Value"
              : slug === "ppf-calculator"
              ? "Maturity Amount"
              : slug === "emi-calculator"
              ? "Monthly EMI"
              : slug === "income-tax-calculator"
              ? "Estimated Tax"
              : "Result"
          }
        >
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