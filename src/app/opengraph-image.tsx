import { ImageResponse } from "next/og";

export const alt = "Raihan Nur Ramadhan Sundana, Software Developer and Cybersecurity portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#111318",
        color: "#edf1f7",
        padding: "72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#8eaeff", fontSize: 28 }}>
        Computer Engineering / Software Development / Cybersecurity
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", maxWidth: 980, fontSize: 78, fontWeight: 700, lineHeight: 1.02 }}>
          Raihan Nur Ramadhan Sundana
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#abb6c5" }}>
          Full stack experience and malware-analysis research
        </div>
      </div>
    </div>,
    size,
  );
}
