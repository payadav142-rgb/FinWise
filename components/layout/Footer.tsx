import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">
              FinWise
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Free financial calculators for SIP, EMI,
              FD, RD, CAGR and personal finance planning.
              Built for Indian investors.
            </p>
          </div>

          {/* Popular Calculators */}
          <div>
            <h4 className="font-semibold">
              Popular Calculators
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/calculators/sip-calculator">
                  SIP Calculator
                </Link>
              </li>

              <li>
                <Link href="/calculators/emi-calculator">
                  EMI Calculator
                </Link>
              </li>

              <li>
                <Link href="/calculators/fd-calculator">
                  FD Calculator
                </Link>
              </li>
              <li>
  <Link href="/calculators/income-tax-calculator">
    Income Tax Calculator
  </Link>
</li>

              <li>
                <Link href="/calculators/rd-calculator">
                  RD Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold">
              Company
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
  <Link href="/calculators">
    All Calculators
  </Link>
</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold">
              Legal
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/disclaimer">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 FinWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}