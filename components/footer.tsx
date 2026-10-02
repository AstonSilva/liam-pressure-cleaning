import { Phone, ArrowUpRight } from "lucide-react";
import { business, navigation } from "@/lib/business";
import { Logo } from "./logo";
import { Button } from "./ui/button";
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Logo />
              <h3>Liam Pressure Cleaning LLC</h3>
              <p>
                Professional pressure cleaning.
                <br />
                Serving Central Florida.
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <h4>Explore</h4>
              {navigation.map(([title, href]) => (
                <a key={title} href={href}>
                  {title}
                </a>
              ))}
            </nav>
            <div>
              <h4>Stay connected</h4>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight size={14} />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook <ArrowUpRight size={14} />
              </a>
              <a href={business.tel}>{business.phone}</a>
              <a className="footer-email" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </div>
            <div className="footer-cta">
              <h4>A fresh start awaits.</h4>
              <p>
                Monday–Saturday
                <br />
                8:00 AM–6:00 PM
                <br />
                Sunday: Closed
              </p>
              <Button />
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Liam Pressure Cleaning LLC. All
              rights reserved.
            </p>
            <div>
              {/* Replace request-by-email links with approved policy pages when supplied. */}
              <a
                href={`mailto:${business.email}?subject=Request%20for%20Privacy%20Policy`}
                aria-label="Request privacy policy by email"
              >
                Privacy Policy
              </a>
              <a
                href={`mailto:${business.email}?subject=Request%20for%20Service%20Terms`}
                aria-label="Request service terms by email"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="mobile-cta" aria-label="Quick contact">
        <a href={business.tel}>
          <Phone size={17} aria-hidden="true" />
          Call now
        </a>
        <a href="#contact">
          Free estimate <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
