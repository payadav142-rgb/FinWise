import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CalculatorLayout from "@/components/calculator/CalculatorLayout";
import CalculatorContent from "@/components/calculator/CalculatorContent";
import RelatedCalculators from "@/components/calculator/RelatedCalculators";
import ArticleSection from "@/components/calculator/ArticleSection";
import { getCalculatorComponent } from "@/components/calculator/CalculatorRegistry";

import { calculators } from "@/data/calculators";
import { calculatorContent } from "@/data/calculatorContent";
import { seoData } from "@/data/seo";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const calculator = calculators.find(
    (item) => item.slug === slug
  );

  if (!calculator) {
    return {
      title: "Calculator Not Found | FinWise",
    };
  }

  const seo =
    seoData[
      slug as keyof typeof seoData
    ];

  const title =
    seo?.title ??
    `${calculator.title} | FinWise`;

  const description =
    seo?.description ??
    calculator.description;

  const url = `https://finwise-silk.vercel.app/calculators/${slug}`;

  return {
    title,
    description,

    keywords: [
      calculator.title,
      "Financial Calculator",
      "India",
      "Investment Calculator",
      "EMI Calculator",
      "SIP Calculator",
      "FD Calculator",
      "RD Calculator",
      "FinWise",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "FinWise",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CalculatorPage({
  params,
}: Props) {
  const { slug } = await params;

  const calculator = calculators.find(
    (item) => item.slug === slug
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
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}

        <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          {calculator.category}
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight">
          {calculator.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {calculator.description}
        </p>

        {/* Hero */}

        <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-8">
          <h2 className="text-2xl font-bold">
            Free Online {calculator.title}
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
            Use our free{" "}
            {calculator.title.toLowerCase()} to calculate accurate financial
            values instantly. Simply enter your details below and receive
            instant calculations, charts and detailed yearly breakdowns.
          </p>
        </div>

        {/* Calculator */}

        <section
          id="calculator-result"
          className="mt-12"
        >
          <CalculatorLayout>
            {getCalculatorComponent(slug)}
          </CalculatorLayout>
        </section>

        {/* Content */}

        {content && (
          <section className="mt-20">
            <CalculatorContent
              overview={content.overview}
              howItWorks={content.howItWorks}
              benefits={content.benefits}
              faqs={content.faqs}
            />
          </section>
        )}

        {/* Long-form SEO Article */}

        {article && (
          <section className="mt-20">
            <ArticleSection {...article} />
          </section>
        )}

        {/* Related */}

        <section className="mt-20">
          <RelatedCalculators
            currentSlug={slug}
          />
        </section>

      </main>
    </>
  );
}