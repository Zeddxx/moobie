import Image from "next/image";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { GrGithub, GrGoogle } from "react-icons/gr";

interface CardWrapperProps {
  heading: string;
  description: string;
  image: string;
  social: boolean;
}

const CardWrapper = ({
  description,
  heading,
  image,
  social,
}: CardWrapperProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-x-4">
      <div className="w-full hidden lg:flex h-full items-center justify-center">
        <div className="relative h-96 w-full">
          <Image
            src={image}
            alt="Welcoming user with cat and a small girl"
            fill
            className="object-contain h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:items-start justify-center">
        <div className="border border-muted p-8 shadow-md rounded-md">

          {/* CARD HEADER */}
          <div className="text-center">
            <div className="w-full flex items-center justify-between">
              <Icons.moobieIcon className="h-fit w-24 dark:invert" />

              <div className="rounded-full h-10 w-10 bg-muted grid place-items-center">
                <Icons.moobieIconMobile className="h-4 w-4 dark:invert" />
              </div>
            </div>
            <h1 className="text-[clamp(3rem,6vw,4rem)] font-logo tracking-wide">
              {heading}
            </h1>
            <p className="text-muted-foreground text-sm text-pretty">{description}</p>
          </div>

          {/* SEPARATOR */}
          {social && (
            <div className="flex items-center gap-x-3 mt-4">
              <span className="w-full h-px bg-muted"></span>
              <p className="flex-shrink-0 text-xs text-muted-foreground">with</p>
              <span className="w-full h-px bg-muted"></span>
            </div>
          )}

          {/* CARD SOCIAL */}
          {social && (
            <div className="grid grid-cols-2 mt-4 w-full gap-2">
              <Button variant="outline" className="">
                <GrGoogle className="mr-2" />
                <span className="hidden">Google</span>
              </Button>

              <Button variant="outline" className="">
                <GrGithub className="mr-2 h-5 w-5" />
                <span className="hidden">Github</span>
              </Button>
            </div>
          )}

          {/* CARD FOOTER. */}
          <div className="max-w-sm mx-auto mt-4 text-muted-foreground">
            <p className="text-center text-xs">
              After logging in your account it means that you are agree with all terms & condition required for moobie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardWrapper;
