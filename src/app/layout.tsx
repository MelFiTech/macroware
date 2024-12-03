import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Macroware - Digital Innovation Agency",
  description: "We design and develop custom digital products that capture your brand's essence.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Macroware - Digital Innovation Agency",
    description: "We design and develop custom digital products that capture your brand's essence.",
    url: "https://macroware.com",
    siteName: "Macroware",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Macroware Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macroware - Digital Innovation Agency",
    description: "We design and develop custom digital products that capture your brand's essence.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHat.className}>{children}</body>
    </html>
  )
}
