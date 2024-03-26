export type DramaInfoTypes = {
    id: string;
    title: string;
    image: string;
    otherNames: string[];
    description: string;
    releaseDate: string;
    episodes: Episode[];
  };
  export type Episode = {
    id: string;
    title: string;
    subType: string
    releaseDate: string;
  };
  
  export type CarouselSliderTypes = {
    dramaId: string;
    imageSrc: string;
    title: string;
  };
  
  export type DramaInfo = {
    title: string;
    id: string;
    type: string;
    time: string;
    episode: string;
    poster: string;
  };  