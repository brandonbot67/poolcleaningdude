import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Pool Cleaning Dude
            </h3>
            <p className="text-sm leading-relaxed">
              {siteConfig.tagline} Serving the Main Line PA and Northern Delaware with
              honest, reliable pool service.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block mt-4 text-sky-400 font-semibold hover:text-sky-300"
            >
              {siteConfig.phoneFormatted}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Weekly Pool Cleaning
                </Link>
              </li>
              <li>
                <Link href="/pool-opening" className="hover:text-white transition-colors">
                  Pool Opening
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  One-Time Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Chemical Balancing
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
