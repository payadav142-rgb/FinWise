type Section = {
  heading: string;
  content: string;
};

type ArticleSectionProps = {
  title: string;
  sections: Section[];
};

export default function ArticleSection({
  title,
  sections,
}: ArticleSectionProps) {
  return (
    <section className="mt-24">

      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            {title}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Learn everything you need to know with our
            comprehensive guide.
          </p>
        </div>

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

      </div>

    </section>
  );
}