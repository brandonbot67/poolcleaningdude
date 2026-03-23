export const siteConfig = {
  name: "Pool Cleaning Dude",
  tagline: "Your Pool Guy. No Contracts. Just Clean Water.",
  description:
    "Pool Cleaning Dude provides reliable, no-contract pool cleaning and maintenance services across the Main Line PA and Northern Delaware. Weekly cleaning, pool openings, and more.",
  url: "https://poolcleaningdude.com",
  phone: "302-496-6367",
  phoneFormatted: "(302) 496-6367",
  email: "info@poolcleaningdude.com",
  address: {
    street: "Hockessin",
    city: "Hockessin",
    state: "DE",
    zip: "19707",
    full: "Hockessin, DE 19707",
  },
  social: {
    facebook: "https://facebook.com/poolcleaningdude",
    instagram: "https://instagram.com/poolcleaningdude",
  },
  serviceAreas: [
    // Main Line PA (primary market)
    { name: "Gladwyne", state: "PA", slug: "gladwyne-pa" },
    { name: "Villanova", state: "PA", slug: "villanova-pa" },
    { name: "Haverford", state: "PA", slug: "haverford-pa" },
    { name: "Bryn Mawr", state: "PA", slug: "bryn-mawr-pa" },
    { name: "Ardmore", state: "PA", slug: "ardmore-pa" },
    { name: "Radnor", state: "PA", slug: "radnor-pa" },
    { name: "Wayne", state: "PA", slug: "wayne-pa" },
    { name: "Berwyn", state: "PA", slug: "berwyn-pa" },
    { name: "Malvern", state: "PA", slug: "malvern-pa" },
    { name: "West Chester", state: "PA", slug: "west-chester-pa" },
    { name: "Newtown Square", state: "PA", slug: "newtown-square-pa" },
    { name: "Media", state: "PA", slug: "media-pa" },
    { name: "Glen Mills", state: "PA", slug: "glen-mills-pa" },
    { name: "Chadds Ford", state: "PA", slug: "chadds-ford-pa" },
    // Northern Delaware
    { name: "Hockessin", state: "DE", slug: "hockessin-de" },
    { name: "Greenville", state: "DE", slug: "greenville-de" },
    { name: "Centreville", state: "DE", slug: "centreville-de" },
    { name: "Montchanin", state: "DE", slug: "montchanin-de" },
    { name: "Wilmington", state: "DE", slug: "wilmington-de" },
    { name: "Pike Creek", state: "DE", slug: "pike-creek-de" },
    { name: "Newark", state: "DE", slug: "newark-de" },
    { name: "Yorklyn", state: "DE", slug: "yorklyn-de" },
  ],
  services: [
    {
      name: "Weekly Pool Cleaning",
      slug: "weekly-cleaning",
      shortDesc: "Regular maintenance to keep your pool sparkling all season.",
    },
    {
      name: "Pool Opening",
      slug: "pool-opening",
      shortDesc:
        "Spring startup service — we handle the cover, chemicals, and equipment.",
    },
    {
      name: "Pool Closing",
      slug: "pool-closing",
      shortDesc: "Winterization done right so your pool is ready next spring.",
    },
    {
      name: "One-Time Cleaning",
      slug: "one-time-cleaning",
      shortDesc: "Green pool? Party prep? We got you.",
    },
    {
      name: "Chemical Balancing",
      slug: "chemical-balancing",
      shortDesc: "Water chemistry dialed in for safe, clear water.",
    },
    {
      name: "Equipment Check",
      slug: "equipment-check",
      shortDesc: "Pump, filter, heater — we inspect it all.",
    },
  ],
  testimonials: [
    {
      name: "Darlene",
      location: "Chadds Ford, PA",
      text: "They are reliable, always on time, and are super meticulous. Pool has never looked better!",
    },
    {
      name: "Donna",
      location: "Newark, DE",
      text: "Really great service. Brandon and his team are so professional and thorough. Highly recommend!",
    },
    {
      name: "Scott",
      location: "Hockessin, DE",
      text: "Our pool has never looked this clean. It's nice to have someone you can count on every week.",
    },
    {
      name: "Robert",
      location: "Pike Creek, DE",
      text: "Reliable and honest. They show up, do the work, and our pool is always crystal clear.",
    },
  ],
} as const;
