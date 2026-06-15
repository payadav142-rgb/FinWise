import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | FinWise",
  description:
    "Read the FinWise disclaimer regarding financial calculators, content and educational information.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Disclaimer
      </h1>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            General Information
          </h2>

          <p className="leading-8 text-muted-foreground">
            The information provided on FinWise is for
            educational and informational purposes only.
            We make every effort to ensure accuracy but
            do not guarantee that all information is
            complete, current or error-free.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            No Financial Advice
          </h2>

          <p className="leading-8 text-muted-foreground">
            FinWise does not provide financial,
            investment, legal or tax advice. The content
            and calculators available on this website
            should not be considered professional advice.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Calculator Accuracy
          </h2>

          <p className="leading-8 text-muted-foreground">
            Calculator results are estimates based on the
            information entered by users and assumptions
            used in the calculation methodology. Actual
            results may vary.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            External Links
          </h2>

          <p className="leading-8 text-muted-foreground">
            FinWise may contain links to third-party
            websites. We are not responsible for the
            content, policies or practices of those
            websites.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Contact
          </h2>

          <p className="leading-8 text-muted-foreground">
            For any questions regarding this disclaimer,
            contact us at payadav142@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}