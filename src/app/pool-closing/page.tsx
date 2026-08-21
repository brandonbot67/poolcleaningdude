import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pool Closing Service",
  description:
    "Pool closing on the Main Line PA and Northern Delaware. Cover on, equipment shut down, winterization chemicals if you want them. Closings start at $400.",
  alternates: {
    canonical: `${siteConfig.url}/pool-closing`,
  },
};

export default function PoolClosingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Pool Closing", url: `${siteConfig.url}/pool-closing` },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Pool Closing Service",
          "Pool closing and winterization on the Main Line PA and Northern Delaware. Cover install, equipment shutdown, and winterization chemicals on the Standard close. Closings start at $400.",
          "Delaware"
        )}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Pool Closing Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We put the cover on, shut the equipment down, and set the pool up
            for winter. In-ground or above-ground. Starts at $400.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What you get
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Basic is $400. That is the cover and the equipment shutdown. Most
            people book Standard at $550 so winterization chemicals go in
            before we leave.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Cover install",
              "Equipment shutdown",
              "Lines cleared when the plumbing needs it",
              "Winterization chemicals on Standard ($550)",
              "Works with safety covers and winter covers",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-sky-500 mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to close
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Around here most people close from mid-September through October.
            If you want a date that works for you, book it now. Later in the
            fall gets tight.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why close it right
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A sloppy close is how you get staining, algae under the cover, and
            a harder opening next year. We do this every fall so you are not
            guessing.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Still need weekly service until then?{" "}
            <Link href="/contact-us" className="text-sky-600 font-semibold">
              Get on the route
            </Link>
            . Need an opening instead?{" "}
            <Link href="/pool-opening" className="text-sky-600 font-semibold">
              That page is here
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Book Your Pool Closing"
        subtext="Text a few pics of the pool and cover. We will tell you the honest next step."
      />
    </>
  );
}
