/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import { MovieCarousel } from "@/components/movie-carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getHomePage } from "@/lib/movies";
import Link from "next/link";

export default async function Home() {
  const data = await getHomePage();

  return (
    <main className="">
      <MainWrapper className="h-full w-full relative">
        <MovieCarousel items={data?.carouselSlider!} />
      </MainWrapper>

      <MainWrapper className="w-full my-6">
        <div className="px-4 w-full">
          <h2 className="font-logo h3">Recently Updated</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 py-4">
              {data?.recentDrama.map((recent, index) => (
                <Link draggable={false} key={recent.id + index} href={`/${recent.id}`} className="h-full flex-shrink-0">
                  <div className="aspect-[9/13] rounded-lg overflow-hidden relative h-full flex-shrink-0 md:w-56 w-48">
                    <img
                      draggable={false}
                      src={recent.poster}
                      alt={recent.title}
                      className="h-full w-full object-cover flex-shrink-0"
                    />
                    <span className="absolute bottom-0 h-44 w-full left-0 bg-gradient-to-t from-white via-transparent to-transparent"></span>
                  </div>
                  <div className="w-max truncate mt-1.5">
                    <h4 className="font-logo text-xl md:w-56 w-48 truncate">{recent.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </MainWrapper>
    </main>
  );
}
