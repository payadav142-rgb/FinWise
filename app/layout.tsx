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
    "Free Financial Calculators for India including SIP, EMI, FD, RD, PPF, EPF, NPS, Income Tax, HRA, Gratuity and more.",

  keywords: [
    "Financial Calculator",
    "SIP Calculator",
    "EMI Calculator",
    "FD Calculator",
    "RD Calculator",
    "PPF Calculator",
    "Income Tax Calculator",
    "HRA Calculator",
    "EPF Calculator",
    "NPS Calculator",
    "Gratuity Calculator",
    "FinWise",
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
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "FinWise - Financial Calculators for India",

    description:
      "Free Financial Calculators for SIP, EMI, FD, RD, PPF, Income Tax and more.",

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

  verification: {
    google: "c2E0Y9rYTzrEi_aYV43C725aFKUMCcaoyREP1or5amo",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

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

            gtag('js', new Date());

            gtag('config', 'G-2345F2VRYG');
          `}
        </Script>
      </body>
    </html>
  );
}