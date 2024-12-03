import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://macroware.vercel.app'),
  title: "Macroware - Digital Innovation Agency",
  description: "We design and develop custom digital products that capture your brand's essence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Macroware - Digital Innovation Agency",
    description: "We design and develop custom digital products that capture your brand's essence.",
    url: "https://macroware.vercel.app",
    siteName: "Macroware",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
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
  );
}
