import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sushil Parajuli - Senior Software Engineer (Full Stack)",
  description:
    "Senior Software Engineer (Full Stack) with 10+ years of experience specializing in React, Vue.js, Node.js, GoLang, and modern web technologies. Building scalable applications and exceptional digital experiences.",
  keywords: [
    "Software Engineer",
    "Frontend",
    "Full Stack",
    "FullStack",
    "React",
    "Vue.js",
    "Node.js",
    "GoLang",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Sushil Parajuli",
    "Dubai",
    "UAE",
  ],
  authors: [{ name: "Sushil Parajuli" }],
  creator: "Sushil Parajuli",
  openGraph: {
    title: "Sushil Parajuli - Senior Software Engineer (Full Stack)",
    description:
      "Senior Software Engineer (Full Stack) specializing in modern web technologies with 10+ years of experience",
    url: "https://sushilparajuli.com",
    siteName: "Sushil Parajuli's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Parajuli - Senior Software Engineer (Full Stack)",
    description:
      "Senior Software Engineer (Full Stack) - 10+ years of experience",
    creator: "@sushilparajuli",
  },
  viewport: "width=device-width, initial-scale=1",
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
