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
            fontSize: 108,
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
            top: 34,
            right: 34,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c8ff5a, #a3ff12)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
