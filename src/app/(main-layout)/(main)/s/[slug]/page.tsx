/* eslint-disable @next/next/no-img-element */
import MainWrapper from "@/components/containers/main-wrapper";
import { getSearchedDrama } from "@/lib/movies";
import Image from "next/image";
import Link from "next/link";

interface SearchProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] };
}

const SearchPage = async ({ params, searchParams }: SearchProps) => {
  const page = Number(searchParams.page) || undefined;
  const { slug } = params;
  const decodedQuery = slug.split("-").join("%20");

  const data = await getSearchedDrama(decodedQuery, page);

  if (data.results.length === 0) {
    return (
      <section>
        <MainWrapper className="px-4 my-4 h-full">
          <h1 className="h3 my-6">
            Bucket empty for{" "}
            <span className="underline text-primary capitalize">
              {slug.split("-").join(" ")}
            </span>
          </h1>

          <div className="flex flex-col items-center min-h-[calc(100dvh-230px)] justify-center w-full">
            <Image
              src="/assets/images/empty.png"
              alt="No Results Found Image"
              draggable={false}
              width={320}
              height={320}
            />
            <h2 className="font-logo h3 text-center">
              No Searched Results In Our Bucket.
            </h2>
          </div>
        </MainWrapper>
      </section>
    );
  }

  return (
    <section>
      <MainWrapper className="px-4 my-4 h-full">
        <h1 className="h3 my-6">
          Showing search results for{" "}
          <span className="underline text-primary capitalize">
            {slug.split("-").join(" ")}
          </span>
        </h1>
        <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 h-full sm:grid-cols-3 grid-cols-2 gap-5">
          {data.results.map((result) => (
            <div className="w-full flex flex-col h-full" key={result.id}>
              <Link
                className="flex-1 flex-shrink-0 bg-muted min-h-72"
                href={`/k/${result.id}`}
                title={result.title}
              >
                <img
                  src={result.image}
                  alt={result.title + " Image Poster"}
                  className="h-full w-full rounded-md shadow-md overflow-hidden object-cover"
                />
              </Link>
              <Link
                href={`/k/${result.id}`}
                className="w-full"
                title={result.title}
              >
                <h2 className="font-logo leading-relaxed mt-1 text-lg text-muted-foreground duration-200 transition-colors truncate hover:text-black dark:hover:text-white tracking-wide">
                  {result.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};
export default SearchPage;
