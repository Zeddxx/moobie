/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import EpisodeCarousel from "@/components/episode-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDramaInfo } from "@/lib/movies";
import axios from "axios";

type Props = {
  params: { slug: string };
};

const DramaInfoPage = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getDramaInfo(slug);
  return (
    <section>
      <MainWrapper>
        <div className="h-[60vw] max-h-80 relative overflow-hidden before:h-[85%] before:w-full before:absolute before:bg-muted min-h-64 w-full">
          <div className="left-0 absolute leading-none w-full">
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-black font-logo">
              {data.title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] translate-x-40 text-nowrap text-white dark:text-black font-logo">
              {data.title}
            </p>
            <p className="text-[clamp(6rem,8vw,8rem)] text-nowrap text-white dark:text-black font-logo">
              {data.title}
            </p>
          </div>
          <div className="aspect-[9/13] absolute bottom-0 left-4 w-48 rounded-md overflow-hidden">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="px-4 my-4">
          <div className="flex gap-3">
            <Badge>Release: {data.releaseDate}</Badge>
          </div>
          <h1 className="font-logo text-[clamp(1.4rem,8vw,2.3rem)]">
            {data.title}
          </h1>
          <div className="text-muted-foreground my-3">
            <p className="md:line-clamp-none line-clamp-3">
              {data.description}
            </p>
            <span className="md:hidden block">more</span>
          </div>
          <Button className="font-logo mt-2 sm:max-w-sm w-full">
            Watch {data.title}
          </Button>
        </div>

        <div className="px-4">
          <h2 className="font-logo text-[clamp(1.4rem,8vw,2rem)]">
            Other Names:
          </h2>
          <p className="inline">
            {data.otherNames?.map((name: string) => (
              <span key={name}>
                {name}
                {", "}
              </span>
            ))}
          </p>
        </div>

        <div className="w-full px-4 overflow-hidden my-4">
          <EpisodeCarousel image={data.image} episodes={data.episodes} />
        </div>
      </MainWrapper>
    </section>
  );
};
export default DramaInfoPage;
