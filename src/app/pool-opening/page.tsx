import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pool Opening Service",
  description:
    "Professional pool opening service on the Main Line PA and Northern Delaware. Cover removal, green-to-clean, chemical balancing, and equipment startup. Book your spring pool opening today.",
  alternates: {
    canonical: `${siteConfig.url}/pool-opening`,
  },
};

export default function PoolOpeningPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Pool Opening", url: `${siteConfig.url}/pool-opening` },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Pool Opening Service",
          "Professional spring pool opening service including cover removal, equipment startup, green-to-clean treatment, and full chemical balancing. Serving the Main Line PA and Northern Delaware.",
          "Delaware"
        )}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Pool Opening Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spring is coming. Your pool has been sitting under a cover all
            winter. Let us handle the dirty work so you can jump in sooner.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What&apos;s Included in a Pool Opening
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We don&apos;t cut corners on pool openings. Whether your pool
              wintered like a champ or turned into a swamp, we handle it the
              same way — thoroughly. Here&apos;s what you get:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Cover removal, cleaning & folding",
                "Equipment reconnection & startup",
                "Pump & filter inspection",
                "Green-to-clean shock treatment",
                "Full chemical balancing (chlorine, pH, alkalinity, CYA)",
                "Skimming, brushing & initial vacuum",
                "Water level adjustment",
                "System leak check",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-sky-500 mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When Should You Open Your Pool?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In Delaware, most pools should be opened between late March and
              mid-April. The earlier you open, the less likely you are to deal
              with algae and staining from stagnant winter water. We start
              booking pool openings in February, and spots fill up fast.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Long Does It Take?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The opening visit itself takes 1-2 hours depending on pool size
              and condition. If the water is heavily green, we may need a
              follow-up visit to vacuum dead algae after the shock treatment
              works. Most pools are swim-ready within 24-48 hours.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pair It With Weekly Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Opening your pool is just the start. Keep it clean all season with
              our no-contract weekly cleaning service. Most of our opening
              customers stick with us through the summer — because once you stop
              worrying about your pool, you won&apos;t want to go back.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Book Your Pool Opening"
        subtext="Spots fill up fast in spring. Call now to lock in your date."
      />
    </>
  );
}
