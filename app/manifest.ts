import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FinWise",
    short_name: "FinWise",

    description:
      "Free Financial Calculators for India including SIP, EMI, FD, RD, PPF, Income Tax and more.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    orientation: "portrait",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}