import MainWrapper from "@/components/containers/main-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <MainWrapper className="px-4 flex items-center justify-center min-h-[calc(100dvh-120px)] w-full">
        <div className="">
          <Image
            src="/assets/images/404.png"
            alt="Not Found Illustration"
            draggable={false}
            width={320}
            height={320}
          />
          <h1 className="font-logo h3 text-center">Page Not Found.</h1>
          <p className="text-muted-foreground mb-4 text-center">
            The URL you are on are not belongs to moobie.
          </p>
          <Button asChild className="w-full">
            <Link href="/home">Return Home</Link>
          </Button>
        </div>
      </MainWrapper>
    </section>
  );
}
