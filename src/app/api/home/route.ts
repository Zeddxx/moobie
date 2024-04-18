import { scrapeSearchResults } from "@/lib/utils";
import { CarouselSliderTypes } from "@/types";
import axios from "axios";
import { load } from "cheerio"
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
  const response = await axios.get("https://dramacool.com.pa/");
  const $ = load(response.data);
  const carouselSlider: CarouselSliderTypes[] = [];
  
  const carouselElement = $("div.ls-slide");
  
  carouselElement.each((index, element) => {
    const img = $(element).find("img");
    const imageSrc = img.attr("src") || "";
    const title = img.attr("title") || "";
  
    const dramaId = title.toLowerCase().split(" ").join("-");
  
    carouselSlider.push({ dramaId, title, imageSrc, id: "", poster: "" });
  });
  
  if (carouselSlider.length > 0) {
    const promises = carouselSlider.map(async (element) => {
      const data = await scrapeSearchResults(element.title, 1);
      const dramaId = data.results[0].id;
      const id = dramaId.replace("drama-detail/", "");
      const poster = data.results[0].image;
      return { ...element, id, poster };
    });
  
    const updatedCarouselSlider = await Promise.all(promises);
  
    carouselSlider.splice(0, carouselSlider.length, ...updatedCarouselSlider);
  }
  
  // Scrape recent dramas
  const dramas: any[] = [];
  
  const recentDramaContainer = $("div.left-tab-1 ul.list-episode-item li");
  
  recentDramaContainer.each((index, element) => {
    const title = $(element).find(".title").text();
  
    const href = $(element).find("a").attr("href") || "";
    const idMatch = href.match(/\/([^/]+-\d+)-episode-\d+/);
    const id = idMatch ? idMatch[1] : ""; // Extract the desired ID
    const type = $(element).find(".type").text();
    const time = $(element).find(".time").text().trim();
    const episode = $(element).find(".ep").text();
    const poster = $(element).find("a.img img").attr("data-original") || "";
  
    dramas.push({ title, id, type, time, episode, poster });
  });
  
  // merging with id
  if (dramas.length > 0) {
    const promises = dramas.map(async (drama) => {
      const data = await scrapeSearchResults(drama.title, 1);
      const dramaId = data.results[0].id;
      const id = dramaId.replace("drama-detail/", "");
  
      return { ...drama, id };
    });
  
    const updatedDramasWithId = await Promise.all(promises);
    dramas.splice(0, dramas.length, ...updatedDramasWithId);
  }
  
  // Scrape recent movies
  const recentMovies: any[] = [];
  const recentMoviesContainer = $("div.left-tab-2 > ul.list-episode-item");
  
  recentMoviesContainer.find("li").each(function () {
    const title = $(this).find(".title").text().trim();
    const id = title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace("(", "")
      .replace(")", "");
    const time = $(this).find(".time").text().trim();
    const type = $(this).find(".type").text().trim();
    const poster = $(this).find("img").attr("data-original") || "";
    const episode = $(this).find(".ep").text().trim();
  
    recentMovies.push({
      id: id,
      title: title,
      time: time,
      type: type,
      poster: poster,
      episode: episode,
    });
  });
  
  if (recentMovies.length > 0) {
    const promises = recentMovies.map(async (movie) => {
      const data: any = await scrapeSearchResults(movie.title, 1);
      const dramaId = data?.results[0].id;
      const id = dramaId.replace("drama-detail/", "");
      return { ...movie, id };
    });
  
    const updatedMoviesWithId = await Promise.all(promises);
    recentMovies.splice(0, recentMovies.length, ...updatedMoviesWithId);
  }
  const returnedResult = { carouselSlider, recentDrama: dramas, recentMovies };
  return NextResponse.json(returnedResult, { status: 200 })
  } catch (error) {
  console.error("Error scraping homepage:", error);
  throw error;
  }
  }