import { getEpisodeServers, getEpisodeSources } from "@/lib/movies";

type ParamsProps = {
  params: { id: string; slug: string };
};

const WatchMovie = async ({ params }: ParamsProps) => {
  const { id, slug } = params;
  const constructedSlug = "tv/" + slug;
  const server = await getEpisodeServers(constructedSlug, id);
  const sources = await getEpisodeSources(constructedSlug, id);

  console.log({ server, sources });
  return (
    <div>
      {id} {constructedSlug}
    </div>
  );
};
export default WatchMovie;
