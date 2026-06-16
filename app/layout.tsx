import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://finwise-silk.vercel.app"
  ),

  title: {
    default: "FinWise - Financial Calculators for India",
    template: "%s | FinWise",
  },

  description:
    "Free financial calculators for SIP, EMI, FD, RD, CAGR, Tax and more.",

  keywords: [
    "SIP Calculator",
    "EMI Calculator",
    "FD Calculator",
    "RD Calculator",
    "CAGR Calculator",
    "Income Tax Calculator",
    "Financial Calculator India",
  ],

  openGraph: {
    title: "FinWise",
    description:
      "Free financial calculators for Indian investors.",
    url: "https://finwise-silk.vercel.app",
    siteName: "FinWise",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FinWise",
    url: "https://finwise-silk.vercel.app",
    logo: "https://finwise-silk.vercel.app/favicon.ico",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FinWise",
    url: "https://finwise-silk.vercel.app",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}