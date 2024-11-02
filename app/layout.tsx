import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { animeKeywords } from "@/lib/constants";
import NextTopLoader from "nextjs-toploader";

export const runtime = "edge";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Streemi - Watch Anime Online Free with No Ads",
    template: "%s - Streemi",
  },
  description: "Watch your favorite animes online for free with no ads",
  twitter: {
    card: "summary_large_image",
  },
  keywords: animeKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
        <Footer />
        <Analytics />
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-WK7FQR2HL1" />
    </html>
  );
}
