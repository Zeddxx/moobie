/* eslint-disable @next/next/no-img-element */
import { IMovieResult } from "@/types"
import { Badge } from "./ui/badge"

type RecommendedMoviesProps = {
    movies: IMovieResult[]
}

const RecommendedMovies = ({ movies } : RecommendedMoviesProps) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <div className="flex flex-col" key={movie.id}>
                <a
                  href={`/${movie.id}`}
                  title={movie.title}
                  className="h-[20rem] relative group shadow-sm w-full rounded-sm overflow-hidden flex-shrink"
                >
                  <div className="absolute z-10 top-2 left-2">
                    <Badge>{movie.type}</Badge>
                  </div>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="object-cover w-full h-full group-hover:scale-110 scale-100 duration-200"
                  />
                </a>
                <a
                  href={`/${movie.id}`}
                  title={movie.title}
                  className="leading-relaxed flex-shrink-0 hover:text-primary duration-300 transition-colors truncate mt-0.5"
                >
                  {movie.title}
                </a>
              </div>
            ))}
          </div>
  )
}
export default RecommendedMovies