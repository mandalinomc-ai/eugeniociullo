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
            position: "absolute",
            width: 118,
            height: 100,
            borderRadius: "50% 50% 46% 46%",
            border: "3px solid rgba(163,255,18,0.55)",
            background: "rgba(163,255,18,0.12)",
            top: 34,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 3,
            height: 76,
            background: "rgba(163,255,18,0.35)",
            top: 46,
          }}
        />
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            position: "relative",
            zIndex: 2,
          }}
        >
          E
        </div>
      </div>
    ),
    { ...size }
  );
}
