import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrismCV — AI resume analysis for ambitious tech careers",
  description: "AI-powered CV analysis for IT professionals. Find the signals holding you back and improve them before you apply.",
  openGraph: {
    title: "PrismCV — AI resume analysis",
    description: "Make your CV impossible to overlook.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
