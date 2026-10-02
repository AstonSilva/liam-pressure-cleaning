export const business = {
  name: "Liam Pressure Cleaning LLC",
  phone: "407-223-8412",
  tel: "tel:+14072238412",
  sms: "sms:+14072238412",
  email: "liampressurecleaning@gmail.com",
  facebook: "https://www.facebook.com/LIAMPRESSURECLEANING/",
  instagram: "https://www.instagram.com/liam_pressure_cleaning/?hl=en",
  map: "https://mapq.st/3o157Bx",
  areas: [
    "Orlando",
    "Altamonte Springs",
    "Windermere",
    "Maitland",
    "Ocoee",
    "Davenport",
    "Lake Mary",
    "Winter Park",
    "Winter Garden",
    "Winter Springs",
    "Kissimmee",
    "Lake Nona",
    "Avalon Park",
    "Apopka",
    "Longwood",
    "Clermont",
  ],
  hours: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => ({
    day,
    time: day === "Sunday" ? "Closed" : "8:00 AM–6:00 PM",
  })),
};
export const navigation = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Areas We Serve", "#areas"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;
export const services = [
  {
    name: "Roof Washing",
    icon: "roof",
    description:
      "Professional cleaning for dirt and buildup on roof surfaces, for a fresher-looking property.",
  },
  {
    name: "House Washing",
    icon: "house",
    description:
      "Exterior home cleaning for a fresh, well-maintained appearance.",
  },
  {
    name: "Driveway Cleaning",
    icon: "driveway",
    description:
      "Pressure cleaning for driveways affected by dirt, grime, and outdoor buildup.",
  },
  {
    name: "Sidewalk Cleaning",
    icon: "sidewalk",
    description:
      "Cleaner walkways and sidewalks to improve curb appeal around your property.",
  },
  {
    name: "Gutter Cleaning",
    icon: "gutter",
    description:
      "Exterior gutter cleaning to refresh the appearance of your roofline.",
  },
  {
    name: "Pool Deck & Patio Cleaning",
    icon: "pool",
    description:
      "Exterior cleaning for the outdoor spaces where you relax and gather.",
  },
  {
    name: "Paver Sealing",
    icon: "paver",
    description: "Paver sealing services for residential exterior surfaces.",
  },
  {
    name: "Commercial Cleaning",
    icon: "commercial",
    description:
      "Exterior pressure cleaning for commercial properties across Central Florida.",
  },
];
export const serviceOptions = [
  "Roof Washing",
  "House Washing",
  "Driveway Cleaning",
  "Sidewalk Cleaning",
  "Gutter Cleaning",
  "Pool Deck / Patio Cleaning",
  "Paver Sealing",
  "Commercial Cleaning",
  "Other",
];
export const seo = {
  title: "Liam Pressure Cleaning | Pressure Washing in Central Florida",
  description:
    "Professional pressure cleaning services across Central Florida including roof washing, house washing, driveways, sidewalks, gutters, patios, pool decks, paver sealing, and more. Call or text 407-223-8412 for a free estimate.",
};
// Set the verified public domain at deployment. Never publish a guessed canonical URL.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
