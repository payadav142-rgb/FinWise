import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FinWise",
  description:
    "Learn more about FinWise and our mission to simplify personal finance through free financial calculators and educational resources.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        About FinWise
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        FinWise is a free financial education platform
        built to help individuals make smarter money
        decisions through simple, accurate and easy-to-use
        financial calculators.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Our Mission
          </h2>

          <p className="leading-8 text-muted-foreground">
            Managing personal finances can often feel
            complicated. Our mission is to simplify
            financial planning by providing free tools that
            help users calculate taxes, investments,
            loans, savings and long-term wealth creation.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold">
            What We Offer
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>✅ SIP Calculator</li>
            <li>✅ Lumpsum Calculator</li>
            <li>✅ EMI Calculator</li>
            <li>✅ Fixed Deposit Calculator</li>
            <li>✅ Recurring Deposit Calculator</li>
            <li>✅ CAGR Calculator</li>
            <li>✅ Income Tax Calculator</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Why FinWise?
          </h2>

          <p className="leading-8 text-muted-foreground">
            We believe financial planning should be
            accessible to everyone. Our calculators are
            designed to provide quick estimates and help
            users understand important financial concepts
            without unnecessary complexity.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Disclaimer
          </h2>

          <p className="leading-8 text-muted-foreground">
            The information and calculations provided on
            FinWise are for educational and informational
            purposes only. Users should consult qualified
            financial, tax or investment professionals
            before making financial decisions.
          </p>
        </div>
      </section>
    </main>
  );
}