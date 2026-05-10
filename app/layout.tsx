import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalBusinessJsonLd from "./components/LocalBusinessJsonLd";
import { getBookingUrl, siteConfig } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Bodyworks By Elony | Massage & Bodywork in Cedar Park, TX",
    template: "%s | Bodyworks By Elony",
  },
  description:
    "Calm, personalized massage and bodywork in northwest Cedar Park, TX, near Whitestone & Lakeline, northwest Austin, Leander, and Liberty Hill.",
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Bodyworks By Elony | Massage & Bodywork in Cedar Park, TX",
    description:
      "Calm, personalized massage and bodywork in northwest Cedar Park, TX, near Whitestone & Lakeline, northwest Austin, Leander, and Liberty Hill.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodyworks By Elony | Massage & Bodywork in Cedar Park, TX",
    description:
      "Calm, personalized massage and bodywork in northwest Cedar Park, TX, near Whitestone & Lakeline, northwest Austin, Leander, and Liberty Hill.",
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
    <html lang="en">
      <body className="antialiased">
        <LocalBusinessJsonLd />

        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
