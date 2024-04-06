import Footer from "@/components/footer";
import MainNavbar from "@/components/navbars/main-navbar";
import NavigateToTop from "@/components/shared/navigate-to-top";

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100dvh-80px)]">
      {/* <section className="w-full h-full"> */}
      <MainNavbar />
      {children}

      {/* MAIN FOOTER */}
      <footer>
        <Footer />
      </footer>

      {/* TO TOP BUTTON */}
      <NavigateToTop />
      {/* </section> */}
      {/* 
      <MobileMenu /> */}
    </main>
  );
}
