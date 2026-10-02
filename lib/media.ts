import type { StaticImageData } from "next/image";
import beforeDriveway from "@/public/images/before-after/before-driveway.webp";
import afterDriveway from "@/public/images/before-after/after-driveway.webp";
import drivewayBefore from "@/public/images/projects/driveway-before.webp";
import drivewayAfter from "@/public/images/projects/driveway-after.webp";
import houseWashingBefore from "@/public/images/projects/house-washing-before.webp";
import houseWashingAfter from "@/public/images/projects/house-washing-after.webp";
import poolDeckBefore from "@/public/images/projects/pool-deck-before.webp";
import poolDeckAfter from "@/public/images/projects/pool-deck-after.webp";

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
  comparison?: {
    before: StaticImageData;
    after: StaticImageData;
    beforeAlt: string;
    afterAlt: string;
  };
};
export const projects: Project[] = [
  {
    title: "Driveway Cleaning",
    service: "Driveways & Walkways",
    src: drivewayAfter,
    alt: "Clean residential driveway after professional pressure washing",
    comparison: {
      before: drivewayBefore,
      after: drivewayAfter,
      beforeAlt: "Residential driveway before professional pressure washing",
      afterAlt: "Residential driveway after professional pressure washing",
    },
  },
  {
    title: "Exterior House Washing",
    service: "House Washing",
    src: houseWashingAfter,
    alt: "Residential exterior house washing service in Central Florida",
    comparison: {
      before: houseWashingBefore,
      after: houseWashingAfter,
      beforeAlt: "Residential house exterior before professional washing",
      afterAlt: "Residential house exterior after professional washing",
    },
  },
  {
    title: "Pool Deck Cleaning",
    service: "Pool Deck & Patio Cleaning",
    src: poolDeckAfter,
    alt: "Clean residential pool deck after professional pressure washing",
    comparison: {
      before: poolDeckBefore,
      after: poolDeckAfter,
      beforeAlt: "Residential pool deck before professional pressure washing",
      afterAlt: "Residential pool deck after professional pressure washing",
    },
  },
];
export type Testimonial = {
  quote: string;
  attribution: string;
  sourceUrl?: string;
};
export const testimonials: Testimonial[] = [];
// Add only attributed reviews supplied or approved by the business.
