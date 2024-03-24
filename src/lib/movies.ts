import { IEpisodeServer, IHomeResult, IMovieInfo, IMovieResult, ISearch, ISlider, IVideo } from "@/types";
import { MOVIES } from "flixhq-core";
import { StreamingServers } from "flixhq-core/dist/types/types";

export const getMoviesHome = async (): Promise<(ISlider | null)[]> => {
  const flixhq = new MOVIES.FlixHQ();
  const data = await flixhq.home();
  
  const result = await Promise.all(data.slider.map(async (movie) => {
    const accurateData = await getMoviesWithId(movie.title);
    const findMovie = accurateData.find((m) => m.title === movie.title)
    if(findMovie) {
      return { ...movie, id: findMovie.id, poster: findMovie.image }
    }else {
      return null;
    }
  }))

  return result.filter(movie => movie !== null);
};

export const getSearchedMovie = async (query: string) => {
  const flixhq = new MOVIES.FlixHQ();
  const data = await flixhq.search(query);
  return data as ISearch<IMovieResult>;
};

export const getMoviesWithId = async (title: string) => {
  const flixhq = new MOVIES.FlixHQ()
  const data = await flixhq.search(title);
  return data.results;
}

// Get movie info by its id;
export const getMovieInfoById = async (id: string) => {
  const flixhq = new MOVIES.FlixHQ();
  const data = await flixhq.fetchMovieInfo(id);
  return data as IMovieInfo;
}

// Get Movies servers by slug and id;
export const getEpisodeServers = async (slug: string, id: string) => {
  const flixhq = new MOVIES.FlixHQ();
  const data = await flixhq.fetchEpisodeServers(slug, id);
  return data as IEpisodeServer[]
}

// Get Episodes Sources.
export const getEpisodeSources = async (slug: string, id: string) => {
  const flixhq = new MOVIES.FlixHQ();
  const data = await flixhq.fetchEpisodeSources(
    slug,
    id,
    StreamingServers.UpCloud
  );
  return data;
}