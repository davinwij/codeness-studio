import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
