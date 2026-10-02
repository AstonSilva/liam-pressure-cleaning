import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "@/lib/business";
export function Areas() {
  return (
    <section
      id="areas"
      className="areas-section section"
      aria-labelledby="areas-title"
    >
      <div className="container area-layout">
        <div>
          <p className="eyebrow">RIGHT HERE IN CENTRAL FLORIDA</p>
          <h2 id="areas-title">
            Your neighborhood.
            <br />
            Our service area.
          </h2>
          <p className="area-intro">
            Proudly serving Central Florida. Liam Pressure Cleaning provides
            exterior cleaning throughout Orlando and surrounding communities.
          </p>
          <a
            className="area-map-link"
            href={business.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={19} aria-hidden="true" />
            View location <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div>
          <ul className="city-grid">
            {business.areas.map((city, i) => (
              <li key={city}>
                <span className="city-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {city}
              </li>
            ))}
          </ul>
          <div className="area-question">
            <p>Not sure if we serve your area?</p>
            <a href={business.sms}>
              Text {business.phone}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
