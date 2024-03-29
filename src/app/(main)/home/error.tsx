"use client";

import MainWrapper from "@/components/containers/main-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <MainWrapper className="px-4 flex items-center justify-center min-h-[calc(100dvh-220px)]">
        <div className="max-w-md">
          <Image
            src="/assets/images/error.png"
            alt="Error image"
            className="mx-auto"
            width={320}
            height={320}
          />
          <h2 className="h3 text-center">Something went wrong!</h2>
          <p className="text-muted-foreground mb-4 text-center">
            This application is on development so errors may occured. if error
            is consistent please contact the developer.
          </p>
          <Button className="w-full" onClick={() => reset()}>Try again</Button>
        </div>
      </MainWrapper>
    </section>
  );
}
