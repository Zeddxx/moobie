import { getSearchedMovie } from "@/lib/movies"

type Props = {
    params: { id: string }
}

const SearchPage = async ({ params } : Props) => {
  const { id } = params
  const decodedURI = decodeURIComponent(id)
  const data = await getSearchedMovie(decodedURI);
  const accurateSearch = data.results.find((movie) => movie.title === decodedURI)
  console.log(accurateSearch);

  return (
    <div>{id}</div>
  )
}
export default SearchPage