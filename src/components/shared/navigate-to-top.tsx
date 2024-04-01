"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useScrollMonitor } from "@/hooks/use-scroll-monitor";
import { cn } from "@/lib/utils";
import TooltipContainer from "./tooltip-container";

const NavigateToTop = () => {
  const { isScrolled } = useScrollMonitor(160);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={cn("bottom-6 right-6 z-30", isScrolled ? "fixed" : "hidden")}
    >
      <Button
        onClick={handleTop}
        className="rounded-full h-12 w-12"
        size="icon"
      >
        <TooltipContainer align="end" content="Navigate to top?">
          <ChevronUp />
        </TooltipContainer>
      </Button>
    </div>
  );
};
export default NavigateToTop;
