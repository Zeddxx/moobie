import MainWrapper from "@/components/containers/main-wrapper";
import Footer from "@/components/footer";
import BackButton from "@/components/shared/back-button";
import TooltipContainer from "@/components/shared/tooltip-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Moobie.",
  description:
    "Login or Register to moobie to watch your favorites korean shows for free.",
  keywords: [
    "moobie login",
    "moobie authenticate",
    "login to moobie",
    "moobie",
  ],
  appleWebApp: {
    capable: true,
    startupImage: "/assets/logos/moobie-light.svg",
    title: "Moobie | Watch Korean Drama For Free.",
  },
  applicationName: "Moobie",
  category: "Korean Drama",
  creator: "Sahil Ahmed",
  abstract:
    "Moobie is an korean drama streaming web application where you can watch any Korean Drama without any ads and popups.",
  generator: "NextJS+ReactJS+Express+Cheerio+Axios",
  appLinks: {
    web: {
      url: "https://moobie.vercel.app/",
      should_fallback: true,
    },
    windows_universal: {
      url: "https://moobie.vercel.app/",
      app_name: "Moobie",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0">
        <nav className="h-16 w-full flex items-center">
          <MainWrapper className="px-4">
            <BackButton />
          </MainWrapper>
        </nav>
      </header>
      {children}

      <footer>
        <Footer />
      </footer>
    </>
  );
}
