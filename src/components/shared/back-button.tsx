"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import TooltipContainer from "./tooltip-container";

const BackButton = () => {
  const router = useRouter();

  // To navigate user to back
  const handleBack = () => {
    router.back();
  };

  return (
    <TooltipContainer align="start" content="Back?">
      <Button
        onClick={handleBack}
        className="sm:w-auto w-fit p-2.5 sm:p-4"
        variant="outline"
      >
        <ChevronLeft className="h-5 w-5 sm:mr-2" />
        <span className="font-logo hidden sm:block text-[1rem]">Back.</span>
      </Button>
    </TooltipContainer>
  );
};
export default BackButton;
