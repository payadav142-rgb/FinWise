import type { Metadata } from "next";
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

export const metadata: Metadata = {
title: {
default: "FinWise - Financial Calculators for India",
template: "%s | FinWise",
},
description:
"Free financial calculators for SIP, EMI, FD, RD, CAGR, Tax and more.",
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
> <body className="min-h-full flex flex-col">
{children}


    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-2345F2VRYG"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2345F2VRYG');
      `}
    </Script>
  </body>
</html>


);
}
