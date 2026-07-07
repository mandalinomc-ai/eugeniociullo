import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #050505, #141414)",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: 34,
            border: "2px solid rgba(163,255,18,0.22)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          <span style={{ color: "#ffffff" }}>E</span>
          <span style={{ color: "#a3ff12" }}>C</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
