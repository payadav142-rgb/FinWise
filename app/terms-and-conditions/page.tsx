import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | FinWise",
  description:
    "Read the Terms and Conditions governing the use of FinWise.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Terms & Conditions
      </h1>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Acceptance of Terms
          </h2>

          <p className="leading-8 text-muted-foreground">
            By accessing and using FinWise, you agree to
            comply with these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Website Usage
          </h2>

          <p className="leading-8 text-muted-foreground">
            Users may access and use FinWise for personal
            and informational purposes. Any misuse of the
            website is prohibited.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Intellectual Property
          </h2>

          <p className="leading-8 text-muted-foreground">
            All content, calculators, branding and
            materials available on FinWise are protected
            by applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Limitation of Liability
          </h2>

          <p className="leading-8 text-muted-foreground">
            FinWise shall not be held liable for any
            losses or damages arising from the use of the
            website, calculators or information provided.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Modifications
          </h2>

          <p className="leading-8 text-muted-foreground">
            We reserve the right to update or modify
            these Terms and Conditions at any time
            without prior notice.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Contact
          </h2>

          <p className="leading-8 text-muted-foreground">
            For questions regarding these Terms and
            Conditions, contact us at
            payadav142@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}