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

  const calculator = calculators.find(
    (item) => item.slug === slug
  );

  if (!calculator) {
    return {
      title: "Calculator Not Found | FinWise",
      description:
        "The requested calculator could not be found.",
      robots: {
        index: false,
        follow: false,
      },
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

  const url = `${BASE_URL}/calculators/${slug}`;

  return {
    title,
    description,

    keywords: [
      calculator.title,
      "Financial Calculator",
      "Investment Calculator",
      "India",
      "FinWise",
      "SIP Calculator",
      "EMI Calculator",
      "FD Calculator",
      "RD Calculator",
      "PPF Calculator",
      "EPF Calculator",
      "NPS Calculator",
      "Income Tax Calculator",
      "HRA Calculator",
      "Gratuity Calculator",
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

      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      images: [
        `${BASE_URL}/og-image.png`,
      ],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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

  const pageUrl = `${BASE_URL}/calculators/${slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,

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
        name: "Calculators",
        item: `${BASE_URL}/calculators`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: calculator.title,
        item: pageUrl,
      },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",

    "@id": pageUrl,

    url: pageUrl,

    name: calculator.title,

    description: calculator.description,

    inLanguage: "en-IN",

    isPartOf: {
      "@type": "WebSite",
      name: "FinWise",
      url: BASE_URL,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_URL}/og-image.png`,
    },
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

        {/* Category */}

        <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          {calculator.category}
        </div>

        {/* Title */}

        <h1 className="text-5xl font-extrabold tracking-tight">
          {calculator.title}
        </h1>

        {/* Description */}

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
            {calculator.title.toLowerCase()} to
            calculate accurate financial values
            instantly. Enter your values below
            to receive instant results, charts,
            and yearly breakdowns.
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
                {/* Calculator Content */}

        {content && (
          <section className="mt-20">
            <CalculatorContent
  overview={content.overview}
  howItWorks={content.howItWorks}
  benefits={content.benefits}
  importantPoints={
    "importantPoints" in content
      ? content.importantPoints
      : undefined
  }
  tips={
    "tips" in content
      ? content.tips
      : undefined
  }
  mistakes={
    "mistakes" in content
      ? content.mistakes
      : undefined
  }
  faqs={content.faqs}
/>
          </section>
        )}

        {/* Long-form SEO Article */}

        {article && (
          <section className="mt-20">
            <ArticleSection
              {...article}
            />
          </section>
        )}

        {/* Related Calculators */}

        <section className="mt-20">
          <RelatedCalculators
            currentSlug={slug}
          />
        </section>

      </main>
    </>
  );
}