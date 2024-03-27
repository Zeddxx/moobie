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

  export type RecentDramaProps = {
    title: string
    id: string
    type: string
    time: string
    episode: string
    poster: string
  }
  
  export type HomeContentTypes = {
    carouselSlider: CarouselSliderTypes[]
    recentDrama: RecentDramaProps[]
  }

  export type DramaInfo = {
    title: string;
    id: string;
    type: string;
    time: string;
    episode: string;
    poster: string;
  };  

  export type StreamingEpisodeProps = {
    sources: [
      {
        url: string
        isM3U8: boolean
      }
    ]
  }