import {
  CalculatorArticle,
} from "@/data/types";

type Props = CalculatorArticle;

export default function ArticleSection({
  title,
  introduction,
  sections,
  formula,
  example,
  advantages,
  disadvantages,
  tips,
  mistakes,
  conclusion,
}: Props) {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {introduction}
          </p>
        </div>

        {/* Main Sections */}

        <div className="space-y-10">

          {sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-2xl font-bold">
                {section.heading}
              </h3>

              <div className="mt-5 whitespace-pre-line leading-8 text-muted-foreground">
                {section.content}
              </div>
            </article>
          ))}

        </div>

        {/* Formula */}

        {formula && (
          <div className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="text-2xl font-bold text-blue-700">
              {formula.title}
            </h3>

            <div className="mt-6 rounded-xl bg-white p-5 text-center text-xl font-bold shadow-sm">
              {formula.formula}
            </div>

            <p className="mt-5 leading-8 text-muted-foreground">
              {formula.explanation}
            </p>

          </div>
        )}

        {/* Example */}

        {example && (
          <div className="mt-12 rounded-3xl border border-green-200 bg-green-50 p-8">

            <h3 className="text-2xl font-bold text-green-700">
              {example.title}
            </h3>

            <p className="mt-5 whitespace-pre-line leading-8 text-muted-foreground">
              {example.description}
            </p>

          </div>
        )}

        {/* Advantages */}

        {advantages && advantages.length > 0 && (
          <div className="mt-12">

            <h3 className="mb-6 text-2xl font-bold">
              Advantages
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-green-200 bg-green-50 p-5"
                >
                  ✅ {item}
                </div>
              ))}

            </div>

          </div>
        )}

        {/* Disadvantages */}

        {disadvantages && disadvantages.length > 0 && (
          <div className="mt-12">

            <h3 className="mb-6 text-2xl font-bold">
              Things to Keep in Mind
            </h3>

            <div className="grid gap-4">

              {disadvantages.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-200 bg-red-50 p-5"
                >
                  ⚠️ {item}
                </div>
              ))}

            </div>

          </div>
        )}

        {/* Tips */}

        {tips && tips.length > 0 && (
          <div className="mt-12 rounded-3xl border border-yellow-200 bg-yellow-50 p-8">

            <h3 className="text-2xl font-bold">
              Expert Tips
            </h3>

            <ul className="mt-5 space-y-3">

              {tips.map((tip) => (
                <li key={tip}>
                  💡 {tip}
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Mistakes */}

        {mistakes && mistakes.length > 0 && (
          <div className="mt-12 rounded-3xl border border-red-200 bg-red-50 p-8">

            <h3 className="text-2xl font-bold">
              Common Mistakes
            </h3>

            <ul className="mt-5 space-y-3">

              {mistakes.map((mistake) => (
                <li key={mistake}>
                  ❌ {mistake}
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Conclusion */}

        {conclusion && (
          <div className="mt-12 rounded-3xl border bg-slate-50 p-8">

            <h3 className="text-2xl font-bold">
              Conclusion
            </h3>

            <p className="mt-5 leading-8 text-muted-foreground">
              {conclusion}
            </p>

          </div>
        )}

      </div>
    </section>
  );
}