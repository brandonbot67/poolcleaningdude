import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pool Cleaning Services",
  description:
    "Weekly pool cleaning, pool openings, one-time cleanings, repair help, chemical balancing, and more. No contracts. Serving the Main Line PA and Northern Delaware.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const serviceDetails = [
  {
    name: "Weekly Pool Cleaning",
    startingAt: "$150/week",
    description:
      "Our bread and butter. We show up every week, skim the surface, vacuum the floor, brush the walls, empty the baskets, and test your water chemistry. You don't have to think about your pool. That's the whole point. We handle chlorine, pH, alkalinity, and everything else so you can just jump in.",
    includes: [
      "Surface skimming & debris removal",
      "Vacuuming pool floor",
      "Brushing walls and tile line",
      "Skimmer & pump basket cleaning",
      "Water chemistry testing & adjustment",
      "Filter pressure check",
    ],
  },
  {
    name: "Pool Opening",
    href: "/pool-opening",
    startingAt: "$400",
    description:
      "We pull the cover, reconnect the equipment, and get the system running. Green or not, we have seen worse. Most pools are swim-ready in a day or two.",
    includes: [
      "Cover removal & cleaning",
      "Equipment reconnection & startup",
      "Green-to-clean shock treatment",
      "Full chemical balancing",
      "Filter cleaning or backwash",
      "System inspection",
    ],
  },
  {
    name: "Pool Closing",
    href: "/pool-closing",
    startingAt: "$400",
    description:
      "When the season wraps up, we winterize the pool the right way. Cover on, equipment off, lines blown, chemicals if you want them. A proper close means fewer problems next spring and a cheaper opening.",
    includes: [
      "Water level adjustment",
      "Plumbing line blowout",
      "Winterizing chemical treatment",
      "Plug installation",
      "Cover installation & securing",
      "Equipment shutdown",
    ],
  },
  {
    name: "One-Time Cleaning",
    startingAt: "$225",
    description:
      "Pool turned green? Hosting a party this weekend? Just moved into a house with a neglected pool? We do one-time cleanups. No commitment. Call, we come out, you have a cleaner pool. If you like us, weekly service is here too.",
    includes: [
      "Full vacuum & brush",
      "Shock treatment if needed",
      "Chemical balancing",
      "Debris removal",
      "Filter check",
    ],
  },
  {
    name: "Chemical Balancing",
    description:
      "Water chemistry isn't just about clear water — it protects your pool equipment, your skin, and your investment. We test chlorine, pH, alkalinity, calcium hardness, and stabilizer levels, then dial everything in. We can do this as a standalone visit or as part of your weekly service.",
    includes: [
      "Full water chemistry panel",
      "Chlorine & pH adjustment",
      "Alkalinity & calcium hardness",
      "Stabilizer (CYA) check",
      "Written chemistry report",
    ],
  },
  {
    name: "Pool Repairs & Equipment Checks",
    description:
      "Pumps, filters, heaters, salt cells, automatic cleaners — pool equipment is expensive and problems only get worse if ignored. We inspect your setup, flag anything that needs attention, and give you honest advice. If it needs a repair, Bryce can talk through the options without turning it into a sales pitch.",
    includes: [
      "Pump & motor inspection",
      "Filter condition assessment",
      "Heater functionality check",
      "Salt cell inspection (if applicable)",
      "Plumbing & valve check",
      "Written condition report",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Pool Cleaning and Maintenance Services",
          "Weekly pool cleaning, pool openings, closings, one-time cleanings, chemical balancing, repair help, and equipment checks. No contracts. Serving the Main Line PA and Northern Delaware."
        )}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Our Pool Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your pool needs, nothing it doesn&apos;t. Straightforward
            service from people who actually care about doing it right.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl space-y-16">
          {serviceDetails.map((service) => (
            <div
              key={service.name}
              id={service.name.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {"href" in service && service.href ? (
                  <Link href={service.href} className="hover:text-sky-700">
                    {service.name}
                  </Link>
                ) : (
                  service.name
                )}
              </h2>
              {"startingAt" in service && service.startingAt && (
                <p className="text-sm font-semibold text-sky-700 mb-3">
                  Starting at {service.startingAt}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-5">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-sky-500 mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Let's Keep Your Pool Clean"
        subtext="Text is fastest. Or fill out the form and we'll get back to you."
      />
    </>
  );
}
