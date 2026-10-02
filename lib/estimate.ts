import { business, serviceOptions } from "./business";
export type Estimate = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
};
export type EstimateErrors = Partial<Record<keyof Estimate, string>>;

export function normalizeUsPhoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1")
    ? digits.slice(1)
    : digits;
}

export function formatUsPhone(value: string) {
  const rawDigits = value.replace(/\D/g, "");
  const digits = normalizeUsPhoneDigits(value);
  const national = digits.slice(0, 10);
  const extra =
    rawDigits.length === 11 && rawDigits.startsWith("1")
      ? ""
      : digits.slice(10);

  let formatted = national;
  if (national.length === 2) formatted = `(${national}`;
  if (national.length === 3) formatted = `(${national})`;
  if (national.length > 3 && national.length <= 6)
    formatted = `(${national.slice(0, 3)}) ${national.slice(3)}`;
  if (national.length > 6)
    formatted = `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;

  return extra ? `${formatted} ${extra}` : formatted;
}

export function validateEstimateField(
  field: keyof Estimate,
  values: Estimate,
): string | undefined {
  switch (field) {
    case "name":
      return !values.name.trim() || values.name.length > 100
        ? "Enter your name (up to 100 characters)."
        : undefined;
    case "phone": {
      const digits = normalizeUsPhoneDigits(values.phone);
      return !/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)
        ? "Enter a valid 10-digit US phone number."
        : undefined;
    }
    case "email":
      return values.email &&
        (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
          values.email.length > 254)
        ? "Enter a valid email address."
        : undefined;
    case "location":
      return !values.location.trim() || values.location.length > 200
        ? "Enter your property address or city."
        : undefined;
    case "service":
      return !serviceOptions.includes(values.service)
        ? "Choose a service."
        : undefined;
    case "message":
      return values.message.length > 2000
        ? "Keep your message under 2,000 characters."
        : undefined;
  }
}

export function validateEstimate(values: Estimate): EstimateErrors {
  const errors: EstimateErrors = {};
  (Object.keys(values) as (keyof Estimate)[]).forEach((field) => {
    const error = validateEstimateField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}
export function createEstimateDraft(values: Estimate) {
  const body = `Free estimate request\n\nName: ${values.name.trim()}\nPhone: ${values.phone.trim()}\nEmail: ${values.email.trim() || "Not provided"}\nProperty address or city: ${values.location.trim()}\nService: ${values.service}\n\n${values.message.trim()}`;
  return {
    body,
    mailto: `mailto:${business.email}?subject=${encodeURIComponent(`Free estimate — ${values.service}`)}&body=${encodeURIComponent(body)}`,
  };
}
// Integration boundary: replace draft preparation in EstimateForm with an async
// server action or POST handler. Reuse validateEstimate on the server, keep keys
// server-only, and only confirm delivery after your provider accepts the request.
