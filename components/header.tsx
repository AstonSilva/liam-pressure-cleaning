"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, navigation } from "@/lib/business";
import { Logo } from "./logo";
import { Button } from "./ui/button";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <header className={`site-header${open ? " menu-open" : ""}`}>
        <div className="container nav-shell">
        <a
          className="brand"
          href="#home"
          aria-label="Liam Pressure Cleaning home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([name, href]) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-phone"
            href={business.tel}
            aria-label={`Call ${business.phone}`}
          >
            <Phone size={17} aria-hidden="true" />
            <span>{business.phone}</span>
          </a>
          <Button />
          <button
            className="menu-toggle"
            type="button"
            ref={toggle}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        </div>
      </header>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map(([name, href]) => (
          <a key={name} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a href={business.sms}>Text {business.phone}</a>
      </nav>
    </>
  );
}
