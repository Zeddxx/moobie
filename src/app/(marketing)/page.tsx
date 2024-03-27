import MainWrapper from "@/components/containers/main-wrapper";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <section className="relative">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Icons.moobieIcon className="opacity-10 aspect-square h-[80dvw] max-w-96 max-h-96 w-full" />
      </div>
      <MainWrapper className="flex items-center justify-center px-4 h-[calc(100dvh-80px)]">
        <div className="text-center">
          <h1 className="font-logo text-[clamp(2.4rem,8vw,4.8rem)]">
            Welcome to Moobie
          </h1>
          <p className="text-center text-muted-foreground">
            Watch your favorite Korean Drama without any annoing ads and popups
            without any subscription.
          </p>
          <Button asChild className="w-full mt-4">
            <Link href="/home" title="Moobie Home">
              Watch KDrama?
            </Link>
          </Button>
        </div>
      </MainWrapper>
    </section>
  );
};
export default MarketingPage;
