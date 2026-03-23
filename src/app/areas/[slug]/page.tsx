import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { getArea, getAllAreaSlugs, areas } from "@/lib/areas";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: `Pool Cleaning in ${area.name}, ${area.stateAbbr}`,
    description: area.description,
    alternates: {
      canonical: `${siteConfig.url}/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const nearby = area.nearbyAreas
    .map((s) => areas[s])
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/areas/${area.slug}` },
          {
            name: `${area.name}, ${area.stateAbbr}`,
            url: `${siteConfig.url}/areas/${area.slug}`,
          },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          `Pool Cleaning in ${area.name}, ${area.stateAbbr}`,
          `Professional pool cleaning and maintenance services in ${area.name}, ${area.state}. Weekly cleaning, pool openings, chemical balancing. No contracts.`,
          `${area.name}, ${area.stateAbbr}`
        )}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Pool Cleaning in {area.name}, {area.stateAbbr}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable, no-contract pool service in {area.name}. We show up every
            week, keep your water crystal clear, and never lock you into a
            contract.
          </p>
          <div className="mt-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-sky-700 transition-colors"
            >
              Call {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {area.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Services in this area */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Services We Offer in {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.services.map((service) => (
                <div
                  key={service.slug}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                >
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-600">{service.shortDesc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/services"
                className="text-sky-600 text-sm font-semibold hover:text-sky-700"
              >
                View Full Service Details &rarr;
              </Link>
            </div>
          </div>

          {/* Nearby areas */}
          {nearby.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nearby Service Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/areas/${n.slug}`}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-sky-300 hover:text-sky-700 transition-colors"
                  >
                    {n.name}, {n.stateAbbr}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Local testimonial if available */}
          {siteConfig.testimonials.find((t) =>
            t.location.includes(area.name)
          ) && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What {area.name} Customers Say
              </h2>
              {siteConfig.testimonials
                .filter((t) => t.location.includes(area.name))
                .map((t) => (
                  <blockquote
                    key={t.name}
                    className="rounded-xl bg-gray-50 border border-gray-100 p-6"
                  >
                    <p className="text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer className="text-sm font-semibold text-gray-900">
                      {t.name}{" "}
                      <span className="font-normal text-gray-500">
                        &mdash; {t.location}
                      </span>
                    </footer>
                  </blockquote>
                ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        headline={`Need a Pool Guy in ${area.name}?`}
        subtext="Call or text for a free quote. We respond fast."
      />
    </>
  );
}
