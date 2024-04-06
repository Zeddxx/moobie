"use client";

import { Context } from "@/contexts/utilities";
import { useContext } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const { isToggled, handleToggleMenu } = useContext(Context);

  return (
    <aside className={cn(
        "min-h-screen overflow-hidden flex-grow duration-300 transition-[width] bg-black",
        isToggled ? "w-96" : "w-0"
    )}>
        <Button onClick={handleToggleMenu}>
            Close
        </Button>
    </aside>
  )
};
export default MobileMenu;
