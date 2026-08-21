import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { smsHref, telHref } from "@/lib/contact";
import CTABanner from "@/components/CTABanner";

function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-16 sm:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C150,80 350,0 500,40 C650,80 800,20 1000,50 C1100,65 1150,55 1200,60 L1200,120 L0,120 Z"
          fill="white"
        />
        <path
          d="M0,60 C200,90 400,30 600,60 C800,90 1000,40 1200,70 L1200,120 L0,120 Z"
          fill="white"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

function PoolBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Decorative bubbles */}
      <div className="absolute top-20 left-[10%] w-4 h-4 rounded-full bg-white/10 animate-pulse" />
      <div className="absolute top-32 right-[15%] w-6 h-6 rounded-full bg-white/[0.07]" />
      <div className="absolute top-16 right-[30%] w-3 h-3 rounded-full bg-white/[0.12] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[20%] w-5 h-5 rounded-full bg-white/[0.08]" />
      <div className="absolute top-40 left-[45%] w-2 h-2 rounded-full bg-white/[0.15] animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-[25%] w-8 h-8 rounded-full bg-white/[0.05]" />
      <div className="absolute top-24 left-[70%] w-3 h-3 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Subtle water caustics pattern using SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pool-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q25 30, 50 50 T100 50" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M0 25 Q25 5, 50 25 T100 25" stroke="white" strokeWidth="1" fill="none"/>
            <path d="M0 75 Q25 55, 50 75 T100 75" stroke="white" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pool-pattern)"/>
      </svg>
    </div>
  );
}

const highIntentReasons = [
  {
    title: "Weekly Route Spots",
    text: "For homeowners who want the pool handled every week without chasing a pool guy. Starts at $150/week.",
  },
  {
    title: "Pool Closing",
    text: "Cover on, equipment off. Starts at $400. Dates go first in September and October.",
    href: "/pool-closing",
  },
  {
    title: "Repair Help",
    text: "Pump, filter, heater, salt system, or cleaner problems get an honest next step.",
  },
];

const routeSignals = [
  "Photo report after weekly visits",
  "Licensed and insured",
  "40-pool route cap this season",
  "No contracts",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-500 py-24 sm:py-32 px-4 overflow-hidden">
        <PoolBubbles />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Small water drop icon above heading */}
          <div className="flex justify-center mb-6">
            <svg width="48" height="48" viewBox="0 0 40 44" className="drop-shadow-lg" aria-hidden="true">
              <path
                d="M20 2 C20 2 6 18 6 28 C6 35.18 12.268 41 20 41 C27.732 41 34 35.18 34 28 C34 18 20 2 20 2Z"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <ellipse cx="20" cy="30" rx="7" ry="2.5" fill="rgba(255,255,255,0.15)"/>
              <circle cx="16" cy="22" r="2" fill="rgba(255,255,255,0.25)"/>
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            Main Line Pool Service for People Who Want It{" "}
            <span className="text-cyan-300">Handled.</span>
          </h1>
          <p className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Weekly cleaning, openings, green-to-clean rescues, and repair help
            from a local pool guy who shows up. No contracts, no corporate
            runaround, and no guessing what happened after the visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-sky-700 shadow-lg hover:bg-sky-50 transition-colors"
            >
              Get on the Route
            </Link>
            <a
              href={smsHref()}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Text Us
            </a>
            <a
              href={telHref()}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Call {siteConfig.phoneFormatted}
            </a>
          </div>
          <p className="mt-5 mx-auto max-w-2xl text-sm font-medium text-sky-100">
            We are not the cheapest pool company. We are for people who want
            the pool clean, documented, and off their plate.
          </p>
          {/* Van photo */}
          <div className="mt-12 mx-auto max-w-2xl">
            <Image
              src="/images/brandon-pool.jpg"
              alt="Brandon at a customer's pool after a visit"
              width={940}
              height={627}
              className="rounded-2xl shadow-2xl border-2 border-white/20"
              priority
            />
            <p className="mt-3 text-sm text-sky-100">
              That&apos;s Brandon. He actually does the work.
            </p>
          </div>
        </div>
        <WaveDecoration />
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-100 py-6 px-4">
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 font-medium">
          {routeSignals.map((signal, index) => (
            <span key={signal} className="contents">
              <span>{signal}</span>
              {index < routeSignals.length - 1 && (
                <span className="hidden sm:inline text-gray-300">|</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* High-intent offers */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-3">
                Built for Main Line homeowners
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                The pool stays ready without becoming your second job.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you want the lowest one-off visit, we are probably not it.
                If you want the same local crew watching the water, catching
                equipment issues early, and texting proof after the visit, we
                are built for that.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
              >
                Tell Us About Your Pool
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highIntentReasons.map((reason) => {
                const card = (
                  <>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {reason.text}
                    </p>
                  </>
                );
                const className =
                  "rounded-lg border border-gray-200 bg-gray-50 p-5 h-full";
                return "href" in reason && reason.href ? (
                  <Link
                    key={reason.title}
                    href={reason.href}
                    className={`${className} hover:border-sky-300 transition-colors`}
                  >
                    {card}
                  </Link>
                ) : (
                  <div key={reason.title} className={className}>
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
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
            upsells, no runaround.
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
                {"startingAt" in service && service.startingAt && (
                  <p className="text-sm font-semibold text-sky-700 mb-2">
                    Starting at {service.startingAt}
                  </p>
                )}
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

      {/* Closing season */ }
      <section className="bg-sky-50 py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-3">
            Closing season
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get the cover on before the rush.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Closings start at $400. That covers the cover and shutting the
            equipment down. Standard is $550 if you want winterization
            chemicals included.
          </p>
          <Link
            href="/pool-closing"
            className="inline-flex items-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
          >
            Book a Closing
          </Link>
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

      {/* Before & After */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Before &amp; After
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Green to clean. This is what we do.
          </p>
          <div className="space-y-8">
            {/* Pair 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/pool-06.jpg"
                  alt="Green pool before cleaning"
                  width={600}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/pool-05.jpg"
                  alt="Crystal clear pool after cleaning"
                  width={600}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </span>
              </div>
            </div>
            {/* Pair 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/pool-11.jpg"
                  alt="Swamp-green neglected pool before service"
                  width={600}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/pool-10.jpg"
                  alt="Same pool restored to crystal clear water"
                  width={600}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving the Main Line PA &amp; Northern Delaware
          </h2>
          <p className="text-gray-600 mb-8">
            We clean pools across the Main Line, Chester County, Delaware
            County, and Northern Delaware. If you&apos;re nearby, we&apos;ve
            got you covered.
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
