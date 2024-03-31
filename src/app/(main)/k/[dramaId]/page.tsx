/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import EpisodeCarousel from "@/components/episode-carousel";
import Description from "@/components/shared/description";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDramaInfo } from "@/lib/movies";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { dramaId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { searchParams, params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { dramaId } = params;
    const info = await getDramaInfo(dramaId);

    if (!info) throw new Error("Drama info not found");
    const { description, title, image } = info;
    return {
      title: `${title} | Moobie Info`,
      description,
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

// /k/dramaId
const DramaInfoPage = async ({ searchParams, params }: Props) => {
  const { dramaId } = params;
  const data = await getDramaInfo(dramaId);

  return (
    <section>
      <MainWrapper>
        <div className="h-[60vw] max-h-80 relative overflow-hidden before:h-[85%] before:w-full before:absolute before:bg-muted min-h-80 w-full">
          <div className="left-0 absolute leading-none w-full">
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-[#121212] font-logo">
              {data?.title} {data?.title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] translate-x-40 text-nowrap text-white dark:text-[#121212] font-logo">
              {data?.title} {data?.title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-[#121212] font-logo">
              {data?.title} {data?.title}
            </p>
          </div>
          <div className="aspect-[9/13] bg-muted-foreground absolute bottom-0 left-4 w-48 rounded-md overflow-hidden">
            <img
              src={data?.image}
              alt={data?.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="px-4 my-4">
          <div className="flex gap-3">
            <Badge>Release: {data?.releaseDate}</Badge>
            <Badge>Status: {data?.status}</Badge>
          </div>
          <h1 className="font-logo text-[clamp(1.4rem,8vw,3rem)]">
            {data?.title}{" "}
          </h1>
          <div className="text-muted-foreground my-3">
            <Description description={data?.description!} />
          </div>
          <Button className="font-logo mt-2 sm:max-w-sm w-full">
            {!!data && data.episodes.length > 0 ? (
              <Link
                scroll={false}
                href={`/watch/${data?.episodes[0]?.id}?drama=${data?.id}`}
                className="truncate"
              >
                Watch {data?.title}
              </Link>
            ) : (
              <Link scroll={false} href="/" className="line-clamp-1">
                No Episodes Available Yet!
              </Link>
            )}
          </Button>
        </div>

        {/* MAPING ALL GENRES */}
        <div className="px-4 mb-4">
          <h2 className="h3">Genre&apos;s</h2>
          <p className="inline">
            {data?.genres.map((genre) => (
              <span className="text-muted-foreground" key={genre}>
                {genre}{", "}
              </span>
            ))}
          </p>
        </div>

        <div className="px-4">
          <h3 className="h3">Other Names:</h3>
          <p className="inline">
            {data?.otherNames?.map((name: string) => (
              <span key={name} className="text-muted-foreground">
                {name}
                {", "}
              </span>
            ))}
          </p>
        </div>

        <div className="w-full px-4 overflow-hidden my-4">
          <h3 className="h3">Episodes</h3>
          <p className="text-muted-foreground">
            Some error can occurred if error occured kindly contact the
            developer.
          </p>
          <EpisodeCarousel
            dramaId={data?.id!}
            image={data?.image!}
            episodes={data?.episodes!}
          />
        </div>
      </MainWrapper>
    </section>
  );
};
export default DramaInfoPage;
