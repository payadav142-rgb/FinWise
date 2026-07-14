import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://finwise-silk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "FinWise - Financial Calculators for India",
    template: "%s | FinWise",
  },

  description:
    "Free Financial Calculators for India including SIP, EMI, FD, RD, PPF, EPF, NPS, HRA, Gratuity, Income Tax and more.",

  keywords: [
    "FinWise",
    "Financial Calculator",
    "SIP Calculator",
    "EMI Calculator",
    "FD Calculator",
    "RD Calculator",
    "PPF Calculator",
    "EPF Calculator",
    "NPS Calculator",
    "Income Tax Calculator",
    "HRA Calculator",
    "Gratuity Calculator",
    "CTC to In-Hand Calculator",
    "Investment Calculator",
    "India",
  ],

  authors: [
    {
      name: "FinWise",
    },
  ],

  creator: "FinWise",

  publisher: "FinWise",

  applicationName: "FinWise",

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "FinWise - Financial Calculators for India",

    description:
      "Free online Financial Calculators including SIP, EMI, FD, RD, Income Tax, PPF, EPF, NPS and more.",

    url: BASE_URL,

    siteName: "FinWise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinWise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FinWise",

    description:
      "Free Financial Calculators for India.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "c2E0Y9rYTzrEi_aYV43C725aFKUMCcaoyREP1or5amo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
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

    url: BASE_URL,

    logo: `${BASE_URL}/icon-512.png`,

    description:
      "Free Financial Calculators for India including SIP, EMI, FD, RD, PPF, EPF, NPS, HRA, Gratuity and Income Tax Calculators.",


    sameAs: [
  // Add social profile URLs here later
],
  };

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "FinWise",

    url: BASE_URL,

    description:
      "Free Financial Calculators for India.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">

        {children}

        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />

        {/* Website Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema
            ),
          }}
        />

        {/* Google Analytics */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2345F2VRYG"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
                      window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "G-2345F2VRYG", {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </body>
    </html>
  );
}