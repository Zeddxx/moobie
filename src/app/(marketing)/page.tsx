import MainWrapper from "@/components/containers/main-wrapper";
import { MovieCarousel } from "@/components/movie-carousel";
import axios from "axios";

export default async function Home() {
  const { data } = await axios.get('http://localhost:4000/moobie/home')
  console.log(data.carouselSlider);

  return (
    <main className="">
      <MainWrapper className="h-full w-full relative">
        <MovieCarousel items={data.carouselSlider} />
      </MainWrapper>
    </main>
  );
}
