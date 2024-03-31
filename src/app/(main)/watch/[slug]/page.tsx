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
import { Metadata, ResolvingMetadata } from "next";
import Description from "@/components/shared/description";

export type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { slug } = params;
    const dramaId = searchParams.drama as string;
    const dramaInfo = await getDramaInfo(dramaId);

    if (!dramaInfo) throw new Error("Drama info is null");

    const { title: dramaTitle, episodes, image, description } = dramaInfo;
    const currentEpisodeTitle = episodes
      .find((ep) => ep.id === slug)
      ?.title.replace("Episode", "");

    const title = `Watching ${dramaTitle} | Episode ${currentEpisodeTitle} on moobie.`;

    return {
      title,
      description: `Watching episode ${currentEpisodeTitle} from ${dramaTitle}. ${description}`,
      openGraph: {
        images: [image],
      },
    };
  } catch (error) {
    const { title, description } = await parent;
    return {
      title,
      description,
    };
  }
}

const WatchPage = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const drama = searchParams.drama as string;
  const data = await getDramaStreaming(slug, drama);
  const info = await getDramaInfo(drama);

  return (
    <div className="px-4">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/k/${info?.id}`}>
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
        <aside className="xl:max-w-[14rem] w-full flex-shrink-0 xl:max-h-[32rem] max-h-56 overflow-y-auto ">
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
                    episode.id === slug &&
                      "text-black dark:text-white bg-primary/40"
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
          {/* <p className="line-clamp-4 text-muted-foreground">
            {info?.description}
          </p> */}
          <Description page="WATCH" description={info?.description!} />
        </aside>
      </div>
    </div>
  );
};
export default WatchPage;
