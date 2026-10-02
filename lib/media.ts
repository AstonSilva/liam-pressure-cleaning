import { existsSync } from "node:fs";
import path from "node:path";
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
  comparison?: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
};

function availableProjectComparison(
  before: string,
  after: string,
  beforeAlt: string,
  afterAlt: string,
): Project["comparison"] {
  const publicDirectory = path.join(process.cwd(), "public");
  const resolvesToFile = (publicPath: string) =>
    existsSync(path.join(publicDirectory, publicPath.replace(/^\//, "")));

  return resolvesToFile(before) && resolvesToFile(after)
    ? { before, after, beforeAlt, afterAlt }
    : undefined;
}

// Add both files in a pair, then restart the dev server or run a new build.
// A project keeps its current single image until both comparison files exist.
export const projects: Project[] = [
  {
    title: "Driveway Cleaning",
    service: "Driveways & Walkways",
    src: drivewayCleaning,
    alt: "Clean residential driveway after professional pressure washing",
    comparison: availableProjectComparison(
      "/images/projects/driveway-before.webp",
      "/images/projects/driveway-after.webp",
      "Residential driveway before professional pressure washing",
      "Residential driveway after professional pressure washing",
    ),
  },
  {
    title: "Exterior House Washing",
    service: "House Washing",
    src: houseWashing,
    alt: "Residential exterior house washing service in Central Florida",
    comparison: availableProjectComparison(
      "/images/projects/house-washing-before.webp",
      "/images/projects/house-washing-after.webp",
      "Residential house exterior before professional washing",
      "Residential house exterior after professional washing",
    ),
  },
  {
    title: "Pool Deck Cleaning",
    service: "Pool Deck & Patio Cleaning",
    src: poolDeckCleaning,
    alt: "Clean residential pool deck after professional pressure washing",
    comparison: availableProjectComparison(
      "/images/projects/pool-deck-before.webp",
      "/images/projects/pool-deck-after.webp",
      "Residential pool deck before professional pressure washing",
      "Residential pool deck after professional pressure washing",
    ),
  },
];
export type Testimonial = {
  quote: string;
  attribution: string;
  sourceUrl?: string;
};
export const testimonials: Testimonial[] = [];
// Add only attributed reviews supplied or approved by the business.
