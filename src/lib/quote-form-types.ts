export type QuoteFormData = {
  objectives: string[];
  budget: string;
  timeline: string;
  paymentPlan: string;
  details: string;
  socialLinks: string;
  name: string;
  email: string;
  phone: string;
};

export const QUOTE_FORM_STORAGE_KEY = "ec-quote-form-draft-v1";

export const EMPTY_QUOTE_FORM: QuoteFormData = {
  objectives: [],
  budget: "",
  timeline: "",
  paymentPlan: "",
  details: "",
  socialLinks: "",
  name: "",
  email: "",
  phone: "",
};
