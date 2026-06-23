# Eugenio Ciullo — Portfolio Digitale

Portfolio/vetrina premium per **Eugenio Ciullo**, Digital Marketer & Content Creator (Lil Manda).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Avvio rapido

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Personalizzazione

### Link WhatsApp e Calendly

Modifica `src/lib/constants.ts`:

- `SITE.whatsapp` — numero in formato internazionale senza `+` (es. `393331234567`)
- `SITE.consultationUrl` — link WhatsApp per consulenze 1to1

### Immagini e video

Sostituisci i placeholder in `public/images/` e `public/videos/`:

| File | Uso |
|------|-----|
| `hero-background.jpg` / `hero-poster.jpg` | Hero section |
| `hero-reel.mp4` | Video background hero |
| `zeroagency-logo.jpg` | Logo ZeroAgency |
| `healthysan-logo.jpg` | Logo HEALTHYSAN |
| ... | Altri loghi brand |
| `party-selfie360.jpg` | Eventi — Selfie 360 |
| `event-dj-setup.jpg` | Eventi — DJ setup |
| `event-pyrotechnics.jpg` | Eventi — Pirotecnica |

## Sezioni

1. **Hero** — Payoff e CTA
2. **Bio** — Chi sono + Bento Grid
3. **Brand** — Collaborazioni e case study
4. **Lanci da Zero** — Metriche PARISIO & ITTICO
5. **Servizi** — Bento Grid modulare
6. **Preventivo** — Form multi-step
7. **ChatBot** — Qualifica rapida → WhatsApp

## Build produzione

```bash
npm run build
npm start
```
