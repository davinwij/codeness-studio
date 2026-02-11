import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeness.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Codeness Studio — Start Your Digital Culture with Us",
    template: "%s | Codeness Studio",
  },
  description:
    "Codeness Studio is an IT Consulting company specializing in Web Application Development, Microservices Architecture, and UI/UX Design. Your strategic digital partner for scalable solutions.",
  keywords: [
    "IT Consulting",
    "Web Development",
    "Microservices",
    "UI/UX Design",
    "Digital Transformation",
    "Codeness Studio",
    "AI Automation",
    "IT Consulting Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codeness Studio — Start Your Digital Culture with Us",
    description:
      "Your strategic digital partner for scalable Web Applications, Microservices Architecture, and World-Class UI/UX Design.",
    type: "website",
    url: siteUrl,
    siteName: "Codeness Studio",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
