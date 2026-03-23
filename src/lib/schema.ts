import { siteConfig } from "./config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    priceRange: "$$",
    image: `${siteConfig.url}/images/og-image.jpg`,
  };
}

export function serviceSchema(
  serviceName: string,
  serviceDescription: string,
  areaServed?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
    },
    ...(areaServed && {
      areaServed: {
        "@type": "City",
        name: areaServed,
      },
    }),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
