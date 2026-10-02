"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { EstimateForm } from "./estimate-form";

const mobileQuery = "(max-width: 767px)";
function subscribeToViewport(change: () => void) {
  const media = window.matchMedia(mobileQuery);
  media.addEventListener("change", change);
  return () => media.removeEventListener("change", change);
}

export function ResponsiveEstimateForm() {
  const mobile = useSyncExternalStore(
    subscribeToViewport,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const unlock = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!mobile) return;
    const panel = dialog.current;
    if (!panel) return;

    const updateViewport = () => {
      const viewport = window.visualViewport;
      panel.style.setProperty("--estimate-viewport-height", `${viewport?.height ?? window.innerHeight}px`);
      panel.style.setProperty("--estimate-viewport-top", `${viewport?.offsetTop ?? 0}px`);
    };
    const restorePage = () => {
      unlock.current?.();
      unlock.current = null;
      opener.current?.focus({ preventScroll: true });
    };
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(panel.querySelectorAll<HTMLElement>(
        'button, input, select, textarea, a[href], summary, [tabindex]:not([tabindex="-1"])',
      )).filter((element) =>
        !element.matches(":disabled, [hidden]") && element.getClientRects().length > 0,
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !controls.includes(active as HTMLElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (active === last || !controls.includes(active as HTMLElement))) {
        event.preventDefault();
        first?.focus();
      }
    };
    const open = (event: Event) => {
      if (panel.open) return;
      opener.current = (event as CustomEvent<HTMLElement>).detail;
      const scrollY = window.scrollY;
      const body = document.body;
      const saved = {
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
        overflow: body.style.overflow,
      };
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
      unlock.current = () => {
        Object.assign(body.style, saved);
        window.scrollTo({ top: scrollY, behavior: "instant" });
      };
      updateViewport();
      panel.showModal();
      panel.querySelector(".estimate-dialog-content")?.scrollTo({ top: 0 });
      heading.current?.focus({ preventScroll: true });
    };

    updateViewport();
    window.addEventListener("estimate-open", open);
    panel.addEventListener("close", restorePage);
    panel.addEventListener("keydown", trapFocus);
    window.visualViewport?.addEventListener("resize", updateViewport);
    window.visualViewport?.addEventListener("scroll", updateViewport);
    return () => {
      window.removeEventListener("estimate-open", open);
      panel.removeEventListener("close", restorePage);
      panel.removeEventListener("keydown", trapFocus);
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
      if (panel.open) panel.close();
      restorePage();
    };
  }, [mobile]);

  if (!mobile) return <EstimateForm />;

  return (
    <dialog
      ref={dialog}
      className="estimate-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimate-dialog-title"
      aria-describedby="estimate-dialog-description"
    >
      <div className="estimate-dialog-header">
        <p className="eyebrow">LET’S TALK</p>
        <button
          className="estimate-dialog-close"
          type="button"
          aria-label="Close estimate form"
          onClick={() => dialog.current?.close()}
        >
          <X size={21} aria-hidden="true" />
        </button>
        <h2 id="estimate-dialog-title" tabIndex={-1} ref={heading}>
          Tell us about your property.
        </h2>
        <p id="estimate-dialog-description">
          A few details are all we need to get started.
        </p>
      </div>
      <div className="estimate-dialog-content">
        <EstimateForm modal />
      </div>
    </dialog>
  );
}
