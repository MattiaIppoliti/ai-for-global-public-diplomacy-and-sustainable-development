import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider/next";
import localFont from "next/font/local";

import "./globals.css";

const uncutSans = localFont({
  src: "../fonts/UncutSans-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luiss Docs",
    template: "%s | Luiss Docs",
  },
  description: "Luiss documentation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${uncutSans.variable} flex min-h-screen flex-col`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
