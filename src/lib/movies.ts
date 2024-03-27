import {
  DramaInfoTypes,
  HomeContentTypes,
  StreamingEpisodeProps,
} from "@/types";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? process.env.MOOBIE_API_URI
    : "http://localhost:4000";

// Get Home Page Korean Drama Datas
export const getHomePage = async () => {
  try {
    const response = await fetch(url + "/moobie/home", {
      cache: "force-cache",
    });
    const data = await response.json();
    return data as HomeContentTypes;
  } catch (error) {
    console.error(error);
  }
};

// Get KDrama info;
export const getDramaInfo = async (dramaId: string) => {
  // const { data } = await axios.get(
  //   `http://localhost:4000/moobie/drama-info/${dramaId}`
  // );
  try {
    if (!dramaId) return;
    const response = await fetch(`${url}/moobie/drama-info/${dramaId}`, {
      cache: "force-cache",
    });
    const data = await response.json();
    return data as DramaInfoTypes;
  } catch (error) {
    console.log(error);
  }
};

export const getDramaStreaming = async (episodeId: string, dramaId: string) => {
  // const { data } = await axios.get(`http://localhost:4000/moobie/watch-drama/${episodeId}/${dramaId}`)
  try {
    if (!episodeId && !dramaId) return;
    const response = await fetch(
      `${url}/moobie/watch-drama/${episodeId}/${dramaId}`,
      {
        cache: "force-cache",
      }
    );
    const data = await response.json();
    return data as StreamingEpisodeProps;
  } catch (error) {
    console.error(error);
  }
};
