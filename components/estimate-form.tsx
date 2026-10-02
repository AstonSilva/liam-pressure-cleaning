"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Check, Copy } from "lucide-react";
import { business, serviceOptions } from "@/lib/business";
import {
  createEstimateDraft,
  validateEstimate,
  type Estimate,
  type EstimateErrors,
} from "@/lib/estimate";
const emptyEstimate: Estimate = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  message: "",
};
export function EstimateForm() {
  const [values, setValues] = useState<Estimate>(emptyEstimate);
  const [errors, setErrors] = useState<EstimateErrors>({});
  const [draft, setDraft] = useState<ReturnType<
    typeof createEstimateDraft
  > | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const draftRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const selectService = (event: Event) => {
      const selected = (event as CustomEvent<string>).detail;
      const normalized =
        selected === "Pool Deck & Patio Cleaning"
          ? "Pool Deck / Patio Cleaning"
          : selected;
      if (normalized && serviceOptions.includes(normalized)) {
        setValues((prev) => ({ ...prev, service: normalized }));
        setErrors((prev) => ({ ...prev, service: undefined }));
        setCopyStatus("");
        setDraft(null);
      }
    };
    window.addEventListener("estimate-service", selectService);
    return () => window.removeEventListener("estimate-service", selectService);
  }, []);
  useEffect(() => {
    if (draft) draftRef.current?.focus();
  }, [draft]);
  function update(field: keyof Estimate, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setDraft(null);
    setCopyStatus("");
  }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEstimate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`estimate-${first}`)?.focus();
      return;
    }
    setDraft(createEstimateDraft(values));
  }
  const fieldProps = (name: keyof Estimate) => ({
    id: `estimate-${name}`,
    name,
    value: values[name],
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `error-${name}` : undefined,
  });
  const error = (name: keyof Estimate) =>
    errors[name] && (
      <span className="field-error" id={`error-${name}`}>
        {errors[name]}
      </span>
    );
  return (
    <form
      action={`mailto:${business.email}`}
      method="post"
      encType="text/plain"
      onSubmit={submit}
      className="estimate-form"
      noValidate
    >
      <div className="form-heading">
        <h3>Your property. Your free estimate.</h3>
        <p>Tell us a little about what you have in mind.</p>
      </div>
      <div className="form-grid">
        <label htmlFor="estimate-name">
          Name <span aria-hidden="true">*</span>
          <input
            {...fieldProps("name")}
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your full name"
            onChange={(e) => update("name", e.target.value)}
          />
          {error("name")}
        </label>
        <label htmlFor="estimate-phone">
          Phone <span aria-hidden="true">*</span>
          <input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={30}
            placeholder="(407) 555-0123"
            onChange={(e) => update("phone", e.target.value)}
          />
          {error("phone")}
        </label>
        <label htmlFor="estimate-email">
          Email <span className="optional">(optional)</span>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            onChange={(e) => update("email", e.target.value)}
          />
          {error("email")}
        </label>
        <label htmlFor="estimate-location">
          Property address or city <span aria-hidden="true">*</span>
          <input
            {...fieldProps("location")}
            autoComplete="street-address"
            required
            maxLength={200}
            placeholder="Where is your property?"
            onChange={(e) => update("location", e.target.value)}
          />
          {error("location")}
        </label>
        <label htmlFor="estimate-service" className="full-width">
          Service needed <span aria-hidden="true">*</span>
          <select
            {...fieldProps("service")}
            required
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {error("service")}
        </label>
        <label htmlFor="estimate-message" className="full-width">
          Message <span className="optional">(optional)</span>
          <textarea
            {...fieldProps("message")}
            rows={4}
            maxLength={2000}
            placeholder="Tell us about the surfaces you’d like cleaned…"
            onChange={(e) => update("message", e.target.value)}
          />
          {error("message")}
        </label>
      </div>
      <p className="form-note">
        Required fields are marked *. This form prepares an email. You’ll review
        and send it from your email app.
      </p>
      <button className="button button-primary form-submit" type="submit">
        Prepare estimate request <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="form-alternative">
        Prefer a quick text? <a href={business.sms}>Text {business.phone}</a>
      </p>
      {draft && (
        <div className="draft-panel" tabIndex={-1} ref={draftRef} role="status">
          <div className="draft-title">
            <Check size={21} />
            <h4>Your request is ready to send.</h4>
          </div>
          <p>
            Nothing has been sent yet. Open your email app, review the details,
            and press Send.
          </p>
          <a className="button button-primary" href={draft.mailto}>
            <Mail size={17} />
            Open email app
          </a>
          <button
            type="button"
            className="copy-button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(draft.body);
                setCopyStatus(
                  "Request copied. Paste it into your email or text message.",
                );
              } catch {
                setCopyStatus(
                  "Copy is unavailable. Select and copy the request below.",
                );
              }
            }}
          >
            <Copy size={16} />
            Copy request
          </button>
          <p className="copy-status">{copyStatus}</p>
          <details>
            <summary>Review your request</summary>
            <pre>{draft.body}</pre>
          </details>
        </div>
      )}
    </form>
  );
}
