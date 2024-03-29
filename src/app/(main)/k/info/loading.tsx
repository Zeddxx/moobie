import MainWrapper from "@/components/containers/main-wrapper";
import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <MainWrapper>
      <div className="h-[60vw] max-h-80 relative overflow-hidden before:h-[85%] before:w-full before:absolute before:bg-muted min-h-64 w-full">
        <div className="aspect-[9/13] bg-muted absolute bottom-0 left-4 w-48 rounded-md overflow-hidden" />
      </div>

      <div className="px-4">
        <Skeleton className="h-8 w-32" />

        <Skeleton className="h-16 my-2 max-w-lg w-full" />

        <Skeleton className="h-32 w-full" />
      </div>
    </MainWrapper>
  );
}
