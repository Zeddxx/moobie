"use client";

import { Context } from "@/contexts/utilities";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { X } from "lucide-react";
import Link from "next/link";
import { MenuItems } from "@/constants";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const { isToggled, handleToggleMenu } = useContext(Context);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "min-h-screen fixed overflow-x-hidden duration-300 top-0 right-0 z-[9999] transition-[width] bg-white dark:bg-black",
        isToggled ? "w-full" : "w-0"
      )}
    >
      <div className="w-full h-16 flex justify-between items-center px-4">
        <Icons.moobieIconMobile className="h-fit w-10" />

        <Button size="icon" variant="ghost" onClick={handleToggleMenu}>
          <X />
        </Button>
      </div>

      <div className="w-full px-4 truncate">
        <p className="text-xs font-logo font-medium">Current Route.</p>
        <div className="w-full h-[calc(100dvh-180px)] flex items-center justify-center">
          <ul className="w-full text-start h-fit space-y-8">
            {MenuItems.map((item, index) => (
              <li key={item.name} className="">
                <Link
                  href={item.href}
                  className={cn(
                    "text-[clamp(4.4rem,6vw,7rem)] leading-none transition-opacity opacity-40 hover:opacity-100 duration-300 font-logo font-bold",
                    pathname === item.href ? "opacity-100 text-primary" : "opacity-40"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default MobileMenu;
