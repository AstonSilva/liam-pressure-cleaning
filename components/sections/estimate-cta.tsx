import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
export function EstimateCTA() {
  return (
    <section className="container estimate-banner">
      <div>
        <p className="eyebrow">LET’S GIVE YOUR EXTERIOR A FRESH START</p>
        <h2>
          Ready for a<br />
          cleaner property?
        </h2>
        <p>Call, text, or request a free estimate today.</p>
      </div>
      <div className="banner-actions">
        <Button>Get a Free Estimate</Button>
        <a className="text-action" href={business.tel}>
          <Phone size={17} aria-hidden="true" />
          Call {business.phone}
        </a>
        <a className="text-action" href={business.sms}>
          <MessageCircle size={18} aria-hidden="true" />
          Text us
        </a>
      </div>
    </section>
  );
}
