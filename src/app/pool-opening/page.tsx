import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pool Opening Service",
  description:
    "Pool opening on the Main Line PA and Northern Delaware. Cover off, equipment startup, chemicals, and green-to-clean if you need it. Openings start at $400.",
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
          "Pool opening on the Main Line PA and Northern Delaware. Cover removal, equipment startup, chemical balance, and green-to-clean treatment when needed. Openings start at $400.",
          "Delaware"
        )}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Pool Opening Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need the cover off and the system running? We still do openings.
            Late, new house, or just ready. Starts at $400.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What&apos;s included in a pool opening
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Basic is cover off and equipment running. Standard adds startup
            chemicals. If the water is green, we quote Swim-Ready instead of
            guessing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Cover removal and folding",
              "Equipment reconnection and startup",
              "Pump and filter check",
              "Startup chemicals on Standard",
              "Green-to-clean on Swim-Ready",
              "Light vacuum or skim",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-sky-500 mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When people open
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Around here most pools open late March through April. If you missed
            that window and the water is sitting, we can still open it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How long it takes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The visit is usually 1-2 hours. If the water is heavy green, we
            may need a follow-up after the shock works. Most pools are
            swim-ready in a day or two.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Closing season is what most people need right now.{" "}
            <Link href="/pool-closing" className="text-sky-600 font-semibold">
              Book a closing here
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Book a Pool Opening"
        subtext="Text a few pics of the water. We will tell you which opening you actually need."
      />
    </>
  );
}
