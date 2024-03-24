import MainWrapper from "@/components/containers/main-wrapper";
import { MovieCarousel } from "@/components/movie-carousel";
import { getMoviesHome } from "@/lib/movies";

export default async function Home() {
  const data = await getMoviesHome()

  return (
    <main className="">
      <MainWrapper className="h-full w-full relative">
        <MovieCarousel items={data} />
      </MainWrapper>
    </main>
  );
}
