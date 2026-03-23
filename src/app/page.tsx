import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Your Pool Guy in Delaware.{" "}
            <span className="text-sky-600">No Contracts.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Pool Cleaning Dude keeps your pool crystal clear all season long.
            Reliable weekly service, honest pricing, and zero long-term
            commitments. Serving Newark, Hockessin, Pike Creek, and the
            Tri-State area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-sky-700 transition-colors"
            >
              Call {siteConfig.phoneFormatted}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border-2 border-sky-600 px-8 py-3.5 text-base font-semibold text-sky-700 hover:bg-sky-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-100 py-6 px-4">
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 font-medium">
          <span>No Contracts</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>Licensed &amp; Insured</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>Locally Owned</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Pool Services That Actually Show Up
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We keep it simple. You call, we show up, your pool stays clean. No
            upsells, no runaround, no corporate nonsense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <div
                key={service.slug}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 italic leading-relaxed mb-4">
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
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving Delaware &amp; the Tri-State Area
          </h2>
          <p className="text-gray-600 mb-8">
            We clean pools across Northern Delaware and Southeast Pennsylvania.
            If you&apos;re nearby, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-sky-300 hover:text-sky-700 transition-colors"
              >
                {area.name}, {area.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
