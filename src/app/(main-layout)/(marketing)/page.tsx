import MainWrapper from "@/components/containers/main-wrapper";
import { Icons } from "@/components/icons";
import MainNavbar from "@/components/navbars/main-navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import LogsModal from "@/components/shared/logs-modal";
import TooltipContainer from "@/components/shared/tooltip-container";

const MarketingPage = () => {
  return (
    <section className="">
      <MainWrapper className="flex items-center relative justify-center px-4 h-[calc(100dvh-180px)]">
        <div className="text-center">
          <h1 className="font-logo font-semibold text-[clamp(2.4rem,8vw,4.8rem)]">
            Welcome to Moobie Watch.
          </h1>
          <p className="text-center text-pretty max-w-2xl mx-auto text-muted-foreground">
            Enjoy your favorite Korean dramas without any annoying ads or
            pop-ups, and all without requiring a subscription.
          </p>
          <TooltipContainer align="center" content="Navigate Moobie Home?">
          <Button asChild className="w-full max-w-xl mx-auto mt-4">
            <Link prefetch={false} href="/home">
              Watch KDrama?
            </Link>
          </Button>
          </TooltipContainer>
        </div>
      </MainWrapper>

      <MainWrapper className="px-4 my-5">
        <h2 className="h2 mb-4 text-center">Aesthetic UI/UX.</h2>
        <div className="w-full flex items-center justify-center">
          <div className="border dark:border-muted aspect-video rounded-md overflow-hidden max-w-7xl w-full h-[50dvw] max-h-[40rem] min-h-72">
            <div className="">
              <MainNavbar type="INNER" />
            </div>
            <div className="h-[calc(100%-80px)] relative w-full">
              <div className="w-full h-[75%] grid place-items-center min-h-32 max-h-96 bg-muted">
                <Icons.moobieIconMobile className="sm:w-44 w-24 opacity-15 dark:invert sm:h-44 h-24" />
              </div>

              <h2 className="text-[clamp(.8rem,8vw,1.5rem)] px-4 my-3 font-logo h3">
                Recently Updated.
              </h2>
              <div className="flex px-4 flex-nowrap gap-x-4 w-full overflow-hidden">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    className="bg-muted aspect-[10/13] rounded-lg grid place-items-center w-48 flex-shrink-0"
                    key={index}
                  >
                    <Icons.moobieIconMobile className="opacity-15 dark:invert" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>

      <MainWrapper className="px-4 my-24 space-y-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 max-w-7xl mx-auto">
          <div className="">
            <div className="relative mx-auto lg:w-80 sm:h-64 sm:w-64 h-52 w-52 lg:h-80">
              <Image
                draggable={false}
                src="/assets/images/watch.png"
                alt="Cat binj watching drama"
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-center lg:text-start">
              <h2 className="h2">Bing Watch your favorite Dramas.</h2>
              <p className="text-muted-foreground">
                Feel free to enjoy your favorite drama without interruptions
                from ads or pop-ups. Please note that as this project was
                developed by a single developer, there may be occasional bugs
                and errors. Your understanding is appreciated as we strive to
                enhance your viewing experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 max-w-7xl mx-auto">
          <div className="">
            <div className="relative mx-auto lg:w-80 sm:h-64 sm:w-64 h-52 w-52 lg:h-80">
              <Image
                draggable={false}
                src="/assets/images/waiting.png"
                alt="waiting girl in rain"
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="flex items-center order-none lg:order-first">
            <div className="text-center lg:text-start">
              <h2 className="h2">Wait for nothing, Stay updated!</h2>
              <p className="text-muted-foreground">
                Rest assured that Moobie will always provide you with the latest
                dramas and movies. Our developer has designed it to ensure that
                you&apos;re always up to date, with fast-forwarding capabilities
                so you never miss out on the latest releases.
              </p>
            </div>
          </div>
        </div>

      </MainWrapper>
        <LogsModal />
    </section>
  );
};
export default MarketingPage;
