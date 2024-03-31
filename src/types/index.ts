export type DramaInfoTypes = {
    id: string;
    title: string;
    image: string;
    genres: string[]
    status: string
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
    id: string
    dramaId: string;
    imageSrc: string;
    title: string;
    poster: string
  };

  export type RecentDramaProps = {
    title: string
    id: string
    type: string
    time: string
    episode: string
    poster: string
  }

  export type GenerateMetadataProps = {
    description: string
    title: string
    opengraphImage?: string
  }

  export type RecentMoviesTypes = {
    id: string
    title: string
    time: string
    type: string
    poster: string
    episode: string
  }
  
  export type HomeContentTypes = {
    carouselSlider: CarouselSliderTypes[]
    recentDrama: RecentDramaProps[]
    recentMovies: RecentMoviesTypes[]
  }

  export type DramaInfo = {
    title: string;
    id: string;
    genres: string[]
    status: string
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

  export type Results = {
    id: string
    title: string
    url: string
    image: string
  }

  export type SearchedDrama = {
    currentPage: string
    totalPages: number
    hasNextPage: boolean
    results: Results[]
  }