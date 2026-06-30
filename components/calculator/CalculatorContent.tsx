type FAQ = {
  question: string;
  answer: string;
};

type CalculatorContentProps = {
  overview: string;
  howItWorks: string;
  benefits: string[];
  faqs: FAQ[];
};

export default function CalculatorContent({
  overview,
  howItWorks,
  benefits,
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

      <section className="mt-20">

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

        <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            How It Works
          </h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            {howItWorks}
          </p>
        </div>

        {/* Benefits */}

        <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Benefits
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-green-100 bg-green-50 p-5"
              >
                <div className="font-semibold text-green-700">
                  ✅ {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}

        <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
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