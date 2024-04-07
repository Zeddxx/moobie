"use client";

import Link from "next/link";

import MainWrapper from "@/components/containers/main-wrapper";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useScrollMonitor } from "@/hooks/use-scroll-monitor";
import SearchDialog from "@/components/search-dialog";
import ToggleTheme from "@/components/theme-mode";
import TooltipContainer from "@/components/shared/tooltip-container";
import { useContext } from "react";
import { Context } from "@/contexts/utilities";

interface Props {
  type?: "MAIN" | "INNER";
}

const MainNavbar = ({ type = "MAIN" }: Props) => {
  const { isScrolled } = useScrollMonitor();

  const { handleToggleMenu } = useContext(Context);

  return (
    <nav
      className={cn(
        "h-auto bg-white dark:bg-black",
        type === "MAIN" ? "z-20" : "z-10",
        isScrolled ? "border-b dark:border-b-muted" : ""
      )}
    >
      <MainWrapper className="flex items-center w-full justify-between px-4 h-16">
        {/* MAIN MOOBIE LOGO */}
        <div className="flex items-center gap-x-2">
          <TooltipContainer align="start" content="Moobie.">
            <Link role="link" href="/home">
              <Icons.moobieIcon className="sm:block hidden h-8 w-32 dark:invert" />
              <Icons.moobieIconMobile className="h-8 w-8 cursor-pointer block sm:hidden dark:invert" />
            </Link>
          </TooltipContainer>
        </div>

        <div className="flex items-center gap-x-2">
          {/* THEME BUTTON */}
          <ToggleTheme />

          {/* SEARCH DIALOG TOGGLE BUTTON */}
          <SearchDialog />

          {/* NAVIGATE TO LOGIN */}
          <TooltipContainer align="center" content="Login with your account.">
            <Link
              href="/login"
              className={buttonVariants({
                className: "w-52 md:block hidden text-center",
              })}
            >
              Login
            </Link>
          </TooltipContainer>

          {/* HAMBURGER BUTTON */}
          <Button
            size="icon"
            className="md:hidden flex"
            variant="ghost"
            onClick={handleToggleMenu}
          >
            <MenuIcon className="h-7 w-7" />
          </Button>
        </div>
      </MainWrapper>
    </nav>
  );
};
export default MainNavbar;
