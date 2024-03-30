import {
  DramaInfoTypes,
  HomeContentTypes,
  SearchedDrama,
  StreamingEpisodeProps,
} from "@/types";

const url =
  process.env.NODE_ENV === "production"
    ? process.env.MOOBIE_API_URI
    : "http://localhost:4000";

// Get Home Page Korean Drama Datas
export const getHomePage = async () => {
  try {
    const response = await fetch(url + "/moobie/home", {
      cache: "no-cache",
    });
    const data = await response.json();
    return data as HomeContentTypes;
  } catch (error) {
    console.error(error);
  }
};

// Get KDrama info;
export const getDramaInfo = async (dramaId: string) => {
  try {
    const response = await fetch(
      `${url}/moobie/drama-info/info?id=${dramaId}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data as DramaInfoTypes;
  } catch (error) {
    console.log(error);
  }
};

export const getDramaStreaming = async (episodeId: string, dramaId: string) => {
  try {
    if (!episodeId && !dramaId) return;
    const response = await fetch(
      `${url}/moobie/watch-drama/${episodeId}/${dramaId}`
    );
    const data = await response.json();
    return data as StreamingEpisodeProps;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @url /moobie/search?query=query&page=page
 * @param query ?query=query
 * @param pageNumber &page=1 default 1
 * @returns Searched items with currentPage, totalPages, hasNextPage, results: Results[]
 */
export const getSearchedDrama = async (query: string, pageNumber?: number) => {
  if (!query) throw Error;

  const page = pageNumber ? pageNumber : 1;

  const response = await fetch(
    `${url}/moobie/search?query=${query}&page=${page}`
  );
  const data = await response.json();
  return data as SearchedDrama;
};
