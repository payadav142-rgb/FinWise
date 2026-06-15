import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FinWise",
  description:
    "Get in touch with FinWise for feedback, suggestions, corrections or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Contact Us
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        We'd love to hear from you. Whether you have
        feedback, suggestions, calculator requests or
        would like to report an issue, feel free to
        contact us.
      </p>

      <section className="mt-12 space-y-8">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            General Inquiries
          </h2>

          <p className="mt-4 text-muted-foreground">
            For general questions, feedback or support,
            please email us at:
          </p>

          <p className="mt-2 font-medium">
            payadav142@gmail.com
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            Report Errors
          </h2>

          <p className="mt-4 text-muted-foreground">
            If you notice any calculation errors,
            outdated information or technical issues,
            please let us know so we can improve the
            platform.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            Suggestions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have an idea for a new calculator or feature?
            We welcome suggestions that can help make
            FinWise more useful for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}