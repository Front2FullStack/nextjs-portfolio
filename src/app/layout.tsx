import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sushil Parajuli - Senior Full Stack Engineer | Generative AI",
  description:
    "Senior Full Stack Engineer with 10+ years architecting high-scale, resilient platforms across FinTech, Crypto, and E-commerce. Expert in React, Next.js, Node.js, Python, Golang, Apache Kafka, Generative AI (Claude API, MCP, GraphRAG), and real-time data visualization.",
  keywords: [
    "Senior Full Stack Engineer",
    "Generative AI",
    "LLMs",
    "Model Context Protocol",
    "Claude API",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "Python",
    "Golang",
    "Apache Kafka",
    "Distributed Systems",
    "TradingView",
    "ECharts",
    "Sushil Parajuli",
    "Dubai",
    "UAE",
  ],
  authors: [{ name: "Sushil Parajuli" }],
  creator: "Sushil Parajuli",
  openGraph: {
    title: "Sushil Parajuli - Senior Full Stack Engineer | Generative AI",
    description:
      "Senior Full Stack Engineer specializing in Generative AI, Distributed Systems, Next.js, Node.js, Python, Golang with 10+ years of experience.",
    url: "https://sushilparajuli.com",
    siteName: "Sushil Parajuli's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Parajuli - Senior Full Stack Engineer | Generative AI",
    description:
      "Senior Full Stack Engineer with 10+ years architecting high-scale platforms and AI systems.",
    creator: "@sushilparajuli",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        {/* ThemeProvider from next-themes will manage adding/removing the 'dark' class on <html> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
