import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LLM Universe — Your Interactive Guide to Large Language Models",
  description:
    "A visual, interactive guide to understanding Large Language Models from the ground up. Curated resources, interactive tools, and structured learning paths.",
  openGraph: {
    title: "LLM Universe — Your Interactive Guide to Large Language Models",
    description:
      "A visual, interactive guide to understanding Large Language Models from the ground up.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Universe",
    description:
      "Your visual, interactive guide to understanding Large Language Models from the ground up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="star-field" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
