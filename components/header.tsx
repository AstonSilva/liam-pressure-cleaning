"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, navigation } from "@/lib/business";
import { Logo } from "./logo";
import { Button } from "./ui/button";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
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
  useEffect(() => {
    const headerElement = header.current;
    if (!headerElement) return;

    const getHeaderOffset = () =>
      headerElement.getBoundingClientRect().height +
      (Number.parseFloat(window.getComputedStyle(headerElement).top) || 0);
    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${getHeaderOffset()}px`,
      );
    };
    const prefersReducedMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollToHash = (hash: string, smooth: boolean) => {
      if (!hash || hash === "#") return;
      const target = document.getElementById(
        decodeURIComponent(hash.slice(1)),
      );
      if (!target) return;
      const headerHeight = getHeaderOffset();
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, targetTop - headerHeight),
        behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
      });
    };
    const scheduleScroll = (
      hash: string,
      { updateHistory = false, smooth = false } = {},
    ) => {
      setOpen(false);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          updateHeaderHeight();
          if (updateHistory && window.location.hash !== hash) {
            window.history.pushState(null, "", hash);
          }
          scrollToHash(hash, smooth);
        });
      });
    };
    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.classList.contains("skip-link") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      )
        return;
      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      )
        return;
      event.preventDefault();
      scheduleScroll(url.hash, { updateHistory: true, smooth: true });
    };
    const handleHashChange = () =>
      scheduleScroll(window.location.hash, { smooth: false });
    const correctInitialHash = () => {
      if (window.location.hash)
        scheduleScroll(window.location.hash, { smooth: false });
    };

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(headerElement);
    updateHeaderHeight();
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("load", correctInitialHash);
    window.addEventListener("resize", updateHeaderHeight);
    correctInitialHash();
    document.fonts?.ready.then(correctInitialHash);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("load", correctInitialHash);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);
  return (
    <>
      <header
        ref={header}
        className={`site-header${open ? " menu-open" : ""}`}
      >
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
