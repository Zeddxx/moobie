import CardWrapper from "@/components/card-wrapper";
import MainWrapper from "@/components/containers/main-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moobie | Login.",
  description:
    "Login to moobie to unlocks new features which unauthenticated user don't have.",
  openGraph: {
    images: ["/assets/logos/moobie-dark.svg"],
  },
};

const LoginPage = () => {
  return (
    <section>
      <MainWrapper className="px-4 h-[calc(100dvh-80px)]">
        <CardWrapper
          image="/assets/images/welcome.png"
          heading="Welcome!"
          social={true}
          description="Watch your favorite Korean Dramas or movies without any ads."
        />
      </MainWrapper>
    </section>
  );
};
export default LoginPage;
