import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google';


export const metadata: Metadata = {
  title: "Santos Populares de Lisboa 2026",
  description: "Descobre e planeia os teus eventos dos Santos Populares de Lisboa 2026 — arraiais, marchas e concertos por toda a cidade.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <meta name="apple-mobile-web-app-title" content="Santos Lisboa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-6JSFQPH1QW" />
      </body>
    </html>
  );
}
