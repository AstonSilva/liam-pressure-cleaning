import Image from "next/image";
import {
  ArrowDown,
  Phone,
  MapPin,
  Building2,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import heroImage from "@/public/images/hero/pressure-washing-hero-square.png";
export function Hero() {
  return (
    <>
      <section
        className="hero container"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-rule" /> LIAM PRESSURE CLEANING
          </p>
          <h1 id="hero-title">
            A cleaner home.
            <br />
            <span>A better welcome.</span>
          </h1>
          <p className="hero-description">
            Professional pressure cleaning for homes and businesses across{" "}
            <strong>Central Florida.</strong>
          </p>
          <div className="hero-actions">
            <Button />
            <a className="text-action" href={business.tel}>
              <Phone size={17} aria-hidden="true" />
              {business.phone}
            </a>
          </div>
          <p className="hero-note">
            Your roof. Your driveway. Your whole exterior.
          </p>
        </div>
        <figure className="hero-visual">
          <Image
            src={heroImage}
            alt="Professional pressure washing service cleaning a residential driveway in Central Florida"
            fill
            preload
            unoptimized
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1280px) 45vw, 580px"
            className="hero-image"
          />
          <div className="image-caption">
            <span>FRESH SPACES. EVERYDAY LIVING.</span>
            <a href="#services" aria-label="Explore exterior cleaning services">
              <ArrowDown size={20} />
            </a>
          </div>
        </figure>
      </section>
      <div className="trust-strip container">
        <span>
          <Sparkles />
          <span>Professional exterior cleaning</span>
        </span>
        <span>
          <Building2 />
          <span>Residential & commercial</span>
        </span>
        <span>
          <MapPin />
          <span>Serving Central Florida</span>
        </span>
        <span>
          <BadgeCheck aria-hidden="true" />
          <span>Free estimates</span>
        </span>
      </div>
    </>
  );
}
