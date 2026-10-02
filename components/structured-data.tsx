import { business, siteUrl } from "@/lib/business";
export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    telephone: "+1-407-223-8412",
    email: business.email,
    ...(siteUrl
      ? { url: siteUrl, logo: `${siteUrl}/logo/liam-logo.webp` }
      : {}),
    areaServed: ["Central Florida", ...business.areas].map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: [business.facebook, business.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
