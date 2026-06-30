type FAQ = {
  question: string;
  answer: string;
};

type CalculatorContentProps = {
  overview: string;
  howItWorks: string;
  benefits: string[];
  importantPoints?: string[];
  tips?: string[];
  mistakes?: string[];
  faqs: FAQ[];
};

export default function CalculatorContent({
  overview,
  howItWorks,
  benefits,
  importantPoints,
  tips,
  mistakes,
  faqs,
}: CalculatorContentProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="mt-20 space-y-10">

        {/* Overview */}

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Overview
          </h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            {overview}
          </p>
        </div>

        {/* How It Works */}

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            How It Works
          </h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            {howItWorks}
          </p>
        </div>

        {/* Benefits */}

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Benefits
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-green-200 bg-green-50 p-5 transition hover:shadow-sm"
              >
                <span className="font-semibold text-green-700">
                  ✅ {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Points */}

        {importantPoints && importantPoints.length > 0 && (
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-blue-700">
              Important Points
            </h2>

            <div className="mt-6 space-y-4">
              {importantPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-white p-5"
                >
                  📌 {point}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Expert Tips */}

        {tips && tips.length > 0 && (
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-yellow-700">
              Expert Tips
            </h2>

            <div className="mt-6 space-y-4">
              {tips.map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl bg-white p-5"
                >
                  💡 {tip}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Common Mistakes */}

        {mistakes && mistakes.length > 0 && (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-red-700">
              Common Mistakes
            </h2>

            <div className="mt-6 space-y-4">
              {mistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-2xl bg-white p-5"
                >
                  ❌ {mistake}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* FAQs */}

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border p-6 transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}