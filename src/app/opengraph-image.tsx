import { ImageResponse } from "next/og";

export const alt = "Eugenio Ciullo | Digital Marketer & Content Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #0a0a0a 45%, #111111 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(163,255,18,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(163,255,18,0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.14)",
            filter: "blur(90px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 42,
            padding: "56px 72px",
            borderRadius: 32,
            border: "1px solid rgba(163,255,18,0.18)",
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 0 80px rgba(163,255,18,0.08)",
          }}
        >
          <div
            style={{
              width: 148,
              height: 148,
              borderRadius: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, #050505, #141414)",
              border: "1px solid rgba(163,255,18,0.22)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: 92,
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1,
                marginTop: -8,
              }}
            >
              E
            </div>
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c8ff5a, #a3ff12)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: -3,
                  lineHeight: 1,
                }}
              >
                EUGENIO
              </div>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#a3ff12",
                  marginTop: 18,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#a3ff12",
                letterSpacing: 8,
                textTransform: "uppercase",
              }}
            >
              Digital Marketer
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#a1a1aa",
                maxWidth: 620,
                lineHeight: 1.45,
              }}
            >
              Strategia, Content, ADS &amp; Siti Web Premium
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
