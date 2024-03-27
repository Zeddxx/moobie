/* eslint-disable @next/next/no-img-element */
import MoobiePlayer from "@/components/moobie-player/moobie-player";
import { getDramaInfo, getDramaStreaming } from "@/lib/movies";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const WatchPage = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const drama = searchParams.drama as string;
  const dramaId = drama.replace("drama-detail/", "");
  const data = await getDramaStreaming(slug, dramaId);
  const info = await getDramaInfo(dramaId);

  return (
    <div className="px-4">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${info?.title.toLowerCase().split(" ").join("-")}`}
            >
              {info?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {info?.episodes.find((ep) => ep.id === slug)?.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex xl:flex-row flex-col gap-4 my-4 w-full">
        <aside className="xl:max-w-[13rem] w-full flex-shrink-0 xl:max-h-[32rem] max-h-56 overflow-y-auto ">
          <div className="sticky top-0 w-full py-2 bg-muted px-2 border-b">
            <p className="font-logo text-lg">Episodes</p>
          </div>
          <div className="w-full">
            {info?.episodes.map((episode) => (
              <div className="w-full flex even:bg-muted" key={episode.id}>
                <Link
                  href={`/watch/${episode.id}?drama=${drama}`}
                  className={cn(
                    "w-full py-2 px-2 text-muted-foreground text-sm",
                    episode.id === slug && "text-black bg-primary/40"
                  )}
                >
                  {episode.title}
                </Link>
              </div>
            ))}
          </div>
        </aside>
        <MoobiePlayer episodeUrl={data?.sources[0].url || ""} poster="" />
        <aside className="xl:mt-0 mt-6">
          <div className="aspect-[9/13] w-36 bg-muted-foreground rounded-md overflow-hidden">
            <img
              src={info?.image}
              alt={info?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-logo text-3xl my-2">{info?.title}</h1>
          <p className="line-clamp-4 text-muted-foreground">
            {info?.description}
          </p>
        </aside>
      </div>
    </div>
  );
};
export default WatchPage;
