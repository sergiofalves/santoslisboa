import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santos Lisboa",
  description: "Santos Lisboa",
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
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  );
}
