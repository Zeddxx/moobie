import { GenerateMetadataProps } from "@/types";
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
  opengraphImage = "http://localhost:3000/opengraph-image.png",
}: GenerateMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "http://localhost:3000/home",
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
