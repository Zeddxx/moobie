"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const Description = ({ description }: { description: string }) => {
  const [isToggleMore, setIsToggleMore] = useState<boolean>(false);
  return (
    <>
      <p
        className={cn(
          "md:line-clamp-none",
          isToggleMore ? "line-clamp-none" : "line-clamp-3"
        )}
      >
        {description}
      </p>
      <span
        onClick={() => setIsToggleMore(!isToggleMore)}
        className="md:hidden block cursor-pointer underline w-fit"
      >
        {isToggleMore ? "show less" : "show more"}
      </span>
    </>
  );
};
export default Description;
