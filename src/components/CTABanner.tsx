import { siteConfig } from "@/lib/config";

export default function CTABanner({
  headline = "Ready for a Clean Pool?",
  subtext = "No contracts. No hassle. Just crystal clear water.",
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="bg-sky-600 py-12 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {headline}
        </h2>
        <p className="text-sky-100 mb-6">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50 transition-colors"
          >
            Call {siteConfig.phoneFormatted}
          </a>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
