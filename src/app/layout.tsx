import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans, Roboto_Slab } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { healthClubSchema } from "@/lib/schemas";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["700"],
  display: "swap",
});

const siteUrl = "https://studio1tul.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Studio 1 — Barre, TRX, Pilates & Yoga in Tulsa",
    template: "%s | Studio 1 — Barre, TRX, Pilates & Yoga in Tulsa",
  },
  description:
    "Studio 1 — Your Teachers. Your Community. Your Studio. Boutique fitness in Tulsa's Brookside offering Barre, TRX, Pilates & Yoga. Independently owned, not a franchise.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Studio 1",
    title: "Studio 1 — Barre, TRX, Pilates & Yoga in Tulsa",
    description:
      "Independent boutique fitness studio in Tulsa's Brookside neighborhood offering Barre, TRX, Pilates, and Yoga classes.",
    images: [
      {
        url: "/images/hero-yoga.jpg",
        width: 1200,
        height: 630,
        alt: "Studio 1 — Boutique Fitness in Tulsa's Brookside",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 1 — Barre, TRX, Pilates & Yoga in Tulsa",
    description:
      "Independent boutique fitness studio in Tulsa's Brookside neighborhood.",
    images: ["/images/hero-yoga.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${robotoSlab.variable}`}>
      <head>
        <JsonLd data={healthClubSchema} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
