/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { RecentDramaProps } from "@/types";
import { Badge } from "./ui/badge";

interface Props {
  recentDrama: RecentDramaProps[];
}

const RecentlyUpdated = ({ recentDrama }: Props) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 py-4">
        {recentDrama.map((recent, index) => (
          <div
            draggable={false}
            key={recent.id + index}
            className="h-full flex-shrink-0"
          >
            <Link title={recent.title} href={`/k/info?drama=${recent?.id}`}>
              <div className="aspect-[9/13] rounded-lg overflow-hidden relative h-full flex-shrink-0 md:w-56 w-48">
                <Badge className="absolute left-2 top-2" variant="secondary">
                  {recent.episode}
                </Badge>
                <img
                  draggable={false}
                  src={recent.poster}
                  alt={recent.title}
                  className="h-full w-full object-cover flex-shrink-0"
                />
                <p className="text-muted-foreground text-sm absolute bottom-2 left-2 z-10">
                  {recent.time}
                </p>
                <span className="absolute bottom-0 h-44 w-full left-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent"></span>
              </div>
            </Link>
            <div className="w-max truncate mt-1.5">
              <h4 className="font-logo hover:text-primary duration-300 transition-colors text-xl md:w-56 w-48 truncate">
                <Link href={`/k/info?drama=${recent?.id}`} title={recent.title}>
                  {recent.title}
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default RecentlyUpdated;
