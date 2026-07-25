import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mavera.example"),
  title: {
    default: "Mavera Business Group",
    template: "%s | Mavera Business Group"
  },
  description: "Mavera Business Group unites ambitious enterprises, strategic partnerships, and customer-first brands — including Mavera Coffee House.",
  applicationName: "Mavera Business Group",
  keywords: ["Mavera", "Mavera Business Group", "Mavera Coffee House", "Ethiopia", "business group", "partnerships"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mavera Business Group",
    title: "Mavera Business Group",
    description: "One group. Distinct experiences. Shared ambition."
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavera Business Group",
    description: "One group. Distinct experiences. Shared ambition."
  },
  icons: {
    icon: "/mavera-business-group.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FCB040",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
