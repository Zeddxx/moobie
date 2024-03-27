import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbars/main-navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const logoFont = localFont({
  src: "../../public/fonts/logo/Logo_Semibold.ttf",
  variable: "--font-logo",
  weight: "600",
});
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
    <html lang="en">
      <body className={`${inter.className} ${logoFont.variable}`}>
        <MainNavbar />
        <main className="min-h-[calc(100dvh-80px)]">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
