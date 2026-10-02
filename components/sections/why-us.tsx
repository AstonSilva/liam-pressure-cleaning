import {
  MapPin,
  House,
  Layers,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { business } from "@/lib/business";
export function WhyUs() {
  const benefits = [
    {
      Icon: MapPin,
      title: "Local to your community.",
      text: "Exterior cleaning throughout Orlando and surrounding Central Florida communities.",
    },
    {
      Icon: House,
      title: "Homes and businesses.",
      text: "Residential and commercial service, with your property’s needs at the center.",
    },
    {
      Icon: Layers,
      title: "More of your exterior.",
      text: "Roofs, driveways, patios, pool decks, gutters, and the spaces in between.",
    },
    {
      Icon: MessageCircle,
      title: "A direct conversation.",
      text: "Call or text Liam Pressure Cleaning to discuss your property and request an estimate.",
    },
  ];
  return (
    <section className="section container why-section">
      <div className="why-intro">
        <p className="eyebrow">THE LIAM APPROACH</p>
        <h2>
          A cleaner property
          <br />
          starts here.
        </h2>
        <p>
          Good things begin at the front door. Give your exterior the attention
          it deserves.
        </p>
        <a href={business.sms} className="text-action">
          Let’s talk about your property{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="benefits">
        {benefits.map(({ Icon, title, text }) => (
          <article key={title} className="benefit">
            <Icon size={25} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
