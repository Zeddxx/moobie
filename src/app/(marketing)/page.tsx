import MainWrapper from "@/components/containers/main-wrapper";
import { Icons } from "@/components/icons";
import MainNavbar from "@/components/navbars/main-navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <section className="">
      <MainWrapper className="flex items-center relative justify-center px-4 h-[calc(100dvh-180px)]">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Icons.moobieIcon className="opacity-10 aspect-square h-[80dvw] max-w-96 max-h-96 w-full" />
        </div>
        <div className="text-center">
          <h1 className="font-logo text-[clamp(2.4rem,8vw,4.8rem)]">
            Welcome to Moobie Watch.
          </h1>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground">
            Watch your favorite Korean Drama without any annoing ads and popups
            without any subscription.
          </p>
          <Button asChild className="w-full max-w-xl mx-auto mt-4">
            <Link href="/home" title="Moobie Home">
              Watch KDrama?
            </Link>
          </Button>
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

              <h2 className="text-[clamp(.8rem,8vw,1.5rem)] px-4 my-3 font-logo">
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
              Dont afraid of any ads and popups. watch your favorite drama
              without any disturbance. As the project is created by a single
              developer there could be some bugs and errors.
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
                Don&apos;t think that moobie will not show you the latest drama
                or movies. As the developer created this way to fast forward
                that the user never stays behind.
              </p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};
export default MarketingPage;
