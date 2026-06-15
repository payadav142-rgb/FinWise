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
    <section className="mt-20">
      <h2 className="mb-10 text-4xl font-bold">
        {title}
      </h2>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h3 className="mb-4 text-2xl font-semibold">
              {section.heading}
            </h3>

            <div className="leading-8 text-muted-foreground whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}