import { DramaInfoTypes } from "@/types";
import axios from "axios";

// Get KDrama info;
export const getDramaInfo = async (dramaId: string) => {
  const { data } = await axios.get(
    `http://localhost:4000/moobie/drama-info/${dramaId}`
  );

  return data as DramaInfoTypes
}