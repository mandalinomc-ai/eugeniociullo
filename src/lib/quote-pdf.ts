import { SITE } from "@/lib/constants";
import type { QuoteFormData } from "@/lib/quote-form-types";

type JsPDFInstance = {
  internal: { pageSize: { getWidth: () => number } };
  setFillColor: (...args: number[]) => void;
  setTextColor: (...args: number[]) => void;
  setFont: (family: string, style: string) => void;
  setFontSize: (size: number) => void;
  setDrawColor: (...args: number[]) => void;
  rect: (...args: Array<number | string>) => void;
  roundedRect: (...args: Array<number | string>) => void;
  line: (...args: number[]) => void;
  text: (text: string | string[], x: number, y: number) => void;
  splitTextToSize: (text: string, maxWidth: number) => string[];
  save: (filename: string) => void;
};

type JsPDFConstructor = new (options?: { unit?: string; format?: string }) => JsPDFInstance;

declare global {
  interface Window {
    jspdf?: { jsPDF: JsPDFConstructor };
  }
}

const JSPDF_CDN = "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js";

function loadJsPDF(): Promise<JsPDFConstructor> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("PDF disponibile solo nel browser"));
  }

  if (window.jspdf?.jsPDF) {
    return Promise.resolve(window.jspdf.jsPDF);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-jspdf]");
    if (existing) {
      existing.addEventListener("load", () => {
        if (window.jspdf?.jsPDF) resolve(window.jspdf.jsPDF);
        else reject(new Error("jsPDF non disponibile"));
      });
      existing.addEventListener("error", () => reject(new Error("Caricamento jsPDF fallito")));
      return;
    }

    const script = document.createElement("script");
    script.src = JSPDF_CDN;
    script.async = true;
    script.dataset.jspdf = "true";
    script.onload = () => {
      if (window.jspdf?.jsPDF) resolve(window.jspdf.jsPDF);
      else reject(new Error("jsPDF non disponibile"));
    };
    script.onerror = () => reject(new Error("Caricamento jsPDF fallito"));
    document.head.appendChild(script);
  });
}

function line(
  doc: JsPDFInstance,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize = 10
): number {
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * (fontSize * 0.45) + 4;
}

export async function exportQuotePdf(form: QuoteFormData): Promise<void> {
  const jsPDF = await loadJsPDF();
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 18;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, pageWidth, 42, "F");
  doc.setFillColor(163, 255, 18);
  doc.rect(0, 40, pageWidth, 2, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Eugenio Ciullo", margin, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  doc.text("Digital Marketer & Content Creator", margin, 26);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(163, 255, 18);
  doc.text("Proposta Preliminare / Scheda Cliente", margin, 35);

  y = 54;
  doc.setTextColor(120, 120, 120);
  y = line(
    doc,
    `Generato il ${new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date())}`,
    margin,
    y,
    contentWidth,
    9
  );

  const section = (title: string) => {
    y += 4;
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(margin, y - 4, contentWidth, 8, 1, 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    doc.text(title, margin + 3, y + 1);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
  };

  const field = (label: string, value: string) => {
    if (!value?.trim()) return;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(label, margin, y);
    y += 5;
    y = line(doc, value, margin, y, contentWidth, 10);
    y += 2;
  };

  section("Dati cliente");
  field("Nome", form.name || "—");
  field("Email", form.email || "—");
  field("Telefono", form.phone || "—");
  field("Social / Link", form.socialLinks || "—");

  section("Servizi richiesti");
  const services =
    form.objectives.length > 0
      ? form.objectives.map((s) => `• ${s}`).join("\n")
      : "Nessun servizio selezionato";
  y = line(doc, services, margin, y, contentWidth, 10);

  section("Budget e tempistiche");
  field("Budget orientativo", form.budget || "—");
  field("Timeline", form.timeline || "—");
  field("Metodo di pagamento", form.paymentPlan || "—");

  section("Note e richieste");
  y = line(doc, form.details?.trim() || "Nessuna nota aggiuntiva.", margin, y, contentWidth, 10);

  y += 8;
  doc.setDrawColor(220, 220, 220);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(130, 130, 130);
  y = line(
    doc,
    "Documento preliminare a scopo informativo. I valori economici e le tempistiche definitive verranno concordati in fase di consulenza.",
    margin,
    y,
    contentWidth,
    8
  );

  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  doc.text(`WhatsApp: ${SITE.whatsappDisplay}  ·  Email: ${SITE.email}`, margin, y);

  const safeName = (form.name || "Cliente")
    .trim()
    .replace(/[^\w\s-]/gi, "")
    .replace(/\s+/g, "-")
    .slice(0, 40);
  const dateStamp = new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replace(/\//g, "-");

  doc.save(`Proposta-${safeName || "Cliente"}-${dateStamp}.pdf`);
}
