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

export const metadata: Metadata = {
  title: "Codeness Studio — Start Your Digital Culture with Us",
  description:
    "Codeness Studio is an IT Consulting company specializing in Web Application Development, Microservices Architecture, and UI/UX Design. Your strategic digital partner for scalable solutions.",
  keywords: [
    "IT Consulting",
    "Web Development",
    "Microservices",
    "UI/UX Design",
    "Digital Transformation",
    "Codeness Studio",
  ],
  openGraph: {
    title: "Codeness Studio — Start Your Digital Culture with Us",
    description:
      "Your strategic digital partner for scalable Web Applications, Microservices Architecture, and World-Class UI/UX Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
