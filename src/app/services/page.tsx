import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pool Cleaning Services",
  description:
    "Weekly pool cleaning, pool openings, one-time cleanings, chemical balancing, and more. No contracts. Serving the Main Line PA and Northern Delaware.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const serviceDetails = [
  {
    name: "Weekly Pool Cleaning",
    description:
      "Our bread and butter. We show up every week, skim the surface, vacuum the floor, brush the walls, empty the baskets, and test your water chemistry. You don't have to think about your pool — that's the whole point. We handle chlorine, pH, alkalinity, and everything else so you can just jump in.",
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
    description:
      "Spring is here and your pool has been under a cover for months. We remove the cover, clean it, reconnect all your equipment, shock the water, balance the chemicals, and get everything running. Whether it's a little green or a full swamp, we've handled worse. Most pools are swim-ready within 24-48 hours of our visit.",
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
    description:
      "When the season wraps up, we winterize your pool the right way. We lower the water level, blow out the lines, add winterizing chemicals, install plugs, and secure the cover. Proper closing means fewer problems next spring — and a cheaper opening.",
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
    description:
      "Pool turned green? Hosting a party this weekend? Just moved into a house with a neglected pool? We do one-time cleanups for any situation. No commitment required — just call, we'll come out, and you'll have a clean pool. If you like us (you will), we're here for weekly service too.",
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
    name: "Equipment Check",
    description:
      "Pumps, filters, heaters, salt cells, automatic cleaners — pool equipment is expensive and problems only get worse if ignored. We inspect your setup, flag anything that needs attention, and give you honest advice. We're not trying to sell you a new pump — we'll tell you when a $20 part will fix the problem.",
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
          "Weekly pool cleaning, pool openings, closings, one-time cleanings, chemical balancing, and equipment checks. No contracts. Serving the Main Line PA and Northern Delaware."
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
                {service.name}
              </h2>
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
        subtext="Pick up the phone or fill out the form. We'll get back to you fast."
      />
    </>
  );
}
