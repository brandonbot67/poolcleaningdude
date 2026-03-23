export interface AreaData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  description: string;
  content: string;
  nearbyAreas: string[];
}

export const areas: Record<string, AreaData> = {
  "hockessin-de": {
    slug: "hockessin-de",
    name: "Hockessin",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Hockessin, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Hockessin is home base for Pool Cleaning Dude, and we know the area inside and out. From the larger properties along Lancaster Pike to the neighborhoods near Hockessin Athletic Club, we service pools of all sizes and types throughout the community.

Hockessin homes tend to have well-maintained properties, and homeowners here expect their pool to look just as sharp as their landscaping. That's exactly what we deliver — crystal clear water, clean tile lines, balanced chemistry, and equipment that runs smoothly.

Many of our longest-running customers are right here in Hockessin. They started with a pool opening, liked the work, and signed up for weekly service. No contract — they just keep coming back because we deliver.`,
    nearbyAreas: ["pike-creek-de", "greenville-de", "newark-de", "chadds-ford-pa"],
  },
  "pike-creek-de": {
    slug: "pike-creek-de",
    name: "Pike Creek",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Pike Creek, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Pike Creek is right in our wheelhouse — close to our base in Hockessin and full of neighborhoods with great pools. The community here is tight-knit, and word of mouth is how most of our Pike Creek customers found us.

We service pools throughout the Pike Creek Valley, including neighborhoods along Limestone Road and the areas near Carousel Park. Pool sizes range from smaller above-ground setups to full-size in-ground pools with spas and water features. We handle them all.

If you're in Pike Creek and your pool guy hasn't been showing up consistently, give us a try. One week of our service and you'll see the difference.`,
    nearbyAreas: ["hockessin-de", "newark-de", "wilmington-de"],
  },
  "newark-de": {
    slug: "newark-de",
    name: "Newark",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Newark, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Newark is one of our busiest service areas. With a mix of established neighborhoods and newer developments, there's no shortage of pools that need regular care. Whether you're near the University of Delaware campus, out by White Clay Creek, or in one of the neighborhoods off Kirkwood Highway, we've got you covered.

A lot of Newark pools are in-ground with vinyl liners or concrete/gunite, and many have mature trees nearby — which means more debris, more leaves, and more reason to have a weekly cleaning service. We handle the skimming, vacuuming, brushing, and chemical balancing so you don't have to.

We also do a lot of pool openings in Newark every spring. If your pool has been sitting under a cover since October, give us a call in February or March to book your opening before the schedule fills up.`,
    nearbyAreas: ["hockessin-de", "pike-creek-de"],
  },
  "greenville-de": {
    slug: "greenville-de",
    name: "Greenville",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Greenville, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Greenville is one of Delaware's most beautiful communities, and the pools here reflect that. Large properties, mature landscaping, and homeowners who want everything looking sharp — including the pool.

We've been cleaning pools in Greenville since our early days. The properties here tend to be larger, which means bigger pools, more surface area, and more attention needed. That's fine by us — we don't rush through a visit. Every pool gets the same thorough treatment: skim, vacuum, brush, baskets, filter check, and full chemistry balance.

Greenville homeowners appreciate reliability and discretion. We show up on schedule, do our work, and leave the pool looking great. No drama, no surprises on the bill, no contracts.`,
    nearbyAreas: ["hockessin-de", "wilmington-de", "chadds-ford-pa"],
  },
  "wilmington-de": {
    slug: "wilmington-de",
    name: "Wilmington",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Wilmington, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `We service pools throughout North Wilmington and the Brandywine Hundred area. From Rockford Park to Talleyville, Brandywine Hills to Alapocas, if you've got a pool in the Wilmington area, we can take care of it.

Wilmington pools come in every shape and size. Older homes near Rockford Park might have classic gunite pools that need a little extra TLC. Newer developments in North Wilmington often have vinyl liner pools that are easier to maintain but still need weekly attention to stay clear.

We're based just up the road in Hockessin, so Wilmington is a natural fit for our route. Most of our Wilmington customers get serviced on the same day as our Greenville and Brandywine stops — keeps things efficient and keeps your cost down.`,
    nearbyAreas: ["greenville-de", "pike-creek-de", "hockessin-de"],
  },
  "chadds-ford-pa": {
    slug: "chadds-ford-pa",
    name: "Chadds Ford",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Chadds Ford, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Chadds Ford is just over the Delaware line, and we've been servicing pools there since we started. The Brandywine Valley area has some beautiful properties with pools that deserve top-notch care.

Chadds Ford pools tend to be on larger properties, often surrounded by trees and landscaping. That means more organic debris in the water, faster filter clogging, and the need for consistent chemical management. Our weekly service handles all of that — we skim, vacuum, brush, clean the baskets, check the filter pressure, and balance the chemistry every single visit.

Several of our best customer testimonials come from Chadds Ford homeowners. They tried other pool companies, got burned, and found us. We've been their pool guys ever since.`,
    nearbyAreas: ["hockessin-de", "glen-mills-pa", "west-chester-pa"],
  },
  "glen-mills-pa": {
    slug: "glen-mills-pa",
    name: "Glen Mills",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Glen Mills, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Glen Mills is a quick drive from our Hockessin base, and we've got a solid group of customers in the area. The neighborhoods here — from Thornbury Hunt to Brinton Lake — have a great mix of pools that keep us busy all summer.

The developments in Glen Mills tend to have well-maintained HOA common areas and homeowners who care about curb appeal. A green pool sticks out in these neighborhoods, and nobody wants to be that house. That's where we come in — consistent weekly service so your pool always looks its best.

We pair Glen Mills stops with our Chadds Ford and West Chester route, which keeps the drive time manageable and the pricing fair for everyone.`,
    nearbyAreas: ["chadds-ford-pa", "west-chester-pa"],
  },
  "west-chester-pa": {
    slug: "west-chester-pa",
    name: "West Chester",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in West Chester, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `West Chester is the farthest point on our regular route, but we've got enough customers there to make it a weekly stop. The borough and surrounding townships have a great mix of residential pools — everything from compact backyards to sprawling estates.

West Chester homeowners tend to be busy professionals who want their pool ready to use when they get home on Friday. That's exactly what we deliver. We come during the week, do the work, and by the weekend your pool is sparkling and the chemistry is dialed in.

If you're in West Chester or the surrounding Westtown, East Goshen, or Thornbury townships, give us a call. We'll work you into our PA route and you'll have consistent service all season.`,
    nearbyAreas: ["glen-mills-pa", "chadds-ford-pa"],
  },
};

export function getArea(slug: string): AreaData | undefined {
  return areas[slug];
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(areas);
}
