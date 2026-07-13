import {
  EMPTY_QUOTE_FORM,
  QUOTE_FORM_STORAGE_KEY,
  type QuoteFormData,
} from "@/lib/quote-form-types";

type StoredDraft = QuoteFormData & {
  savedAt: string;
  step?: number;
};

export function loadQuoteDraft(): StoredDraft | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(QUOTE_FORM_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<StoredDraft>;
    return {
      ...EMPTY_QUOTE_FORM,
      ...parsed,
      objectives: Array.isArray(parsed.objectives) ? parsed.objectives : [],
      savedAt: parsed.savedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveQuoteDraft(form: QuoteFormData, step?: number): string {
  const savedAt = new Date().toISOString();
  const payload: StoredDraft = { ...form, savedAt, step };
  localStorage.setItem(QUOTE_FORM_STORAGE_KEY, JSON.stringify(payload));
  return savedAt;
}

export function clearQuoteDraft(): void {
  localStorage.removeItem(QUOTE_FORM_STORAGE_KEY);
}

export function formatSavedAt(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}
