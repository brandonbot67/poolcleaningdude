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
  // ─── DELAWARE ───────────────────────────────────────────────
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
    nearbyAreas: ["pike-creek-de", "greenville-de", "yorklyn-de", "centreville-de", "chadds-ford-pa"],
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
    nearbyAreas: ["centreville-de", "montchanin-de", "wilmington-de", "hockessin-de"],
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
    nearbyAreas: ["greenville-de", "montchanin-de", "pike-creek-de", "hockessin-de"],
  },
  "centreville-de": {
    slug: "centreville-de",
    name: "Centreville",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Centreville, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Centreville sits right between our Hockessin base and Greenville, making it one of the easiest stops on our route. This small community along Kennett Pike has some gorgeous properties with pools that need consistent attention.

The homes in Centreville tend to be on larger lots with mature trees — beautiful to look at, but they drop a lot of debris into pools. That's where weekly service pays for itself. We keep ahead of the leaves, pollen, and organic buildup so you never come home to a green pool.

Centreville homeowners value quality and consistency. That's exactly what we bring. Same crew, same day, same thorough service every week.`,
    nearbyAreas: ["greenville-de", "hockessin-de", "montchanin-de", "chadds-ford-pa"],
  },
  "montchanin-de": {
    slug: "montchanin-de",
    name: "Montchanin",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Montchanin, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Montchanin is a quiet, historic area along the Brandywine Valley with some of the nicest residential properties in Delaware. The pools here are often part of larger estates, and they require the kind of careful, consistent maintenance that we specialize in.

We treat every Montchanin pool visit like it's our most important stop of the day. Full skim, vacuum, brush, chemistry check, equipment inspection — the works. Larger pools take more time, and we don't cut corners to stay on schedule.

If you're in Montchanin or the surrounding Winterthur-area neighborhoods, we're already in the area servicing Greenville and Centreville customers. Adding your pool to the route is easy.`,
    nearbyAreas: ["greenville-de", "centreville-de", "wilmington-de"],
  },
  "yorklyn-de": {
    slug: "yorklyn-de",
    name: "Yorklyn",
    state: "Delaware",
    stateAbbr: "DE",
    description:
      "Pool cleaning and maintenance services in Yorklyn, Delaware. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Yorklyn is just north of Hockessin, right on the Pennsylvania border. It's a short drive from our home base, and we've got several regular customers in the area who've been with us for years.

The properties in Yorklyn tend to be on the larger side with plenty of surrounding trees and greenery. That means pools here collect more debris than average, and water chemistry can shift quickly with all the organic material. Weekly service keeps everything in check.

If you're in Yorklyn or the Hockessin-Yorklyn corridor, you're in our core service zone. We're already driving past your house on the way to other stops — might as well keep your pool clean too.`,
    nearbyAreas: ["hockessin-de", "chadds-ford-pa", "centreville-de"],
  },

  // ─── PENNSYLVANIA ───────────────────────────────────────────
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
    nearbyAreas: ["glen-mills-pa", "west-chester-pa", "hockessin-de", "yorklyn-de"],
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
    nearbyAreas: ["chadds-ford-pa", "west-chester-pa", "media-pa", "newtown-square-pa"],
  },
  "west-chester-pa": {
    slug: "west-chester-pa",
    name: "West Chester",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in West Chester, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `West Chester is one of the bigger towns on our PA route, and we've got enough customers there to make it a weekly stop. The borough and surrounding townships have a great mix of residential pools — everything from compact backyards to sprawling estates.

West Chester homeowners tend to be busy professionals who want their pool ready to use when they get home on Friday. That's exactly what we deliver. We come during the week, do the work, and by the weekend your pool is sparkling and the chemistry is dialed in.

If you're in West Chester or the surrounding Westtown, East Goshen, or Thornbury townships, give us a call. We'll work you into our PA route and you'll have consistent service all season.`,
    nearbyAreas: ["glen-mills-pa", "malvern-pa", "newtown-square-pa"],
  },
  "gladwyne-pa": {
    slug: "gladwyne-pa",
    name: "Gladwyne",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Gladwyne, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Gladwyne is one of the Main Line's premier communities, and the pools here match — large, well-built, and expected to look perfect at all times. We get it. When you're paying for a property in Gladwyne, the pool should look like it belongs there.

We service several pools in the Gladwyne area, and our approach is the same regardless of pool size or type: thorough, consistent, and reliable. Full skim, vacuum, brush, basket cleaning, filter check, and complete water chemistry panel. Every visit.

The properties here are often surrounded by mature trees along the Schuylkill River valley, which means more debris and faster chemistry changes. Weekly service isn't just nice to have in Gladwyne — it's essential.`,
    nearbyAreas: ["haverford-pa", "bryn-mawr-pa", "villanova-pa", "radnor-pa"],
  },
  "villanova-pa": {
    slug: "villanova-pa",
    name: "Villanova",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Villanova, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Villanova is right in the heart of the Main Line, and we service pools throughout the area — from the neighborhoods near Villanova University to the estates along Spring Mill Road and County Line Road.

Pools in Villanova tend to be well-built and well-maintained, but even the best pool needs weekly attention. Leaves from the old-growth trees, pollen in spring, and summer algae pressure don't take a week off, and neither should your pool service.

We bring the same no-nonsense approach to Villanova that we do everywhere else: show up on time, clean the pool thoroughly, balance the chemistry, check the equipment, and leave. No sales pitches, no upsells. Just clean water.`,
    nearbyAreas: ["radnor-pa", "bryn-mawr-pa", "wayne-pa", "haverford-pa"],
  },
  "haverford-pa": {
    slug: "haverford-pa",
    name: "Haverford",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Haverford, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Haverford is one of our regular Main Line stops, and we've built a solid base of customers in the area. The township has a great mix of residential properties — from classic stone homes with older pools to newer builds with modern setups.

Older pools in Haverford sometimes need a little extra attention. Plaster surfaces, aging tile lines, and equipment that's been running for 15+ years all benefit from a pool guy who actually pays attention. We check your equipment every visit and let you know if something needs attention before it becomes a $2,000 repair.

Haverford is on our Main Line route alongside Bryn Mawr, Ardmore, and Gladwyne. Efficient routing means competitive pricing for you.`,
    nearbyAreas: ["bryn-mawr-pa", "ardmore-pa", "gladwyne-pa", "villanova-pa"],
  },
  "bryn-mawr-pa": {
    slug: "bryn-mawr-pa",
    name: "Bryn Mawr",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Bryn Mawr, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Bryn Mawr is a classic Main Line community, and we service pools throughout the area. Whether you're near the Bryn Mawr train station, up along Morris Avenue, or in one of the neighborhoods toward Gladwyne, we've got you on the route.

The pool stock in Bryn Mawr is diverse. Some homes have had pools for decades — concrete or gunite with plaster finishes that need careful brushing and chemistry management. Others have newer vinyl or fiberglass setups. We handle all of them with the same level of care.

Our Bryn Mawr customers value consistency above everything. They want the same crew, on the same day, doing the same thorough job. That's what we do.`,
    nearbyAreas: ["haverford-pa", "ardmore-pa", "gladwyne-pa", "villanova-pa"],
  },
  "ardmore-pa": {
    slug: "ardmore-pa",
    name: "Ardmore",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Ardmore, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Ardmore sits right on the Main Line and has a great mix of homes with pools. From the streets near Suburban Square to the residential areas along Lancaster Avenue and beyond, we service pools of all types in the Ardmore area.

Ardmore backyards tend to be a bit more compact than some of the other Main Line towns, which means pools are closer to the house, closer to landscaping, and often under tree cover. All of that adds up to more debris in the water and faster filter clogging. Weekly service keeps it all under control.

We're on the Main Line route every week hitting Ardmore, Haverford, Bryn Mawr, and the surrounding areas. Getting on the schedule is easy — just call or text.`,
    nearbyAreas: ["haverford-pa", "bryn-mawr-pa", "radnor-pa"],
  },
  "radnor-pa": {
    slug: "radnor-pa",
    name: "Radnor",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Radnor, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Radnor Township covers a big chunk of the Main Line, and we service pools throughout the area — from the neighborhoods near Radnor Trail to the properties along King of Prussia Road and Conestoga Road.

The homes in Radnor tend to be well-established with mature lots. That's great for shade and privacy, but it means pools collect a lot of organic material. Leaves, twigs, pollen, and seeds all end up in the water and throw off the chemistry if you're not staying on top of it.

Our weekly service handles all of that. We show up, clean everything out, rebalance the chemistry, and make sure the equipment is running right. By the time we leave, your pool is ready to swim in.`,
    nearbyAreas: ["villanova-pa", "wayne-pa", "bryn-mawr-pa", "ardmore-pa"],
  },
  "wayne-pa": {
    slug: "wayne-pa",
    name: "Wayne",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Wayne, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Wayne is on the western end of our Main Line route, and we've got a growing group of customers in the area. The neighborhoods around Chanticleer Garden, Valley Forge, and the streets off Lancaster Avenue all have great homes with pools that need regular care.

Wayne homeowners tend to be families who actually use their pools — kids in the water every day during summer, weekend pool parties, the whole deal. Pools that get heavy use need more attention to chemistry and filtration. We stay on top of it so the water is always safe and clear, no matter how many cannonballs happened over the weekend.

We hit Wayne on the same day as our Radnor, Villanova, and Berwyn stops. Efficient route, competitive pricing.`,
    nearbyAreas: ["radnor-pa", "villanova-pa", "berwyn-pa", "malvern-pa"],
  },
  "berwyn-pa": {
    slug: "berwyn-pa",
    name: "Berwyn",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Berwyn, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Berwyn is in Easttown Township, right between Wayne and Malvern on our western PA route. The community has a solid mix of homes with pools, and we've been picking up customers here steadily.

Berwyn is the kind of neighborhood where people take pride in their property. A clean pool is part of that. We make sure the water is clear, the tile line is scrubbed, and the chemistry is right every single week. No shortcuts.

If your current pool service has been inconsistent or you're tired of chasing someone down to get them to show up, give us a shot. We're already in Berwyn every week.`,
    nearbyAreas: ["wayne-pa", "malvern-pa", "radnor-pa"],
  },
  "malvern-pa": {
    slug: "malvern-pa",
    name: "Malvern",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Malvern, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Malvern is on the western edge of our service area, and we make the trip every week because our customers there are worth it. The Malvern and Willistown Township area has beautiful properties with pools that need consistent attention.

Malvern pools often sit on larger lots with open exposure, which means more sun, warmer water temperatures, and more aggressive algae growth in the peak summer months. Our weekly service keeps the chlorine and chemistry dialed in so algae never gets a foothold.

We pair Malvern with our Berwyn and West Chester stops. If you're anywhere in the Malvern-Paoli corridor, we can get you on the route.`,
    nearbyAreas: ["berwyn-pa", "west-chester-pa", "wayne-pa"],
  },
  "media-pa": {
    slug: "media-pa",
    name: "Media",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Media, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Media is the county seat of Delaware County, and it's a charming town with a lot of homes that have pools. From the neighborhoods near Media Borough to the surrounding Nether Providence and Upper Providence townships, we've got the area covered.

Pools in the Media area tend to be a mix of older in-ground setups and newer installations. We handle both. Older pools sometimes need extra care — more careful brushing, closer attention to equipment condition, and tighter chemistry management. That's all part of our standard weekly visit.

Media is on our route with Glen Mills, Newtown Square, and the Delaware County stops. We're in the area every week, rain or shine.`,
    nearbyAreas: ["glen-mills-pa", "newtown-square-pa", "chadds-ford-pa"],
  },
  "newtown-square-pa": {
    slug: "newtown-square-pa",
    name: "Newtown Square",
    state: "Pennsylvania",
    stateAbbr: "PA",
    description:
      "Pool cleaning and maintenance services in Newtown Square, Pennsylvania. Weekly cleaning, pool openings, chemical balancing, and more. No contracts.",
    content: `Newtown Square is a great community with plenty of homes that have pools. Located in Newtown Township, it's an easy addition to our Delaware County route, and we've been growing our customer base here.

The properties in Newtown Square tend to have good-sized yards and pools that get regular family use. When kids and guests are in the pool multiple times a week, water chemistry shifts faster and the filtration system works harder. Our weekly service stays ahead of it so the water is always balanced and safe.

We service Newtown Square on the same day as our Media and Glen Mills stops. Easy to add you to the route — just give us a call.`,
    nearbyAreas: ["media-pa", "glen-mills-pa", "radnor-pa", "west-chester-pa"],
  },
};

export function getArea(slug: string): AreaData | undefined {
  return areas[slug];
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(areas);
}
