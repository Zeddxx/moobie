import Footer from "@/components/footer";
import MainNavbar from "@/components/navbars/main-navbar";
import MobileMenu from "@/components/navbars/mobile-menu";
import NavigateToTop from "@/components/shared/navigate-to-top";

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100dvh-80px)]">

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-20">
        <MainNavbar />
      </header>

    
      {children}
      {/* MAIN FOOTER */}
      <footer>
        <Footer />
      </footer>

      {/* TO TOP BUTTON */}
      <NavigateToTop />
      
      <MobileMenu />
    </main>
  );
}
