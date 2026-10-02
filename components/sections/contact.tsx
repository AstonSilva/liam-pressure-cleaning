import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";
import { ResponsiveEstimateForm } from "@/components/responsive-estimate-form";
export function Contact() {
  return (
    <section
      className="section container contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-info">
        <p className="eyebrow">LET’S TALK</p>
        <h2 id="contact-title">
          Request a<br />
          free estimate.
        </h2>
        <p>Tell us about your property. We’ll take it from there.</p>
        <div className="contact-links">
          <a href={business.tel}>
            <Phone size={21} aria-hidden="true" />
            <span>
              <small>CALL US</small>
              {business.phone}
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={business.sms}>
            <MessageCircle size={21} aria-hidden="true" />
            <span>
              <small>TEXT US</small>Start a conversation
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="email-contact" href={`mailto:${business.email}`}>
            <Mail size={21} aria-hidden="true" />
            <span>
              <small>EMAIL US</small>
              {business.email}
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="hours">
          <h3>Business hours</h3>
          <p>Central Florida time · Eastern</p>
          <dl>
            {business.hours.map(({ day, time }) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <ResponsiveEstimateForm />
    </section>
  );
}
