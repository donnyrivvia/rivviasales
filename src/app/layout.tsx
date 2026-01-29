import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rivvia — Sell With Confidence",
  description: "Build your sales career with Rivvia. Leads provided. Active markets. Real opportunity.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Rivvia — Sell With Confidence",
    description: "Build your sales career with Rivvia. Leads provided. Active markets. Real opportunity.",
    url: "https://rivviasales.com", // Update with your actual domain
    siteName: "Rivvia",
    images: [
      {
        url: "/WALKINGRIVVIA.png", // Update with your thumbnail image path
        width: 1200,
        height: 630,
        alt: "Rivvia - Build your sales career with confidence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivvia — Sell With Confidence",
    description: "Build your sales career with Rivvia. Leads provided. Active markets. Real opportunity.",
    images: ["/WALKINGRIVVIA.png"], // Update with your thumbnail image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
