/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import RecommendedMovies from "@/components/recommended-movies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMovieInfoById } from "@/lib/movies";
import { UserCircle } from "lucide-react";
import Link from "next/link";

type WatchProps = {
  params: { slug: string };
};

const WatchPage = async ({ params }: WatchProps) => {
  const constructedSlug = ("movie/" + params.slug) as string;
  const data = await getMovieInfoById(constructedSlug);

  return (
    <section>
      <MainWrapper className="">
        <div className="relative w-full md:max-h-96 max-h-64 min-h-56 aspect-video h-full">
          <img
            src={data.cover}
            alt={data.title + "Cover Image"}
            className="w-full h-full opacity-30 backdrop-blur-sm absolute top-0 left-0 -z-10 brightness-75 object-cover object-top"
          />
          <div className="px-4 sm:-translate-y-1/2 sm:top-1/2 sm:bottom-auto -bottom-12 absolute flex sm:flex-row flex-col gap-x-3">
            <img
              src={data.image}
              alt={data.title + "Poster"}
              className="aspect-[11/16] flex-shrink-0 h-64 object-cover rounded-md"
            />
            <div className="hidden sm:block max-w-4xl">
              <h1 className="text-secondary-foreground font-logo text-[clamp(2rem,8vw,4rem)]">
                {data.title}
              </h1>
              <p className="text-secondary-foreground">{data.description}</p>
              <div className="flex gap-x-1.5 text-sm mt-3">
                {data.type !== "movie" && (
                  <Badge variant="secondary">{data.episodes.length}</Badge>
                )}
                <Badge variant="secondary" className="capitalize">
                  {data.type}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {data.duration}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {data.rating}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {data.quality}
                </Badge>
                <Badge variant="secondary">{data.releaseDate}</Badge>
              </div>

              <Button className="mt-4 max-w-sm w-full">
                Watch {data.title}
              </Button>
            </div>
          </div>
        </div>

        <div className="block sm:hidden px-4 mt-12">
          <h1 className="text-secondary-foreground font-logo text-[clamp(2rem,8vw,4rem)]">
            {data.title}
          </h1>
          <p className="text-muted-foreground">{data.description}</p>
          <div className="flex gap-x-1.5 text-sm mt-3">
            {data.type !== "movie" && <Badge>{data.episodes.length}</Badge>}
            <Badge variant="secondary" className="capitalize">
              {data.type}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {data.duration}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {data.rating}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {data.quality}
            </Badge>
            <Badge variant="secondary">{data.releaseDate}</Badge>
          </div>
        </div>

        {/* <div className="px-4 w-full my-5">
          <h2 className="font-logo text-2xl">Casts</h2>
          <div className="">
            {data.casts?.map((cast) => (
              <p key={cast} className="flex items-center gap-x-2">
                <span><UserCircle /></span> {cast}
              </p>
            ))}
          </div>
        </div> */}

        <div className="px-4 w-full my-8 space-y-4">
          <h2 className="font-logo text-4xl">Recommended</h2>
          <RecommendedMovies movies={data.recommended!} />
        </div>
      </MainWrapper>
    </section>
  );
};
export default WatchPage;
