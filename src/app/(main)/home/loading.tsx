import MainWrapper from "@/components/containers/main-wrapper";
import Skeleton from "@/components/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function loading() {
  return (
    <div className="">
      <MainWrapper>
        <Skeleton className="min-h-80 max-h-[580px] h-[50vw] w-screen !rounded-none" />

        <div className="my-6 px-4">
          <h2 className="font-logo h3">Recently Updated</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 py-4">
              {Array.from({ length: 13 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="aspect-[9/13] rounded-lg overflow-hidden relative h-72 flex-shrink-0 md:w-56 w-48"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </MainWrapper>
    </div>
  );
}
