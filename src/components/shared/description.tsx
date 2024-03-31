"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface DescriptionProps {
  description: string;
  page?: "WATCH" | "NORMAL"
}

const Description = ({ description, page = "NORMAL" }: DescriptionProps) => {
  const [isToggleMore, setIsToggleMore] = useState<boolean>(false);
  return (
    <>
      <p
        className={cn(
          page === "WATCH" ? "md:line-clamp-5" : "md:line-clamp-none",
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
