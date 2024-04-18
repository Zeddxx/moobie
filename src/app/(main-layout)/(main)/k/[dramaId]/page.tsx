/* eslint-disable @next/next/no-img-element */

// CUSTOM COMPONENTS
import MainWrapper from "@/components/containers/main-wrapper";
import EpisodeCarousel from "@/components/episode-carousel";
import Description from "@/components/shared/description";

// SHADCN COMPONENTS
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// API FUNCTIONS
import { getDramaInfo } from "@/lib/movies";

// ICONS
import { Plus } from "lucide-react";

// METADATA
import { Metadata, ResolvingMetadata } from "next";

// NEXTJS
import Image from "next/image";
import Link from "next/link";

// PROPS
type Props = {
  params: { dramaId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// DRAMA DETAILS PAGE METADATA
export async function generateMetadata(
  { searchParams, params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { dramaId } = params;
    const info = await getDramaInfo(dramaId);

    // IF NO INFO SIMPLY THROW ERROR.
    if (!info) throw new Error("Drama info not found");

    // IF INFO DESTRUCTURE THE REQUIRED DETAILS.
    const { description, title, image } = info;
    return {
      title: `${title} | Moobie Info`,
      description,
      openGraph: {
        images: [image],
      },
    };
  } catch (error) {
    const { title, description } =
      await parent; /**RETURNS DEFAULT METADATA DETAILS OF THE PAGE WHICH IT WILL PICK FROM THE app > layout.tsx */
    return {
      title,
      description,
    };
  }
}

/**
 * MAIN DRAMA PAGE CONTENT
 */
const DramaInfoPage = async ({ searchParams, params }: Props) => {
  const { dramaId } = params;
  const data = await getDramaInfo(dramaId);

  if (!data) return null;

  const {
    title,
    description,
    episodes,
    image,
    id,
    otherNames,
    genres,
    releaseDate,
    status,
  } = data;

  return (
    <section>
      <MainWrapper>
        <div className="h-[60vw] max-h-80 relative overflow-hidden before:h-[85%] before:w-full before:absolute before:bg-muted min-h-80 w-full">
          {/* TITLE TEXT BACKGROUND */}
          <div className="left-0 absolute leading-none w-full">
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-[#121212] font-logo">
              {title} {title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] translate-x-40 text-nowrap text-white dark:text-[#121212] font-logo">
              {title} {title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-[#121212] font-logo">
              {title} {title}
            </p>
          </div>

          {/* DRAMA IMAGE'S */}
          <div className="aspect-[9/13] bg-muted-foreground absolute bottom-0 left-4 w-48 rounded-md overflow-hidden">
            <img
              src={image}
              alt={`Poster of drama ${title}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS CONTAINER */}
        <div className="px-4 my-4">
          {/* ADDITIONAL DETAILS ABOUT DRAMA */}
          <div className="flex gap-3">
            <Badge>Release: {releaseDate}</Badge>
            <Badge>Status: {status}</Badge>
          </div>

          {/* DRAMA TITLE */}
          <h1 className="font-logo text-[clamp(1.4rem,8vw,3rem)]">{title} </h1>

          {/* DRAMA DESCRIPTION */}
          <div className="text-muted-foreground mt-3 mb-6">
            <Description description={description} />
          </div>

          {/* CTA BUTTONS */}
          <div className="grid gap-4 sm:max-w-2xl w-full sm:grid-cols-2">
            {/* CTA BUTTON TO DIVE INTO STREAMING PAGE */}
            <Button className="font-logo w-full">
              {episodes.length > 0 ? (
                <Link
                  prefetch={false}
                  scroll={false}
                  href={`/watch/${episodes[0].id}?drama=${id}`}
                  className="truncate"
                >
                  Watch {title}
                </Link>
              ) : (
                <Link scroll={false} href="/" className="line-clamp-1">
                  No Episodes Available Yet!
                </Link>
              )}
            </Button>

            {/* ADD THE DRAMA INTO YOUR WATCH LATER BUCKET */}
            {/* TODO: ADD DRAMA INTO WATCH LIST. */}
            <Button variant="secondary" disabled className="font-logo w-full">
              <Plus className="mr-2 h-5 w-5" /> Watch Later
            </Button>
          </div>
        </div>

        {/* MAPING ALL GENRES */}
        <div className="px-4 mb-4">
          <h2 className="h3">Genre&apos;s</h2>
          <p className="inline">
            {genres.map((genre) => (
              <span className="text-muted-foreground" key={genre}>
                {genre}
                {", "}
              </span>
            ))}
          </p>
        </div>

        {/* OTHER NAME CONTAINER */}
        <div className="px-4">
          <h3 className="h3">Other Names:</h3>
          <p className="inline">
            {otherNames.map((name: string) => (
              <span key={name} className="text-muted-foreground">
                {name}
                {", "}
              </span>
            ))}
          </p>
        </div>

        {/* EPISODES CONTAINER */}
        {episodes.length === 0 ? (
          <div className="w-full px-4 overflow-hidden my-8">
            <h3 className="h3">Episodes</h3>
            <p className="text-muted-foreground text-sm">
              Some error can occurred if error occured kindly contact the
              developer.
            </p>
            <div className="relative aspect-square max-w-sm w-full h-auto mx-auto">
              <Image
                draggable={false}
                src="/assets/images/no-episode.png"
                alt="No Episodes Yet! Image of can doing nothing."
                fill
                className="object-contain h-full w-full"
              />
            </div>
            <div className="mx-auto w-max text-center">
              <h4 className="h3">No Episodes Yet!</h4>
              <p className="text-muted-foreground text-sm">
                No Episode yet published of {title}.
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full px-4 overflow-hidden my-4">
            <h3 className="h3">Episodes</h3>
            <p className="text-muted-foreground text-sm">
              Some error can occurred if error occured kindly contact the
              developer.
            </p>
            <EpisodeCarousel dramaId={id} image={image} episodes={episodes} />
          </div>
        )}
      </MainWrapper>
    </section>
  );
};
export default DramaInfoPage;
