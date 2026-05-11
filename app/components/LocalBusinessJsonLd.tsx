import { getBookingUrl, siteConfig } from "../lib/site";

const services = [
  "Therapeutic Massage",
  "Prenatal Massage",
  "Manual Lymphatic Drainage",
  "Pediatric Massage",
  "Cupping",
];

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    image: `${siteConfig.siteUrl}/images/elony-about.jpg`,
    priceRange: "$$",
    description:
      "Bodyworks By Elony offers calm, personalized massage and bodywork in Cedar Park, Texas, including therapeutic massage, prenatal massage, manual lymphatic drainage, and pediatric massage.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cedar Park",
      addressRegion: "TX",
      postalCode: siteConfig.location.zip,
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cedar Park",
      },
      {
        "@type": "City",
        name: "Leander",
      },
      {
        "@type": "Place",
        name: "Northwest Austin",
      },
      {
        "@type": "City",
        name: "Liberty Hill",
      },
    ],
    openingHours: siteConfig.businessHours.schemaOpeningHours,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    identifier: {
      "@type": "PropertyValue",
      name: "TDLR Massage Therapy License",
      value: siteConfig.credentials.tdlrLicense,
    },
    knowsAbout: [
      "Therapeutic massage",
      "Prenatal massage",
      "Manual lymphatic drainage",
      siteConfig.credentials.mldTechnique,
      siteConfig.credentials.mldCertification,
      "Pediatric massage",
      "Cupping",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Massage and bodywork services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: siteConfig.location.serviceArea,
          provider: {
            "@id": `${siteConfig.siteUrl}/#business`,
          },
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: getBookingUrl("local_business_schema"),
      name: "Book an appointment",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
