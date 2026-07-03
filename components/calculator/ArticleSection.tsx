"use client";

import { useMemo } from "react";
import Link from "next/link";

import { CalculatorArticle } from "@/data/types";

type Props = CalculatorArticle;

export default function ArticleSection({
  title,
  introduction,
  sections,
  readingTime,
  lastUpdated,
  reviewedBy,
  formula,
  example,
  advantages,
  disadvantages,
  tips,
  mistakes,
  conclusion,
  sources,
  faqs,
}: Props) {
  const tableOfContents = useMemo(() => {
    const toc = sections.map((section) => section.heading);

    if (formula) toc.push(formula.title);

    if (example) toc.push(example.title);

    if (advantages?.length) toc.push("Advantages");

    if (disadvantages?.length)
      toc.push("Things to Keep in Mind");

    if (tips?.length) toc.push("Expert Tips");

    if (mistakes?.length)
      toc.push("Common Mistakes");

    if (faqs?.length)
      toc.push("Frequently Asked Questions");

    if (sources?.length)
      toc.push("Sources");

    if (conclusion)
      toc.push("Conclusion");

    return toc;
  }, [
    sections,
    formula,
    example,
    advantages,
    disadvantages,
    tips,
    mistakes,
    faqs,
    sources,
    conclusion,
  ]);

  return (
    <section className="mt-24">

      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="rounded-3xl border bg-gradient-to-br from-blue-50 via-white to-slate-50 p-10">

          <h2 className="text-center text-4xl font-extrabold tracking-tight">
            {title}
          </h2>

          {introduction && (
            <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-muted-foreground">
              {introduction}
            </p>
          )}

          {(readingTime ||
            lastUpdated ||
            reviewedBy) && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {readingTime && (
                <span className="rounded-full border bg-white px-4 py-2 text-sm font-medium">
                  ⏱ {readingTime}
                </span>
              )}

              {lastUpdated && (
                <span className="rounded-full border bg-white px-4 py-2 text-sm font-medium">
                  📅 Updated {lastUpdated}
                </span>
              )}

              {reviewedBy && (
                <span className="rounded-full border bg-white px-4 py-2 text-sm font-medium">
                  👨‍💼 {reviewedBy}
                </span>
              )}

            </div>
          )}

        </div>

        {/* Table of Contents */}

        <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">

          <h3 className="text-2xl font-bold">
            📑 Table of Contents
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {tableOfContents.map((item, index) => (

              <Link
                key={item}
                href={`#section-${index}`}
                className="rounded-xl border p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="font-semibold">
                  {index + 1}.
                </span>{" "}
                {item}
              </Link>

            ))}

          </div>

        </div>

        {/* Main Sections */}

        <div className="mt-12 space-y-10">

          {sections.map((section, index) => (

            <article
              key={section.heading}
              id={`section-${index}`}
              className="rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mb-6 flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-3xl font-bold tracking-tight">
                  {section.heading}
                </h3>

              </div>

              <div className="whitespace-pre-line leading-8 text-muted-foreground">
                {section.content}
              </div>

            </article>

          ))}

        </div>
                {/* Formula */}

        {formula && (
          <section
            id={`section-${tableOfContents.indexOf(
              formula.title
            )}`}
            className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-8"
          >
            <h3 className="text-3xl font-bold text-blue-700">
              {formula.title}
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-6 text-center shadow-sm">
              <code className="text-xl font-bold">
                {formula.formula}
              </code>
            </div>

            <p className="mt-6 leading-8 text-muted-foreground">
              {formula.explanation}
            </p>
          </section>
        )}

        {/* Example */}

        {example && (
          <section
            id={`section-${tableOfContents.indexOf(
              example.title
            )}`}
            className="mt-12 rounded-3xl border border-green-200 bg-green-50 p-8"
          >
            <h3 className="text-3xl font-bold text-green-700">
              {example.title}
            </h3>

            <div className="mt-6 whitespace-pre-line rounded-2xl bg-white p-6 leading-8 shadow-sm">
              {example.description}
            </div>
          </section>
        )}

        {/* Advantages */}

        {advantages && advantages.length > 0 && (
          <section
            id={`section-${tableOfContents.indexOf(
              "Advantages"
            )}`}
            className="mt-12"
          >
            <h3 className="mb-8 text-3xl font-bold">
              Advantages
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              {advantages.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-green-200 bg-green-50 p-6 transition hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Things to Keep in Mind */}

        {disadvantages &&
          disadvantages.length > 0 && (
            <section
              id={`section-${tableOfContents.indexOf(
                "Things to Keep in Mind"
              )}`}
              className="mt-12"
            >
              <h3 className="mb-8 text-3xl font-bold">
                Things to Keep in Mind
              </h3>

              <div className="space-y-5">
                {disadvantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-red-200 bg-red-50 p-6"
                  >
                    <div className="font-semibold text-red-700">
                      ⚠️ {item}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Expert Tips */}

        {tips && tips.length > 0 && (
          <section
            id={`section-${tableOfContents.indexOf(
              "Expert Tips"
            )}`}
            className="mt-12 rounded-3xl border border-yellow-200 bg-yellow-50 p-8"
          >
            <h3 className="text-3xl font-bold text-yellow-700">
              Expert Tips
            </h3>

            <div className="mt-6 space-y-5">
              {tips.map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  💡 {tip}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Common Mistakes */}

        {mistakes &&
          mistakes.length > 0 && (
            <section
              id={`section-${tableOfContents.indexOf(
                "Common Mistakes"
              )}`}
              className="mt-12 rounded-3xl border border-red-200 bg-red-50 p-8"
            >
              <h3 className="text-3xl font-bold text-red-700">
                Common Mistakes
              </h3>

              <div className="mt-6 space-y-5">
                {mistakes.map((mistake) => (
                  <div
                    key={mistake}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    ❌ {mistake}
                  </div>
                ))}
              </div>
            </section>
          )}
                  {/* Conclusion */}

        {conclusion && (
          <section className="mt-12 rounded-3xl border bg-slate-50 p-8">
            <h3 className="text-3xl font-bold">
              Conclusion
            </h3>

            <p className="mt-6 leading-8 text-muted-foreground">
              {conclusion}
            </p>
          </section>
        )}

        {/* FAQs */}

        {faqs && faqs.length > 0 && (
          <section className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">

            <h3 className="mb-8 text-3xl font-bold">
              Frequently Asked Questions
            </h3>

            <div className="space-y-5">

              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border p-6 open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="mr-2 text-blue-600">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}

            </div>

          </section>
        )}

        {/* Sources */}

        {sources && sources.length > 0 && (
          <section className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">

            <h3 className="text-3xl font-bold">
              📚 Sources & References
            </h3>

            <div className="mt-6 space-y-4">

              {sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border p-4 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  🔗 {source.title}
                </a>
              ))}

            </div>

          </section>
        )}

        {/* CTA */}

        <div className="mt-16 rounded-3xl border bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Ready to Calculate?
          </h3>

          <p className="mt-4 text-blue-100">
            Use our free calculator above and get instant results.
          </p>

          <a
            href="#calculator-result"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105"
          >
            Start Calculation
          </a>

        </div>

      </div>
    </section>
  );
}