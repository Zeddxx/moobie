/* eslint-disable @next/next/no-img-element */
import { Episode } from "@/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { parseDate } from "@/lib/utils";

type Props = {
  episodes: Episode[];
  image: string;
  dramaId: string;
};

const EpisodeCarousel = ({ episodes, image, dramaId }: Props) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 py-4">
        {episodes?.map((episode, index) => (
          <Link
            draggable={false}
            href={`/watch/${episode.id}?drama=${dramaId}`}
            title={episode.title}
            className="aspect-[9/13] rounded-lg overflow-hidden relative flex-shrink-0 w-48"
            key={episode.id + index}
          >
            <div className="absolute z-10 bottom-3 left-3">
              <h4 className="font-logo text-xl">{episode.title}</h4>
              <p className="text-sm capitalize">{episode.subType}</p>
            </div>
            <Badge variant="secondary" className="absolute top-2 left-2 z-10">{parseDate(episode.releaseDate)}</Badge>
            <img
              draggable={false}
              src={image}
              alt={episode.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-0 h-44 w-full left-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent"></span>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default EpisodeCarousel;
