import {
  ArrowUpRight,
  House,
  PanelsTopLeft,
  Route,
  Waves,
  Building2,
  Grid2X2,
  Fence,
  Triangle,
} from "lucide-react";
import { services } from "@/lib/business";
import { ServiceLink } from "@/components/service-link";
const icons = [
  Triangle,
  House,
  PanelsTopLeft,
  Route,
  Fence,
  Waves,
  Grid2X2,
  Building2,
];
export function Services() {
  return (
    <section
      id="services"
      className="section container"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR SERVICES</p>
          <h2 id="services-title">
            Exterior cleaning.
            <br />
            Done right.
          </h2>
        </div>
        <p>
          From your front walkway to your favorite outdoor space. A cleaner
          exterior starts with the right service.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, i) => {
          const Icon = icons[i];
          return (
            <ServiceLink service={service.name} key={service.name}>
              <div className="service-top">
                <Icon size={27} strokeWidth={1.35} aria-hidden="true" />
                <span className="service-number">0{i + 1}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="service-link">
                Explore your options{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </ServiceLink>
          );
        })}
      </div>
      <div className="section-footnote">
        <p>One property. Plenty of possibilities.</p>
        <a className="text-action" href="#contact">
          Tell us what you need cleaned{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
