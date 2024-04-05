import LoginForm from "@/components/auth/login-form";
import CardWrapper from "@/components/card-wrapper";
import MainWrapper from "@/components/containers/main-wrapper";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section>
      <MainWrapper className="px-4 h-[calc(100dvh-80px)]">
        <CardWrapper
          image="/assets/images/welcome.png"
          heading="Welcome!"
          description="Watch your favorite Korean Dramas or movies without any ads."
        >
          <LoginForm />
        </CardWrapper>
      </MainWrapper>
    </section>
  );
};
export default LoginPage;
