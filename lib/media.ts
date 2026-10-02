import type { StaticImageData } from "next/image";
import beforeDriveway from "@/public/images/before-after/before-driveway.webp";
import afterDriveway from "@/public/images/before-after/after-driveway.webp";
import drivewayCleaning from "@/public/images/projects/driveway-cleaning.webp";
import houseWashing from "@/public/images/projects/house-washing.webp";
import poolDeckCleaning from "@/public/images/projects/pool-deck-cleaning.webp";

// Only insert client-provided or approved project photos. Do not present stock
// photography as Liam's work. Use matching camera angles for comparison pairs.
export type Comparison = {
  title: string;
  before: StaticImageData;
  after: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
};
export const comparison: Comparison = {
  title: "Driveway cleaning",
  before: beforeDriveway,
  after: afterDriveway,
  beforeAlt: "Concrete driveway before professional pressure washing",
  afterAlt: "Concrete driveway after professional pressure washing",
};
export type Project = {
  src: StaticImageData;
  alt: string;
  title: string;
  service: string;
};
export const projects: Project[] = [
  {
    title: "Driveway Cleaning",
    service: "Driveways & Walkways",
    src: drivewayCleaning,
    alt: "Clean residential driveway after professional pressure washing",
  },
  {
    title: "Exterior House Washing",
    service: "House Washing",
    src: houseWashing,
    alt: "Residential exterior house washing service in Central Florida",
  },
  {
    title: "Pool Deck Cleaning",
    service: "Pool Deck & Patio Cleaning",
    src: poolDeckCleaning,
    alt: "Clean residential pool deck after professional pressure washing",
  },
];
export type Testimonial = {
  quote: string;
  attribution: string;
  sourceUrl?: string;
};
export const testimonials: Testimonial[] = [];
// Add only attributed reviews supplied or approved by the business.
