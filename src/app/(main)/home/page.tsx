/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import { MovieCarousel } from "@/components/movie-carousel";
import RecentlyUpdated from "@/components/recently-updated";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getHomePage } from "@/lib/movies";
import { generateMetadata } from "@/lib/utils";
import Link from "next/link";

const title: string = "Home | Moobie";
const description: string = "Explore collection of KDramas series.";

export const metadata = generateMetadata({ title, description });

export default async function Home() {
  const data = await getHomePage();

  return (
    <main className="">
      {/* HOME CAROUSEL OF TRENDING DRAMAS */}
      <MainWrapper className="h-full w-full relative">
        <MovieCarousel items={data?.carouselSlider!} />
      </MainWrapper>

      {/* RECENTLY UPDATED EPISODES */}
      <MainWrapper className="w-full my-6">
        <div className="px-4 w-full">
          <h2 className="font-logo h3">Recently Updated</h2>
          <RecentlyUpdated recentDrama={data?.recentDrama!} />
        </div>
      </MainWrapper>
    </main>
  );
}
