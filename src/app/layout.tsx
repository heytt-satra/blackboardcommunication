import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F26C21",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Blackboard Communications | Brand Experience Agency",
  description:
    "We create experiences where people connect with brands the same way they connect with each other. 30+ years of expertise in experiential marketing, events, and brand activations.",
  keywords: [
    "experiential marketing",
    "brand experience",
    "events",
    "activations",
    "Mumbai",
    "brand agency",
  ],
  authors: [{ name: "Blackboard Communications LLP" }],
  openGraph: {
    title: "Blackboard Communications | Brand Experience Agency",
    description:
      "We create experiences where people connect with brands the same way they connect with each other.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
