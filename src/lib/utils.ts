import { GenerateMetadataProps } from "@/types";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return path.startsWith("/")
    ? process.env.NEXT_PUBLIC_APP_URL + path
    : `${process.env.NEXT_PUBLIC_APP_URL}/${path}`;
}

export function generateMetadata({
  title,
  description,
  opengraphImage = absoluteUrl("/opengraph-image.png"),
}: GenerateMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl("/home"),
      images: [
        {
          url: opengraphImage,
          width: 1200,
          height: 630,
          alt: "home opengraph image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [opengraphImage],
    },
  };
}

export function parseDate(dateString: string) {
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  if(dateFormatRegex.test(dateString)) {
    const date = new Date(dateString);
    const formatedDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    return formatedDate;
  }else {
    return dateString;
  }
}

export async function scrapeSearchResults(query: string, page: number) {
  try {
    const { data } = await axios.get(
      `https://api-consumet-org-olive.vercel.app/movies/dramacool/${query}?page=${page}`
    );

    const newData = data.results.map((result: any) => ({
      ...result,
      id: result.id.replace("drama-detail/", ""),
    }));
    return { ...data, results: newData };
  } catch (error) {
    console.log(error);
  }
}