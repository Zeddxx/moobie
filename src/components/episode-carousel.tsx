import { Episode } from "@/types";

type Props = {
  episodes: Episode[];
  image: string;
};

const EpisodeCarousel = ({ episodes, image }: Props) => {
  return (
    <div>
      {episodes?.map((episode, index) => (
        <div className="aspect-[9/13] flex-shrink-0 w-48" key={episode.id}>
          <img
            src={image}
            alt={episode.title}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
export default EpisodeCarousel;
