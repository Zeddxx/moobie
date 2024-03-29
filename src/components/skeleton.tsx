"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import ReactSkeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = ({ className }: { className: string }) => {
  const { theme } = useTheme();

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#202020" : "#ebebeb"}
      highlightColor={theme === "dark" ? "#444" : "#f5f5f5"}
    >
      <ReactSkeleton className={cn(className, "dar")} />
    </SkeletonTheme>
  );
};
export default Skeleton;
