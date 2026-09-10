import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/documents/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Raihan-Nur-Ramadhan-Sundana-Resume.pdf"',
          },
        ],
      },
      { source: "/(.*)", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
