import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
export function About() {
  return (
    <section
      id="about"
      className="section about-section container"
      aria-labelledby="about-title"
    >
      <div className="about-brand">
        <Logo large />
        <span>LIAM PRESSURE CLEANING LLC</span>
        <p>Serving Central Florida</p>
      </div>
      <div className="about-copy">
        <p className="eyebrow">LOCAL SERVICE. A FRESHER EXTERIOR.</p>
        <h2 id="about-title">
          Central Florida,
          <br />
          looking its best.
        </h2>
        <p>
          Liam Pressure Cleaning provides professional exterior cleaning for
          residential and commercial properties across Central Florida.
        </p>
        <p>
          From roof and house washing to driveways, sidewalks, gutters, pool
          decks, patios, and paver sealing, we’re here to help you care for the
          outside of your property.
        </p>
        <Button secondary>Talk to us about your property</Button>
      </div>
    </section>
  );
}
