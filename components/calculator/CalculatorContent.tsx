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
  return (
    <section className="mt-16 space-y-12">
      {/* Overview */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          Overview
        </h2>

        <p className="text-muted-foreground leading-8">
          {overview}
        </p>
      </div>

      {/* How It Works */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          How It Works
        </h2>

        <p className="text-muted-foreground leading-8">
          {howItWorks}
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          Benefits
        </h2>

        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border p-4"
            >
              ✅ {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="mb-6 text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border p-5"
            >
              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}