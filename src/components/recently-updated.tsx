/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { RecentDramaProps } from "@/types"

interface Props {
    recentDrama: RecentDramaProps[]
}

const RecentlyUpdated = ({ recentDrama } : Props) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 py-4">
              {recentDrama.map((recent, index) => (
                <Link
                  draggable={false}
                  key={recent.id + index}
                  href={`/k/info?drama=${recent?.id}`}
                  className="h-full flex-shrink-0"
                >
                  <div className="aspect-[9/13] rounded-lg overflow-hidden relative h-full flex-shrink-0 md:w-56 w-48">
                    <img
                      draggable={false}
                      src={recent.poster}
                      alt={recent.title}
                      className="h-full w-full object-cover flex-shrink-0"
                    />
                    <span className="absolute bottom-0 h-44 w-full left-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent"></span>
                  </div>
                  <div className="w-max truncate mt-1.5">
                    <h4 className="font-logo text-xl md:w-56 w-48 truncate">
                      {recent.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
  )
}
export default RecentlyUpdated