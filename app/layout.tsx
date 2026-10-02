import type { Metadata } from "next";
import { seo, siteUrl } from "@/lib/business";
import "./globals.css";
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_US",
    siteName: "Liam Pressure Cleaning LLC",
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [{ url: `${siteUrl}/logo/liam-logo.webp`, width: 1070, height: 930, alt: "Liam Pressure Cleaning logo" }],
        }
      : {}),
  },
  twitter: { card: "summary", title: seo.title, description: seo.description, ...(siteUrl ? { images: [`${siteUrl}/logo/liam-logo.webp`] } : {}) },
  icons: { icon: "/logo/favicon.png", apple: "/logo/favicon.png" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
