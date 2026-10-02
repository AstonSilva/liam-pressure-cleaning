import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function Button({
  href = "#contact",
  children = "Get a Free Estimate",
  secondary = false,
  arrow = true,
}: {
  href?: string;
  children?: ReactNode;
  secondary?: boolean;
  arrow?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
      href={href}
    >
      {children}
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
    </a>
  );
}
