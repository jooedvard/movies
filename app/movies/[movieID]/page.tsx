import Image from "next/image";
import Link from "next/link";

function getImagePath(image: string) {
  return "https://image.tmdb.org/t/p/original/" + image;
}

async function fetchMovie(id: string) {
  const KEY = "4361f552c2245a9b47d89ec479248020";
  const API = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + KEY;
  const request = await fetch(API);
  const data = await request.json();
  console.log(API);
  return data;
}

export default async function MoviePage({ params }: any) {
  const { movieID } = params;
  const movie = await fetchMovie(movieID);

  console.log(movie);
  return (
    <div className="grid grid-rows-auto-1-auto">
      <h1 className="text-white text-xl m-5">{movie.title}</h1>
      <p className="text-white m-5 flex flex-row gap-2 text-sm italic text-gray-500 relative bottom-2">
        {movie.genres.map((genre: any, index: number) => {
          return <span key={index}>{genre.name}</span>;
        })}
      </p>
      <div>
        <div className="flex flex-row gap-5 my-5">
          <Image
            className="mx-5 rounded"
            src={getImagePath(movie.poster_path)}
            width={300}
            height={300}
            alt={movie.title}
          />
          <div>
            <p className="w-[50ch]">{movie.overview}</p>
            <p className="text-gray-500 italic text-sm ">{movie?.tagline}</p>
            <div className="my-20 flex flex-row flex-wrap gap-5 w-[200px]">
              <div>
                <p className="text-gray-500">Release</p>
                <p>{movie?.release_date}</p>
              </div>
              <div>
                <p className="text-gray-500">Status</p>
                <p>{movie?.status}</p>
              </div>
              <div>
                <p className="text-gray-500">Runtime</p>
                <p>{movie?.runtime} minutes</p>
              </div>
              <div>
                {movie?.budget != 0 && (
                  <>
                    <p className="text-gray-500">Budget</p>
                    <p>{movie?.budget}$</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {movie.homepage != "" && (
        <>
          <Link className="m-5" href={movie.homepage}>
            {movie.homepage}
          </Link>
          <Link
            className="m-5"
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
          >
            IMDB
          </Link>
        </>
      )}
      <div className="m-5 flex flex-row gap-5 items-center">
        {movie.production_companies.map((production: any) => {
          return (
            <div>
              {production.logo_path != null && (
                <Image
                  src={getImagePath(production.logo_path)}
                  width={75}
                  height={75}
                  alt={production}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
