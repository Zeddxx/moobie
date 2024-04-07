import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { ContextProvider } from "@/contexts/utilities";

// Inter as base font
const inter = Inter({
  subsets: ["latin"],
});

// Custom local font for professionalism.
const logoFont = localFont({
  src: [
    {
      path: "../../public/fonts/logo/Logo_Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/regular-font.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-logo",
});

// Generating Parent metadata using inbuilt nextjs function.
export const metadata: Metadata = {
  title: "Moobie | Watch Movies Online.",
  description: "Browse a different collection of movies only on Moobie.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/logos/moobie-light-icon.svg",
        href: "/assets/logos/moobie-light-icon.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/logos/moobie-dark-icon.svg",
        href: "/assets/logos/moobie-dark-icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${logoFont.variable} antialiased`}
      >
        <ContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
