import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FinWise",
  description:
    "Read the Privacy Policy of FinWise and learn how we collect, use and protect user information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        Privacy Policy
      </h1>

      <p className="mt-6 text-muted-foreground">
        Last Updated: June 2026
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Introduction
          </h2>

          <p className="leading-8 text-muted-foreground">
            FinWise respects your privacy and is committed
            to protecting your personal information. This
            Privacy Policy explains how information may be
            collected, used and protected when you use our
            website and financial calculators.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Information We Collect
          </h2>

          <p className="leading-8 text-muted-foreground">
            We may collect non-personal information such
            as browser type, device information, pages
            visited and usage statistics to improve our
            services and user experience.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Cookies
          </h2>

          <p className="leading-8 text-muted-foreground">
            FinWise may use cookies and similar
            technologies to improve website performance,
            remember user preferences and analyze website
            traffic.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Third-Party Services
          </h2>

          <p className="leading-8 text-muted-foreground">
            We may use third-party analytics and
            advertising services such as Google Analytics
            and Google AdSense. These services may collect
            information according to their own privacy
            policies.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Data Security
          </h2>

          <p className="leading-8 text-muted-foreground">
            We take reasonable measures to protect
            information from unauthorized access, misuse
            or disclosure. However, no internet
            transmission can be guaranteed to be 100%
            secure.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Changes to This Policy
          </h2>

          <p className="leading-8 text-muted-foreground">
            We may update this Privacy Policy from time to
            time. Any changes will be reflected on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Contact Us
          </h2>

          <p className="leading-8 text-muted-foreground">
            If you have any questions regarding this
            Privacy Policy, please contact us at
            payadav142@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}