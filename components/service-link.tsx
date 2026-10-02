"use client";
import type { ReactNode } from "react";
export function ServiceLink({
  service,
  children,
}: {
  service: string;
  children: ReactNode;
}) {
  return (
    <a
      className="service-card"
      href="#contact"
      aria-label={`Request a free estimate for ${service}`}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("estimate-service", { detail: service }),
        )
      }
    >
      {children}
    </a>
  );
}
