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
export function validateEstimate(values: Estimate): EstimateErrors {
  const errors: EstimateErrors = {};
  if (!values.name.trim() || values.name.length > 100)
    errors.name = "Please enter your name (up to 100 characters).";
  const digits = values.phone.replace(/\D/g, "");
  if (
    digits.length < 10 ||
    digits.length > 15 ||
    !/^[\d\s()+.\-]+$/.test(values.phone)
  )
    errors.phone = "Please enter a valid phone number, including area code.";
  if (
    values.email &&
    (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
      values.email.length > 254)
  )
    errors.email = "Please enter a valid email address, or leave this blank.";
  if (!values.location.trim() || values.location.length > 200)
    errors.location = "Please enter your property address or city.";
  if (!serviceOptions.includes(values.service))
    errors.service = "Please choose a service.";
  if (values.message.length > 2000)
    errors.message = "Please keep your message under 2,000 characters.";
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
